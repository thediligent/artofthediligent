# Snipcart Styling Quick Reference

## 🎨 Common Customizations

### Change Primary Button Color
**File**: `src/assets/styles/snipcart-theme.css`

```css
:root {
  --bgColor-buttonPrimary: #YOUR_COLOR;
  --bgColor-buttonPrimary-hover: #YOUR_HOVER_COLOR;
}
```

### Change Item Count Badge Color
```css
.snipcart-items-count {
  background-color: #3b82f6;  /* Change badge color */
}
```

### Adjust Cart Width
```css
@media (min-width: 768px) {
  .snipcart-modal {
    width: 450px !important;  /* Default is 400px */
  }
}
```

### Change Border Radius (Roundness)
```css
:root {
  --borderRadius-default: 12px;  /* More rounded */
}
```

### Fix Z-Index Issues
```css
#snipcart {
  z-index: 99999 !important;  /* Increase if cart is hidden */
}
```

### Custom Font
```css
.snipcart-modal {
  font-family: 'Your Font', sans-serif !important;
}
```

### Dark Mode Colors
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bgColor-default: #1f1f1f;
    --bgColor-buttonPrimary: #ffffff;
    --color-buttonPrimary: #000000;
  }
}
```

## 🛠️ CSS Class Reference

### Main Container
- `.snipcart-modal` - Cart sidebar
- `#snipcart` - Cart wrapper
- `#snipcart-overlay` - Background overlay

### Header
- `.snipcart-cart-header` - Cart header container
- `.snipcart-cart-header__title` - "Your Cart" title
- `.snipcart-cart-header__close` - Close button

### Items
- `.snipcart-item-line` - Individual cart item
- `.snipcart-item-line__title` - Product name
- `.snipcart-item-line__price` - Product price
- `.snipcart-item-quantity` - Quantity controls

### Summary
- `.snipcart-cart-summary` - Summary section
- `.snipcart-cart-summary-fees__total` - Total price

### Buttons
- `.snipcart__button--primary` - Primary action button
- `.snipcart__button--secondary` - Secondary button
- `.snipcart-checkout` - Cart icon button

### Empty State
- `.snipcart-empty-cart` - Empty cart message

## 🎯 Targeting Specific Elements

### Style the "Add to Cart" button (in your components)
```astro
<SnipcartBuyButton
  className="custom-buy-button"
  variant="primary"
/>
```

Then style it:
```css
.custom-buy-button {
  /* Your custom styles */
}
```

### Style cart items differently
```css
.snipcart-item-line:first-child {
  /* First item styles */
}

.snipcart-item-line:last-child {
  /* Last item styles */
}
```

### Highlight sale items
Add custom field and style:
```css
[data-item-custom1-value="sale"] {
  border-left: 3px solid red;
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  .snipcart-modal {
    width: 100% !important;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .snipcart-modal {
    width: 400px !important;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .snipcart-modal {
    width: 450px !important;
  }
}
```

## 🔍 Debugging Tips

### View Applied Styles
1. Open cart
2. Right-click on element → Inspect
3. Check Styles panel in DevTools
4. Look for `.snipcart-*` classes

### Test Colors Live
1. Open DevTools (F12)
2. Click "Elements" tab
3. Find `:root { ... }` in Styles panel
4. Click color swatches to test changes
5. Copy final values to `snipcart-theme.css`

### Override Snipcart Defaults
Use `!important` if your styles don't apply:
```css
.snipcart-modal {
  background: white !important;
}
```

## ⚡ Performance Tips

### Preload Snipcart CSS (Optional)
```html
<link rel="preload" 
      href="https://cdn.snipcart.com/themes/v3.0/default/snipcart.css" 
      as="style">
```

### Minimize Custom CSS
Keep `snipcart-theme.css` optimized:
- Remove unused rules
- Combine similar selectors
- Use CSS variables for repeated values

## 🎨 Pre-Made Themes

### Tech/Blue
```css
--bgColor-buttonPrimary: #3b82f6;
--color-buttonPrimary: #ffffff;
```

### Nature/Green
```css
--bgColor-buttonPrimary: #10b981;
--color-buttonPrimary: #ffffff;
```

### Luxury/Gold
```css
--bgColor-buttonPrimary: #d97706;
--color-buttonPrimary: #ffffff;
```

### Minimalist/Gray
```css
--bgColor-buttonPrimary: #6b7280;
--color-buttonPrimary: #ffffff;
```

---

**💡 Tip**: Make one small change at a time and test in the browser to see the effect!
