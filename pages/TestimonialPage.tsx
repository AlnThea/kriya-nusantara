import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const TestimonialPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="testimonials" className="py-32 bg-stone-900 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-primary-500"></div>
            <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs">Testimoni</span>
            <div className="w-8 h-[1px] bg-primary-500"></div>
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Kata Mereka
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-400 max-w-lg mx-auto"
          >
            Kepuasan pelanggan adalah prioritas utama kami dalam setiap karya yang dihasilkan.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={t.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-stone-800/50 backdrop-blur-sm p-10 rounded-3xl border border-stone-700 relative group transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 text-primary-500/20 w-12 h-12 group-hover:text-primary-500/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-primary-500 text-primary-500" />
                ))}
              </div>

              <p className="text-stone-300 italic mb-10 relative z-10 leading-relaxed text-lg">
                "{t.comment}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-stone-700/50">
                <div className="relative">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-600 rounded-full border-2 border-stone-800"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-primary-500 text-xs font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialPage;
