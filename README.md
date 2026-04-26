# ASI — Dynamic Multi‑Category Product Catalog

A small **responsive** React app that renders a **multi-category product catalog** from a static dataset. Each category can contain items with **different attributes**, and the details screen **dynamically renders whatever properties exist** in `itemprops` (for example RPM for cars vs lens type for phones).

This project was built for the **Frontend Developer Assignment: Dynamic Multi-Category Catalog**.

---

## What you get (features)

- **Home / category overview**
  - Products are **grouped by `category`** (Cars, Bikes, Phones, Computers).
  - Each category is visually separated (section container + header + grid of cards).
- **Product details**
  - Clicking a product navigates to `/product/:id`.
  - The details page shows:
    - `itemname`
    - `category`
    - `image`
    - **All dynamic attributes** by iterating `itemprops` (label/value pairs)
- **Routing quality-of-life**
  - **Invalid product id** (example: `/product/99999`) shows a centered “not found” state.
  - **Unknown routes** (example: `/random/path`) show a global “page not found” screen.
- **Responsive UI**
  - Layout adapts for **mobile / tablet / desktop** using plain CSS.

---

## Tech stack

- **React** + **Vite**
- **React Router** (`react-router-dom`) for navigation
- **Plain CSS** (single stylesheet: `src/index.css`)
- Data stored as a **JavaScript module** (`src/data/products.js`)

No Material UI in this implementation (CSS-only styling).

---

## How the data model works

The assignment requires a consistent JSON shape so the UI can stay generic:

```js
{
  itemname: 'Some Product',
  category: 'Cars',
  image: 'https://...',
  itemprops: [
    { label: 'RPM', value: '6000' },
    { label: 'Color', value: 'Blue' }
  ]
}
```

**Why this matters**

- The Home page only needs `category` to group items.
- The details page does **not** hardcode fields like RPM vs lens type.
- Instead it loops `itemprops` and prints **every** attribute present for that item.

---

## Routing rules

### Product details URL

- Path: `**/product/:id`**
- `id` is **1-based**:
  - First item in the dataset is `/product/1`
  - Second item is `/product/2`
  - And so on

**How lookup works**

- The dataset is a single ordered array in `src/data/products.js`.
- The route param is converted to a number and mapped to an array index with:


index = id - 1


If `id` is missing, not a number, or out of range, the app shows a product-not-found screen.

### Global not-found route

- Any unknown path uses React Router’s catch-all route (`path="*"`).

---

## Project structure

```
src/
  components/
    Home.jsx              // Groups products by category; renders CategorySection list
    CategorySection.jsx   // One category block (title + grid)
    ProductCard.jsx       // Card UI + link to /product/:id
    ProductDetails.jsx    // Details page + dynamic itemprops rendering
    NotFound.jsx          // Unknown-route page
  data/
    products.js           // Catalog dataset + helper to resolve /product/:id
  App.jsx                 // Route definitions
  main.jsx                // React root + BrowserRouter wrapper
  index.css               // Global + component styling
public/
  favicon.png             // Site favicon (referenced by index.html)
index.html                // HTML shell + favicon link
```

---

## Styling notes (intentionally simple)

- Global background + “card surfaces” are separated so sections feel distinct.
- Product cards have a subtle hover interaction (kept mild for a professional feel).
- The details page uses a two-column layout on wide screens and stacks on small screens.

---

## Assignment mapping (checklist)

- **Category overview**: grouped sections with previews (cards).
- **Item details page**: dedicated route; dynamic `itemprops` rendering.
- **Provided JSON shape**: `itemname`, `category`, `image`, `itemprops`.
- **Responsive layout**: mobile/tablet/desktop.
- **Navigation**: efficient client-side routing via React Router.

