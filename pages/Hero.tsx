import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-widest uppercase mb-8 border border-primary-200">
              <Star size={14} className="fill-primary-600" />
              100% Karya Anak Bangsa
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-8xl font-serif font-bold text-stone-900 leading-[1.1] mb-8">
              Lestarikan <br/>
              <span className="text-primary-700 italic relative">
                Warisan Budaya
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 7C20 7 30 1 50 1C70 1 80 7 100 7" stroke="#C2410C" strokeWidth="2" fill="none" />
                </svg>
              </span>
              <br/> Modern
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
              Kriya Nusantara menghadirkan koleksi kerajinan tangan eksklusif yang memadukan estetika tradisional dengan sentuhan desain kontemporer.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#products"
                className="inline-flex justify-center items-center px-10 py-4.5 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all shadow-lg hover:shadow-stone-900/20 hover:-translate-y-1 active:scale-95"
              >
                Jelajahi Koleksi
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#about"
                className="inline-flex justify-center items-center px-10 py-4.5 bg-white border-2 border-stone-200 text-stone-800 font-semibold rounded-full hover:bg-stone-50 hover:border-stone-400 transition-all active:scale-95"
              >
                Kisah Kami
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-16 flex items-center gap-12">
              <div className="group cursor-default">
                <p className="text-4xl font-serif font-bold text-stone-900 group-hover:text-primary-700 transition-colors">1.2k+</p>
                <p className="text-xs text-stone-400 uppercase tracking-widest mt-2 font-bold">Produk Terjual</p>
              </div>
              <div className="w-px h-12 bg-stone-200"></div>
              <div className="group cursor-default">
                <p className="text-4xl font-serif font-bold text-stone-900 group-hover:text-primary-700 transition-colors">4.9</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-primary-500 text-primary-500" />
                  ))}
                  <p className="text-xs text-stone-400 uppercase tracking-widest ml-1 font-bold">Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1590422443890-281919251329?q=80&w=800&auto=format&fit=crop" 
                alt="Indonesian Craftsmanship" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20"
              >
                <p className="font-serif text-xl italic text-white leading-relaxed">
                  "Seni adalah jembatan antara masa lalu yang agung dan masa depan yang indah."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-px bg-primary-400"></div>
                  <p className="text-white/70 text-sm uppercase tracking-widest font-bold">Maestro Kriya</p>
                </div>
              </motion.div>
            </div>
            
            {/* Abstract shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-stone-400/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
