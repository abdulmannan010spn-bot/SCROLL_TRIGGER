# Smooth Scroll & Parallax Grid Animation

A modern, high-performance scroll experience built with React, Tailwind CSS, Lenis, and GSAP ScrollTrigger. The application renders an 8-column distributed grid where items animate into view and drift horizontally as you scroll, anchored by a fixed typographic overlay.

---

## Highlights

- **Inertial Momentum Scrolling:** Powered by Lenis for buttery-smooth cross-device scroll dampening.
- **Scrub-Driven Timelines:** GSAP ScrollTrigger synchronizes image reveal and dynamic lateral drift directly with scroll progress.
- **Dynamic CSS Grid Distribution:** Explicit grid placement coordinates scatter elements organically across an 8×20 layout.
- **Hardware-Accelerated Transforms:** Uses `scaleX` reveals and percentage-based transforms (`xPercent`) to avoid layout thrashing and maintain 60+ FPS.
- **Tailwind CSS v4 Integration:** Minimalist, utility-first styling with modern text-stroke styling rules[cite: 2, 3].

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite)[cite: 1, 4] |
| Styling | Tailwind CSS v4[cite: 3] |
| Animation Engine | GSAP & GSAP ScrollTrigger |
| React Hook Bindings | `@gsap/react` |
| Scroll Normalizer | Lenis |
| Dynamic Media | Lorem Picsum[cite: 2] |

---

## Getting Started

### 1. Prerequisites

Make sure you have Node.js 18+ and `npm` (or `pnpm`/`yarn`) installed.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
npm install
