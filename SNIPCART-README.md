# Snipcart Integration Guide

## 🎉 Setup Complete!

Snipcart has been successfully integrated into your Art Of The Diligent website!

## 📦 What's Been Added

### 1. **Snipcart Script** (Layout.astro)
- Automatically loads on all pages
- Uses on-user-interaction strategy for performance
- Test API Key: `ZDk1YWI4MTgtODI0Ni00NzdjLTgyMmMtNzI4MGMzZDQ2MDYzNjM4OTI5MzA2NTczMTEzNjUy`

### 2. **Components Created**

#### SnipcartBuyButton.astro
Located: `src/components/shop/SnipcartBuyButton.astro`

**Props:**
- `id` (required): Product unique ID
- `name` (required): Product name
- `price` (required): Product price (number)
- `url` (required): Product page URL
- `description`: Product description
- `image`: Product image URL
- `categories`: Product categories/collection
- `customFields`: Array of custom fields for product options
- `variant`: 'primary' | 'secondary' | 'outline'
- `className`: Additional CSS classes

**Example Usage:**
```astro
<SnipcartBuyButton
  id="mug-001"
  name="Cyberpunk AI Mug"
  price={15.99}
  url="/products/cyberpunk-ai-mug"
  description="A sleek mug featuring AI-generated art"
  image="https://example.com/mug.jpg"
  categories="Mugs"
  variant="primary"
>
  Add to Cart
</SnipcartBuyButton>
```

#### SnipcartCart.astro
Located: `src/components/shop/SnipcartCart.astro`

Shopping cart button with item count badge. Already added to Header.astro!

**Props:**
- `className`: Additional CSS classes
- `showItemCount`: Show/hide item count badge (default: true)

#### SnipcartProductGrid.astro
Located: `src/components/shop/SnipcartProductGrid.astro`

Enhanced product grid that pulls from your content collection and includes buy buttons.

**Props:**
- `limit`: Maximum number of products to display
- `featured`: Filter by featured products (true/false)
- `collection`: Filter by collection name (e.g., "Mugs", "Posters")
- `showAddToCart`: Show/hide add to cart buttons (default: true)

**Example Usage:**
```astro
<!-- Show all products -->
<SnipcartProductGrid />

<!-- Show only featured products -->
<SnipcartProductGrid featured={true} />

<!-- Show 8 mugs -->
<SnipcartProductGrid collection="Mugs" limit={8} />
```

## 🛍️ Using in Your Site

### On Product Pages
The product detail page (`src/pages/products/[slug].astro`) has been updated with the buy button.

### On Any Page
```astro
---
import SnipcartProductGrid from '~/components/shop/SnipcartProductGrid.astro';
---

<section>
  <h2>Featured Products</h2>
  <SnipcartProductGrid featured={true} limit={4} />
</section>
```

### Manual Buy Button
```astro
---
import SnipcartBuyButton from '~/components/shop/SnipcartBuyButton.astro';
---

<SnipcartBuyButton
  id="unique-product-id"
  name="Product Name"
  price={29.99}
  url="/products/product-slug"
  description="Product description"
  image="/images/product.jpg"
  categories="Collection Name"
>
  Buy Now
</SnipcartBuyButton>
```

## 🔐 Switching to Production

### Current Status: TEST MODE
You're currently using the **test API key**. Transactions won't charge real cards.

### To Go Live:
1. Log into your Snipcart dashboard: https://app.snipcart.com
2. Complete your account setup
3. Get your **Live API Key**
4. Update in `src/layouts/Layout.astro`:
   ```javascript
   window.SnipcartSettings = {
       publicApiKey: 'YOUR_LIVE_API_KEY_HERE', // Replace test key
       loadStrategy: 'on-user-interaction',
   };
   ```

## 💳 Payment Configuration

In your Snipcart dashboard:
1. **Payment Gateways**: Connect Stripe, PayPal, or other providers
2. **Shipping**: Configure shipping zones and rates
3. **Taxes**: Set up tax calculation
4. **Email Templates**: Customize customer notifications
5. **Domain**: Add your production domain

## 🧪 Testing

### Test Credit Cards (Test Mode Only)
- **Visa**: 4242 4242 4242 4242
- **Mastercard**: 5555 5555 5555 4444
- Any future expiration date
- Any 3-digit CVV

### Test Your Integration
1. Start dev server: `npm run dev`
2. Visit a product page
3. Click "Add to Cart"
4. Complete checkout with test card
5. Check your Snipcart dashboard for the order

## 📝 Product Data Requirements

Each product in `src/content/products/` needs:
```yaml
---
id: unique-id        # Required - must be unique
title: Product Name  # Required
price: 29.99        # Required - number
collection: Mugs    # Recommended
image: /path.jpg    # Recommended
description: Text   # Recommended
inStock: true       # Optional
featured: false     # Optional
tags: []           # Optional
---
```

## 🎨 Customization

### Styling Overview
Your Snipcart cart has been customized with a theme that matches your site. All styling is controlled through:
- **Primary**: `src/assets/styles/snipcart-theme.css` - Complete theme CSS
- **Config**: `src/config/snipcart-theme.config.js` - Color and style variables (reference)

### Quick Color Changes

To change the main colors, edit `src/assets/styles/snipcart-theme.css`:

```css
:root {
  /* Change these values to match your brand */
  --bgColor-buttonPrimary: #000000;        /* Primary button color */
  --bgColor-buttonPrimary-hover: #1f1f1f;  /* Primary button hover */
  --color-buttonPrimary: #ffffff;          /* Primary button text */
  
  /* Accent color (badges, highlights) */
  --bgColor-info: #3b82f6;
  
  /* Text colors */
  --color-default: #000000;                /* Main text */
  --color-alt: #666666;                    /* Muted text */
}
```

### Pre-Built Color Schemes

#### Minimal Black & White (Current)
Already applied! Clean, modern aesthetic.

#### Blue Accent
```css
:root {
  --bgColor-buttonPrimary: #3b82f6;
  --bgColor-buttonPrimary-hover: #2563eb;
  --bgColor-info: #3b82f6;
}
```

#### Green/Nature
```css
:root {
  --bgColor-buttonPrimary: #10b981;
  --bgColor-buttonPrimary-hover: #059669;
  --bgColor-info: #10b981;
}
```

#### Purple/Creative
```css
:root {
  --bgColor-buttonPrimary: #8b5cf6;
  --bgColor-buttonPrimary-hover: #7c3aed;
  --bgColor-info: #8b5cf6;
}
```

### Z-Index Management

The cart is set to `z-index: 9999` to appear above everything. If you need to adjust:

```css
/* In snipcart-theme.css */
#snipcart {
  z-index: 9999 !important;  /* Adjust if needed */
}

/* Your header is z-40, so this should be fine */
```

### Component-Specific Styling

#### Cart Header
```css
.snipcart-cart-header {
  background-color: var(--bgColor-default);
  padding: 1.5rem;  /* Adjust padding */
}
```

#### Product Items
```css
.snipcart-item-line {
  padding: 1.25rem 1.5rem;  /* Item spacing */
}

.snipcart-item-line__title {
  font-weight: 600;          /* Product name weight */
}
```

#### Buttons
```css
.snipcart__button--primary {
  padding: 0.875rem 1.5rem;  /* Button size */
  border-radius: 8px;         /* Rounded corners */
}
```

### Advanced Customization

#### Custom Fonts
To use your site's font in the cart:
```css
:root {
  --fontFamily-primary: 'Archivo', sans-serif;  /* Your font */
}

.snipcart-modal {
  font-family: var(--fontFamily-primary);
}
```

#### Cart Width
```css
.snipcart-modal {
  width: 450px !important;  /* Change from default 400px */
}
```

#### Animations
```css
.snipcart-modal {
  transition: all 0.3s ease-in-out;  /* Adjust animation speed */
}
```

### Dark Mode Support

Dark mode styles are included! They automatically apply based on system preferences:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bgColor-default: #1f1f1f;
    --color-default: #ffffff;
    /* ... other dark mode colors */
  }
}
```

To force light or dark mode:
```css
/* Force light mode */
.snipcart-modal {
  color-scheme: light;
}

/* Force dark mode */
.snipcart-modal {
  color-scheme: dark;
}
```

### Styling the Cart
Snipcart uses its default theme. To customize:

1. Create a custom CSS file:
```css
/* src/assets/styles/snipcart-custom.css */
:root {
  --bgColor-default: #ffffff;
  --color-default: #000000;
  --color-alt: #666666;
  --color-icon: #000000;
  --bgColor-buttonPrimary: #000000;
  --color-buttonPrimary: #ffffff;
}
```

2. Add to Layout.astro after Snipcart script:
```astro
<link rel="stylesheet" href="/assets/styles/snipcart-custom.css" />
```

See full customization docs: https://docs.snipcart.com/v3/setup/theming

## 🌐 Multi-Store Setup

For multiple Astro shops:
1. Each site can use the same Snipcart account
2. Use different API keys per domain (create in dashboard)
3. Track orders by domain in Snipcart dashboard

## 📚 Resources

- **Snipcart Docs**: https://docs.snipcart.com/v3/
- **Dashboard**: https://app.snipcart.com
- **Test Mode**: https://docs.snipcart.com/v3/setup/test-mode
- **API Reference**: https://docs.snipcart.com/v3/api-reference/introduction

## 🚀 Next Steps

1. ✅ Integration complete!
2. 🛍️ Test the cart on your product pages
3. 🎨 Customize the cart appearance (optional)
4. 📧 Configure email templates in dashboard
5. 💳 Connect payment gateway
6. 🚢 Set up shipping rates
7. 🔄 Replace test key with live key when ready

## 🐛 Troubleshooting

### Cart doesn't open
- Check browser console for errors
- Verify API key is correct
- Make sure Snipcart script loaded (check Network tab)

### Products not adding
- Verify all required props are provided
- Check that `url` prop is a valid product page
- Ensure `id` is unique per product

### Styling issues
- **Custom styles not applying**: Clear browser cache and hard reload (Ctrl+Shift+R / Cmd+Shift+R)
- **Z-index conflicts**: The cart is set to 9999. Check if other elements have higher z-index
- **Colors bleeding through**: Ensure CSS specificity with `!important` if needed
- **Snipcart CSS loads after user interaction**: Styles may flash - this is normal
- Use browser inspector (F12) to debug styles in real-time

### Testing Styles

1. **Open cart**: Click the cart icon or add a product
2. **Inspect elements**: Right-click → Inspect to see applied styles
3. **Live editing**: Edit CSS variables in browser DevTools to test colors
4. **Check classes**: Snipcart uses specific class names (listed in snipcart-theme.css)

### Common Fixes

#### Cart appears behind header
```css
/* Increase z-index in snipcart-theme.css */
#snipcart {
  z-index: 99999 !important;
}
```

#### Buttons too small/large
```css
.snipcart__button--primary {
  padding: 1rem 2rem;        /* Larger */
  font-size: 16px;           /* Bigger text */
}
```

#### Cart too narrow/wide
```css
@media (min-width: 768px) {
  .snipcart-modal {
    width: 500px !important;  /* Make wider */
  }
}
```

#### Font not matching site
```css
.snipcart-modal {
  font-family: 'Archivo', sans-serif !important;
}
```

## 💬 Support

- **Snipcart Support**: support@snipcart.com
- **Documentation Issues**: Create an issue in your repo
- **Community**: https://snipcart.com/discord

---

**🎉 Happy Selling!** Your shop is now ready to accept orders with Snipcart.
