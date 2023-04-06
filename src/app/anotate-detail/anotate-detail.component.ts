import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormSubmitService } from '../form-submit.service';

@Component({
  selector: 'app-anotate-detail',
  templateUrl: './anotate-detail.component.html',
  styleUrls: ['./anotate-detail.component.css']
})
export class AnotateDetailComponent {
  constructor(private formSubmit:FormSubmitService){}
  searchField:any="";
  selected:any;
  selectedPDF:any;
  pdfSrcURL:any;
  pdfList = [
    {value: 'PDF1', url: '/assets/Book1.pdf'},
    {value: 'PDF2', url: '/assets/Insurance_Handbook_20103.pdf'},
    {value: 'PDF3', url: '/assets/sample.pdf'},
  ];
 
  fieldsList:any = [];
  txt :any;
  contentListHeaders:string[] = ['list Of headings'];
  contentList:any=[];
  viewPdf:any =false;
  message:string='Please Select the Key';
  isKey:boolean = false; 

  array = this.formSubmit.FormData;
  @ViewChild('pdfViewerOnDemand') PdfComponent:any =  ElementRef;
getValuesOf(obj:any){
  return Object.values(obj)
}
getKeys(obj:any){
  return Object.keys(obj)
}
selectedVal(val:any){
  //  console.log(val)
 this.fieldsList  = val.value[1];
}
selectedPDFview(val:any){
 this.pdfSrcURL = val.value;
}
getSelectedFieldText() {
  if (window.getSelection() && !localStorage.getItem('keyselected') && !this.isKey) {  /* Selecting Key */
    this.txt = window.getSelection()?.toString();
   if(this.txt !==''){
      var obj = {
        key:this.txt,
        value:'',
        xCoord:'',
        yCoord:'',
        page:''
       }
      this.contentList.push(obj);
      localStorage.setItem("keyselected",this.txt);   
     }
    
    }
}
getSelectedText() {
  this.keyValidation();
  if(!this.isKey){
   if (localStorage.getItem('keyselected'))  /* Selecting Key */
  /* Selecting Value */
    {
      var val = window.getSelection()?.toString();
      if(val !==''){
    var pageIndex = this.PdfComponent.pdfViewer.currentPageNumber - 1;
    var page = this.PdfComponent.pdfViewer.getPageView(pageIndex);
    var pageRect = page.canvas.getClientRects()[0];
    var selectionRects = window.getSelection()?.getRangeAt(0).getClientRects();
    var selectionRect = selectionRects?selectionRects[0]:undefined; //only care about one line, maybe forbid multi line
    var viewport = page.viewport;
    var leftAndBot = selectionRect?(viewport.convertToPdfPoint(selectionRect.left - pageRect.x, selectionRect.top - pageRect.y)):'';
    var xCoord = leftAndBot[0];
    var yCoord = leftAndBot[1];
 
    var tempobj = {
      key:localStorage.getItem('keyselected'),
      value:val,
      xCoord:xCoord,
      yCoord:yCoord,
      page:pageIndex+1
    }
    localStorage.removeItem("keyselected");

    /* adding Value to the key selected by the user */

    this.contentList.forEach((el:any)=> {
      if(el.key == tempobj.key ){
        el.value = tempobj.value;
        el.xCoord = tempobj.xCoord;
        el.yCoord = tempobj.yCoord;
        el.page = tempobj.page
      }
    })
    /* Removing Duplicate keys and values from list*/
    this.contentList = this.contentList.filter((val:any, index:any, self:any) =>
      index === self.findIndex((t:any) => (
      t.value === val.value && t.key === val.key
      ))
)
      }
    }
     this.message = localStorage.getItem('keyselected')? 'Please Select the Value for the Selected Key': 'Please select the Key';
   }
  }
  keyValidation() {
    if(this.contentList.length>0){
      this.contentList.forEach((el:any)=> {
        if(el.key == ''){
          this.isKey = true;
        }
      })
    }
   
  }
  convertToJson() {
   
    var list = JSON.stringify(this.contentList);
  
    this.contentList=[];

  }
  delete(data:any){
   localStorage.removeItem('keyselected');
   this.contentList = this.contentList.filter((el:any)=>{
     return el!=data
   });
   this.isKey = false;
   this.keyValidation();
  }
  validateKey(key:any){
	
    this.isKey=key==''?true:false;
    this.keyValidation();
  
    }

}
