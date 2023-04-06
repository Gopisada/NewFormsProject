import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormSubmitService } from '../form-submit.service';

@Component({
  selector: 'app-dummy-comp',
  templateUrl: './dummy-comp.component.html',
  styleUrls: ['./dummy-comp.component.css']
})
export class DummyCompComponent {

  empForm: any;
  globalFieldForm:any;
  forms:any=[];
  
  dataTypes: any = ['text', 'number', 'object', 'date'];
 
  constructor(private fb: FormBuilder,public formsubmit: FormSubmitService) {}
 
  ngOnInit() {
 this.initialForm();
  }
 initialForm(){
  this.empForm = this.fb.group({
    DictionaryName : ['',Validators.required],
    FormFields : this.fb.array([])
   });
 }
  employees(): FormArray {
    return this.empForm.get('FormFields') as FormArray;
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
    console.log(this.empForm);
    this.formsubmit.submitForm(this.empForm);
    this.empForm.reset();
    this.initialForm();
  }
  selectedType(e: any ,index:number) {
  if(e.target.value == "3: object"){
      this.addSubKey(index);
    }
    }
   
}
