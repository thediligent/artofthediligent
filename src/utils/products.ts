import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type Product = CollectionEntry<'products'>;

export interface ProductFilter {
  collection?: string;
  tag?: string;
  featured?: boolean;
  onSale?: boolean;
  inStock?: boolean;
  minPrice?: number;
  maxPrice?: number;
}

export interface ProductSort {
  field: 'price' | 'title' | 'rating' | 'featured';
  order: 'asc' | 'desc';
}

/**
 * Fetch all products from the collection
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const products = await getCollection('products');
  return products.filter((product) => product.data.inStock !== false);
};

/**
 * Filter products based on criteria
 */
export const filterProducts = (products: Product[], filter: ProductFilter): Product[] => {
  let filtered = [...products];

  if (filter.collection) {
    filtered = filtered.filter((p) => p.data.collection === filter.collection);
  }

  if (filter.tag) {
    // Type narrowing doesn't work perfectly here, so we use non-null assertion
    filtered = filtered.filter((p) => p.data.tags.includes(filter.tag!));
  }

  if (filter.featured !== undefined) {
    filtered = filtered.filter((p) => p.data.featured === filter.featured);
  }

  if (filter.onSale !== undefined) {
    filtered = filtered.filter((p) => p.data.onSale === filter.onSale);
  }

  if (filter.inStock !== undefined) {
    filtered = filtered.filter((p) => p.data.inStock === filter.inStock);
  }

  if (filter.minPrice !== undefined) {
    filtered = filtered.filter((p) => {
      const price = p.data.onSale && p.data.salePrice ? p.data.salePrice : p.data.price;
      return price >= filter.minPrice!;
    });
  }

  if (filter.maxPrice !== undefined) {
    filtered = filtered.filter((p) => {
      const price = p.data.onSale && p.data.salePrice ? p.data.salePrice : p.data.price;
      return price <= filter.maxPrice!;
    });
  }

  return filtered;
};

/**
 * Sort products
 */
export const sortProducts = (products: Product[], sort: ProductSort): Product[] => {
  const sorted = [...products];

  sorted.sort((a, b) => {
    let aValue: number | string;
    let bValue: number | string;

    switch (sort.field) {
      case 'price':
        aValue = a.data.onSale && a.data.salePrice ? a.data.salePrice : a.data.price;
        bValue = b.data.onSale && b.data.salePrice ? b.data.salePrice : b.data.price;
        break;
      case 'title':
        aValue = a.data.title;
        bValue = b.data.title;
        break;
      case 'rating':
        aValue = a.data.rating || 0;
        bValue = b.data.rating || 0;
        break;
      case 'featured':
        aValue = a.data.featured ? 1 : 0;
        bValue = b.data.featured ? 1 : 0;
        break;
      default:
        return 0;
    }

    if (sort.order === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  return sorted;
};

/**
 * Get featured products
 */
export const getFeaturedProducts = async (limit?: number): Promise<Product[]> => {
  const products = await fetchProducts();
  const featured = filterProducts(products, { featured: true });
  return limit ? featured.slice(0, limit) : featured;
};

/**
 * Get products on sale
 */
export const getSaleProducts = async (limit?: number): Promise<Product[]> => {
  const products = await fetchProducts();
  const onSale = filterProducts(products, { onSale: true });
  return limit ? onSale.slice(0, limit) : onSale;
};

/**
 * Get products by collection
 */
export const getProductsByCollection = async (collection: string, limit?: number): Promise<Product[]> => {
  const products = await fetchProducts();
  const filtered = filterProducts(products, { collection });
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Get all unique collections
 */
export const getCollections = async (): Promise<string[]> => {
  const products = await fetchProducts();
  const collections = [...new Set(products.map((p) => p.data.collection))];
  return collections.sort();
};

/**
 * Get all unique tags
 */
export const getTags = async (): Promise<string[]> => {
  const products = await fetchProducts();
  const tags = [...new Set(products.flatMap((p) => p.data.tags))];
  return tags.sort();
};

/**
 * Get all unique colors
 */
export const getColors = async (): Promise<{ name: string; class: string; hex?: string }[]> => {
  const products = await fetchProducts();
  const colorsMap = new Map<string, { name: string; class: string; hex?: string }>();

  products.forEach((p) => {
    if (p.data.colors) {
      p.data.colors.forEach((color) => {
        if (!colorsMap.has(color.name)) {
          colorsMap.set(color.name, color);
        }
      });
    }
  });

  return Array.from(colorsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Get all unique sizes
 */
export const getSizes = async (): Promise<string[]> => {
  const products = await fetchProducts();
  const sizes = [...new Set(products.flatMap((p) => p.data.sizes || []))];
  // Custom sort for sizes (XXS, XS, S, M, L, XL, XXL, etc.)
  const sizeOrder = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  return sizes.sort((a, b) => {
    const aIndex = sizeOrder.indexOf(a);
    const bIndex = sizeOrder.indexOf(b);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.localeCompare(b);
  });
};

/**
 * Get product by slug
 */
export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  const products = await fetchProducts();
  return products.find((p) => p.slug === slug);
};

/**
 * Get related products (same collection, excluding current product)
 */
export const getRelatedProducts = async (product: Product, limit: number = 4): Promise<Product[]> => {
  const products = await fetchProducts();
  const related = products.filter(
    (p) => p.data.collection === product.data.collection && p.id !== product.id
  );
  return related.slice(0, limit);
};
