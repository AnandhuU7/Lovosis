import { z, defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        }),
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        btnTitle: z.string(),
        btnURL: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        }),
      ),
      specificationsLeft: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        }),
      ),
      specificationsRight: z
        .array(
          z.object({
            title: z.string(),
            subTitle: z.string(),
          }),
        )
        .optional(),
      tableData: z
        .array(
          z.object({
            feature: z.array(z.string()),
            description: z.array(z.array(z.string())),
          }),
        )
        .optional(),
      blueprints: z.object({
        first: image().optional(),
        second: image().optional(),
      }),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(z.string()),
      author: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

const eventCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      name: z.string(),
      title: z.string(),
      subTitle: z.string(),
      description: z.string(),
      location: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      videoClip: z.string().optional(),
      startDate: z.date(),
      endDate: z.date(),
      eventImage: image(),
      eventImageAlt: z.string(),
      readTime: z.number(),
      titleOne: z.string(),
      descriptionOne: z.string(),
      imageOne: image(),
      titleTwo: z.string(),
      descriptionTwo: z.string(),
      imageTwo: image(),
      titleThree: z.string(),
      descriptionThree: z.string(),
      imageThree: image(),
      titleFour: z.string(),
      descriptionFour: z.string(),
      imageFour: image(),
      tags: z.array(z.string()).optional(),
      address: z.array(z.string()).optional(),
      contents: z.array(z.string()),
    }),
});

const contentCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      desc: z.string(), 
      img: image(),
      alt: z.string(),
      publishedTime: z.string(), 
      modifiedTime: z.string().optional(), 
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  products: productsCollection,
  blog: blogCollection,
  event: eventCollection,
  content: contentCollection
};
