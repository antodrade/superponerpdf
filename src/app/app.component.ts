// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { PdfEditorComponent } from './pdf-editor/pdf-editor.component';
// import { PdfService } from './pdf.service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, PdfEditorComponent, ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'prueba1';
// }

// app.component.ts
import { Component } from '@angular/core';
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private pdfService: PdfService) {}

  async handleFileInput(event: any) {
    // Obtener el archivo PDF cargado
    const file = event.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const existingPdfBytes = new Uint8Array(arrayBuffer);

    // Llamar al servicio para agregar texto en las coordenadas especificadas
    const text = 'Andrade';
    const text2 = 'Villa';
    const x = 35;  // Coordenada X
    const y = 628;  // Coordenada Y
    const x2 = 95;  // Coordenada X
    const y2 = 628;  // Coordenada Y
    this.pdfService.addTextToPdf(existingPdfBytes, text,text2, x, y, x2, y2);
  }
}



