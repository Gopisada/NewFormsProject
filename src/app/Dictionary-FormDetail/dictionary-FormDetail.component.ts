import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppLoaderService } from '../apploader/apploader.service';
import { FormSubmitService } from '../form-submit.service';

@Component({
  selector: 'app-dummy-comp',
  templateUrl: './dictionary-FormDetail.component.html',
  styleUrls: ['./dictionary-FormDetail.component.css']
})
export class DummyCompComponent {

  empForm: any;
  globalFieldForm:any;
  forms:any=[];
  message:string="";
  success:boolean =false;
  error:boolean = false;
  
  dataTypes: any = ['Text', 'Number', 'Object', 'Date'];
 
  constructor(private fb: FormBuilder,public formsubmit: FormSubmitService, private loader: AppLoaderService) {}
   
  ngOnInit() {
 this.initialForm();
  }
 initialForm(){
  this.empForm = this.fb.group({
    dictionaryname : ['',Validators.required],
    formFields : this.fb.array([])
   });
 }
  employees(): FormArray {
    return this.empForm.get('formFields') as FormArray;
  }
 
  newEmployee(): FormGroup {
    return this.fb.group({
      fieldName: '',
      type: '',
      description:'',
      object: this.fb.array([])
    });
  }
 
  addEmployee() {
    this.employees().push(this.newEmployee());
  }
 
  removeField(empIndex: number) {
    this.employees().removeAt(empIndex);
  }
 
  adressDetails(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('object') as FormArray;
  }
 
  newAddDetail(): FormGroup {
    return this.fb.group({
      key: '',
      text: '',
      desc:''
    });
  }
 
  addSubKey(empIndex: number) {
    this.adressDetails(empIndex).push(this.newAddDetail());
  }
 
  removeObject(empIndex: number, adressIndex: number) {
    this.adressDetails(empIndex).removeAt(adressIndex);
    }
 
  onSubmit() {
    this.loader.open("Please Wait......");
    this.formsubmit.SaveDataDictionary(this.empForm).subscribe({
      next: (resp: any) => {           
          if(resp.response == "Successfully inserted the record"){
            this.success=true;
            this.message = resp.response;
          }else{    
            this.error=true;                   
            this.message = resp.response;
          }
          this.loader.close();  
      },
      error: (err: any) => {
        //this.toastrService.error(err); 
        this.error =true;
        this.message  = err;
        this.loader.close();
      }
    })
    this.empForm.reset();
    this.initialForm();
  }
  selectedType(e: any ,index:number) {
  if(e.target.value == "3: Object"){
      this.addSubKey(index);
    }
    }
   
}
