# Product Creation Guide

## Quick Start: Creating a New Product

### 1. Create Product File
Create a new markdown file in `src/content/products/` with a descriptive filename (e.g., `my-product-name.md`)

### 2. Add Product Frontmatter
Use this template with required fields:

```yaml
---
id: unique-product-id
title: Product Display Name
collection: Posters  # Options: Apparel, Books, Magazines, Music, Posters, Journals, Mugs, Mousepads
tags: ["Tag1", "Tag2", "Tag3"]
price: 24.99
image: /images/collection-name/product-image.webp
description: Brief product description for listings and cart.
inStock: true
featured: false
---
```

### 3. Optional Fields for Sales & Variants

```yaml
# Sale pricing
salePrice: 18.74
onSale: true
salePercent: 25

# Product ratings
rating: 4.5
reviewCount: 128

# Apparel options
sizes: ["XS", "S", "M", "L", "XL"]
colors:
  - name: Black
    class: bg-gray-900
    hex: "#111827"
  - name: White
    class: bg-white
    hex: "#FFFFFF"

# Additional images
images:
  - /images/collection/product-1.webp
  - /images/collection/product-2.webp

# Care instructions (for apparel)
fabricCare:
  - Machine wash cold
  - Tumble dry low
  - Do not bleach

# Product details (for posters, art, etc.)
productDetails:
  - 11×17 inches, unframed
  - Premium archival-quality print
  - Ready to frame and cherish
```

### 4. Add Product Image
- Place image in `public/images/[collection-name]/`
- Use relative path starting with `/images/` in frontmatter
- Recommended: WebP format for performance

### 5. Mark as Featured (Optional)
Set `featured: true` to display in homepage Featured Products sections

## Field Reference

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| id | Yes | string | Unique identifier (use kebab-case) |
| title | Yes | string | Product display name |
| collection | Yes | enum | One of: Apparel, Books, Magazines, Music, Posters, Journals, Mugs, Mousepads |
| tags | Yes | array | Product tags for filtering |
| price | Yes | number | Base price |
| image | Yes | string | Main product image path (relative to public/) |
| description | Yes | string | Product description |
| inStock | Yes | boolean | Availability status |
| featured | Yes | boolean | Show in featured sections |
| salePrice | No | number | Discounted price |
| onSale | No | boolean | Is on sale |
| salePercent | No | number | Discount percentage for badge |
| rating | No | number | Average rating (0-5) |
| reviewCount | No | number | Number of reviews |
| sizes | No | array | Available sizes |
| colors | No | array | Color options with name, class, hex |
| images | No | array | Additional product images |
| fabricCare | No | array | Care instructions (apparel) |
| productDetails | No | array | Product specifications (posters, art, etc.) |

## Example Product

```yaml
---
id: butterfly-princess-poster
title: The Butterfly Princess
collection: Posters
tags: ["Art Of The Diligent", "Limited Edition", "Art", "Digital"]
price: 24.99
salePrice: 18.74
onSale: true
salePercent: 25
size: 11x17
image: /images/posters/butterfly-princess.webp
description: A limited-edition poster featuring The Butterfly Princess iconic AI-generated artwork by Art Of The Diligent.
inStock: true
featured: true
---
```

## Notes
- Products automatically appear in collection pages based on `collection` field
- Featured products display on homepage (limit controlled by component props)
- Image paths must be relative to `public/` directory (start with `/`)
- Product URLs are auto-generated from title as `/products/[slug]`
