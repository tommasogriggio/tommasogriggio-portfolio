const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function createOakleyPDF() {
  const destDir = path.join(__dirname, 'public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'brochure_oakley.pdf');
  
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
  drawCropMarks(doc, 20, 20, '#0052ff');
  drawCropMarks(doc, halfWidth - 20, 20, '#0052ff');
  drawCropMarks(doc, 20, height - 20, '#0052ff');
  drawCropMarks(doc, halfWidth - 20, height - 20, '#0052ff');
  
  doc.fillColor('#0052ff'); // Blu Oakley
  doc.font('Helvetica-Bold').fontSize(42).text('O A K L E Y', 50, 190, { characterSpacing: 6 });
  
  doc.fillColor('#111111');
  doc.font('Helvetica-Bold').fontSize(22).text('KYLIAN MBAPPÉ SIGNATURE', 50, 245, { characterSpacing: 1 });
  
  doc.moveTo(50, 290).lineTo(220, 290).lineWidth(3).strokeColor('#0052ff').stroke();
  
  doc.fillColor('#666666');
  doc.font('Helvetica-Oblique').fontSize(12).text('DISRUPTIVE SPORT EYEWEAR COLLECTION', 50, 310, { characterSpacing: 1 });
  doc.font('Helvetica').fontSize(10).text('SERIE LIMITATA // PERFORMANCE & IDENTITY', 50, 335, { characterSpacing: 1.5 });
  doc.font('Helvetica').fontSize(9).text('EDIZIONE EDITORIALE // INDESIGN & PHOTOSHOP', 50, 520, { characterSpacing: 1 });
  
  // Lato Destro: Indice a Sfondo Nero/Blu scuro
  doc.rect(halfWidth, 0, halfWidth, height).fill('#0c0e14');
  
  // Crocini per pagina destra
  drawCropMarks(doc, halfWidth + 20, 20, '#444444');
  drawCropMarks(doc, width - 20, 20, '#444444');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#444444');
  drawCropMarks(doc, width - 20, height - 20, '#444444');
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(38).text('INDICE', halfWidth + 60, 100, { characterSpacing: 4 });
  
  doc.moveTo(halfWidth + 60, 155).lineTo(halfWidth + 180, 155).lineWidth(1.5).strokeColor('#0052ff').stroke();
  
  const indexItems = [
    { pages: 'SEC. 01', title: "Kylian Mbappé & Oakley Partnership" },
    { pages: 'SEC. 02', title: 'Tecnologia delle Lenti Prizm™' },
    { pages: 'SEC. 03', title: 'Il Design dei Modelli Signature' }
  ];
  
  let indexY = 220;
  indexItems.forEach(item => {
    doc.fillColor('#0052ff').font('Helvetica-Bold').fontSize(14).text(item.pages, halfWidth + 60, indexY);
    doc.fillColor('#dddddd').font('Helvetica').fontSize(14).text(item.title, halfWidth + 150, indexY);
    indexY += 50;
  });
  
  doc.fillColor('#444444').font('Helvetica').fontSize(10).text('INDESIGN & PHOTOSHOP - OAKLEY DESIGN', halfWidth + 60, 520);
  
  // ==========================================
  // PAGINA 2 (Inno alla performance)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Testo "Mbappé & Oakley" (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#0052ff');
  doc.font('Helvetica-Bold').fontSize(10).text('// SEZIONE 01', 50, 70, { characterSpacing: 1 });
  doc.fillColor('#111111');
  doc.font('Helvetica-Bold').fontSize(24).text("BEYOND DEMANDS", 50, 95);
  doc.moveTo(50, 135).lineTo(200, 135).lineWidth(1).strokeColor('#0052ff').stroke();
  
  const descText1 = "La collezione signature di Kylian Mbappé con Oakley rappresenta il connubio perfetto tra lo stile di vita dinamico e l'altissima performance sportiva.";
  const descText2 = "Sviluppati per chi esige il massimo in ogni situazione, questi occhiali combinano materiali leggeri e ultra-resistenti a lenti con tecnologia visiva d'avanguardia.";
  const descText3 = "Dalla strada al campo di allenamento, ogni modello incarna la determinazione, il carattere e il design futuristico tipici dello stile di Mbappé.";
  
  doc.fillColor('#222222').font('Helvetica').fontSize(12);
  doc.text(descText1, 50, 170, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(descText2, 50, 260, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(descText3, 50, 350, { width: 320, align: 'justify', lineGap: 6 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(12).text('02', 50, 520);
  
  // Lato Destro: Grafica Tecnica (Sfondo Grigio Scuro/Nero con accenti Blu)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#08090d');
  drawCropMarks(doc, halfWidth + 20, 20, '#0052ff');
  drawCropMarks(doc, width - 20, 20, '#0052ff');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#0052ff');
  drawCropMarks(doc, width - 20, height - 20, '#0052ff');
  
  doc.lineWidth(1.5).strokeColor('#0052ff');
  doc.circle(halfWidth + halfWidth / 2, height / 2, 110).stroke();
  doc.strokeColor('#1b2133');
  doc.circle(halfWidth + halfWidth / 2, height / 2, 140).stroke();
  doc.circle(halfWidth + halfWidth / 2, height / 2, 80).stroke();
  
  doc.lineWidth(1).strokeColor('#0052ff');
  doc.moveTo(halfWidth + 40, height / 2).lineTo(width - 40, height / 2).stroke();
  doc.moveTo(halfWidth + halfWidth / 2, 40).lineTo(halfWidth + halfWidth / 2, height - 40).stroke();
  
  doc.fillColor('#0052ff').font('Helvetica-Bold').fontSize(64).text('O', halfWidth + 80, 110, { opacity: 0.15 });
  doc.text('K', halfWidth + 280, 310, { opacity: 0.15 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(12).text('03', width - 70, 520);
  
  // ==========================================
  // PAGINA 3 (Tecnologia & Chiusura)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Tecnologia Lenti (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#0052ff');
  doc.font('Helvetica-Bold').fontSize(10).text('// INNOVAZIONE VISIVA', 50, 70, { characterSpacing: 1 });
  doc.fillColor('#111111');
  doc.font('Helvetica-Bold').fontSize(24).text('TECNOLOGIA PRIZM™', 50, 95);
  doc.moveTo(50, 135).lineTo(200, 135).lineWidth(1).strokeColor('#0052ff').stroke();
  
  const specs = [
    "Prizm™ Technology: Ottimizzazione dei dettagli per una visione ultra-nitida.",
    "Bespoke Frames: Realizzazione in O Matter™ per leggerezza e comfort assoluti.",
    "Kylian Mbappé Signature: Dettagli in blu elettrico ed incisioni laser esclusive.",
    "Impact Protection: Lenti testate in condizioni estreme per la massima sicurezza.",
    "Unobtainium® Earsocks: Aderenza perfetta anche in presenza di sudore."
  ];
  
  let specY = 165;
  doc.font('Helvetica').fontSize(11);
  specs.forEach(spec => {
    // Pallino blu
    doc.circle(55, specY + 5, 3.5).fill('#0052ff');
    doc.fillColor('#222222').text(spec, 70, specY, { width: 300, lineGap: 3 });
    specY += 45;
  });
  
  const safetyNote = "Progettati per supportare gli atleti nel superamento dei propri limiti quotidiani, ridefinendo il concetto di visione dinamica.";
  doc.fillColor('#0052ff').font('Helvetica-Bold').fontSize(11).text(safetyNote, 50, 410, { width: 320, lineGap: 3 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(12).text('04', 50, 520);
  
  // Lato Destro: Citazione (Sfondo Blu Profondo)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#003bb3');
  drawCropMarks(doc, halfWidth + 20, 20, '#ffffff');
  drawCropMarks(doc, width - 20, 20, '#ffffff');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#ffffff');
  drawCropMarks(doc, width - 20, height - 20, '#ffffff');
  
  // Grandi virgolette decorative
  doc.fillColor('#004df0').font('Helvetica-Bold').fontSize(180).text('“', halfWidth + 40, 80);
  
  const quoteText = "Performance is not just about results, it is about the constant obsession to perfect every single detail. We design to inspire the next generation.";
  doc.fillColor('#ffffff').font('Helvetica-Oblique').fontSize(16);
  doc.text(quoteText, halfWidth + 60, 180, { width: 300, align: 'center', lineGap: 6 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(14).text('— OAKLEY DESIGN TEAM', halfWidth + 110, 360, { characterSpacing: 1 });
  
  doc.fillColor('#80a6ff').font('Helvetica').fontSize(9).text('OAKLEY EYEWEAR // DISRUPTIVE DESIGN', halfWidth + 110, 430, { characterSpacing: 1.5 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(12).text('05', width - 70, 520);
  
  doc.end();
  
  console.log('PDF della Brochure Oakley creato con successo in: ' + destPath);
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

createOakleyPDF();
