# Kriya Nusantara

Landing page UMKM kerajinan tangan berbasis `React + Vite + TypeScript` dengan section profil brand, katalog produk, testimoni, kontak, dan widget chat berbasis Gemini.

## Stack

- `React 19`
- `Vite`
- `TypeScript`
- `Framer Motion`
- `Lucide React`
- `@google/genai`

## Menjalankan Project

Prasyarat:

- `Node.js` 20+ disarankan
- `npm`

Langkah:

1. Install dependency

```bash
npm install
```

2. Isi file `.env.local`

```env
GEMINI_API_KEY=your_api_key_here
```

3. Jalankan mode development

```bash
npm run dev
```

Project akan berjalan di `http://localhost:3000`.

## Build Production

```bash
npm run build
```

Untuk preview hasil build:

```bash
npm run preview
```

## Struktur Singkat

- `components/` komponen layout dan widget
- `pages/` section utama landing page
- `services/` integrasi Gemini
- `constants.ts` data navigasi, produk, dan testimoni
- `types.ts` tipe data aplikasi

## Catatan Penting

- Saat ini `GEMINI_API_KEY` masih diakses dari frontend melalui konfigurasi Vite.
- Setup ini cocok untuk demo atau pengembangan lokal, tetapi belum aman untuk production.
- Untuk production, sebaiknya panggilan ke Gemini dipindahkan ke backend atau API proxy agar API key tidak terekspos di browser.

## Script

- `npm run dev` menjalankan server development
- `npm run build` membuat bundle production
- `npm run preview` menjalankan preview hasil build
