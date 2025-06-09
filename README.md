# h4losample

This repository holds a small demonstration store built with **Next.js 13**, **React Three Fiber** and **Tailwind CSS**. It shows how to present products in a 3D viewer alongside a traditional product grid and shopping cart.

## Project Overview

The sample contains a simple storefront with a home page, a lookbook page and a 3D "Why Oji" experience. Products can be explored in a grid and added to a cart that uses a Stripe checkout endpoint provided by the included API route. The 3D viewer loads a glTF model from the `public/models` directory.

## Tech Stack

- Next.js 13 and React
- React Three Fiber with @react-three/drei helpers
- Tailwind CSS
- Framer Motion for simple animations
- Optional Stripe checkout integration

## Directory Structure

```
h4losample/
├── public/
│   ├── models/      # glTF files for the viewer
│   └── products/    # product images and products.json
├── src/
│   ├── app/
│   │   ├── components/   # React components (HeroBanner, ProductGrid, WhyOjiViewer, ...)
│   │   ├── lookbook/     # /lookbook route
│   │   └── whyOji/       # /whyOji route
│   └── data/             # sample product data
└── ...other config files
```

## Getting Started

1. Install dependencies with `npm install`.
2. Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

The `WhyOjiViewer` component loads `public/models/vibram.glb` and is displayed at `/whyOji`. Products listed in `src/data/products.ts` (or `public/products/products.json`) appear in the `ProductGrid` on the home page.

## License

This project is licensed under the MIT License.
