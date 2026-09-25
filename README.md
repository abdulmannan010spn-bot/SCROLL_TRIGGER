<div align="center">

# 🌀 Smooth Scroll & Parallax Grid Animation

A modern, high-performance scroll experience built with React, Tailwind CSS, Lenis, and GSAP ScrollTrigger. The application renders an 8-column distributed grid where items animate into view and drift horizontally as you scroll, anchored by a fixed typographic overlay.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

This project is a scroll-driven visual showcase: an 8×20 grid of images scattered organically across the viewport, revealed with scale animations and nudged horizontally as the user scrolls. Scroll is smoothed with Lenis for a buttery, inertial feel, and all animation timelines are scrubbed directly to scroll position via GSAP ScrollTrigger — so motion stays perfectly in sync no matter how fast or slow you scroll.

## ✨ Highlights

- 🌊 **Inertial Momentum Scrolling** — powered by [Lenis](https://github.com/darkroomengineering/lenis) for buttery-smooth, cross-device scroll dampening
- 🎬 **Scrub-Driven Timelines** — GSAP ScrollTrigger synchronizes image reveal and dynamic lateral drift directly with scroll progress
- 🧩 **Dynamic CSS Grid Distribution** — explicit grid placement coordinates scatter elements organically across an 8×20 layout
- ⚡ **Hardware-Accelerated Transforms** — uses `scaleX` reveals and percentage-based transforms (`xPercent`) to avoid layout thrashing and maintain 60+ FPS
- 🎨 **Tailwind CSS v4 Integration** — minimalist, utility-first styling with modern text-stroke styling rules
- 🖼️ **Fixed Typographic Overlay** — a pinned title/heading layer anchors the composition as the grid scrolls beneath it

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/scroll-parallax-grid.git

# Navigate into the project directory
cd scroll-parallax-grid

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The optimized build output will be in the `dist/` folder.

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Grid.jsx           # 8x20 image grid with explicit placement
│   │   ├── Overlay.jsx          # Fixed typographic overlay
│   │   └── ...
│   ├── hooks/
│   │   └── useLenis.js          # Lenis smooth-scroll setup
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                # Tailwind entry point
│   └── main.jsx                  # App entry point + GSAP plugin registration
├── index.html
├── package.json
└── README.md
```

> Adjust this structure to match your actual folder layout.

## 🧠 How It Works

1. **Smooth scroll setup:** Lenis intercepts native scroll events and applies inertial easing, then syncs its virtual scroll position with GSAP's ticker so ScrollTrigger stays perfectly aligned.
2. **Grid layout:** Grid items are placed using explicit CSS Grid coordinates (`grid-column` / `grid-row`) across an 8-column, 20-row track, creating an organic, non-uniform distribution rather than a strict tile layout.
3. **Reveal animation:** Each grid item starts at `scaleX: 0` and animates to full scale as it enters the viewport, driven by a ScrollTrigger instance scrubbed to scroll progress.
4. **Lateral drift:** As the user scrolls, items are nudged horizontally using `xPercent` transforms — GPU-accelerated and layout-thrash-free — for a subtle parallax effect.
5. **Fixed overlay:** A pinned text layer sits above the grid via `position: fixed` (or a GSAP-pinned ScrollTrigger), anchoring the page's typographic identity while the grid animates beneath it.

## 🛠️ Tech Stack

| Layer                 | Technology                          |
|------------------------|---------------------------------------|
| Framework              | React (Vite)                         |
| Styling                | Tailwind CSS v4                       |
| Animation Engine       | GSAP & GSAP ScrollTrigger             |
| React Hook Bindings    | `@gsap/react`                         |
| Scroll Normalizer      | Lenis                                 |
| Dynamic Media          | [Lorem Picsum](https://picsum.photos/) |

## 🗺️ Possible Improvements

- [ ] Add responsive grid variants for mobile/tablet (reduce columns, adjust scatter)
- [ ] Add lazy-loading / blur-up placeholders for grid images
- [ ] Add a loading screen while images preload
- [ ] Add reduced-motion support for accessibility (`prefers-reduced-motion`)
- [ ] Replace Lorem Picsum with a configurable image source (CMS or local assets)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/scroll-parallax-grid/issues) or open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 🌀 GSAP, Lenis, and React
</div>
