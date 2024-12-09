// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PdfService {

//   constructor() { }
// }

// pdf.service.ts
import { Injectable } from '@angular/core';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  async addTextToPdf(existingPdfBytes: Uint8Array, text: string, text2: string, x: number, y: number,
     x2: number, y2: number) {
    // Cargar el PDF existente
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Obtener la primera página (puedes seleccionar otra página si es necesario)
    const page = pdfDoc.getPages()[0];

    // Establecer una fuente estándar
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);;

    // Escribir el texto en las coordenadas (x, y)
    page.drawText(text, {
      x: x,
      y: y,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text2, {
      x: x2,
      y: y2,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    // Guardar el PDF modificado
    const pdfBytes = await pdfDoc.save();

    // Guardar el archivo PDF resultante
    this.downloadFile(pdfBytes);
  }

  private downloadFile(pdfBytes: Uint8Array) {
    // Utilizar file-saver para descargar el PDF modificado
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'modified.pdf');
  }
}

