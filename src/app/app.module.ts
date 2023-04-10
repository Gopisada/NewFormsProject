import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormDetailScrnComponent } from './form-detail-scrn/form-detail-scrn.component';
import { DummyCompComponent } from './Dictionary-FormDetail/dictionary-FormDetail.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AnotateDetailComponent } from './anotate-detail/anotate-detail.component';
import { MatSelectModule } from '@angular/material/select'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FooterComponent } from './footer/footer.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from '@angular/common/http';
import { AppLoaderService } from './apploader/apploader.service';
import {  MatPaginatorModule} from "@angular/material/paginator";
import {   MatTableModule } from "@angular/material/table";
import {   MatSortModule } from "@angular/material/sort";



import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ListofdocumentsComponent } from './listofdocuments/listofdocuments.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // FormDetailScrnComponent,
    DummyCompComponent,
    AdminDashboardComponent,
    AnotateDetailComponent,
    FooterComponent,
    FilterPipePipe,
    ListofdocumentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    PdfViewerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    NgxExtendedPdfViewerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule, 
  ],
  exports:[MatSelectModule],
  providers: [AppLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
