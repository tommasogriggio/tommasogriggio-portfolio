/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Interest } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fanzine',
    title: 'Fanzine Kobe Bryant',
    description: "Un'esplorazione editoriale visiva e asimmetrica che unisce narrazione, tipografia audace e layout di rottura dedicati alla leggenda del basket.",
    category: 'editorial',
    categoryLabel: 'Editoria',
    gradient: 'from-[#1A0B2E] to-[#634913] text-white',
    iconName: 'BookOpen',
    modalTitle: 'Fanzine Kobe Bryant',
    modalSubtitle: 'Editoria & Grafica - Progetto Editoriale',
    modalIcon: 'BookOpen',
    modalDesc: 'Un progetto di fanzine sperimentale che celebra l\'eredità visiva ed emotiva di Kobe Bryant attraverso l\'uso di layout asimmetrici, contrasti cromatici e griglie tipografiche moderne.',
    images: [
      'https://i.ibb.co/d0dPFcrV/Mockup-Kobe-Magazine.jpg',
      'https://i.ibb.co/M5kqV7ym/Mockuo-Magazine-Kobe-Retro.jpg'
    ],
    details: {
      goal: 'Progettare e impaginare una fanzine celebrativa cartacea e digitale dedicata a Kobe Bryant, catturando l\'essenza della sua "Mamba Mentality" attraverso una veste grafica d\'avanguardia, dinamica e d\'impatto visivo.',
      how: 'Il layout è stato sviluppato rifiutando le griglie tradizionali a favore di una composizione asimmetrica ed espressionista. Abbiamo integrato fotografie storiche ad altissimo contrasto con textures granulose, sovrapposizioni cromatiche viola/oro e scritte tipografiche spezzate e ruotate che guidano il flusso di lettura in modo ritmico ed emozionale.',
      tools: ['Adobe InDesign (Impaginazione e griglie fluide)', 'Adobe Photoshop (Trattamento immagini, texture grunge ed effetti halftone)', 'Adobe Illustrator (Grafica vettoriale, lettering custom)', 'Mockups professionali per la presentazione editoriale']
    }
  },
  {
    id: 'tesla',
    title: 'Brochure Tesla',
    description: 'Layout pulito, minimale, rigoroso e allineato alle esigenze di comunicazione tecnologica futuristica.',
    category: 'editorial',
    categoryLabel: 'Editoria',
    gradient: 'from-red-900 to-zinc-900 text-white',
    iconName: 'Scroll',
    modalTitle: 'Brochure Tesla',
    modalSubtitle: 'Editoria & Grafica',
    modalIcon: 'Scroll',
    modalDesc: 'Spazio pronto per il progetto Brochure Tesla. Qui potrai inserire il tuo layout impaginato e le grafiche dedicate a Tesla.'
  },
  {
    id: 'oakley',
    title: 'Brochure Oakley',
    description: 'Studio grafico focalizzato sulla performance sportiva e l\'impatto visivo dinamico.',
    category: 'editorial',
    categoryLabel: 'Editoria',
    gradient: 'from-stone-800 to-blue-950 text-white',
    iconName: 'Scroll',
    modalTitle: 'Brochure Oakley - Kylian Mbappé',
    modalSubtitle: 'Editoria & Grafica',
    modalIcon: 'Scroll',
    modalDesc: 'Spazio pronto per il progetto Brochure Oakley (Mbappé). Inserisci qui i tuoi mockup di prodotto, foto e la struttura editoriale creata.'
  },
  {
    id: 'menu',
    title: 'Creazione di un Menu',
    description: 'Progettazione grafica editoriale del menu, palette cromatica e layout tipografico coordinato.',
    category: 'editorial',
    categoryLabel: 'Grafica',
    gradient: 'from-emerald-800 to-amber-950 text-white',
    iconName: 'BookOpen',
    modalTitle: 'Menu Taqueria',
    modalSubtitle: 'Editoria & Grafica',
    modalIcon: 'BookOpen',
    modalDesc: 'Progetto grafico editoriale completo per il Menu Taqueria. Studio del layout, palette cromatica personalizzata e branding coordinato.',
    image: 'https://i.ibb.co/JRR8J9qX/LATAQUERIA-Castagna-Donadei-Griggio-Selmoune-2.png'
  },
  {
    id: 'personalbrand',
    title: 'Progetto Personal Brand',
    description: 'Studio completo di logo, palette cromatica e posizionamento d\'immagine per professionisti.',
    category: 'brand',
    categoryLabel: 'Visual & Brand',
    gradient: 'from-slate-900 to-blue-900 text-white',
    iconName: 'Fingerprint',
    modalTitle: 'Personal Brand: GlutenLess',
    modalSubtitle: 'Visual & Brand',
    modalIcon: 'Fingerprint',
    modalDesc: 'Spazio pronto per il progetto Personal Brand: GlutenLess. Qui inserirai lo studio del logo, la palette e le linee guida dell\'immagine coordinata.'
  },
  {
    id: 'rebranding',
    title: 'Strategia di Rebranding Aziendale',
    description: 'Analisi delle criticità di un brand e proposta strutturata di riposizionamento strategico.',
    category: 'brand',
    categoryLabel: 'Visual & Brand',
    gradient: 'from-zinc-800 to-black text-white',
    iconName: 'RefreshCw',
    modalTitle: 'Rebranding: RACCA Baci di Dama',
    modalSubtitle: 'Visual & Brand',
    modalIcon: 'RefreshCw',
    modalDesc: 'Spazio pronto per la strategia di Rebranding RACCA Baci di Dama. Pronto per accogliere l\'analisi del brand e la nuova veste grafica del packaging.'
  },
  {
    id: 'surgeon',
    title: 'Brand Identity Pro',
    description: 'Sviluppo completo dell\'ecosistema d\'immagine, naming, e linee guida per presentazioni istituzionali.',
    category: 'brand',
    categoryLabel: 'Visual & Brand',
    gradient: 'from-purple-900 to-violet-950 text-white',
    iconName: 'Fingerprint',
    modalTitle: 'Surgeon Energy',
    modalSubtitle: 'Visual & Brand',
    modalIcon: 'Fingerprint',
    modalDesc: 'Spazio pronto per la presentazione di Surgeon Energy. Qui potrai inserire le slide della presentazione o i materiali visivi del brand.'
  },
  {
    id: 'caroselli',
    title: 'Caroselli Instagram',
    description: 'Format grafici a scorrimento continuo e copywriting ingaggiante studiati per i canali social.',
    category: 'social',
    categoryLabel: 'Social & Video',
    gradient: 'from-blue-600 to-indigo-900 text-white',
    iconName: 'Images',
    modalTitle: 'Carosello 64 BARS RedBull',
    modalSubtitle: 'Social & Video',
    modalIcon: 'Images',
    modalDesc: 'Spazio pronto per il Carosello 64 BARS RedBull. Inserisci qui i file dei singoli quadrati del carosello Instagram.'
  },
  {
    id: 'video',
    title: 'Video Verticali (TikTok & Reels)',
    description: 'Scrittura dello script, shooting e montaggio dal ritmo serrato per catturare l\'attenzione nei primi secondi.',
    category: 'social',
    categoryLabel: 'Social & Video',
    gradient: 'from-rose-500 to-[#0052FF] text-white',
    iconName: 'Video',
    modalTitle: 'Video Origami MacBook',
    modalSubtitle: 'Social & Video',
    modalIcon: 'Video',
    modalDesc: 'Spazio pronto per i video verticali, incluso il lavoro Origami MacBook. Potrai inserire direttamente il player video o i link di anteprima.'
  }
];

export const INTERESTS: Interest[] = [
  {
    id: '1',
    title: 'Adv & Strategy',
    description: 'Studio e sperimento la creazione di inserzioni sui canali social. Dalla scrittura di copy accattivanti fino alla comprensione delle dinamiche di sponsorizzazione per colpire il pubblico giusto.',
    iconName: 'Megaphone'
  },
  {
    id: '2',
    title: 'Social Media',
    description: 'Ideazione e programmazione di piani editoriali per Instagram, TikTok e i principali canali. Mi piace connettere i brand con le community attraverso contenuti autentici e in linea con i trend del momento.',
    iconName: 'Hash'
  },
  {
    id: '3',
    title: 'Brand Identity',
    description: 'Cura dell\'estetica visiva. Mi occupo della progettazione di elementi grafici, scelta dei colori e layout che aiutino un brand a presentarsi online in modo coerente, pulito e moderno.',
    iconName: 'Palette'
  },
  {
    id: '4',
    title: 'Content & Photo',
    description: 'Progetto e sviluppo contenuti pensati appositamente per lo smartphone. Che si tratti di montare un video verticale o di strutturare un carosello, il mio obiettivo è creare una comunicazione visiva fresca, pulita e capace di farsi notare.',
    iconName: 'Camera'
  }
];
