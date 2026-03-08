# 🚀 Art Of The Diligent

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="Art Of The Diligent Lighthouse Score" width="100" height="358">

🌟 _Custom Enhanced Astro Theme by Diligent Marketing Solutions_ 🌟

**Art Of The Diligent** is a professionally customized version of the AstroWind template, tailored by **Diligent Marketing Solutions** for The Art Of The Diligent brand. Built on **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**, this version includes enhanced features and custom components designed for web best practices and business needs.

## ✨ What's New in This Version

### 🎉 Latest Updates (March 2026)
- ⚡ **Quick View Modal**: Instant product previews with add-to-cart functionality
- 🛍️ **Enhanced Shop Experience**: Improved product grids with hover interactions
- 🎨 **Maximize Icons**: Intuitive UI for quick product access
- 💳 **Snipcart Integration**: Fully functional shopping cart and secure checkout
- 📱 **Mobile Optimized**: Responsive quick view modal for all devices

### Core Features
- ✅ **Production-ready** scores in **PageSpeed Insights** reports
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN)
- ✅ Generation of **project sitemap** based on your routes
- ✅ **Open Graph tags** for social media sharing
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration

### 🛍️ Diligent Marketing Solutions Enhancements

#### Custom Components & Layouts
- **Enhanced Shop Components**: CategoryBanner, CategoryMenuFilters, CategoryScroller, ProductGrid, FeaturedProducts
- **Quick View Modal**: Instant product preview with add-to-cart functionality (NEW! ⚡)
- **Snipcart Integration**: Fully integrated shopping cart with secure checkout
- **Advanced UI Components**: Custom CardGrid variations, ItemGrid layouts, ShopCollections widget
- **Product Management**: Integrated product content structure with custom product pages
- **Category System**: Dynamic category pages with filtering and navigation
- **Custom Widgets**: Tailored widgets for Announcement, CallToAction, Contact, and more

#### Content Structure
- **Articles System**: Dedicated articles content with advanced frontmatter support
- **Products System**: Complete product content type with category organization
- **Custom Layouts**: LandingLayout, specialized MarkdownLayout, and PageLayout variations
- **Navigation**: Enhanced navigation system with multi-level support

#### Upcoming Features 🚀
- **Enhanced Shopping Cart**: Advanced cart management with persistent state
- **Payment Gateway Expansion**: Multiple payment options and currencies
- **Inventory Management**: Real-time product availability tracking
- **Order Management**: Complete customer order tracking system
- **Customer Accounts**: User authentication and profile management
- **Product Reviews System**: Customer ratings and review functionality

#### Developer Experience
- **Docker Support**: Containerized development environment with docker-compose
- **Nginx Configuration**: Production-ready reverse proxy setup
- **DecapCMS Integration**: Headless CMS for content management
- **Custom Utilities**: Enhanced image optimization, frontmatter processing, and permalink generation
- **TypeScript Support**: Full type definitions for better development experience

<br>

![Art Of The Diligent Theme Screenshot](https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/screenshot-astrowind-1.0.png)

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-5.0-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)

[![DiligentMarketing.Solutions](https://custom-icon-badges.demolab.com/badge/Customized%20by-Diligent%20Marketing%20Solutions-556bf2?style=for-the-badge&logo=rocket&logoColor=white&labelColor=101827)](https://DiligentMarketing.Solutions)

**Production-Ready** • **E-commerce Ready** • **SEO Optimized** • **Docker Enabled** • **CMS Integrated**

</div>

<br>

<details open>
<summary>Table of Contents</summary>

- [What's New in This Version](#-whats-new-in-this-version)
- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 **The Art Of The Diligent** - Powered by Diligent Marketing Solutions

This is a production-ready implementation featuring custom enhancements for content management, product showcasing, and upcoming e-commerce capabilities.

<br>

## Getting started

**Art Of The Diligent** is a professionally customized version of AstroWind, enhanced by [Diligent Marketing Solutions](https://DiligentMarketing.Solutions) for optimal performance and business functionality. This version extends the original template with:

- **Custom shop components** for product display and categorization
- **Enhanced content management** for articles and products
- **Advanced UI components** for improved user experience
- **Docker containerization** for consistent development environments
- **DecapCMS integration** for easy content updates
- **Nginx configuration** for production deployment

Built on [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), it maintains the simplicity and high performance of the original while adding powerful business features.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.

In this version the template supports all the options in the `output` configuration, `static`, `hybrid` and `server`, but the blog only works with `prerender = true`. We are working on the next version and aim to make it fully compatible with SSR.

### Project structure

Inside **Art Of The Diligent** template, you'll see the following folders and files with custom enhancements:

```
/
├── public/
│   ├── _headers
│   ├── robots.txt
│   ├── decapcms/              # DecapCMS integration
│   │   ├── config.yml
│   │   └── index.html
│   └── rag/                   # Resource documentation
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   ├── videos/            # Video assets support
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/              # Blog-specific components
│   │   ├── common/            # Shared components
│   │   ├── shop/              # 🛍️ Shop components (NEW)
│   │   │   ├── CategoryBanner.astro
│   │   │   ├── CategoryMenuFilters.astro
│   │   │   ├── CategoryScroller.astro
│   │   │   ├── FeaturedProducts.astro
│   │   │   ├── ProductGrid.astro
│   │   │   ├── ProductQuickView.astro    # ⚡ Quick View Modal (NEW)
│   │   │   ├── SaleProducts.astro
│   │   │   ├── SnipcartBuyButton.astro
│   │   │   ├── SnipcartCart.astro
│   │   │   └── SnipcartProductGrid.astro
│   │   ├── ui/                # Enhanced UI components
│   │   │   ├── cardGrid.astro
│   │   │   ├── cardGrid2.astro
│   │   │   ├── ItemGrid.astro
│   │   │   ├── ItemGrid2.astro
│   │   │   ├── productGrid.astro
│   │   │   ├── ShopCollections.astro
│   │   │   └── ...
│   │   ├── widgets/           # Page widgets
│   │   │   ├── Header.astro
│   │   │   ├── Announcement.astro
│   │   │   ├── BlogLatestPosts.astro
│   │   │   ├── CallToAction.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── articles/          # 📝 Articles content (NEW)
│   │   ├── products/          # 🛍️ Products content (NEW)
│   │   └── config.ts
│   ├── data/
│   │   └── post/              # Blog posts data
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── LandingLayout.astro    # Custom landing pages
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── [category]/        # Dynamic category pages
│   │   ├── products/          # 🛍️ Product pages (NEW)
│   │   ├── homes/             # Multiple home page variants
│   │   ├── landing/           # Landing page templates
│   │   ├── index.astro
│   │   ├── shop.astro         # 🛍️ Shop page (NEW)
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services.astro
│   │   ├── pricing.astro
│   │   ├── 404.astro
│   │   └── rss.xml.ts
│   ├── utils/
│   │   ├── blog.ts
│   │   ├── directories.ts
│   │   ├── frontmatter.ts
│   │   ├── images-optimization.ts
│   │   ├── images.ts
│   │   ├── permalinks.ts
│   │   └── utils.ts
│   ├── config.yaml
│   └── navigation.ts
├── nginx/                     # 🐳 Nginx configuration (NEW)
│   └── nginx.conf
├── vendor/                    # Custom integrations
│   ├── integration/
│   └── README.md
├── docker-compose.yml         # 🐳 Docker setup (NEW)
├── Dockerfile                 # 🐳 Container config (NEW)
├── netlify.toml
├── vercel.json
├── package.json
├── astro.config.ts
├── tailwind.config.js
└── tsconfig.json
```

**Key Differences from Standard AstroWind:**
- ✨ **Shop Components**: Complete set of components for e-commerce functionality
- ✨ **Product Content Type**: Structured product management with categories
- ✨ **Articles vs Posts**: Separated articles and blog posts for better content organization
- ✨ **Docker Support**: Containerized development and deployment
- ✨ **DecapCMS**: Integrated headless CMS for non-technical content updates
- ✨ **Enhanced Utilities**: Advanced image optimization and content processing

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/artofthediligent.git
   cd artofthediligent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access DecapCMS** (optional)
   Navigate to `http://localhost:4321/decapcms/` to manage content

5. **Docker development** (optional)
   ```bash
   docker-compose up
   ```

[![Edit Art Of The Diligent on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/astrowind/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/onwidget/astrowind) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/onwidget/astrowind)

<br>

### Commands

All commands are run from the root of the project, from a terminal:

#### Development Commands

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:4321`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run check`       | Check your project for errors                      |
| `npm run fix`         | Run Eslint and format codes with Prettier          |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

#### Docker Commands (🐳 Enhanced)

| Command                   | Action                                         |
| :------------------------ | :--------------------------------------------- |
| `docker-compose up`       | Start the development environment in Docker    |
| `docker-compose up -d`    | Start Docker containers in background          |
| `docker-compose down`     | Stop and remove Docker containers              |
| `docker-compose build`    | Rebuild Docker images                          |
| `docker-compose logs -f`  | Follow Docker container logs                   |

#### Content Management

- Access **DecapCMS** at `http://localhost:4321/decapcms/` when dev server is running
- Edit products in `src/content/products/`
- Edit articles in `src/content/articles/`
- Edit blog posts in `src/data/post/`

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

This enhanced version includes additional configuration options for shop functionality:

```yaml
site:
  name: 'Art Of The Diligent'
  site: 'https://artofthediligent.com'
  base: '/' # Change this if you need to deploy to Github Pages
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or your verification ID

# Default SEO metadata
metadata:
  title:
    default: 'Art Of The Diligent'
    template: '%s — Art Of The Diligent'
  description: 'Your description here'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Art Of The Diligent'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@your_handle'
    site: '@your_handle'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true
    postsPerPage: 6

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path
      robots:
        index: false

    isRelatedPostsEnabled: true
    relatedPostsCount: 4

  # 🛍️ Shop Configuration (Enhanced)
  shop:
    isEnabled: true
    productsPerPage: 12
    enableFilters: true
    enableSort: true
    # Cart features coming soon!

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

## Roadmap

### 🛍️ E-Commerce Features

#### ✅ Completed Features
- [x] **Quick View Modal**: Instant product preview with add-to-cart
- [x] **Snipcart Integration**: Shopping cart and secure checkout
- [x] **Product Display**: Advanced grid layouts and featured products
- [x] **Category System**: Navigation, filtering, and sorting
- [x] **Product Pages**: Detailed pages with variant selection
- [x] **Responsive Design**: Mobile-optimized shopping experience

#### Phase 1: Enhanced Shopping Experience (In Progress)
- [ ] **Cart Enhancements**: Persistent cart state across sessions
- [ ] **Wishlist Feature**: Save products for later purchase
- [ ] **Product Comparison**: Side-by-side product comparison
- [ ] **Recently Viewed**: Track and display recently viewed products
- [ ] **Smart Recommendations**: AI-powered product suggestions

#### Phase 2: Customer Engagement
- [ ] **Product Reviews**: Customer ratings and feedback system
- [ ] **Customer Accounts**: User registration and login
- [ ] **Order History**: Track past purchases and reorder
- [ ] **Email Notifications**: Order confirmations and shipping updates
- [ ] **Newsletter Integration**: Automated email campaigns

#### Phase 3: Advanced Analytics & Management
- [ ] **Admin Dashboard**: Order and product management interface
- [ ] **Sales Analytics**: Revenue tracking and conversion metrics
- [ ] **Inventory Management**: Real-time stock tracking and alerts
- [ ] **Customer Insights**: Behavioral analytics and segmentation
- [ ] **Multi-currency Support**: International pricing and checkout

### Current Shop Features ✅
- **Product Display**: Advanced ProductGrid and FeaturedProducts components
- **Quick View Modal**: Instant product preview without leaving the page ⚡
  - Product image, title, and pricing
  - Color and size selection
  - Add to cart functionality
  - Quick link to full product details
  - Smooth animations and responsive design
- **Snipcart Integration**: Fully functional shopping cart and checkout
- **Category Navigation**: Category-based browsing and filtering
- **Product Pages**: Detailed product information with variants
- **Category Filtering**: Advanced filtering and sorting options
- **Responsive Layouts**: Mobile-first design for all devices
- **Sale Badges**: Automatic sale percentage display
- **Featured Products**: Highlight specific products on homepage

<br>

## Frequently Asked Questions

### About This Version

**Q: What makes this different from standard AstroWind?**  
A: This is a professionally customized version by Diligent Marketing Solutions featuring shop components, product management, DecapCMS integration, Docker support, and upcoming e-commerce functionality.

**Q: Can I use this for my own project?**  
A: Yes! This template is open source under the MIT license. However, it's specifically tailored for The Art Of The Diligent brand, so you may need to customize branding and content.

**Q: What is the Quick View feature?**  
A: The Quick View modal allows users to preview products instantly without navigating away from the current page. Users can see product details, select options (color/size), and add items to cart—all in a beautiful modal overlay. This improves the shopping experience by reducing page loads and keeping users engaged.

**Q: Is the shop functional?**  
A: Yes! The shop includes working product displays, Snipcart integration for cart and checkout, category filtering, and the new Quick View feature. Users can browse products, add them to cart, and complete purchases securely through Snipcart.

**Q: Can I add products without coding?**  
A: Yes! This version includes DecapCMS integration for easy content management. You can add and edit products through the CMS interface.

### Technical Questions

**Q: What version of Astro does this use?**  
A: This template is built on Astro 5.0 with full support for the latest features.

**Q: Does this support SSR (Server-Side Rendering)?**  
A: The template supports static, hybrid, and server output modes. However, the blog currently requires `prerender = true`. Full SSR compatibility is planned for future releases.

**Q: Can I deploy this to my preferred hosting?**  
A: Yes! The template includes configurations for Netlify, Vercel, Docker, and traditional hosting with Nginx. See the [Deploy](#deploy-to-production-manual) section for details.

**Q: How do I update product information?**  
A: Products are managed through markdown files in `src/content/products/` or via the DecapCMS interface at `/decapcms/`.

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

This is a custom implementation for **The Art Of The Diligent** by Diligent Marketing Solutions. While this repository showcases our customizations, we welcome:

- 🐛 **Bug Reports**: If you find issues, please open an issue with detailed information
- 💡 **Feature Suggestions**: Share ideas for improvements or new features
- 📝 **Documentation**: Help improve or clarify documentation
- 🔧 **Bug Fixes**: Submit pull requests for bug fixes

For major changes or custom development inquiries, please contact [Diligent Marketing Solutions](https://DiligentMarketing.Solutions).

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow existing code style and formatting
- Test changes locally before submitting
- Update documentation as needed
- Ensure all builds pass without errors

<br>

**Art Of The Diligent** is a custom enhanced version developed by [Diligent Marketing Solutions](https://DiligentMarketing.Solutions) for The Art Of The Diligent brand.

Based on the excellent [AstroWind](https://github.com/onwidget/astrowind) template, originally created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

### Custom Development by Diligent Marketing Solutions
- Shop and e-commerce components with Quick View functionality
- Snipcart integration for cart and checkout
- Product management system with advanced filtering
- Enhanced UI components with interactive modals
- Docker containerization for consistent deployments
- DecapCMS integration for content management
- Advanced content architecture and routing
- Mobile-first responsive design implementation

### Built With
- [Astro 5.0](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DecapCMS](https://decapcms.org/) - Git-based headless CMS
- [MDX](https://mdxjs.com/) - Markdown for the component era

<br>

## License

**Art Of The Diligent** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
