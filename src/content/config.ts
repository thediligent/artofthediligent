import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});
// Article Schema
const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    draft: z.boolean().optional(),
    category: z.enum(['News', 'Fashion', 'Culture', 'Architecture', 'Art', 'Music', 'Featured Artists', 'Magazine Issues']),
    tags: z.array(z.string()),
    author: z.string(),
    date: z.date().optional(),
    image: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
        })
      )
      .optional(),
  }),
});
// Product Schema
const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    collection: z.enum(['Apparel', 'Books', 'Magazines', 'Music', 'Posters', 'Journals', 'Mugs', 'Mousepads']),
    tags: z.array(z.string()),
    price: z.number(),
    salePrice: z.number().optional(),
    onSale: z.boolean().default(false),
    salePercent: z.number().optional(),
    size: z.string().optional(),
    sizes: z.array(z.string()).optional(),
    colors: z.array(z.object({
      name: z.string(),
      class: z.string(),
      hex: z.string().optional(),
    })).optional(),
    rating: z.number().optional(),
    reviewCount: z.number().optional(),
    images: z.array(z.string()).optional(),
    image: z.string(),
    description: z.string(),
    fabricCare: z.array(z.string()).optional(),
    productDetails: z.array(z.string()).optional(),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  post: postCollection,
  articles: articleCollection,
  products: productCollection,
};

