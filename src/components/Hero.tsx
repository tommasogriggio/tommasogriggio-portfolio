/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero py-24 px-6 md:px-12 bg-white relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center"
    >
      {/* Sfondo geometrico + Aloni di luce colorata (Blu e Viola Artistico) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0052FF 1px, transparent 1px), linear-gradient(90deg, #0052FF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#0052FF] rounded-full blur-[120px] pointer-events-none opacity-10"></div>
      <div className="absolute left-1/3 bottom-10 w-80 h-80 bg-purple-500 rounded-full blur-[130px] pointer-events-none opacity-10"></div>
 
       <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
         <div className="space-y-6">
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full"
           >
             <span className="w-2 h-2 bg-[#0052FF] rounded-full animate-pulse"></span>
             <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
               STUDENTE DI DIGITAL MARKETING
             </span>
           </motion.div>
 
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.15 }}
             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] leading-[1.1] max-w-3xl mx-auto"
           >
             Benvenuti nel mio
             <br />
             <span className="text-[#0052FF]">spazio creativo.</span>
           </motion.h1>
 
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
           >
             È qui che raccolgo i miei esperimenti visivi, i progetti editoriali e le mie idee.
           </motion.p>
 
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.45 }}
             className="pt-4 flex flex-wrap gap-4 justify-center"
           >
             <a
               href="#progetti"
               className="inline-flex items-center justify-center px-6 h-12 text-base font-semibold text-white bg-[#0052FF] rounded-full hover:bg-[#0A0A0A] shadow-lg shadow-[#0052FF]/10 transition-all duration-300"
             >
               Esplora i miei lavori
             </a>
             <a
               id="trigger-chi-sono"
               href="#chi-sono"
               className="btn-zoom inline-flex items-center justify-center px-6 h-12 text-base font-semibold text-gray-700 bg-transparent border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
             >
               Scopri chi sono
             </a>
           </motion.div>
         </div>
       </div>
    </section>
  );
}
