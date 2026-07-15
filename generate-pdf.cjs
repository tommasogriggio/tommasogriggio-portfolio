const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function createFanzinePDF() {
  const destDir = path.join(__dirname, 'public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'fanzine_kobe_bryant.pdf');
  
  // Inizializza il documento PDF in formato A4, orizzontale (landscape) per simulare un libretto fanzine aperto a doppia pagina
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
  // PAGINA 1 & 2 (Copertina e Indice)
  // ==========================================
  // Lato Sinistro: Copertina Minimal / Bianca
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  
  // Crocini di registro ai quattro angoli della pagina sinistra (simulando file di stampa professionale)
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#000000');
  doc.font('Helvetica-Bold').fontSize(36).text('KOBE', 50, 200, { characterSpacing: 4 });
  doc.font('Helvetica-Bold').fontSize(36).text('BRYANT', 50, 245, { characterSpacing: 4 });
  
  doc.moveTo(50, 305).lineTo(150, 305).lineWidth(2).strokeColor('#000000').stroke();
  
  doc.fillColor('#666666');
  doc.font('Helvetica-Oblique').fontSize(14).text('THE BLACK MAMBA', 50, 320, { characterSpacing: 2 });
  doc.font('Helvetica').fontSize(10).text('EDIZIONE LIMITATA // EDITORIAL DESIGN', 50, 520, { characterSpacing: 1 });
  
  // Lato Destro: Indice a Sfondo Nero
  doc.rect(halfWidth, 0, halfWidth, height).fill('#050505');
  
  // Crocini per pagina destra
  drawCropMarks(doc, halfWidth + 20, 20, '#ffffff');
  drawCropMarks(doc, width - 20, 20, '#ffffff');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#ffffff');
  drawCropMarks(doc, width - 20, height - 20, '#ffffff');
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(42).text('INDICE', halfWidth + 60, 100, { characterSpacing: 6 });
  
  doc.moveTo(halfWidth + 60, 160).lineTo(halfWidth + 180, 160).lineWidth(1).strokeColor('#f59e0b').stroke(); // Linea ambra
  
  const indexItems = [
    { pages: '04 - 05', title: "L'inizio di una leggenda" },
    { pages: '06 - 07', title: 'Gli anni ai Lakers & La Mamba Mentality' },
    { pages: '08 - 09', title: 'Le imprese immortali' }
  ];
  
  let indexY = 220;
  indexItems.forEach(item => {
    doc.fillColor('#f59e0b').font('Helvetica-Bold').fontSize(14).text(item.pages, halfWidth + 60, indexY);
    doc.fillColor('#cccccc').font('Helvetica').fontSize(14).text(item.title, halfWidth + 130, indexY);
    indexY += 50;
  });
  
  doc.fillColor('#444444').font('Helvetica').fontSize(10).text('STAMPA TIPOGRAFICA - PROGETTO PORTFOLIO', halfWidth + 60, 520);
  
  // ==========================================
  // PAGINA 3 & 4 (L'inizio di una leggenda)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Testo "L'inizio di una leggenda" (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#000000');
  doc.font('Helvetica-Bold').fontSize(10).text('// SEZIONE 01', 50, 70, { characterSpacing: 1 });
  doc.font('Helvetica-Bold').fontSize(24).text("L'INIZIO DI UNA LEGGENDA", 50, 95);
  doc.moveTo(50, 135).lineTo(200, 135).lineWidth(1).strokeColor('#000000').stroke();
  
  const bioText1 = "Kobe Bryant nasce il 23 agosto 1978 a Philadelphia. Figlio dell’ex giocatore NBA Joe Bryant, cresce tra Stati Uniti e Italia, dove il padre gioca per diversi anni.";
  const bioText2 = "Proprio in Italia Kobe sviluppa una visione unica del gioco e una mentalità competitiva fuori dal comune.";
  const bioText3 = "Nel 1996, a soli 17 anni, viene scelto al Draft NBA dai Charlotte Hornets ma viene subito ceduto ai Los Angeles Lakers.";
  const bioText4 = "È l’inizio di una delle carriere più iconiche della storia del basket.";
  
  doc.fillColor('#222222').font('Helvetica').fontSize(12);
  doc.text(bioText1, 50, 170, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(bioText2, 50, 260, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(bioText3, 50, 330, { width: 320, align: 'justify', lineGap: 6 });
  
  doc.fillColor('#000000').font('Helvetica-Bold').fontSize(13);
  doc.text(bioText4, 50, 420, { width: 320, align: 'left', lineGap: 4 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(12).text('04', 50, 520);
  
  // Lato Destro: Grafica Decorativa ed Artistica sul Basket (Sfondo Giallo Lakers)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#fdb927'); // Giallo Lakers
  drawCropMarks(doc, halfWidth + 20, 20, '#552583');
  drawCropMarks(doc, width - 20, 20, '#552583');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#552583');
  drawCropMarks(doc, width - 20, height - 20, '#552583');
  
  // Cerchi concentrici viola che simulano le linee del pallone e del campo
  doc.lineWidth(1.5).strokeColor('#552583'); // Viola Lakers
  doc.circle(halfWidth + halfWidth / 2, height / 2, 120).stroke();
  doc.circle(halfWidth + halfWidth / 2, height / 2, 80).stroke();
  doc.circle(halfWidth + halfWidth / 2, height / 2, 40).stroke();
  
  doc.moveTo(halfWidth + 40, height / 2).lineTo(width - 40, height / 2).stroke();
  doc.moveTo(halfWidth + halfWidth / 2, 40).lineTo(halfWidth + halfWidth / 2, height - 40).stroke();
  
  doc.fillColor('#552583').font('Helvetica-Bold').fontSize(80).text('8', halfWidth + 80, 100, { opacity: 0.15 });
  doc.text('24', halfWidth + 240, 320, { opacity: 0.15 });
  
  doc.fillColor('#552583').font('Helvetica-Bold').fontSize(12).text('05', width - 70, 520);
  
  // ==========================================
  // PAGINA 5 & 6 (Gli anni ai Lakers & La Mamba Mentality)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Grande Grafica "MAMBA MENTALITY" (Sfondo Viola Lakers)
  doc.rect(0, 0, halfWidth, height).fill('#552583');
  drawCropMarks(doc, 20, 20, '#fdb927');
  drawCropMarks(doc, halfWidth - 20, 20, '#fdb927');
  drawCropMarks(doc, 20, height - 20, '#fdb927');
  drawCropMarks(doc, halfWidth - 20, height - 20, '#fdb927');
  
  doc.fillColor('#fdb927');
  doc.font('Helvetica-Bold').fontSize(48).text('MAMBA', 50, 180, { characterSpacing: 4 });
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(48).text('MENTALITY', 50, 240, { characterSpacing: 2 });
  
  doc.moveTo(50, 315).lineTo(300, 315).lineWidth(3).strokeColor('#fdb927').stroke();
  
  doc.fillColor('#e2d9f3').font('Helvetica-Oblique').fontSize(14).text('"La costante ricerca di essere la versione migliore di se stessi."', 50, 340, { width: 320 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(12).text('06', 50, 520);
  
  // Lato Destro: Testo "Gli anni ai Lakers" (Sfondo Nero)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#050505');
  drawCropMarks(doc, halfWidth + 20, 20, '#ffffff');
  drawCropMarks(doc, width - 20, 20, '#ffffff');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#ffffff');
  drawCropMarks(doc, width - 20, height - 20, '#ffffff');
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(10).text('// SEZIONE 02', halfWidth + 60, 70, { characterSpacing: 1 });
  doc.font('Helvetica-Bold').fontSize(24).text('GLI ANNI AI LAKERS', halfWidth + 60, 95);
  doc.moveTo(halfWidth + 60, 135).lineTo(halfWidth + 250, 135).lineWidth(1).strokeColor('#ffffff').stroke();
  
  const lakersText1 = "Con i Los Angeles Lakers, Kobe diventa uno dei giocatori più dominanti della storia NBA. Insieme a Shaquille O’Neal conquista tre titoli NBA consecutivi (2000, 2001, 2002).";
  const lakersText2 = "Dopo la separazione con Shaq, Kobe dimostra di poter vincere anche da leader assoluto. Nel 2009 e 2010 guida i Lakers a due nuovi titoli.";
  const lakersText3 = "Il suo stile di gioco è fatto di: tecnica perfetta, disciplina assoluta, allenamenti ossessivi, mentalità competitiva.";
  
  doc.fillColor('#cccccc').font('Helvetica').fontSize(12);
  doc.text(lakersText1, halfWidth + 60, 170, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(lakersText2, halfWidth + 60, 270, { width: 320, align: 'justify', lineGap: 6 });
  doc.text(lakersText3, halfWidth + 60, 370, { width: 320, align: 'justify', lineGap: 6 });
  
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(12).text('07', width - 70, 520);
  
  // ==========================================
  // PAGINA 7 & 8 (Le imprese immortali & Citazione)
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Testo "Le imprese immortali" (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#000000');
  doc.font('Helvetica-Bold').fontSize(10).text('// SEZIONE 03', 50, 70, { characterSpacing: 1 });
  doc.font('Helvetica-Bold').fontSize(24).text('LE IMPRESE IMMORTALI', 50, 95);
  doc.moveTo(50, 135).lineTo(200, 135).lineWidth(1).strokeColor('#000000').stroke();
  
  const bulletPoints = [
    "81 punti in una partita nel 2006 contro i Toronto Raptors (secondo miglior punteggio nella storia NBA)",
    "5 titoli NBA conquistati con una sola maglia",
    "18 selezioni consecutive all'All-Star Game",
    "2 ori olimpici (Pechino 2008, Londra 2012) con il leggendario Redeem Team",
    "Premio Oscar nel 2018 per il miglior cortometraggio animato con 'Dear Basketball'"
  ];
  
  let bulletY = 165;
  doc.font('Helvetica').fontSize(10.5);
  bulletPoints.forEach(pt => {
    // Disegna pallino arancio
    doc.circle(55, bulletY + 5, 3).fill('#f59e0b');
    doc.fillColor('#222222').text(pt, 70, bulletY, { width: 300, lineGap: 2 });
    bulletY += 45;
  });
  
  const finalNotes = "Il 26 gennaio 2020 il mondo perde Kobe in un tragico incidente. Ma la sua eredità, dedizione e fame di migliorarsi continueranno a vivere in eterno.";
  doc.fillColor('#000000').font('Helvetica-Bold').fontSize(11).text(finalNotes, 50, 410, { width: 320, lineGap: 3 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(12).text('08', 50, 520);
  
  // Lato Destro: Grande Citazione e Chiusura (Sfondo Nero Profondo)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#020202');
  drawCropMarks(doc, halfWidth + 20, 20, '#666666');
  drawCropMarks(doc, width - 20, 20, '#666666');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#666666');
  drawCropMarks(doc, width - 20, height - 20, '#666666');
  
  // Grandi virgolette decorative
  doc.fillColor('#1a1a1a').font('Helvetica-Bold').fontSize(180).text('“', halfWidth + 40, 80);
  
  const quoteText = "The most important thing is to try and inspire people so that they can be great in whatever they want to do.";
  doc.fillColor('#ffffff').font('Helvetica-Oblique').fontSize(18);
  doc.text(quoteText, halfWidth + 70, 180, { width: 280, align: 'center', lineGap: 8 });
  
  doc.fillColor('#f59e0b').font('Helvetica-Bold').fontSize(14).text('— KOBE BRYANT', halfWidth + 140, 350, { characterSpacing: 1 });
  
  doc.fillColor('#444444').font('Helvetica').fontSize(9).text('MAMBA FOREVER // 1978 - 2020', halfWidth + 140, 430, { characterSpacing: 2 });
  
  doc.fillColor('#666666').font('Helvetica-Bold').fontSize(12).text('09', width - 70, 520);
  
  doc.end();
  
  console.log('PDF della Fanzine creato con successo in: ' + destPath);
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

createFanzinePDF();
