# Shop System Documentation

## Overview

This is a comprehensive, reusable shop system built with Astro and Snipcart that can be used across multiple Astro sites. The system is built following Astro best practices with a focus on reusability, performance, and maintainability.

## Architecture

### File Structure

```
src/
├── utils/
│   └── products.ts              # Product utility functions (business logic)
├── components/
│   └── shop/
│       ├── CategoryMenuFilters.astro    # Dynamic category & filter sidebar
│       ├── ProductGrid.astro            # Main product grid with filtering
│       ├── FeaturedProducts.astro       # Featured products section
│       ├── SaleProducts.astro           # On-sale products section
│       ├── SnipcartBuyButton.astro      # Buy button component
│       └── SnipcartProductGrid.astro    # Snipcart-integrated grid
├── pages/
│   ├── shop.astro                       # Main shop page
│   ├── shop/
│   │   └── [collection].astro           # Dynamic collection pages
│   └── products/
│       └── [slug].astro                 # Product detail pages
└── content/
    └── products/                        # Product content collection
        ├── basic-tee.md
        ├── mug-001.md
        └── ...
```

## Core Components

### 1. Product Utilities (`src/utils/products.ts`)

Central utility file containing all product-related business logic:

#### Key Functions:

- **`fetchProducts()`** - Get all products from collection
- **`filterProducts(products, filter)`** - Filter products by criteria
- **`sortProducts(products, sort)`** - Sort products
- **`getFeaturedProducts(limit)`** - Get featured products
- **`getSaleProducts(limit)`** - Get products on sale
- **`getProductsByCollection(collection, limit)`** - Get products by collection
- **`getCollections()`** - Get all unique collections
- **`getTags()`** - Get all unique tags
- **`getColors()`** - Get all unique colors
- **`getSizes()`** - Get all unique sizes
- **`getRelatedProducts(product, limit)`** - Get related products

#### Usage Example:

```astro
---
import { getFeaturedProducts, getProductsByCollection } from '~/utils/products';

// Get 8 featured products
const featured = await getFeaturedProducts(8);

// Get all mugs
const mugs = await getProductsByCollection('Mugs');
---
```

### 2. ProductGrid Component

**Location:** `src/components/shop/ProductGrid.astro`

Main grid component for displaying products with filtering and sorting.

#### Props:

```typescript
interface Props {
  limit?: number;           // Max number of products to show
  filter?: ProductFilter;   // Filter criteria
  sort?: ProductSort;       // Sort options
}
```

#### Usage:

```astro
---
import ProductGrid from '~/components/shop/ProductGrid.astro';
---

<!-- Show all products -->
<ProductGrid />

<!-- Show 12 featured mugs, sorted by price -->
<ProductGrid 
  limit={12}
  filter={{ collection: 'Mugs', featured: true }}
  sort={{ field: 'price', order: 'asc' }}
/>

<!-- Show products on sale -->
<ProductGrid 
  filter={{ onSale: true }}
/>
```

### 3. FeaturedProducts Component

**Location:** `src/components/shop/FeaturedProducts.astro`

Displays featured products in a styled section with optional Snipcart buy buttons.

#### Props:

```typescript
interface Props {
  limit?: number;           // Default: 4
  collection?: string;      // Filter by collection
  showAddToCart?: boolean;  // Default: true
  title?: string;           // Default: 'Featured Products'
  subtitle?: string;
  columns?: 2 | 3 | 4;     // Default: 4
}
```

#### Usage:

```astro
---
import FeaturedProducts from '~/components/shop/FeaturedProducts.astro';
---

<!-- Default usage -->
<FeaturedProducts />

<!-- Custom configuration -->
<FeaturedProducts 
  limit={6}
  collection="Posters"
  columns={3}
  title="Featured Posters"
  subtitle="Artist selections for this month"
/>

<!-- Without add to cart buttons -->
<FeaturedProducts 
  showAddToCart={false}
  limit={8}
/>
```

### 4. SaleProducts Component

**Location:** `src/components/shop/SaleProducts.astro`

Displays products on sale with special sale styling and badges.

#### Props:

```typescript
interface Props {
  limit?: number;           // Default: 4
  collection?: string;      // Filter by collection
  showAddToCart?: boolean;  // Default: true
  title?: string;           // Default: 'Sale Products'
  subtitle?: string;
  columns?: 2 | 3 | 4;     // Default: 4
}
```

#### Usage:

```astro
---
import SaleProducts from '~/components/shop/SaleProducts.astro';
---

<!-- Show all sale items -->
<SaleProducts limit={8} columns={4} />

<!-- Sale apparel only -->
<SaleProducts 
  collection="Apparel"
  title="Apparel Sale"
  subtitle="Up to 50% off selected items"
/>
```

### 5. CategoryMenuFilters Component

**Location:** `src/components/shop/CategoryMenuFilters.astro`

Dynamic filter sidebar that automatically generates filters from your product collection.

**Features:**
- Auto-generates collection links
- Color swatches with actual product colors
- Size filters
- Active state tracking
- Reset filters button

**No props needed** - automatically pulls from products collection.

## Pages

### Main Shop Page

**Location:** `src/pages/shop.astro`

Main shop landing page with filtering, sorting, and breadcrumbs.

**URL Parameters:**
- `?collection=Mugs` - Filter by collection
- `?color=Black` - Filter by color
- `?size=L` - Filter by size
- `?onSale=true` - Show only sale items
- `?sort=price-asc` - Sort options

**Sort Options:**
- `featured` - Featured first (default)
- `price-asc` - Price low to high
- `price-desc` - Price high to low
- `rating` - Top rated
- `title` - Alphabetical

### Collection Pages

**Location:** `src/pages/shop/[collection].astro`

Dynamic pages for each collection with custom hero banner and filtering.

**Auto-generated routes:**
- `/shop/apparel`
- `/shop/mugs`
- `/shop/posters`
- `/shop/journals`
- etc.

### Product Detail Pages

**Location:** `src/pages/products/[slug].astro`

Individual product pages with:
- Image gallery
- Product details
- Size/color selection
- Ratings and reviews
- Snipcart buy button
- Related products (can be added)

## Product Content Schema

**Location:** `src/content/config.ts`

```typescript
{
  id: string;                    // Unique identifier
  title: string;                 // Product name
  collection: enum;              // Collection type
  tags: string[];               // Tags for filtering
  price: number;                // Regular price
  salePrice?: number;           // Optional sale price
  onSale: boolean;              // Is on sale
  salePercent?: number;         // Sale percentage
  sizes?: string[];             // Available sizes
  colors?: Array<{              // Available colors
    name: string;
    class: string;              // Tailwind class
    hex?: string;
  }>;
  rating?: number;              // Product rating
  reviewCount?: number;         // Number of reviews
  images?: string[];            // Gallery images
  image: string;                // Main image
  description: string;          // Description
  fabricCare?: string[];        // Care instructions
  inStock: boolean;             // Availability
  featured: boolean;            // Featured status
}
```

## Usage in Different Pages

### Homepage

```astro
---
import FeaturedProducts from '~/components/shop/FeaturedProducts.astro';
import SaleProducts from '~/components/shop/SaleProducts.astro';
---

<Layout>
  <!-- Hero section -->
  
  <!-- Featured products -->
  <FeaturedProducts limit={4} />
  
  <!-- Sale section -->
  <SaleProducts limit={4} />
  
  <!-- Other content -->
</Layout>
```

### Category Landing Pages

```astro
---
import ProductGrid from '~/components/shop/ProductGrid.astro';
import { getProductsByCollection } from '~/utils/products';

const apparelProducts = await getProductsByCollection('Apparel');
---

<Layout>
  <h1>Apparel Collection</h1>
  <p>{apparelProducts.length} items</p>
  
  <ProductGrid 
    filter={{ collection: 'Apparel' }}
    sort={{ field: 'featured', order: 'desc' }}
  />
</Layout>
```

### Custom Sale Page

```astro
---
import ProductGrid from '~/components/shop/ProductGrid.astro';
---

<Layout>
  <h1>Flash Sale</h1>
  
  <ProductGrid 
    filter={{ onSale: true }}
    sort={{ field: 'salePercent', order: 'desc' }}
  />
</Layout>
```

## Reusability Across Sites

To use this system on another Astro site:

1. **Copy the files:**
   - `src/utils/products.ts`
   - `src/components/shop/*`
   - `src/content/config.ts` (products schema)

2. **Update content collection:**
   - Create/update `src/content/products/` folder
   - Add product markdown files

3. **Update pages:**
   - Copy `src/pages/shop.astro`
   - Copy `src/pages/shop/[collection].astro`
   - Copy `src/pages/products/[slug].astro`

4. **Configure Snipcart:**
   - Follow SNIPCART-README.md for API key setup
   - Ensure SnipcartBuyButton and related components are configured

5. **Customize:**
   - Update collections enum in `content/config.ts`
   - Adjust styling in Tailwind classes
   - Modify filtering/sorting logic as needed

## Best Practices

### Performance

1. **Static Generation:** All product pages are statically generated at build time
2. **Island Architecture:** Interactive components use Astro islands
3. **Image Optimization:** Use Astro's Image component for optimized images when possible

### SEO

1. **Metadata:** Each page includes proper title and description
2. **Breadcrumbs:** Structured breadcrumb navigation on all pages
3. **Semantic HTML:** Proper use of headings and landmarks

### Maintainability

1. **Centralized Logic:** All product logic in `utils/products.ts`
2. **Reusable Components:** Components accept props for customization
3. **Type Safety:** TypeScript interfaces for all props
4. **Content Collections:** Structured, validated product data

### Accessibility

1. **ARIA Labels:** Proper labels on interactive elements
2. **Keyboard Navigation:** All interactive elements keyboard accessible
3. **Screen Reader Support:** Semantic HTML and descriptive text

## Advanced Customization

### Adding New Filters

Edit `src/utils/products.ts` to add new filter options:

```typescript
export interface ProductFilter {
  collection?: string;
  tag?: string;
  featured?: boolean;
  onSale?: boolean;
  inStock?: boolean;
  minPrice?: number;
  maxPrice?: number;
  // Add your custom filters here
  material?: string;
  brand?: string;
}
```

### Adding New Sort Options

Edit `src/utils/products.ts`:

```typescript
export interface ProductSort {
  field: 'price' | 'title' | 'rating' | 'featured' | 'createdDate';
  order: 'asc' | 'desc';
}
```

### Custom Product Categories

Update `src/content/config.ts`:

```typescript
collection: z.enum([
  'Apparel', 
  'Books', 
  'Magazines', 
  'Music', 
  'Posters', 
  'Journals', 
  'Mugs', 
  'Mousepads',
  // Add new collections here
  'Stickers',
  'Prints',
])
```

## Troubleshooting

### Products not showing up

1. Check that products have `inStock: true`
2. Verify product files are in `src/content/products/`
3. Check frontmatter matches schema in `content/config.ts`

### Filters not working

1. Ensure filter values match product data exactly (case-sensitive)
2. Check URL parameters are being passed correctly
3. Verify filter logic in `utils/products.ts`

### Snipcart not loading

1. Check API key in Layout component
2. Verify SnipcartBuyButton has all required props
3. Check browser console for errors

## Future Enhancements

- Add search functionality
- Implement wishlist feature
- Add product comparison
- Include review system
- Create promotional banners component
- Add inventory management
- Implement dynamic pricing rules

---

**Version:** 1.0  
**Last Updated:** March 2026  
**Compatible with:** Astro 4.x+
