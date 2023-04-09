import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppLoaderService } from '../apploader/apploader.service';
import { FormSubmitService } from '../form-submit.service';

@Component({
  selector: 'app-listofdocuments',
  templateUrl: './listofdocuments.component.html',
  styleUrls: ['./listofdocuments.component.css']
})
export class ListofdocumentsComponent {

  // constructor(private formSubmit: FormSubmitService,
  //   private loader: AppLoaderService,) { }
  displayedColumns = ['id', 'dataDictionaryName', 'pdfDocName' ,'dictionaryJSONName'];
  dataSource: MatTableDataSource<DictionaryDocDataModal>  | any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
 
  constructor(private formSubmit: FormSubmitService,
       private loader: AppLoaderService) {
         this.getDataDictionaryData();
  }

 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getDataDictionaryData() {
    this.loader.open("Please Wait......");
    this.formSubmit.getDataDictionaryDocData().subscribe({
      next: (resp: any) => {
       console.log(resp);      
       this.dataSource = new MatTableDataSource(resp.result);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
        this.loader.close();
      },
      error: (err: any) => {
        //this.toastrService.error(err); 
        // this.loader.close();
      }
    })

  }
}



    

export interface DictionaryDocDataModal {
  id: string;
  dataDictionaryName: string;
  pdfDocName: string;
  dictionaryJSONName: string;
}
