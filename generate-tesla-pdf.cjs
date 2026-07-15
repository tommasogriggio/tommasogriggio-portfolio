const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function createTeslaPDF() {
  const destDir = path.join(__dirname, 'public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'brochure_tesla.pdf');
  
  // Inizializza il documento PDF in formato A4, orizzontale (landscape)
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'landscape',
    margin: 0
  });
  
  const stream = fs.createWriteStream(destPath);
  doc.pipe(stream);
  
  // Dimensioni A4 landscape: 841.89 x 595.28
  const width = 841.89;
  const height = 595.28;
  const halfWidth = width / 2;
  
  // ==========================================
  // PAGINA 1 (Copertina e Indice)
  // ==========================================
  // Lato Sinistro: Copertina Bianca / Minimalista
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  
  // Crocini di registro ai quattro angoli della pagina sinistra
  drawCropMarks(doc, 20, 20, '#cc0000');
  drawCropMarks(doc, halfWidth - 20, 20, '#cc0000');
  drawCropMarks(doc, 20, height - 20, '#cc0000');
  drawCropMarks(doc, halfWidth - 20, height - 20, '#cc0000');
  
  doc.fillColor('#cc0000'); // Rosso Tesla
  doc.font('Helvetica-Bold').fontSize(42).text('T E S L A', 50, 190, { characterSpacing: 6 });
  
  doc.fillColor('#111111');
  doc.font('Helvetica-Bold').fontSize(22).text('BROCHURE INFORMATIVA', 50, 245, { characterSpacing: 1 });
  
  doc.moveTo(50, 290).lineTo(220, 290).lineWidth(3).strokeColor('#cc0000').stroke();
  
  doc.fillColor('#666666');
  doc.font('Helvetica-Oblique').fontSize(12).text('THE FUTURE OF SUSTAINABLE ENERGY', 50, 310, { characterSpacing: 1 });
  doc.font('Helvetica').fontSize(10).text('MODELLI: S // 3 // X // Y', 50, 335, { characterSpacing: 1.5 });
  doc.font('Helvetica').fontSize(9).text('EDIZIONE SPECIFICA // DIGITAL BROCHURE', 50, 520, { characterSpacing: 1 });
  
  // Lato Destro: Indice a Sfondo Nero/Rosso scuro
  doc.rect(halfWidth, 0, halfWidth, height).fill('#0f0f11');
  
  // Crocini per pagina destra
  drawCropMarks(doc, halfWidth + 20, 20, '#666666');
  drawCropMarks(doc, width - 20, 20, '#666666');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#666666');
  drawCropMarks(doc, width - 20, height - 20, '#666666');
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(38).text('INDICE', halfWidth + 60, 100, { characterSpacing: 4 });
  
  doc.moveTo(halfWidth + 60, 155).lineTo(halfWidth + 180, 155).lineWidth(1.5).strokeColor('#cc0000').stroke();
  
  const indexItems = [
    { pages: 'SEC. 01', title: "Evoluzione Energetica & Design" },
    { pages: 'SEC. 02', title: 'Prestazioni e Sicurezza Attiva' },
    { pages: 'SEC. 03', title: 'La Nuova Flotta Modelli (Specs)' }
  ];
  
  let indexY = 220;
  indexItems.forEach(item => {
    doc.fillColor('#cc0000').font('Helvetica-Bold').fontSize(14).text(item.pages, halfWidth + 60, indexY);
    doc.fillColor('#dddddd').font('Helvetica').fontSize(14).text(item.title, halfWidth + 150, indexY);
    indexY += 50;
  });
  
  doc.fillColor('#444444').font('Helvetica').fontSize(10).text('PROGETTATO CON CANVA - TESLA INC.', halfWidth + 60, 520);
  
  // ==========================================
  // PAGINA 2 (Design, Evoluzione & Tecnologia)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Testo "Evoluzione Energetica" (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#cc0000');
  doc.font('Helvetica-Bold').fontSize(10).text('// SEZIONE 01', 50, 70, { characterSpacing: 1 });
  doc.fillColor('#111111');
  doc.font('Helvetica-Bold').fontSize(24).text("DESIGN & ECOSOSTENIBILITÀ", 50, 95);
  doc.moveTo(50, 135).lineTo(200, 135).lineWidth(1).strokeColor('#cc0000').stroke();
  
  const descText1 = "Tesla accelera la transizione del mondo verso l'energia sostenibile con una gamma completa di auto elettriche e soluzioni energetiche pulite integrate.";
  const descText2 = "La progettazione della flotta unisce un'estetica minimale ad una aerodinamica senza pari, riducendo l'attrito per massimizzare l'autonomia energetica.";
  const descText3 = "Ogni singola linea delle vetture è ottimizzata per garantire stabilità ad alte velocità, unita ad un comfort interno ineguagliabile e a standard di sicurezza stellari.";
  
  doc.fillColor('#222222').font('Helvetica').fontSize(12);
  doc.text(descText1, 50, 170, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(descText2, 50, 260, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(descText3, 50, 350, { width: 320, align: 'justify', lineGap: 6 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(12).text('02', 50, 520);
  
  // Lato Destro: Grafica Tecnica (Sfondo Grigio Scuro/Nero con accenti Rossi)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#111115');
  drawCropMarks(doc, halfWidth + 20, 20, '#cc0000');
  drawCropMarks(doc, width - 20, 20, '#cc0000');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#cc0000');
  drawCropMarks(doc, width - 20, height - 20, '#cc0000');
  
  doc.lineWidth(1.5).strokeColor('#cc0000');
  doc.circle(halfWidth + halfWidth / 2, height / 2, 110).stroke();
  doc.strokeColor('#33333b');
  doc.circle(halfWidth + halfWidth / 2, height / 2, 140).stroke();
  doc.circle(halfWidth + halfWidth / 2, height / 2, 80).stroke();
  
  doc.lineWidth(1).strokeColor('#cc0000');
  doc.moveTo(halfWidth + 40, height / 2).lineTo(width - 40, height / 2).stroke();
  doc.moveTo(halfWidth + halfWidth / 2, 40).lineTo(halfWidth + halfWidth / 2, height - 40).stroke();
  
  doc.fillColor('#cc0000').font('Helvetica-Bold').fontSize(64).text('T', halfWidth + 80, 110, { opacity: 0.15 });
  doc.text('E', halfWidth + 280, 310, { opacity: 0.15 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(12).text('03', width - 70, 520);
  
  // ==========================================
  // PAGINA 3 (Flotta, Specifiche & Citazione)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Specifiche Modelli (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#cc0000');
  doc.font('Helvetica-Bold').fontSize(10).text('// SPECIFICHE TECNICHE', 50, 70, { characterSpacing: 1 });
  doc.fillColor('#111111');
  doc.font('Helvetica-Bold').fontSize(24).text('PRESTAZIONI STRAORDINARIE', 50, 95);
  doc.moveTo(50, 135).lineTo(200, 135).lineWidth(1).strokeColor('#cc0000').stroke();
  
  const specs = [
    "Model S Plaid: 1.020 CV, accelerazione 0-100 km/h in 2,1 secondi.",
    "Autopilot Avanzato: 8 telecamere attive con visione a 360 gradi.",
    "Autonomia Estesa: Oltre 600 km con una singola ricarica rapida.",
    "Supercharger Network: Ricarica fino a 275 km in soli 15 minuti.",
    "Sicurezza Attiva: 5 Stelle in tutte le categorie di crash test Euro NCAP."
  ];
  
  let specY = 165;
  doc.font('Helvetica').fontSize(11);
  specs.forEach(spec => {
    // Pallino rosso
    doc.circle(55, specY + 5, 3.5).fill('#cc0000');
    doc.fillColor('#222222').text(spec, 70, specY, { width: 300, lineGap: 3 });
    specY += 45;
  });
  
  const safetyNote = "Ogni veicolo Tesla è progettato da zero per essere la vettura più sicura sul mercato, riducendo drasticamente la probabilità di infortunio.";
  doc.fillColor('#cc0000').font('Helvetica-Bold').fontSize(11).text(safetyNote, 50, 410, { width: 320, lineGap: 3 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(12).text('04', 50, 520);
  
  // Lato Destro: Citazione Elon Musk (Sfondo Rosso Profondo Tesla)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#990000');
  drawCropMarks(doc, halfWidth + 20, 20, '#ffffff');
  drawCropMarks(doc, width - 20, 20, '#ffffff');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#ffffff');
  drawCropMarks(doc, width - 20, height - 20, '#ffffff');
  
  // Grandi virgolette decorative
  doc.fillColor('#b30000').font('Helvetica-Bold').fontSize(180).text('“', halfWidth + 40, 80);
  
  const quoteText = "If you go back a few hundred years, what we take for granted today would seem like magic — being able to talk to people over long distances, transmit images, flying, accessing vast amounts of data like an oracle.";
  doc.fillColor('#ffffff').font('Helvetica-Oblique').fontSize(16);
  doc.text(quoteText, halfWidth + 60, 180, { width: 300, align: 'center', lineGap: 6 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(14).text('— ELON MUSK', halfWidth + 140, 360, { characterSpacing: 1 });
  
  doc.fillColor('#e68080').font('Helvetica').fontSize(9).text('TESLA BROCHURE // INNOVATION', halfWidth + 130, 430, { characterSpacing: 1.5 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(12).text('05', width - 70, 520);
  
  doc.end();
  
  console.log('PDF della Brochure Tesla creato con successo in: ' + destPath);
}

// Funzione helper per disegnare i crocini di registro tipografici (Crop Marks)
function drawCropMarks(doc, x, y, color = '#a3a3a3') {
  doc.save();
  doc.lineWidth(0.5).strokeColor(color);
  
  // Linee a croce
  doc.moveTo(x - 12, y).lineTo(x + 12, y).stroke();
  doc.moveTo(x, y - 12).lineTo(x, y + 12).stroke();
  
  // Cerchietto centrale
  doc.circle(x, y, 5).stroke();
  
  doc.restore();
}

createTeslaPDF();
