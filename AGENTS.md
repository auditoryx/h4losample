Agent Instructions for h4lo-3d-store Repository

This agent.md defines the responsibilities, workflows, and conventions for Codex (or any AI agent) working on the h4lo-3d-store Next.js + React-Three-Fiber project.

1. Project Overview

Name: h4lo-3d-store

Description: Desktop-first immersive 3D storefront for H4LO brands, built with Next.js, React-Three-Fiber, and the Shopify Storefront API.

Primary Goals:

- Reverse-engineer Drake’s interactive room pattern
- Audit H4LO’s site and backend
- Generate dynamic 3D rooms per brand
- Provide mobile fallback
- Integrate Shopify commerce or Stripe checkout

2. Workspace & Environment

Workspace Path: /workspace/h4lo-sample

Container Image: openai/codex-universal (Ubuntu 24.04)

Setup Script:

```bash
npm install
npx tailwindcss init -p
npm install --save-dev eslint jest
```

Env Vars:

- NEXT_PUBLIC_SHOP_DOMAIN
- NEXT_PUBLIC_STOREFRONT_TOKEN
- NEXT_PUBLIC_STRIPE_KEY
- STRIPE_SECRET_KEY

3. Directory Structure

```
h4lo-3d-store/
├── public/
│   ├── rooms/
│   │   ├── manifest.json
│   │   ├── hub_room.glb
│   │   └── textures/
│   └── products/
├── src/
│   ├── pages/rooms/[slug].tsx
│   ├── components/
│   ├── hooks/
│   └── utils/
├── .env.example
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

4. Coding Conventions

- Language: TypeScript for Next.js pages/components
- Styling: Tailwind CSS, use utility classes in JSX
- 3D: React-Three-Fiber (do not manually instantiate Three.js outside of React context)
- Data Fetching: Use React hooks for fetching from Shopify GraphQL
- Modals & Overlays: Use React portals or built-in Next.js components
- Mobile Fallback: Detect WebGL support or screen width, then render MobileFallback.tsx

