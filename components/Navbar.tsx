import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="bg-primary-700 p-2 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary-700/20">
                <ShoppingBag size={22} strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-stone-900 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-black text-stone-900 tracking-tight leading-none">
                Kriya
              </span>
              <span className="text-[10px] font-bold text-primary-700 uppercase tracking-[0.3em] leading-none mt-1">
                Nusantara
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative font-bold text-sm uppercase tracking-widest transition-colors hover:text-primary-700 group ${
                  scrolled ? 'text-stone-600' : 'text-stone-800'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className={`hover:text-primary-700 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}>
              <Search size={20} />
            </button>
            <button className={`hover:text-primary-700 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}>
              <User size={20} />
            </button>
            <div className="w-px h-6 bg-stone-200 mx-2"></div>
            <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary-700 transition-all shadow-md hover:shadow-primary-700/20 active:scale-95">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button className="text-stone-800 p-2">
                <Search size={22} />
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-10 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-lg font-serif font-bold text-stone-900 border-b border-stone-50 hover:text-primary-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6">
                <button className="w-full bg-primary-700 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary-700/20">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
