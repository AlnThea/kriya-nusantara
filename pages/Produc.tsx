import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { motion } from 'framer-motion';
import { Plus, ShoppingCart, Eye } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-[1px] bg-primary-600"></div>
              <span className="text-primary-700 font-bold uppercase tracking-[0.2em] text-xs">Kurasi Terpilih</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Koleksi Unggulan
            </h2>
            <p className="text-stone-600 text-lg">Pilihan karya terbaik yang dikurasi khusus untuk mempercantik setiap sudut hunian Anda.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 border-b-2 border-primary-600 text-primary-800 font-bold hover:text-primary-600 transition-colors uppercase tracking-widest text-sm">
            Lihat Semua Koleksi &rarr;
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-4 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="p-3 bg-white text-stone-900 rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-all transform hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                  <button className="p-3 bg-white text-stone-900 rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-all transform hover:scale-110">
                    <Eye size={20} />
                  </button>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 py-1 px-3 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-stone-900 uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">Harga</p>
                    <span className="font-serif font-bold text-xl text-primary-900">
                      {product.price}
                    </span>
                  </div>
                  <button className="p-2 text-stone-300 hover:text-primary-600 transition-colors">
                    <Plus size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 text-center md:hidden">
          <button className="px-10 py-4 bg-stone-900 text-white rounded-full font-bold shadow-xl">
             Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
