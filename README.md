# 🏔️ Hymalya Salt - Product & Wholesale Web Experience

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrintaDeb%2Fhumlya-salt-product-web)

A modern, high-performance web experience showcasing pure Himalayan salt products, culinary usage, wholesale opportunities, and brand heritage.

---

## 🌟 Highlights & Features

- **Multi-page Architecture**:
  - `index.html`: Main landing experience with interactive product features, certifications, and reviews.
  - `product.html`: Detailed salt usage guides, grain varieties, culinary recommendations, and certifications.
  - `about.html`: Heritage of Himalayan salt, brand story, vision, and mission.
  - `partner.html`: Wholesale and B2B partnership opportunities, expected volumes, and container logistics.
  - `contact.html`: Direct inquiry form for retail, foodservice, and distribution partners.
- **Fluid Visuals & Interactions**:
  - GSAP animations and SplitText typography motion.
  - Lenis ultra-smooth scrolling.
  - Responsive layout optimized for mobile, tablet, and desktop displays.
  - Modern media optimization (AVIF, WebM, SVG).

---

## 🚀 Live Deployment on Vercel

This site is optimized for **Vercel** with global edge CDN distribution, asset caching, and automated continuous deployment.

### Option 1: 1-Click Deploy via Vercel Dashboard (Recommended)
1. Click the badge above or navigate to:
   **[https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrintaDeb%2Fhumlya-salt-product-web](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrintaDeb%2Fhumlya-salt-product-web)**
2. Select your Vercel account or team and click **Deploy**.
3. Vercel will automatically detect the static configuration from `vercel.json` and deploy globally in seconds.
4. Any future `git push` to `main` will automatically trigger a new deployment.

### Option 2: Deploy via Vercel CLI
```bash
# 1. Login to Vercel (first time only)
vercel login

# 2. Deploy directly to production
vercel --prod
```

---

## 💻 Running Locally

### Option 1: Using Python
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

---

## 📁 Project Structure

```
humlya-salt-product-web/
├── index.html            # Landing / Homepage
├── product.html          # Product Showcase & Usage
├── about.html            # Brand Heritage & Story
├── partner.html          # Wholesale / B2B Page
├── contact.html          # Contact Page
├── vercel.json           # Vercel Deployment Configuration
├── .gitignore            # Git ignore rules
└── assets/
    ├── css/              # Stylesheets & animations
    ├── js/               # Scripts (GSAP, Lenis, interactions)
    ├── fonts/            # Web fonts
    ├── images/           # High-resolution media assets
    └── videos/           # Brand video loops
```

---

© 2025 Hymalya LLC. All rights reserved. Designed & Developed by Shreyam.
