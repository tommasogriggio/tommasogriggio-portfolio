/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Download, Linkedin, Instagram, ExternalLink } from 'lucide-react';

export default function Contact() {
  const userEmail = 'tommi.griggio@gmail.com';

  return (
    <section
      id="contatti"
      className="py-24 px-6 bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      {/* Background radial art */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#0052FF] rounded-full blur-art pointer-events-none opacity-30"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="text-xs font-bold tracking-widest text-[#0052FF] uppercase">
          // Costruiamo il Futuro
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
          Cerchi una mente creativa? Facciamo due chiacchiere
        </h2>

        <div className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light space-y-4">
          <p>
            Ogni progetto nasce da una curiosità: quella di capire, creare e migliorare.
          </p>
          <p>
            Qui puoi trovare il mio percorso, ma la parte più interessante sono le idee che devono ancora nascere. Se pensi che possiamo creare qualcosa insieme, scrivimi!
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tommasogriggio44@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 text-base font-semibold text-[#0A0A0A] bg-white rounded-full hover:bg-[#0052FF] hover:text-white transition-all duration-300"
          >
            <Mail className="mr-2 w-5 h-5" /> Scrivimi via Email
          </a>
          <a
            href="https://drive.google.com/file/d/1CtI3fXABD5SK-2fe117N0-HS1kv2U9H6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 text-base font-semibold text-white bg-transparent border border-gray-700 rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            <Download className="mr-2 w-4 h-4" /> Scarica il mio CV (PDF)
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 pt-12 text-xl text-gray-400">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            title="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            title="Behance / GitHub"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>

        <div className="text-[10px] font-mono text-gray-600 pt-16">
          &copy; 2026 — Costruito con precisione e un pizzico di follia creativa. Tutti i diritti riservati.
        </div>
      </div>
    </section>
  );
}
