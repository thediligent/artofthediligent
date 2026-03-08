# Product Sale Feature Guide

## Overview
The Butterfly Princess product now features a 25% discount with strikethrough pricing displayed on product pages, product grids, and in the shopping cart.

## How It Works

### Sale Display Features
- ✅ **Sale Badge**: Shows "SALE 25% OFF" on product cards and detail pages
- ✅ **Strikethrough Pricing**: Original price shown crossed out
- ✅ **Sale Price**: Discounted price displayed prominently in red
- ✅ **Savings Amount**: "Save $X.XX!" message on detail page
- ✅ **Cart Integration**: Sale price automatically sent to Snipcart

### Example: The Butterfly Princess
- **Original Price**: $24.99
- **Sale Price**: $18.74 (25% off)
- **Savings**: $6.25

## How to Add Sales to Other Products

### 1. Update Product Frontmatter

Edit any product file in `src/content/products/` and add these fields:

```yaml
---
id: your-product-id
title: Your Product Name
collection: Posters
tags: ["tag1", "tag2"]
price: 24.99              # Original price
salePrice: 18.74          # Calculated sale price
onSale: true              # Enable sale display
salePercent: 25           # Percentage for badge
image: /path/to/image.jpg
description: Your description
inStock: true
featured: true
---
```

### 2. Calculate Sale Price

Use this formula:
```
Sale Price = Original Price × (1 - Discount %)
```

**Examples:**
- 10% off $50.00 = $45.00 (50 × 0.90)
- 25% off $24.99 = $18.74 (24.99 × 0.75)
- 30% off $100.00 = $70.00 (100 × 0.70)
- 50% off $29.99 = $15.00 (29.99 × 0.50)

### 3. Quick Sale Presets

#### 10% Off
```yaml
price: 100.00
salePrice: 90.00
onSale: true
salePercent: 10
```

#### 20% Off
```yaml
price: 100.00
salePrice: 80.00
onSale: true
salePercent: 20
```

#### 25% Off (Butterfly Princess)
```yaml
price: 24.99
salePrice: 18.74
onSale: true
salePercent: 25
```

#### 30% Off
```yaml
price: 100.00
salePrice: 70.00
onSale: true
salePercent: 30
```

#### 50% Off (Flash Sale)
```yaml
price: 100.00
salePrice: 50.00
onSale: true
salePercent: 50
```

## Where Sales Display

### 1. Product Grid (Home, Shop Pages)
- Sale badge in top-right corner showing percentage
- Strike-through original price
- Red sale price
- "Add to Cart" button uses sale price

### 2. Product Detail Page
- "SALE X% OFF" badge next to title
- Large sale price in red
- Strike-through original price
- "Save $X.XX!" message
- Cart receives sale price

### 3. Shopping Cart
- Sale price automatically used
- Customer pays discounted amount
- Original price not shown in cart (could add if desired)

## Styling

### Sale Badge
```css
Red background (#EF4444)
White bold text
Small rounded pill shape
```

### Sale Price
```css
Large red text (#DC2626)
Bold weight
Prominent placement
```

### Original Price
```css
Gray color (#6B7280)
Line-through decoration
Smaller size
```

## To Remove Sale

Simply remove or set `onSale: false`:

```yaml
---
id: product-id
title: Product Name
price: 24.99
onSale: false             # Hide sale display
# salePrice: 18.74        # Still present but ignored
# salePercent: 25         # Still present but ignored
---
```

## Advanced: Seasonal Sales

Create sale templates for different occasions:

### Holiday Sale (40% off)
```yaml
price: 29.99
salePrice: 17.99
onSale: true
salePercent: 40
```

### Clearance (60% off)
```yaml
price: 49.99
salePrice: 19.99
onSale: true
salePercent: 60
```

### Limited Time (15% off)
```yaml
price: 35.00
salePrice: 29.75
onSale: true
salePercent: 15
```

## Product Schema

All sale fields are optional. The schema supports:

```typescript
{
  price: number;              // Required - Original price
  salePrice?: number;         // Optional - Sale price
  onSale?: boolean;          // Optional - Enable/disable sale (default: false)
  salePercent?: number;      // Optional - Percentage for badge
}
```

## Testing Your Sale

1. **Edit product file** with sale data
2. **Save file**
3. **Restart dev server** (if types don't update)
4. **Visit product page** to see sale display
5. **Add to cart** to verify sale price
6. **Check cart** to confirm discounted total

## Tips

### Round to Nearest Cent
Always round sale prices to 2 decimal places:
- $18.7425 → $18.74
- $15.995 → $16.00

### Whole Numbers Look Better
Consider rounding to `.99` or `.95`:
- $18.74 → $18.99
- $22.47 → $21.99

### Clear Communication
Use salePercent to show exactly what customers save:
- 25% OFF is clearer than random pricing
- Round percentages (10%, 15%, 20%, 25%, 30%, 50%)

## Troubleshooting

### Sale not showing?
1. Check `onSale: true` is set
2. Verify `salePrice` is present and less than `price`
3. Clear browser cache (Ctrl+Shift+R)
4. Restart dev server

### Types error?
1. Restart dev server to regenerate types
2. Run `npm run astro sync` to sync content types

### Wrong price in cart?
1. Verify Snipcart button receives sale price
2. Check browser console for errors
3. Test in incognito mode

---

**Now you can easily add sales to any product!** 🎉
