import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  constructor(private http:HttpClient) { }
FormData:any=[{ "DictionaryName": "HiHello", "FormFields": [ { "fieldName": "cadcsd", "type": "object", "description": "vdvsdvsd", "object": [ { "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" } ] } ,
{ "fieldName": "mafil", "type": "object", "description": "vdvsdvsd", "object": [ { "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" } ] } ,
{ "fieldName": "Gatatra", "type": "object", "description": "vdvsdvsd", "object": [ { "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" } ] } ] },
{ "DictionaryName": "Gopi", "FormFields": [ { "fieldName": "cadcsd", "type": "object", "description": "vdvsdvsd", "object": [ { "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" } ] } ] },
{ "DictionaryName": "Sada", "FormFields": [ { "fieldName": "cadcsd", "type": "object", "description": "vdvsdvsd", "object": [ { "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" } ] },
{ "fieldName": "vhvbvn", "type": "object", "description": "jhkjnas", "object": [ { "key": "jhsbakbj", "text": "jkjsa", "desc": "askjas" } ] } ] },
{ "DictionaryName": "cdsdsdc", "FormFields": [ { "fieldName": "dvdvsdvsd", "type": "number", "description": "vdsdvsdvsdv", "object": [] }, { "fieldName": "vdsdvsdvtheerrg", "type": "text", "description": "grwdsgvfber", "object": [] }, { "fieldName": "weretetgredv", "type": "object", "description": "", "object": [ { "key": "vrfsdffsd", "text": "gresfvesrdv", "desc": "rgesrfergerg" } ] }, { "fieldName": " hnfgbbfgbrdg", "type": "date", "description": "grededfterwewr", "object": [] } ] }]

  submitForm(form:any){
    localStorage.setItem('forms',JSON.stringify(form.value));
  }

}
