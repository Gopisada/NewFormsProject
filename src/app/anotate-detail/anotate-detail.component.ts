import { Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from "jquery";
import GcPdfViewer from '@grapecity/gcpdfviewer';
import { empty } from 'rxjs';
import { AppLoaderService } from '../apploader/apploader.service';
import { FormSubmitService } from '../form-submit.service';
import PSPDFKit from "pspdfkit";

@Component({
  selector: 'app-anotate-detail',
  templateUrl: './anotate-detail.component.html',
  styleUrls: ['./anotate-detail.component.css']
})
export class AnotateDetailComponent {
  constructor(private formSubmit: FormSubmitService,
    private loader: AppLoaderService,) { }
  searchField: any = "";
  selected: any;
  selectedPDF: any;
  pdfSrcURL: any="";
  josndata: string = "";
  selectedfile : string = "";
  public static mypdfview: any;
  pdfList = [
    { value: 'PDF1', url: '/assets/Book1.pdf' },
    { value: 'PDF2', url: '/assets/Insurance_Handbook_20103.pdf' },
    { value: 'PDF3', url: '/assets/sample.pdf' },
  ];

  fieldsList: any = [];
  array!: any[];
  txt: any;
  contentListHeaders: string[] = ['list Of headings'];
  apiMessage: any;
  contentList: any = [];
  viewPdf: any = false;
  message: string = "";
  isKey: boolean = false;
  sucess : boolean = false;
  error : boolean = false;
  selectedDictionaryForm :string ="";
  selectedDictionaryId :number | any;
  selectedValPDF:any= "div";


  @ViewChild('pdfViewerOnDemand') PdfComponent: any = ElementRef;

  ngOnInit() {
    localStorage.removeItem('keyselected');
    this.fieldsList=[];
    this.contentList=[];
    //  this.getDataDictionaryData();
     this.array = this.formSubmit.FormData;
    
     
  }

  getValuesOf(obj: any) {
    //console.log(" suneel Kumar test ----- >  " + obj.dictionaryname);
    return Object.values(obj)
  }
  getKeys(obj: any) {
    return Object.keys(obj)
  }
  selectedVal(val: any) {
    this.selectedDictionaryForm =  val.value[0];
    this.selectedDictionaryId = val.value[1];
    this.fieldsList = val.value[2];
    }
  selectedPDFview(val: any) {
   if(this.fieldsList!=undefined && this.fieldsList!=null && this.fieldsList.length >0){
    this.loader.open("Please wait .... ");
    this.pdfSrcURL = val.value;
   this.loadPdf();
    
     setTimeout(() => {      
        this.loader.close();
       
      }, 10000);
    }else{
      alert(" Please Select the Dictionary Name..");
      this.selectedPDF="";
      //return false;
    }
  }
 
  loadPdf(){
    PSPDFKit.unload(this.selectedValPDF)
    
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: this.pdfSrcURL,
      container: ".pspdfkit-container",
      licenseKey: "YOUR_LICENSE_KEY_GOES_HERE", // optional LICENSE key
    }).then((instance) => {
      
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.

      (<any>window).instance = instance;
      console.log(instance);
      this.selectedValPDF = instance;
 instance.addEventListener("annotations.create", detectVisibleAnnotations);
      function detectVisibleAnnotations() {
        const pageIndex = instance.viewState.currentPageIndex;
        const pageRect = pageIndex? getPageVisibleRect(pageIndex):undefined
        // Traverse page annotations and check if their bounding box
        // overlaps the visible area
        instance.getAnnotations(pageIndex).then((annotations:any) => {
          annotations.forEach((annotation:any) => {
            if (annotation.boundingBox.isRectOverlapping(pageRect)) {
              // Visible annotation detected, log it (or keep a reference to it somewhere)
              console.log(annotation.toJS().boundingBox);
            }
          });
        });
      }
   let getPageVisibleRect = (pageIndex:any)=> {
        // Page DOM element
        const pageEl = instance.contentDocument.querySelector(
          `.PSPDFKit-Page[data-page-index="${pageIndex}"]`
        );
        const pageBoundingClientRect = pageEl?.getBoundingClientRect();
        if (localStorage.getItem('keyselected')) {
          var tempobj = {
            key: localStorage.getItem('keyselected'),
            bottom:pageBoundingClientRect?.bottom,
            height:pageBoundingClientRect?.height,
            left:pageBoundingClientRect?.left,
            right:pageBoundingClientRect?.right,
            top: pageBoundingClientRect?.top,
            width:pageBoundingClientRect?.width,
            x:pageBoundingClientRect?.x,
            y:pageBoundingClientRect?.y,
            page: pageIndex + 1
          }
          localStorage.removeItem("keyselected");
          this.contentList.forEach((el: any) => {
            if (el.key == tempobj.key) {
              el.bottom = tempobj.bottom;
              el.height = tempobj.height;
              el.left = tempobj.left;
              el.right = tempobj.right;
              el.top = tempobj.top;
              el.width = tempobj.width;
              el.x = tempobj.x;
              el.y =tempobj.y;
              el.page = tempobj.page;

              
            }
          })
        }
       
        // Viewport DOM element
        const viewportEl = instance.contentDocument.querySelector(
          ".PSPDFKit-Viewport"
        );
        // Toolbar DOM element, needs offsetting
        const toolbarEl = instance.contentDocument.querySelector(".PSPDFKit-Toolbar");
         const ghf = console.log(instance.contentDocument);
        // Get visible page area in page units
        console.log(instance.transformContentPageToClientSpace(
          new PSPDFKit.Geometry.Rect({
            left:pageBoundingClientRect? Math.max(pageBoundingClientRect.left, 0):0,
            top: pageBoundingClientRect? Math.max(pageBoundingClientRect.top, toolbarEl?toolbarEl.scrollHeight:0):0,
            width:pageEl? Math.min(pageEl.clientWidth, viewportEl?viewportEl.clientWidth:0):0,
            height: pageEl? Math.min(pageEl.clientHeight, viewportEl?viewportEl.clientHeight:0):0
          }),
          pageIndex
        ))
        return instance.transformContentClientToPageSpace(
          new PSPDFKit.Geometry.Rect({
            left:pageBoundingClientRect? Math.max(pageBoundingClientRect.left, 0):0,
            top: pageBoundingClientRect? Math.max(pageBoundingClientRect.top, toolbarEl?toolbarEl.scrollHeight:0):0,
            width:pageEl? Math.min(pageEl.clientWidth, viewportEl?viewportEl.clientWidth:0):0,
            height: pageEl? Math.min(pageEl.clientHeight, viewportEl?viewportEl.clientHeight:0):0
          }),
          pageIndex
        );
      }
    });
  }
 
  getSelectedText() {
    this.keyValidation();
    if (!this.isKey) {
      if (localStorage.getItem('keyselected'))  /* Selecting Key */
  /* Selecting Value */ {
        var val = window.getSelection()?.toString();
        if (val !== '') {
          var pageIndex = this.PdfComponent.pdfViewer.currentPageNumber - 1;
          var page = this.PdfComponent.pdfViewer.getPageView(pageIndex);
          var pageRect = page.canvas.getClientRects()[0];
          var selectionRects = window.getSelection()?.getRangeAt(0).getClientRects();
          var selectionRect = selectionRects ? selectionRects[0] : undefined; //only care about one line, maybe forbid multi line
          var viewport = page.viewport;
          var leftAndBot = selectionRect ? (viewport.convertToPdfPoint(selectionRect.left - pageRect.x, selectionRect.top - pageRect.y)) : '';
          var xCoord = leftAndBot[0];
          var yCoord = leftAndBot[1];

            var tempobj = {
              key: localStorage.getItem('keyselected'),
              value: val,
              xCoord: xCoord,
              yCoord: yCoord,
              page: pageIndex + 1
            }
            localStorage.removeItem("keyselected");

          /* adding Value to the key selected by the user */

          this.contentList.forEach((el: any) => {
            if (el.key == tempobj.key) {
              el.value = tempobj.value;
              el.xCoord = tempobj.xCoord;
              el.yCoord = tempobj.yCoord;
              el.page = tempobj.page
            }
          })
          /* Removing Duplicate keys and values from list*/
          this.contentList = this.contentList.filter((val: any, index: any, self: any) =>
            index === self.findIndex((t: any) => (
              t.value === val.value && t.key === val.key
            ))
          )
        }
      }
      this.message = localStorage.getItem('keyselected') ? 'Please Select the Value for the Selected Key' : 'Please select the Key';
    }
  }
  keyValidation() {
    if (this.contentList.length > 0) {
      this.contentList.forEach((el: any) => {
        if (el.key == '') {
          this.isKey = true;
        }
      })
    }

  }
  async convertToJson() {	
   
    this.message = localStorage.getItem('keyselected')? 'Please select the Value for the key': 'Please select the Key';
if(this.message === "Please select the Value for the key"){

}else{
  this.loader.open("Please wait .... ");
  this.selectedfile = this.selectedPDF;
  var fileName = this.selectedfile.substring(this.selectedfile.lastIndexOf("/")+1,this.selectedfile.length);
  this.formSubmit.addtoJSONFile("{ data :" + JSON.stringify(this.contentList)+"}", this.selectedDictionaryId,this.selectedDictionaryForm,fileName).subscribe({
    next: (responseData: any) => {
     this.sucess=true;   
      this.apiMessage = responseData.response;
      this.loader.close();
    },
    error: (err: string) => {
      this.error = false;     
      this.apiMessage = err;
      this.loader.close();
    }
  })
}
localStorage.removeItem('keyselected');
this.fieldsList=[];
this.contentList=[];
this.selectedPDF="";
this.pdfSrcURL="";
this.selected="";

	}
  delete(data: any) {
    localStorage.removeItem('keyselected');
    this.contentList = this.contentList.filter((el: any) => {
      return el != data
    });
    this.isKey = false;
    this.keyValidation();
  }
  validateKey(key: any) {

    this.isKey = key == '' ? true : false;
    this.keyValidation();

  }



  getDataDictionaryData() {
    this.loader.open("Please Wait......");
    this.formSubmit.getDataDictionaryData().subscribe({
      next: (resp: any) => {
        this.josndata = resp.response;
        var db = JSON.stringify(this.josndata);
        var json = JSON.parse(db);
        this.array = json;
        this.loader.close();
      },
      error: (err: any) => {
        //this.toastrService.error(err); 
        // this.loader.close();
      }
    })

  }
  isChecked(event:any){
    if(this.selectedPDF!=undefined && this.selectedPDF!=null && this.selectedPDF!=""){
      if(event.target.checked){
      if (!localStorage.getItem('keyselected') && !this.isKey) {  /* Selecting Key */
        this.txt = event.target.value;
        if (this.txt !== '') {
          var obj = {
            key: this.txt,
            bottom:"",
            height:"",
            left:"",
            right:"",
            top: "",
            width:"",
            x:"",
            y:"",
            page: ''
          }
          this.contentList.push(obj);
          localStorage.setItem("keyselected", this.txt);
        }
      }
      }else{
        this.contentList = this.contentList.filter((el:any)=>{
          return el.key!=event.target.value;
        })
        localStorage.removeItem('keyselected')
      }
    }else{
      alert(" Please select the PDF file first...");
      event.target.checked =false;
    }
    this.keyValidation()
  }

}


