const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function createSurgeonPDF() {
  const destDir = path.join(__dirname, 'public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'presentation_surgeon_energy.pdf');
  
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
  // Lato Sinistro: Copertina Minimal Viola/Bianco
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#7c3aed'); // Viola
  doc.font('Helvetica-Bold').fontSize(36).text('SURGEON ENERGY', 50, 180, { characterSpacing: 2 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(16).text('FOCUS UNDER PRESSURE', 50, 240, { characterSpacing: 1.5 });
  
  doc.moveTo(50, 275).lineTo(150, 275).lineWidth(2).strokeColor('#7c3aed').stroke();
  
  doc.fillColor('#666666');
  doc.font('Helvetica-Oblique').fontSize(11).text('Bevanda Funzionale per Medici e Chirurghi', 50, 290, { characterSpacing: 1 });
  doc.font('Helvetica').fontSize(9).text('BRAND PRESENTATION // IDENTITY & MARKETING', 50, 520, { characterSpacing: 1 });
  
  // Lato Destro: Vision & Mission (Sfondo Viola/Nero Scuro)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#130f1e'); // Grigio scurissimo a base viola
  
  drawCropMarks(doc, halfWidth + 20, 20, '#7c3aed');
  drawCropMarks(doc, width - 20, 20, '#7c3aed');
  drawCropMarks(doc, halfWidth + 20, height - 20, '#7c3aed');
  drawCropMarks(doc, width - 20, height - 20, '#7c3aed');
  
  doc.fillColor('#a78bfa'); // Viola chiaro
  doc.font('Helvetica-Bold').fontSize(24).text('VISION & MISSION', halfWidth + 60, 80, { characterSpacing: 2 });
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(11).text('VISION', halfWidth + 60, 130);
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor('#dddddd').text('Sviluppare una formula unica che agisce rapidamente, offrendo un incremento delle capacità cognitive e una riduzione dei livelli di stress, senza compromettere la salute. Una bevanda realizzata con ingredienti naturali selezionati per garantire energia costante, focus mentale e benessere psicofisico.', halfWidth + 60, 150, { width: 300, lineGap: 3 });
  
  doc.fillColor('#ffffff');
  doc.font('Helvetica-Bold').fontSize(11).text('MISSION', halfWidth + 60, 270);
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor('#dddddd').text('Sostenere i medici, e in particolare i chirurghi, durante le loro intense giornate di lavoro sotto forte pressione. Crediamo che chi si prende cura degli altri meriti a sua volta di essere sostenuto. Per questo diamo energia a chi salva vite, fornendo un supporto concreto nelle situazioni in cui la lucidità fa la differenza.', halfWidth + 60, 290, { width: 300, lineGap: 3 });
  
  doc.fillColor('#a78bfa').font('Helvetica-Bold').fontSize(10).text('SEZ. 01', width - 100, 520);
  
  // ==========================================
  // PAGINA 2: STRUTTURA DEL BRAND & FORMULA
  // ==========================================
  doc.addPage();
  
  // Lato Sinistro: Concept & Tono di Voce (Sfondo Bianco)
  doc.rect(0, 0, halfWidth, height).fill('#ffffff');
  drawCropMarks(doc, 20, 20);
  drawCropMarks(doc, halfWidth - 20, 20);
  drawCropMarks(doc, 20, height - 20);
  drawCropMarks(doc, halfWidth - 20, height - 20);
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(20).text('CONCEPT & FILOSOFIA', 50, 70);
  doc.moveTo(50, 95).lineTo(150, 95).lineWidth(1.5).strokeColor('#7c3aed').stroke();
  
  doc.font('Helvetica').fontSize(9.5).fillColor('#333333').text('Surgeon Energy nasce dalla necessità di fornire un supporto cognitivo all\'altezza delle sfide professionali più complesse. Non vendiamo energia generica; forniamo la precisione mentale e la concentrazione calcolata necessarie per l\'eccellenza clinica, eliminando l\'ansia e l\'effetto di "picco e crollo" tipico delle bevande energetiche tradizionali.', 50, 115, { width: 320, lineGap: 3.5 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(12).text('TONO DI VOCE', 50, 250);
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#7c3aed').text('Clinico, Autoritario, Calmo', 50, 270);
  doc.font('Helvetica').fontSize(9.5).fillColor('#333333').text('La comunicazione è basata sui fatti e sulla scienza, non sull\'hype pubblicitario. Parliamo con precisione e competenza da esperti della performance cognitiva per garantire lucidità controllata.', 50, 285, { width: 320, lineGap: 3 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(12).text('TARGET PRINCIPALE', 50, 390);
  doc.font('Helvetica').fontSize(9.5).fillColor('#333333').text('Chirurghi, medici ospedalieri, personale sanitario sotto turni intensi e studenti di medicina. Target di fascia alta (35-55 anni d\'età) abituato a ritmi e prestazioni sotto forte pressione e stress.', 50, 415, { width: 320, lineGap: 3 });
  
  doc.fillColor('#999999').font('Helvetica-Bold').fontSize(10).text('SEZ. 02', 50, 520);
  
  // Lato Destro: Gli Ingredienti & Plus Formula (Sfondo Bianco/Grigio Chiarissimo)
  doc.rect(halfWidth, 0, halfWidth, height).fill('#fafafa');
  drawCropMarks(doc, halfWidth + 20, 20);
  drawCropMarks(doc, width - 20, 20);
  drawCropMarks(doc, halfWidth + 20, height - 20);
  drawCropMarks(doc, width - 20, height - 20);
  
  doc.fillColor('#7c3aed');
  doc.font('Helvetica-Bold').fontSize(18).text('INGREDIENTI & SCIENZA', halfWidth + 60, 70, { characterSpacing: 1 });
  doc.moveTo(halfWidth + 60, 95).lineTo(halfWidth + 200, 95).lineWidth(1.5).strokeColor('#1a1a1a').stroke();
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('FORMULA BASE', halfWidth + 60, 115);
  doc.font('Helvetica').fontSize(9).fillColor('#555555').text('Caffeina Naturale (vigilanza) + L-Teanina (calma e focus, bilancia la caffeina eliminando ansia e nervosismo) + Ginseng ed Eleuterococco (adattogeni per resistere allo stress e fatica) + Vitamine B6/B9/B12, Magnesio e Potassio (funzione nervosa ed elettrolitica).', halfWidth + 60, 130, { width: 300, lineGap: 3 });
  
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('FORMULA SURGEON PLUS+', halfWidth + 60, 230);
  doc.font('Helvetica').fontSize(9).fillColor('#555555').text('In aggiunta alla versione base, una miscela potenziata per la salute cerebrale a lungo termine:', halfWidth + 60, 245, { width: 300 });
  
  const plusList = [
    'Citicolina (CDP-Colina): Supporta memoria, concentrazione e attenzione.',
    'N-Acetil L-Tirosina (NALT): Aumenta dopamina e focus sotto stanchezza.',
    'Lion’s Mane: Fungo medicinale che favorisce la neurogenesi cerebrale.',
    'Coenzima Q10: Supporta la produzione di energia cellulare (ATP) e riduce la fatica.'
  ];
  let plusY = 280;
  plusList.forEach(item => {
    doc.circle(halfWidth + 66, plusY + 4, 2).fill('#7c3aed');
    doc.fillColor('#333333').font('Helvetica').fontSize(8.5).text(item, halfWidth + 76, plusY, { width: 280, lineGap: 2 });
    plusY += 28;
  });
  
  // Posizionamento e Pricing
  doc.fillColor('#1a1a1a');
  doc.font('Helvetica-Bold').fontSize(11).text('PRICING & POSIZIONAMENTO', halfWidth + 60, 410);
  doc.font('Helvetica').fontSize(9).fillColor('#555555').text('Articolo di fascia alta venduto esclusivamente in Farmacia o online. Prezzo ancorato: Surgeon Base a 3,50€ e Surgeon Plus+ a 4,90€, con strategie bundle (pack da 6 a 17,99€ e 12 a 34,99€) mirate a favorire la fidelizzazione.', halfWidth + 60, 425, { width: 300, lineGap: 2.5 });
  
  doc.fillColor('#7c3aed').font('Helvetica-Bold').fontSize(10).text('FIN.', width - 100, 520);
  
  doc.end();
  
  console.log('PDF Surgeon Energy creato con successo in: ' + destPath);
}

function drawCropMarks(doc, x, y, color = '#a3a3a3') {
  doc.save();
  doc.lineWidth(0.5).strokeColor(color);
  doc.moveTo(x - 12, y).lineTo(x + 12, y).stroke();
  doc.moveTo(x, y - 12).lineTo(x, y + 12).stroke();
  doc.circle(x, y, 5).stroke();
  doc.restore();
}

createSurgeonPDF();
