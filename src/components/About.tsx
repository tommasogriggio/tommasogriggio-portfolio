/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { INTERESTS } from '../data';
import { DynamicIcon } from './Icons';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section
      id="chi-sono"
      className="apple-transition section-hidden py-24 px-6 border-t border-gray-100 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Colonna di Sinistra: Titolo */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#0052FF] uppercase">
              // La mia Visione
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Super preciso ma con un anima artistica.
            </h2>
            <div className="w-16 h-1 bg-[#0A0A0A]"></div>
          </div>

          {/* Colonna Centrale: Testo compatto */}
          <div className="lg:col-span-5 space-y-6 text-gray-600 text-base font-light leading-relaxed border-l border-gray-100 pl-6">
            <p>
              Ciao, mi chiamo <strong>Tommaso</strong> e credo fortemente che la creatività sia il motore di tutto: quando impari a riconoscere le tue idee e a svilupparle, può nascere davvero qualcosa di unico.
            </p>
            <p>
              Sono una persona molto precisa e altrettanto curiosa, amo darmi da fare per trovare sempre la soluzione migliore a ogni problema. Vedo la comunicazione come un grande puzzle: social media, advertising, fotografia e brand design sono i pezzi che unisco per raccontare un'unica storia capace di emozionare e generare valore.
            </p>
          </div>

          {/* Colonna di Destra: Card Fluttuante con Alone Blu */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="floating-card-container w-full max-w-[280px]">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 blue-glow shadow-sm group hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-[3/4] w-full bg-gray-50 rounded-xl overflow-hidden relative flex items-center justify-center border border-gray-100">
                  <img
                    src="/src/assets/images/regenerated_image_1783586184222.jpg"
                    alt="Tommaso Griggio"
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs font-mono uppercase text-[#0052FF] tracking-wider">
                    // Tommaso Griggio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Macro Interessi Grid with 3D Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {INTERESTS.map((interest, idx) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flip-card cursor-pointer"
            >
              <div className="flip-card-inner">
                {/* Front Card */}
                <div className="flip-card-front p-6 bg-[#fafafa] border border-gray-100 flex flex-col items-center justify-center group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#0052FF] mb-4 group-hover:bg-[#0052FF] group-hover:text-white transition-all duration-300">
                    <DynamicIcon name={interest.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-4">{interest.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-[#0052FF] transition-colors duration-300 flex items-center gap-1.5">
                    Girami <DynamicIcon name="RefreshCw" className="w-3 h-3" />
                  </span>
                </div>

                {/* Back Card */}
                <div className="flip-card-back p-6 bg-[#0052FF] text-white flex flex-col items-center justify-center border border-[#0052FF] shadow-lg shadow-blue-500/10">
                  <h3 className="text-base font-bold mb-2 text-white">{interest.title}</h3>
                  <p className="text-xs leading-relaxed font-light text-blue-50 text-center">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
