import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  
  /*FormData: any = [{
    "DictionaryName": "HiHello", "FormFields": [{ "fieldName": "cadcsd", "type": "object", "description": "vdvsdvsd", "object": [{ "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" }] },
    { "fieldName": "mafil", "type": "object", "description": "vdvsdvsd", "object": [{ "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" }] },
    { "fieldName": "Gatatra", "type": "object", "description": "vdvsdvsd", "object": [{ "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" }] }]
  },
  { "DictionaryName": "Gopi", "FormFields": [{ "fieldName": "cadcsd", "type": "object", "description": "vdvsdvsd", "object": [{ "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" }] }] },
  {
    "DictionaryName": "Sada", "FormFields": [{ "fieldName": "cadcsd", "type": "object", "description": "vdvsdvsd", "object": [{ "key": "vdsds", "text": "vdsvd", "desc": "vdsvsdvsd" }] },
    { "fieldName": "vhvbvn", "type": "object", "description": "jhkjnas", "object": [{ "key": "jhsbakbj", "text": "jkjsa", "desc": "askjas" }] }]
  },
  { "DictionaryName": "cdsdsdc", "FormFields": [{ "fieldName": "dvdvsdvsd", "type": "number", "description": "vdsdvsdvsdv", "object": [] }, { "fieldName": "vdsdvsdvtheerrg", "type": "text", "description": "grwdsgvfber", "object": [] }, { "fieldName": "weretetgredv", "type": "object", "description": "", "object": [{ "key": "vrfsdffsd", "text": "gresfvesrdv", "desc": "rgesrfergerg" }] }, { "fieldName": " hnfgbbfgbrdg", "type": "date", "description": "grededfterwewr", "object": [] }] }]
*/
  SaveDataDictionary(form: any) {
    //   localStorage.setItem('forms',JSON.stringify(form.value));
    return this.http.post('http://localhost:9096/datadictionary', JSON.stringify(form.value), this.httpOptions);
  }

  getDataDictionaryData() {

    return this.http.get('http://localhost:9096/datadictionary');
  }

  addInformation(element:any,pageNumber:number){
    return this.http.post('http://localhost:9096/keyvalue',
     {'oldValue' : element.oldvalue,'newValue':element.address,'pageNumber':pageNumber}, 
    );
  }


  addtoJSONFile(element:any,id:number,ddName:string,fileName:string){
    this.httpOptions.headers = new HttpHeaders;    
    this.httpOptions.headers = this.httpOptions.headers.append('ddid', id+"");
    this.httpOptions.headers=  this.httpOptions.headers.append('ddname', ddName);
    this.httpOptions.headers=  this.httpOptions.headers.append('fileName', fileName);     
    return this.http.post('http://localhost:9096/jsonfile',element
     , this.httpOptions
    );
  }

  getDataDictionaryDocData() {

    return this.http.get('http://localhost:9096/datadocdetails');
  }
}
