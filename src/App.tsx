/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import ProjectCarousel from './components/ProjectCarousel';
import { PROJECTS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from './types';
import { X } from 'lucide-react';
import { DynamicIcon } from './components/Icons';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'brand' | 'social' | 'editorial'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBtn = document.getElementById("trigger-chi-sono");
      const chiSonoSection = document.getElementById("chi-sono");
      if (!chiSonoSection) return;

      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionTop = chiSonoSection.offsetTop;

      // 1. Gestione Zoom del Bottone
      if (triggerBtn && scrollPos < sectionTop) {
        const scaleValue = 1 + (scrollPos / 400); // Lo zoom aumenta man mano che scendi
        if (scaleValue <= 1.4) {
          triggerBtn.style.transform = `scale(${scaleValue})`;
        }
      }

      // 2. Gestione Zoom e Transizione fluidissima per la sezione Chi Sono
      if (scrollPos + (windowHeight * 0.75) >= sectionTop) {
        chiSonoSection.classList.remove("section-hidden");
        chiSonoSection.classList.add("section-visible");
      } else {
        chiSonoSection.classList.add("section-hidden");
        chiSonoSection.classList.remove("section-visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filters = [
    { id: 'all', label: 'Tutti' },
    { id: 'brand', label: 'Visual & Brand' },
    { id: 'social', label: 'Social & Video' },
    { id: 'editorial', label: 'Editoria & Grafica' },
  ] as const;

  const filteredProjects = PROJECTS.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <div className="bg-[#fafafa] text-[#0A0A0A] min-h-screen antialiased selection:bg-[#0052FF] selection:text-white relative bg-grid-pattern font-sans pb-0">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0052FF] rounded-full blur-art pointer-events-none"></div>
      <div className="absolute top-[60vh] right-10 w-96 h-96 bg-blue-400 rounded-full blur-art pointer-events-none"></div>

      {/* Persistent Navigation Header */}
      <Header />

      {/* Hero Presentation Section */}
      <Hero />

      {/* Bio / Skills / Philosophy Section */}
      <About />

      {/* Interactive Portfolio Section */}
      <section id="progetti" className="py-24 px-6 max-w-6xl mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-widest text-[#0052FF] uppercase">
              // I Miei Progetti
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Cosa prende forma dalle mie idee
            </h2>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white border-transparent shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Contact & Footer Section */}
      <Contact />

      {/* Dynamic Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="kobeModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              id="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D0F18]/95 text-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl border border-white/10 backdrop-blur-xl"
            >
              {/* Close Button */}
              <button
                id="close-kobe-btn"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full cursor-pointer transition-all duration-300 z-20 active:scale-95"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-wider block">
                    // {selectedProject.modalSubtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold mt-1 text-white tracking-tight">
                    {selectedProject.modalTitle}
                  </h3>
                </div>

                {/* Media Section: Carousel, Single Image, or Placeholder */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <ProjectCarousel
                    images={selectedProject.images}
                    title={selectedProject.modalTitle}
                  />
                ) : selectedProject.image ? (
                  <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg bg-black/40 flex justify-center items-center">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.modalTitle}
                      className="w-full h-auto max-h-[400px] object-contain select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  /* Dashboard-like info box */
                  <div className="border border-dashed border-gray-800 rounded-xl p-8 text-center flex flex-col items-center justify-center bg-black/20">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-[#0052FF] mb-4">
                      <DynamicIcon name={selectedProject.modalIcon as any} className="w-7 h-7" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-md font-light">
                      <strong>{selectedProject.modalTitle}</strong>
                      <br />
                      {selectedProject.modalDesc}
                    </p>
                  </div>
                )}

                {/* Description and Details Section */}
                {selectedProject.details ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-left">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[#0052FF] mb-2 font-mono">
                          // Obiettivo del lavoro
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                          {selectedProject.details.goal}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[#0052FF] mb-2 font-mono">
                          // Come è stato effettuato
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                          {selectedProject.details.how}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-[#0052FF] font-mono">
                        // Strumenti usati
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-300 transition-all hover:bg-[#0052FF]/10 hover:border-[#0052FF]/30 hover:text-white"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  (selectedProject.image || selectedProject.modalDesc) && (
                    <div className="pt-4 text-left border-t border-white/10">
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-[#0052FF] mb-2 font-mono">
                        // Descrizione
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed font-light">
                        {selectedProject.modalDesc}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
