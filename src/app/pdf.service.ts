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

  async addTextToPdf(existingPdfBytes: Uint8Array, text: string, text2: string, text3: string, text4: string, text5: string, text6: string, text7: string,text8: string,
    text9: string, text10: string, text11: string, text12: string, text13: string, text14: string, text15: string, text16: string, text17: string, text18: string, text19: string,
    x: number, y: number, x2: number, y2: number,  x3: number, y3: number, x4: number, y4: number, x5: number, y5: number,x6: number, y6: number,
     x7: number, y7: number,x8: number, y8: number, x9: number, y9: number, x10: number, y10: number,  x11: number, y11: number, x12: number, y12: number, 
     x13: number, y13: number,x14: number, y14: number,x15: number, y15: number,  x16: number, y16: number,x17: number, y17: number,x18: number, y18: number ,x19: number, y19: number) {
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

    page.drawText(text3, {
      x: x3,
      y: y3,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text4, {
      x: x4,
      y: y4,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text5, {
      x: x5,
      y: y5,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text6, {
      x: x6,
      y: y6,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text7, {
      x: x7,
      y: y7,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text8, {
      x: x8,
      y: y8,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text8, {
      x: x8,
      y: y8,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text9, {
      x: x9,
      y: y9,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text10, {
      x: x10,
      y: y10,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text11, {
      x: x11,
      y: y11,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text12, {
      x: x12,
      y: y12,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text13, {
      x: x13,
      y: y13,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text14, {
      x: x14,
      y: y14,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text15, {
      x: x15,
      y: y15,
      font: font,
      size: 8,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text16, {
      x: x16,
      y: y16,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text17, {
      x: x17,
      y: y17,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text18, {
      x: x18,
      y: y18,
      font: font,
      size: 12,
      color: rgb(0, 0, 0),  // Color negro
    });

    page.drawText(text19, {
      x: x19,
      y: y19,
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

