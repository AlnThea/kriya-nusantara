import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 pt-24 pb-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-primary-700 p-2 rounded-xl text-white">
                <ShoppingBag size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-black tracking-tight leading-none">
                  Kriya
                </span>
                <span className="text-[10px] font-bold text-primary-700 uppercase tracking-[0.3em] leading-none mt-1">
                  Nusantara
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Mewarisi keindahan kerajinan tangan Nusantara untuk menghiasi gaya hidup modern Anda dengan kualitas premium yang tak lekang oleh waktu.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigasi</h4>
            <ul className="space-y-4 text-sm">
              {['Beranda', 'Tentang Kami', 'Koleksi', 'Testimoni'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="flex items-center gap-2 hover:text-primary-500 transition-colors group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Hubungi Kami</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-stone-900 rounded-lg text-primary-500 border border-stone-800">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">Jl. Malioboro No. 123,<br/>Yogyakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-stone-900 rounded-lg text-primary-500 border border-stone-800">
                  <Phone size={16} />
                </div>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-stone-900 rounded-lg text-primary-500 border border-stone-800">
                  <Mail size={16} />
                </div>
                <span>halo@kriyanusantara.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-sm text-stone-400 mb-6 leading-relaxed">Dapatkan pembaruan koleksi terbaru dan promo eksklusif.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="w-full px-5 py-3.5 bg-stone-900 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-primary-500/50 transition-all"
              />
              <button className="w-full py-3.5 bg-primary-700 text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-700/10 active:scale-95">
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">
          <p>&copy; 2024 Kriya Nusantara. Seni Tradisi Modern.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
