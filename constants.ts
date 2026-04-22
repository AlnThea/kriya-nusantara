import { NavItem, Product, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Koleksi', href: '#products' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Vas Keramik Terakota',
    category: 'Dekorasi Rumah',
    price: 'Rp 450.000',
    image: 'https://picsum.photos/400/500?random=1',
    description: 'Vas bunga buatan tangan dengan sentuhan akhir tanah liat alami yang elegan.'
  },
  {
    id: 2,
    name: 'Kursi Rotan Minimalis',
    category: 'Furniture',
    price: 'Rp 1.250.000',
    image: 'https://picsum.photos/400/500?random=2',
    description: 'Kursi santai dari rotan pilihan, menggabungkan kenyamanan dan estetika modern.'
  },
  {
    id: 3,
    name: 'Kain Tenun Ikat Sumba',
    category: 'Tekstil',
    price: 'Rp 2.100.000',
    image: 'https://picsum.photos/400/500?random=3',
    description: 'Kain tenun asli dengan motif tradisional, dibuat dengan pewarna alami.'
  },
  {
    id: 4,
    name: 'Lampu Gantung Bambu',
    category: 'Pencahayaan',
    price: 'Rp 675.000',
    image: 'https://picsum.photos/400/500?random=4',
    description: 'Kap lampu anyaman bambu yang menciptakan suasana hangat di ruangan Anda.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Siti Rahmawati',
    role: 'Interior Designer',
    comment: 'Kualitas produk Kriya Nusantara luar biasa. Detail pengerjaannya sangat rapi dan memberikan sentuhan etnik yang mewah pada proyek desain saya.',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Kolektor Seni',
    comment: 'Saya sangat menghargai upaya pelestarian budaya melalui produk modern. Vas terakota yang saya beli menjadi pusat perhatian di ruang tamu.',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 3,
    name: 'Andi Pratama',
    role: 'Pemilik Cafe',
    comment: 'Lampu gantung bambu dari sini mengubah atmosfer cafe saya menjadi sangat cozy. Pengiriman cepat dan packaging aman.',
    avatar: 'https://picsum.photos/100/100?random=12'
  }
];
