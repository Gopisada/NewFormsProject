import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { AppLoaderComponent } from './apploader.component';

@Injectable()
export class AppLoaderService {
  dialogRef: MatDialogRef<AppLoaderComponent> |any;
  constructor(private dialog: MatDialog) { }

  public open(title:any): Observable<boolean> {
    // let d = setTimeout(() => {
      this.dialogRef = this.dialog.open(AppLoaderComponent, {
       
        disableClose: true
      });
      this.dialogRef.updateSize('300px');
      this.dialogRef.componentInstance.title = title;
      return this.dialogRef.afterClosed();
    // }, 0);
    // return this.dialogRef;
  }

  public close() {
    console.log(this.dialogRef);
    
    if (this.dialogRef) { 
      setTimeout(() => {
        this.dialogRef.close();
      }, 0);
    }
  }
  public foreclose() {
    this.dialogRef.close();
  }
}
