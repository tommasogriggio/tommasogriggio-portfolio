const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function createGlutenLessPDF() {
  const destDir = path.join(__dirname, 'public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'concept_glutenless.pdf');
  
  // Inizializza il documento PDF in formato A4, orizzontale (landscape) per simulare un booklet del brand
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'landscape',
    margin: 0
  });
  
  const stream = fs.createWriteStream(destPath);
  doc.pipe(stream);
  
  const width = 841.89;
  const height = 595.28;
  const halfWidth = width / 2;
  
  // ==========================================
  // PAGINA 1: COPERTINA E INTRODUZIONE
  // ==========================================
  // Lato Sinistro: Copertina Minimal Arancione/Bianco
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#f97316'); // Arancione
  doc.font('Helvetica-Bold').fontSize(36).text('GLUTENLESS', 50, 200, { characterSpacing: 3 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(16).text('FASTFOOD SENZAGLUTINE', 50, 245, { characterSpacing: 1.5 });
  
  doc.moveTo(50, 275).lineTo(150, 275).lineWidth(2).strokeColor('#f97316').stroke();
  
  doc.fillColor('#666666');
  doc.font('Helvetica-Oblique').fontSize(11).text('Ristorazione Veloce Inclusiva // Food & Beverage', 50, 290, { characterSpacing: 1 });
  doc.font('Helvetica').fontSize(9).text('BRAND PRESENTATION // CONCEPT STRATEGICO', 50, 520, { characterSpacing: 1 });
  
  // Lato Destro: Vision & Mission (Sfondo Arancione Caldo / Scuro)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#1e1b18'); // Grigio scurissimo quasi nero caldo
  
  drawCropMarks(doc, halfWidth + 20, 20, '#f97316');
  drawCropMarks(doc, width - 20, 20, '#f97316');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#f97316');
  drawCropMarks(doc, width - 20, height - 20, '#f97316');
  
  doc.fillColor('#f97316');
  doc.font('Helvetica-Bold').fontSize(24).text('VISION & MISSION', halfWidth + 60, 100, { characterSpacing: 2 });
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(12).text('VISION', halfWidth + 60, 160);
  doc.font('Helvetica-Oblique').fontSize(10).fillColor('#dddddd').text('Immaginare un mondo in cui nessuno si senta escluso a tavola. Un futuro in cui il senza glutine non sia un limite o un’alternativa, ma una scelta naturale, condivisa e accessibile a tutti, capace di unire le persone attraverso il cibo.', halfWidth + 60, 180, { width: 300, lineGap: 3 });
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(12).text('MISSION', halfWidth + 60, 280);
  doc.font('Helvetica-Oblique').fontSize(10).fillColor('#dddddd').text('Creare un fast food inclusivo, sicuro e contemporaneo, in cui il senza glutine è la base e non l’eccezione, offrendo un’esperienza conviviale aperta a chiunque — celiaci, intolleranti, vegani e persone senza restrizioni — attraverso un linguaggio semplice, un design accogliente e un cibo di qualità.', halfWidth + 60, 300, { width: 300, lineGap: 3 });
  
  doc.fillColor('#f97316').font('Helvetica-Bold').fontSize(10).text('SEZ. 01', width - 100, 520);
  
  // ==========================================
  // PAGINA 2: STRUTTURA DEL BRAND & CONCEPT
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Concept & Obiettivi (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(20).text('CONCEPT PROGETTO', 50, 80);
  doc.moveTo(50, 110).lineTo(150, 110).lineWidth(1.5).strokeColor('#f97316').stroke();
  
  doc.font('Helvetica').fontSize(10).fillColor('#333333').text('Creare un fast food senza glutine che ribalti il concetto di "alternativa", diventando un luogo sicuro, conviviale e inclusivo, dove il cibo unisce invece di dividere. Un punto di riferimento non solo per chi ha intolleranze, ma per chiunque voglia condividere un’esperienza normale, libera e senza etichette.', 50, 130, { width: 320, lineGap: 4 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(12).text('PERCHÉ QUESTO PROGETTO?', 50, 260);
  doc.font('Helvetica').fontSize(10).fillColor('#333333').text('Perché il cibo è uno dei principali momenti di socialità e oggi molte persone che soffrono di problematiche alimentari ne vengono, per la maggior parte delle volte, escluse. Il progetto nasce per normalizzare il senza glutine e creare un luogo dove chiunque possa sentirsi a proprio agio.', 50, 285, { width: 320, lineGap: 4 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(12).text('RUOLO PERSONALE', 50, 400);
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor('#f97316').text('Il progetto nasce da un’esperienza personale, che utilizza il design e il branding come strumenti per trasformare un limite vissuto in un valore condiviso.', 50, 425, { width: 320, lineGap: 3 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(10).text('SEZ. 02', 50, 520);
  
  // Lato Destro: Struttura Brand, Valori & Personalità (Sfondo Bianco/Grigio Chiarissimo)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#fafafa');
  drawCropMarks(doc, halfWidth + 20, 20);
  drawCropMarks(doc, width - 20, 20);
  drawCropMarks(doc, halfWidth + 20, height - 20);
  drawCropMarks(doc, width - 20, height - 20);
  
  doc.fillColor('#f97316');
  doc.font('Helvetica-Bold').fontSize(20).text('STRUTTURA DEL BRAND', halfWidth + 60, 80, { characterSpacing: 1 });
  doc.moveTo(halfWidth + 60, 110).lineTo(halfWidth + 200, 110).lineWidth(1.5).strokeColor('#1a1a1a').stroke();
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('BRAND PURPOSE', halfWidth + 60, 130);
  doc.font('Helvetica').fontSize(10).fillColor('#555555').text('Migliorare l’esperienza sociale legata al cibo, eliminando le barriere alimentari e rendendo il mangiare insieme un gesto semplice, sicuro e normale per tutti.', halfWidth + 60, 150, { width: 300, lineGap: 3 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('VALORI DEL BRAND', halfWidth + 60, 230);
  const valori = ['Appartenenza', 'Sicurezza', 'Normalità', 'Trasparenza', 'Condivisione'];
  let valoriY = 250;
  doc.font('Helvetica').fontSize(9.5).fillColor('#555555');
  valori.forEach(val => {
    doc.circle(halfWidth + 66, valoriY + 4, 2.5).fill('#f97316');
    doc.fillColor('#333333').text(val, halfWidth + 78, valoriY);
    valoriY += 20;
  });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('PERSONALITÀ', halfWidth + 210, 230);
  const personalita = ['Accogliente', 'Giovane', 'Moderno', 'Sicuro', 'Inclusivo'];
  let persY = 250;
  doc.font('Helvetica').fontSize(9.5).fillColor('#555555');
  personalita.forEach(pers => {
    doc.circle(halfWidth + 216, persY + 4, 2.5).fill('#1a1a1a');
    doc.fillColor('#333333').text(pers, halfWidth + 228, persY);
    persY += 20;
  });
  
  // Target
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('TARGET PRINCIPALE & SECONDARIO', halfWidth + 60, 380);
  doc.font('Helvetica').fontSize(9.5).fillColor('#555555').text('Celiaci di tutte le età, intolleranti, vegani, vegetariani e persone health-conscious. Esteso a gruppi di amici "misti", studenti, lavoratori e sportivi.', halfWidth + 60, 400, { width: 300, lineGap: 3 });
  
  doc.fillColor('#f97316').font('Helvetica-Bold').fontSize(10).text('FIN.', width - 100, 520);
  
  doc.end();
  
  console.log('PDF GlutenLess creato con successo in: ' + destPath);
}

function drawCropMarks(doc, x, y, color = '#a3a3a3') {
  doc.save();
  doc.lineWidth(0.5).strokeColor(color);
  doc.moveTo(x - 12, y).lineTo(x + 12, y).stroke();
  doc.moveTo(x, y - 12).lineTo(x, y + 12).stroke();
  doc.circle(x, y, 5).stroke();
  doc.restore();
}

createGlutenLessPDF();
