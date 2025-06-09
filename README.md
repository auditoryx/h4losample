# h4losample

Proof-of-concept for H4LO 3D Immersive Store using Next.js, React-Three-Fiber & Shopify Storefront API.

---

## 🚀 Table of Contents

1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Directory Structure](#directory-structure)  
5. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Environment Variables](#environment-variables)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
6. [Development Workflow](#development-workflow)  
7. [3D Asset Pipeline](#3d-asset-pipeline)  
8. [Mobile Fallback](#mobile-fallback)  
9. [Deployment](#deployment)  
10. [Contributing](#contributing)  
11. [License](#license)

---

## 📋 Project Overview

This repository contains a desktop-first, immersive 3D storefront for H4LO. Users can navigate brand-themed “rooms” in a Three.js scene, click on products to view details, and purchase via Shopify. Mobile visitors get a simplified 2D fallback experience.

---

## 🛠️ Tech Stack

- **Next.js** (React framework)  
- **React-Three-Fiber** (Three.js renderer in React)  
- **Shopify Storefront GraphQL API**  
- **Tailwind CSS** (utility-first styling)  
- **Blender → glTF + Draco** (3D asset creation & compression)  
- **(Optional) Stripe Checkout**  

---

## ✨ Features

- **Dynamic 3D “Room” Scenes** driven by a JSON manifest  
- **Clickable 3D Items** with hover glow & tooltips  
- **Product Detail Modal** with Add-to-Cart/Checkout  
- **Central H4LO Hub** linking to brand alcoves  
- **Mobile Fallback** to a simple 2D interface  
- **Performance Optimizations** (lazy load, code-split, Draco compression)

---

## 📂 Directory Structure

h4losample/
├── public/
│ ├── rooms/
│ │ ├── manifest.json
│ │ ├── hub_room.glb
│ │ ├── afb_room.glb
│ │ └── textures/
│ └── products/
├── src/
│ ├── pages/
│ │ ├── rooms/[slug].tsx
│ │ └── index.tsx
│ ├── components/
│ │ ├── ClickableItem.tsx
│ │ ├── ProductModal.tsx
│ │ └── MobileFallback.tsx
│ ├── hooks/
│ │ └── useBrandsAndProducts.ts
│ ├── styles/
│ │ └── globals.css
│ └── utils/
│ └── webglCheck.ts
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md

markdown
Copy
Edit

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** ≥ v18  
- **npm** or **yarn**  
- A **Shopify Storefront** token & store domain  
- (Optional) **Stripe** API keys

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SHOP_DOMAIN=yourstore.myshopify.com
NEXT_PUBLIC_STOREFRONT_TOKEN=shpck_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_KEY=pk_test_xxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxx
Installation
bash
Copy
Edit
git clone git@github.com:<your-username>/h4losample.git
cd h4losample
npm install
Running Locally
bash
Copy
Edit
npm run dev
# Open http://localhost:3000 in your browser
⚙️ Development Workflow
Generate 3D manifest
Edit public/rooms/manifest.json to add new rooms.

Build Room Pages

src/pages/rooms/[slug].tsx loads the GLB and sets up the scene.

Add Interactivity

Use ClickableItem.tsx for raycast hover & click.

Display ProductModal.tsx on click.

Fetch Data

Implement useBrandsAndProducts.ts to pull from Shopify.

Style & Layout

Tailwind classes in globals.css and component styles.

Test & Commit

git add . → git commit -m "feat: add room loader" → git push

🎨 3D Asset Pipeline
Modeling: Create rooms and product models in Blender.

Export: glTF (.glb) with Draco compression.

Textures: Save PNGs under public/rooms/textures/.

Manifest: Ensure manifest.json references correct file names.

📱 Mobile Fallback
On unsupported devices or screens <600px, the app detects lack of WebGL and renders MobileFallback.tsx, which displays a simple list or 2D image map linking to product pages.

🚀 Deployment
Deploy to Vercel, Netlify, or your host of choice:

bash
Copy
Edit
npm run build
npm run start
Ensure environment variables are configured in your host’s dashboard.

🤝 Contributing
Fork this repo

Create a feature branch (git checkout -b feat/my-feature)

Commit your changes (git commit -m "feat: description")

Push to origin (git push origin feat/my-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.## 🚀 Deployment

This project is ready to be deployed to [Vercel](https://vercel.com/) or Netlify.

1. Push this repository to GitHub.
2. Link it to your Vercel account.
3. Add the following environment variables:
   - NEXT_PUBLIC_SHOP_DOMAIN
   - NEXT_PUBLIC_STOREFRONT_TOKEN
   - NEXT_PUBLIC_STRIPE_KEY
   - STRIPE_SECRET_KEY
4. Deploy — automatic builds will run on every push to `main`.
