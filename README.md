Website portofolio modern yang dibuat dengan React, TypeScript, dan Tailwind CSS.

## Fitur nya:
- **Loading Screen** 
- **Dark Mode** 
- **Responsive Design** 
- **Animasi Halus** 
- **Multi Halaman**:
  - Halaman beranda dengan animasi
  - Halaman profil dengan informasi pendidikan dan pengalaman
  - Halaman social media dengan link ke berbagai platform
- **Navigasi Modern**

## Teknologi yang Digunakan
- **React 18** - Library JavaScript untuk UI
- **TypeScript** - JavaScript dengan type safety
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool yang cepat
- **Lucide React** - Icon library modern

## Cara Menjalankan atau Cara Run:

## 1. Persiapan
Pastikan Anda sudah menginstall:
- **Node.js** (versi 16 atau lebih baru)
- **npm** atau **yarn**

## 2. Install Dependencies
# Install semua package yang diperlukan
npm install atau bisa yarn install

## 3. Menjalankan Development Server
# Jalankan server development
npm run dev

# Atau jika menggunakan yarn
yarn dev

## 4. Build untuk Production

# Build untuk production
npm run build

# Preview build results
npm run preview

## 📁 Struktur website

```
src/
├── components/             # Komponen React
│   ├── LoadingScreen.tsx   # Screen loading dengan animasi
│   ├── Navigation.tsx      # Komponen navigasi
│   ├── HomePage.tsx        # Halaman beranda
│   ├── ProfilePage.tsx     # Halaman profil
│   └── SocialPage.tsx      # Halaman social media
├── pages/
│   └── Index.tsx          # Halaman utama yang mengatur routing
├── App.tsx               # Komponen utama aplikasi
├── main.tsx             # Entry point aplikasi
└── index.css            # Style global
```

### Mengubah Informasi Personal

1. **Nama dan Title**: Edit file `src/components/HomePage.tsx`
2. **Informasi Profil**: Edit file `src/components/ProfilePage.tsx`
3. **Social Media Links**: Edit file `src/components/SocialPage.tsx`

### Mengubah Warna dan Style

- Edit file `tailwind.config.ts` untuk mengubah color palette
- Edit file `src/index.css` untuk custom CSS

### Menambah Skill/Keahlian

Edit array `skills` di file `src/components/ProfilePage.tsx`:

```typescript
const skills = [
  'JavaScript', 'TypeScript', 'React', 
  //Tambahkan skill baru di sini
  'Skill Baru Anda'
];
```

## Deploy ke Hosting
### Cara 1: Vercel (Gratis & Mudah)

1. Push kode ke GitHub repository
2. Kunjungi [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Deploy otomatis!

### Cara ke 2: Netlify

1. Build project: `npm run build`
2. Upload folder `dist` ke [netlify.com](https://netlify.com)
3. Website langsung online!

### Cara ke 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Tambahkan script di `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build dan deploy: `npm run build && npm run deploy`

### Option 4: Hosting Manual

1. Build project: `npm run build`
2. Upload semua file di folder `dist` ke web hosting Anda
3. Pastikan web server support SPA (Single Page Application)

## Tips :
### Menggunakan VS Code

Install ekstensi yang direkomendasikan:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Prettier - Code formatter**

### Git Workflow

```bash
# Clone repository
git clone <repository-url>

# Buat branch baru untuk fitur
git checkout -b feature/nama-fitur

# Commit perubahan
git add .
git commit -m "Menambahkan fitur baru"

# Push ke repository
git push origin feature/nama-fitur
```

## Troubleshooting

### Error "Module not found"
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

### Error saat build
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check linting
npm run lint
```

### Website tidak responsive
- Pastikan menggunakan class Tailwind yang responsive (`md:`, `lg:`, dll)
- Test di berbagai ukuran layar