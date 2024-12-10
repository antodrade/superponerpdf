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
    const text3 = 'Antonio';
    const text4 = 'Maria';
    const text5 = 'CC';
    const text6 = '1065594047';
    const text7 = 'x'
    const text8 = '0  7 0 6 1 9 8  8'
    const text9 = 'ARL SURA';
    const text10 = 'Colfondos';
    const text11 = '1300000'
    const text12 = 'Calle 57 # 43-43'
    const text13 = '3452012';
    const text14 = '3005036475';
    const text15 = 'antoandrade1988@gmail.com';
    const text16 = 'Barranquilla';
    const text17 = 'x';
    const text18 = '';
    const text19 = 'Atlántico'
    const text20 = '0  7 0 6 1 9 8  8'
    const text21 = 'CC';
    const text22 = '1065594047';
    const text23 = 'x'
    const text24 = '0  7 0 6 1 9 8  8'
    const text25 = '1065594047';
    const text26 = 'x'
    const text27 = '0  7 0 6 1 9 8  8'
    const x = 35;  // Coordenada X
    const y = 628;  // Coordenada Y
    const x2 = 170;  // Coordenada X
    const y2 = 628;  // Coordenada Y
    const x3 = 308;  // Coordenada X
    const y3 = 628;  // Coordenada Y
    const x4 = 446;  // Coordenada X
    const y4 = 628;  // Coordenada Y
    const x5 = 35;  // Coordenada X
    const y5 = 600;  // Coordenada Y
    const x6 = 170;  // Coordenada X
    const y6 = 600;  // Coordenada Y
    const x7 = 385;  // Coordenada X
    const y7 = 603;  // Coordenada Y
    const x8 = 492;  // Coordenada X
    const y8 = 603;  // Coordenada Y
    const x9 = 35;  // Coordenada X     ok
    const y9 = 540;  // Coordenada Y    ok
    const x10 = 220;  // Coordenada     
    const y10 = 540;  // Coordenada Y
    const x11 = 410;  // Coordenada X
    const y11 = 540;  // Coordenada Y
    const x12 = 35;  // Coordenada X
    const y12 = 522;  // Coordenada Y
    const x13 = 250;  // Coordenada X
    const y13 = 522;  // Coordenada Y
    const x14 = 370;  // Coordenada X
    const y14 = 522;  // Coordenada Y
    const x15 = 475;  // Coordenada X
    const y15 = 522;  // Coordenada Y
    const x16 = 35;  // Coordenada X
    const y16 = 504;  // Coordenada Y
    const x17 = 218;  // Coordenada X
    const y17 = 504;  // Coordenada Y
    const x18 = 308;  // Coordenada X
    const y18 = 504;  // Coordenada Y
    const x19 = 446;  // Coordenada X
    const y19 = 504;  // Coordenada Y
    const x20 = 446;  // Coordenada X
    const y20 = 628;  // Coordenada Y
    const x21 = 35;  // Coordenada X
    const y21 = 600;  // Coordenada Y
    const x22 = 170;  // Coordenada X
    const y22 = 600;  // Coordenada Y
    const x23 = 385;  // Coordenada X
    const y23 = 603;  // Coordenada Y
    const x24 = 492;  // Coordenada X
    const y24 = 603;  // Coordenada Y
    const x25 = 35;  // Coordenada X
    const y25 = 628;  // Coordenada Y
    const x26 = 170;  // Coordenada X
    const y26 = 628;  // Coordenada Y
    const x27 = 308;  // Coordenada X
    const y27 = 628;  // Coordenada Y
    this.pdfService.addTextToPdf(existingPdfBytes, text,text2,text3,text4,text5,text6,text7,text8,
      text9,text10,text11,text12,text13,text14,text15,text16,text17,text18,text19,x, y, x2, y2, x3, y3, x4, y4,x5,y5, x6, y6, x7, y7, x8, y8,
      x9, y9, x10, y10, x11, y11, x12, y12,x13,y13, x14, y14, x15, y15, x16,y16, x17, y17, x18, y18 , x19, y19);
  }
}



