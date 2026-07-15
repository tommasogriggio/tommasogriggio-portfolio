/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Chi Sono', href: '#chi-sono' },
    { label: 'Progetti', href: '#progetti' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          id="logo-link"
          href="#home"
          className="text-lg font-bold tracking-tight text-[#0A0A0A] hover:text-[#0052FF] transition-all duration-300"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
        >
          Portfolio personale
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0052FF] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            id="talk-button-desktop"
            href="#contatti"
            className="hidden sm:inline-flex items-center justify-center px-5 h-10 text-sm font-semibold text-white bg-[#0A0A0A] rounded-full hover:bg-[#0052FF] transition-all duration-300"
          >
            Parliamo <ArrowRight className="ml-2 w-4 h-4" />
          </a>

          {/* Hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4 space-y-3 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-gray-600 hover:text-[#0052FF] font-medium text-base border-b border-gray-50 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                id="talk-button-mobile"
                href="#contatti"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 h-12 text-sm font-semibold text-white bg-[#0A0A0A] rounded-full hover:bg-[#0052FF] transition-all"
              >
                Parliamo <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
