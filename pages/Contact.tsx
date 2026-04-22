import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact" 
      className="py-32 bg-stone-50 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-serif font-bold text-stone-900 mb-8">
          Hubungi Kami
        </h2>
        <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
          Kami senang mendengar dari Anda! Jangan ragu untuk menghubungi tim Kriya Nusantara untuk pertanyaan, pemesanan kustom, atau sekadar menyapa.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-stone-100"
          >
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-6">
              <Mail size={30} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Email</h3>
            <p className="text-stone-600">halo@kriyanusantara.id</p>
            <a href="mailto:halo@kriyanusantara.id" className="mt-4 text-primary-600 hover:text-primary-800 font-semibold">Kirim Email &rarr;</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-stone-100"
          >
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-6">
              <Phone size={30} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Telepon</h3>
            <p className="text-stone-600">+62 812 3456 7890</p>
            <a href="tel:+6281234567890" className="mt-4 text-primary-600 hover:text-primary-800 font-semibold">Hubungi Kami &rarr;</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-stone-100"
          >
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-6">
              <MapPin size={30} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Alamat</h3>
            <p className="text-stone-600">Jl. Malioboro No. 123, Yogyakarta</p>
            <a href="#" className="mt-4 text-primary-600 hover:text-primary-800 font-semibold">Lihat Peta &rarr;</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
