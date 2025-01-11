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
import { Formulario } from '../models/formulario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent {

  formulario: Formulario = new Formulario();

  constructor(private pdfService: PdfService, ) {}

  async handleFileInput(event: any) {
    // Obtener el archivo PDF cargado
    const file = event.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const existingPdfBytes = new Uint8Array(arrayBuffer);

    // Llamar al servicio para agregar texto en las coordenadas especificadas
    // const text31 = 'x';
    // const text32 = 'x';
    // const text = 'Andrade';
    // const text2 = 'Villa';
    // const text3 = 'Antonio';
    // const text4 = 'Maria';
    // const text5 = 'CC';
    // const text6 = '1065594047';
    // const text7 = 'x'
    // const text8 = '0  7 0 6 1 9 8  8'
    // const text9 = 'ARL SURA';
    // const text10 = 'Colfondos';
    // const text11 = '1300000'
    // const text12 = 'Calle 57 # 43-43'
    // const text13 = '3452012';
    // const text14 = '3005036475';
    // const text15 = 'antoandrade1988@gmail.com';
    // const text16 = 'Barranquilla';
    // const text17 = 'x';
    // const text18 = '';
    // const text19 = 'Atlántico';
    // const text20 = 'Soft Skills Management SAS'
    // const text21 = 'N    I    T'
    // const text22 = '901813325';
    // const text23 = 'cra 52 # 74-80'
    // const text24 = '3452012'
    // const text25 = 'softskillsmanagementcol@gmail.com';
    // const text26 = 'Barranquilla'
    // const text27 = 'Atlántico'
    //  const text28 = '0   1   1   2   2   0   2   4'
    // const text29 = 'Comfamiliar del Atlántico'
    // const text30 = 'Cargo: Asesor comercial'
    const text31 = 'x';
    const text32 = 'x';
    const text = 'Serrano';
    const text2 = 'Solano';
    const text3 = this.formulario.nombre1;
    const text4 = this.formulario.nombre2;
    const text5 = 'CC';
    const text6 = '32.787.976';
    const text7 = 'x'
    const text8 = '0  5 0 3 1 9 7  6'
    const text9 = 'ARL SURA';
    const text10 = 'Colfondos';
    const text11 = '1300000'
    const text12 = 'Calle 96 # 45-24'
    const text13 = '3412384';
    const text14 = '3009872354';
    const text15 = 'luzserrasolok@gmail.com';
    const text16 = 'Barranquilla';
    const text17 = 'x';
    const text18 = '';
    const text19 = 'Atlántico';
    const text20 = 'Soft Skills Managementent SAS'
    const text21 = 'N    I    T'
    const text22 = '901813325';
    const text23 = 'cra 52 # 74-80'
    const text24 = '3452012'
    const text25 = 'softskillsmanagementcol@gmail.com';
    const text26 = 'Barranquilla'
    const text27 = 'Atlántico'
    const text28 = '0   1   0   1   2   0   2   5'
    const text29 = 'Comfamiliar del Atlántico'
    const text30 = 'Cargo: Asesor comercial'




    const x31 = 70;  // Coordenada X
    const y31 = 662;  // Coordenada Y
    const x32 = 268; // Coordenada X
    const y32 = 662;  // Coordenada Y
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
    const x13 = 255;  // Coordenada X
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
    const x19 = 360;  // Coordenada X
    const y19 = 504;  // Coordenada Y
    const x20 = 35;  // Coordenada X
    const y20 = 50;  // Coordenada Y
    const x21 = 205;  // Coordenada X
    const y21 = 50;  // Coordenada Y
    const x22 = 380;  // Coordenada X
    const y22 = 50;  // Coordenada Y
    const x23 = 35;  // Coordenada X
    const y23 = 28;  // Coordenada Y
    const x24 = 175;  // Coordenada X
    const y24 = 28;  // Coordenada Y
    const x25 = 240;  // Coordenada X
    const y25 = 28;  // Coordenada Y
    const x26 = 390;  // Coordenada X
    const y26 = 28;  // Coordenada Y
    const x27 = 530;  // Coordenada X
    const y27 = 28;  // Coordenada Y
    const x28 = 497;  // Coordenada X
    const y28 = 553;  // Coordenada Y
    const x29 = 370;  // Coordenada X
    const y29 = 533;  // Coordenada Y
    const x30 = 200;  // Coordenada X
    const y30 = 106;  // Coordenada Y
   
    this.pdfService.addTextToPdf(existingPdfBytes, text,text2,text3,text4,text5,text6,text7,text8,
      text9,text10,text11,text12,text13,text14,text15,text16,text17,text18,text19,text20,text21,text22,text23,text24,
      text25,text26,text27,text28, text29,text30,text31, text32, x, y, x2, y2, x3, y3, x4, y4,x5,y5, x6, y6, x7, y7, x8, y8,
      x9, y9, x10, y10, x11, y11, x12, y12,x13,y13, x14, y14, x15, y15, x16,y16, x17, y17, x18, y18 , x19, y19, x20, y20,x21, y21,
      x22, y22, x23, y23,x24, y24,x25, y25, x26, y26,x27, y27, x28, y28 , x29, y29, x30, y30, x31, y31, x32, y32);
  }
}



