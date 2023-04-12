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
  
  FormData: any = [
		{
			"dictionaryname": "Suneel Test",
			"ddid": 15,
			"formFields": [
				{
					"fieldName": "Customer Name",
					"type": "text",
					"description": "Customer name filed",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Phone",
					"type": "number",
					"description": "Phone number of customer",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Address",
					"type": "object",
					"description": "Address of customer",
					"object": [
						{
							"key": "Street",
							"text": "Scrinagar street",
							"description": null
						},
						{
							"key": "City",
							"text": "VSKP",
							"description": null
						},
						{
							"key": "State",
							"text": "AP",
							"description": null
						}
					],
					"dictionaryname": null
				}
			]
		},
		{
			"dictionaryname": "test",
			"ddid": 16,
			"formFields": [
				{
					"fieldName": "teste1",
					"type": "text",
					"description": "kjjj",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "est2",
					"type": "number",
					"description": "890899",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "key3",
					"type": "object",
					"description": "dffdfdfds",
					"object": [
						{
							"key": "key11",
							"text": "jjfdfks",
							"description": null
						}
					],
					"dictionaryname": null
				}
			]
		},
		{
			"dictionaryname": "Suneel Sample",
			"ddid": 17,
			"formFields": [
				{
					"fieldName": "Insurence",
					"type": "text",
					"description": "Insurence company name",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Date",
					"type": "date",
					"description": "Date of the insurence",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Address",
					"type": "object",
					"description": "Address",
					"object": [
						{
							"key": "City",
							"text": "City",
							"description": null
						},
						{
							"key": "State",
							"text": "State",
							"description": null
						}
					],
					"dictionaryname": null
				}
			]
		},
		{
			"dictionaryname": "Sample PDF Form",
			"ddid": 18,
			"formFields": [
				{
					"fieldName": "Name",
					"type": "text",
					"description": "Name of the field",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Text Value",
					"type": "text",
					"description": "Value of the text",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Address",
					"type": "object",
					"description": "A",
					"object": [
						{
							"key": "",
							"text": "",
							"description": null
						}
					],
					"dictionaryname": null
				}
			]
		},
		{
			"dictionaryname": "Sample PDF",
			"ddid": 19,
			"formFields": [
				{
					"fieldName": "Description",
					"type": "text",
					"description": "Description of text",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Data",
					"type": "text",
					"description": "Data",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Address",
					"type": "object",
					"description": "Address of text",
					"object": [
						{
							"key": "City",
							"text": "",
							"description": null
						}
					],
					"dictionaryname": null
				}
			]
		},
		{
			"dictionaryname": "SuneelTest",
			"ddid": 20,
			"formFields": [
				{
					"fieldName": "InsurenceId",
					"type": "Number",
					"description": "Insurence ID",
					"object": [],
					"dictionaryname": null
				},
				{
					"fieldName": "Address",
					"type": "Object",
					"description": "",
					"object": [
						{
							"key": "City",
							"text": "vITY",
							"description": null
						},
						{
							"key": "Zip",
							"text": "zip",
							"description": null
						}
					],
					"dictionaryname": null
				},
				{
					"fieldName": "Phone number",
					"type": "Number",
					"description": "Phone number of customer",
					"object": [],
					"dictionaryname": null
				}
			]
		}
	]
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
