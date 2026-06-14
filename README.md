# ZyuuBotzPage

Website one-page modern untuk layanan WhatsApp Bot "ZyuuBotz" yang dibangun menggunakan **Vite + React 18** dengan desain premium terinspirasi dari Arisu Soft.

## 🚀 Tech Stack

- **Build Tool:** Vite 8.x
- **Framework:** React 18.x
- **Styling:** CSS Modules dengan CSS Variables
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **State Management:** Context API + Custom Hooks

## 📁 Struktur Project

```
zyuubotz-landing-page/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   ├── useSmoothScroll.js
│   │   └── useActiveSection.js
│   ├── data/
│   │   ├── features.js
│   │   ├── pricing.js
│   │   ├── testimonials.js
│   │   └── faq.js
│   ├── styles/
│   │   ├── index.css (global styles)
│   │   └── *.module.css (component styles)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Fitur Utama

### 1. **Dark/Light Mode Toggle**
- Default dark mode dengan localStorage persistence
- Smooth transition antar tema
- Icon animation saat toggle

### 2. **Smooth Scroll Navigation**
- Sticky navbar dengan active section highlight
- Smooth scroll ke section dengan offset untuk navbar
- Mobile hamburger menu dengan animasi

### 3. **Pricing Tab Switcher**
- 3 kategori: Premium (Pribadi), Sewa Bot Grup, Jadibot
- Animated tab transitions dengan Framer Motion
- WhatsApp CTA links dengan pre-filled messages

### 4. **FAQ Accordion**
- Single-open accordion dengan smooth height transitions
- Icon rotation animation (Plus to X)
- Keyboard accessible

### 5. **Scroll Reveal Animations**
- Intersection Observer untuk detect viewport
- Staggered animations pada grid cards
- Trigger only once per element

### 6. **Responsive Design**
- Mobile-first approach
- Breakpoints: < 768px (mobile), 768-1024px (tablet), > 1024px (desktop)
- Grid layouts yang adaptive

### 7. **Back to Top Button**
- Floating button yang muncul setelah scroll 300px
- Smooth scroll ke atas dengan animasi

### 8. **Glassmorphism Effects**
- Backdrop blur pada cards
- Subtle borders dengan accent color
- Hover effects dengan shadow glow

## 🛠️ Development

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### Build

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

Output build akan ada di folder `dist/`

## 📝 Kustomisasi

### Update Content

**Features:**
Edit `src/data/features.js`

**Pricing:**
Edit `src/data/pricing.js`

**Testimonials:**
Edit `src/data/testimonials.js`

**FAQ:**
Edit `src/data/faq.js`

### Update Theme Colors

Edit CSS variables di `src/styles/index.css`:

```css
:root[data-theme="dark"] {
  --accent: #F53838; /* Primary color */
  --accent-hover: #ff6b6b; /* Hover color */
}
```

### Update Contact Links

Ganti nomor WhatsApp dan links di:
- `src/components/Navbar.jsx` (CTA button)
- `src/components/Hero.jsx` (CTA buttons)
- `src/components/Pricing.jsx` (WhatsApp links)
- `src/components/CTA.jsx` (CTA button)
- `src/components/Footer.jsx` (Contact links)

Nomor saat ini: **6281249368080**

## 🌐 Deployment

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance

Build output:
- Total bundle size: ~400 KB
- Gzipped: ~120 KB
- Code-split chunks untuk optimal loading
- Lazy loading untuk images

## 📄 License

© 2025 ZyuuBotz — All rights reserved.

## 👨‍💻 Developer

Developed by ZyuuDev

- WhatsApp: [6281249368080](https://wa.me/6281249368080)
- TikTok: [@zyuudevv](https://tiktok.com/@zyuudevv)
- Channel: [WhatsApp Channel](https://whatsapp.com/channel/0029Va9P8Na0G0XrAsdx020M)
