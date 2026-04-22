import React from 'react';
import { Hammer, Heart, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Hammer className="w-8 h-8 text-primary-600" />,
      title: "Buatan Tangan Asli",
      description: "Setiap produk dikerjakan secara manual oleh pengrajin ahli dari berbagai daerah di Indonesia."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary-600" />,
      title: "Material Ramah Lingkungan",
      description: "Kami hanya menggunakan bahan baku alami yang berkelanjutan seperti rotan, bambu, dan tanah liat."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Melestarikan Budaya",
      description: "Membeli produk kami berarti Anda turut serta menjaga kelestarian seni tradisional Nusantara."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
      title: "Kualitas Premium",
      description: "Setiap detail melalui proses kontrol kualitas yang ketat untuk memastikan standar terbaik."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-[1px] bg-primary-600"></div>
              <span className="text-primary-700 font-bold uppercase tracking-[0.2em] text-xs">Filosofi Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Cerita Di Balik <br/>Setiap Karya Seni
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Berawal dari kecintaan terhadap seni tradisional, Kriya Nusantara didirikan untuk menjembatani pengrajin lokal dengan pasar modern. 
            </p>
            <p className="text-stone-500 leading-relaxed">
              Kami percaya bahwa setiap benda memiliki jiwa, dan kami ingin menghadirkan kehangatan tersebut ke dalam rumah Anda. Produk kami bukan sekadar dekorasi, melainkan warisan yang bercerita tentang ketekunan dan keindahan alam Indonesia.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop" 
                alt="Craftsmanship process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-50 rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col p-8 rounded-3xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-stone-100"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  className: "w-7 h-7 transition-colors duration-500" 
                })}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
