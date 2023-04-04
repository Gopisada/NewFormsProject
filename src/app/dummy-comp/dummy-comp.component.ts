import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {
    this.globalFieldForm = this.fb.group({
      field: ''
    });
    
var field = this.globalFieldForm.get('field').value;
console.log(field);
    this.empForm = this.fb.group({
     employees : this.fb.array([])
    });
  }
 
  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
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
    var fieldName = this.globalFieldForm.get('field').value;
    var oldfield = JSON.parse(JSON.stringify(localStorage.getItem('globalFormVal')));
    this.empForm.value[fieldName] = this.empForm.value['employees']?this.empForm.value['employees']: this.empForm.value[oldfield];
  
    if(this.empForm.value['employees']){
    delete this.empForm.value['employees'];
   }else{
    delete this.empForm.value[oldfield];
   }
   localStorage.setItem('globalFormVal',fieldName);
    console.log(fieldName,this.empForm.value[fieldName]);
    this.forms.push(this.empForm);
    // localStorage.setItem('forms',this.forms);
  }
  selectedType(e: any ,index:number) {

    if(e.target.value == "3: object"){
      this.addSubKey(index);
    }
    }
   
}
