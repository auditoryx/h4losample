# agent.md

## 1. Project Overview
- **Name:** h4lo-3d-store  
- **Purpose:** Desktop-first 3D storefront for H4LO using Next.js, React-Three-Fiber, Shopify Storefront API (with Stripe optional).

## 2. Workspace & Env
- **Path:** `/workspace/h4losample`  
- **Setup Script:**
  ```bash
  npm install
  npx tailwindcss init -p
  npm install --save-dev eslint jest
  ```
- **Env Vars:**
  ```
  NEXT_PUBLIC_SHOP_DOMAIN
  NEXT_PUBLIC_STOREFRONT_TOKEN
  NEXT_PUBLIC_STRIPE_KEY
  STRIPE_SECRET_KEY
  ```

## 3. Directory Layout
```
/public/rooms/manifest.json
/public/rooms/*.glb
/public/rooms/textures/
/public/products/
src/pages/index.tsx
src/pages/rooms/[slug].tsx
src/components/ClickableItem.tsx
src/components/ProductModal.tsx
src/components/MobileFallback.tsx
src/hooks/useBrandsAndProducts.ts
src/utils/webglCheck.ts
src/styles/globals.css
next.config.js
tailwind.config.js
package.json
README.md
```

## 4. Conventions
- **Language:** TypeScript/JSX
- **3D:** React-Three-Fiber (no raw Three.js)
- **Styling:** Tailwind CSS
- **Data:** Hooks + Shopify Storefront GraphQL
- **Commits:** feat:, fix:, chore:, docs:
