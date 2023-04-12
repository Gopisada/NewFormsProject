import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
    public document = 'PDF_Succinctly.pdf';
    ngOnInit(): void {
    }
}
