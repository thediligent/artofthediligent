/**
 * Snipcart Theme Configuration
 * 
 * Customize these values to match your brand
 * After making changes, the styles will automatically update
 */

export const snipcartTheme = {
  // Primary Brand Colors
  colors: {
    primary: '#000000',           // Main brand color (buttons, links)
    primaryHover: '#1f1f1f',     // Hover state for primary
    secondary: '#ffffff',         // Secondary background
    accent: '#3b82f6',           // Accent color (badges, highlights)
    
    // Text Colors
    text: {
      default: '#000000',         // Primary text color
      muted: '#666666',          // Secondary/muted text
      light: '#ffffff',          // Light text on dark backgrounds
    },
    
    // Background Colors
    background: {
      default: '#ffffff',         // Main background
      alt: '#f7f7f7',            // Alternate background
      input: '#ffffff',          // Form input backgrounds
    },
    
    // Border Colors
    border: {
      default: '#e5e5e5',        // Default borders
      focus: '#000000',          // Focused input borders
    },
    
    // Status Colors
    status: {
      success: '#10b981',        // Success messages
      error: '#ef4444',          // Error messages
      warning: '#fbbf24',        // Warning messages
      info: '#3b82f6',           // Info messages
    },
  },
  
  // Typography
  typography: {
    fontFamily: 'inherit',       // Use site's default font
    baseFontSize: '16px',
    buttonFontSize: '14px',
    
    fontWeights: {
      regular: 400,
      semibold: 500,
      bold: 600,
    },
  },
  
  // Border Radius
  borderRadius: {
    default: '8px',              // Buttons, inputs, cards
    badge: '12px',               // Badges, tags
    full: '9999px',              // Fully rounded (item count)
  },
  
  // Shadows
  shadows: {
    default: '0 2px 8px rgba(0, 0, 0, 0.1)',
    large: '0 4px 16px rgba(0, 0, 0, 0.15)',
  },
  
  // Dark Mode Support
  darkMode: {
    enabled: true,               // Enable dark mode support
    colors: {
      primary: '#ffffff',
      primaryHover: '#e5e5e5',
      secondary: '#2a2a2a',
      
      text: {
        default: '#ffffff',
        muted: '#a0a0a0',
        light: '#000000',
      },
      
      background: {
        default: '#1f1f1f',
        alt: '#2a2a2a',
        input: '#2a2a2a',
      },
      
      border: {
        default: '#404040',
        focus: '#ffffff',
      },
    },
  },
  
  // Z-index Management
  zIndex: {
    modal: 9999,                 // Cart modal
    overlay: 9998,               // Background overlay
    header: 40,                  // Your site header (for reference)
  },
  
  // Layout
  layout: {
    cartWidth: '400px',          // Width of cart sidebar (desktop)
    mobileFullScreen: true,      // Use full screen on mobile
  },
  
  // Animation
  animation: {
    duration: '0.2s',            // Transition duration
    easing: 'ease-in-out',       // Transition easing
  },
};

export default snipcartTheme;
