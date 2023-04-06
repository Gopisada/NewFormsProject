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

@NgModule({
  declarations: [
    AppComponent,
    // FormDetailScrnComponent,
    DummyCompComponent,
    AdminDashboardComponent,
    AnotateDetailComponent,
    FooterComponent,
    FilterPipePipe
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
    HttpClientModule
  ],
  exports:[MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
