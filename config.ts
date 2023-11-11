import { z, defineCollection } from "astro:content";

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    extract: z.string().optional(),
    tags: z.string().optional(),
    authors: z.string().optional(),
    contributors: z.string().optional(),
    reviewers: z.string().optional(),
    dateCreated: z.string().optional(),
    dateLastReview: z.string().optional(),
    dateNextReview: z.string().optional(),
    dateLatestRealease: z.string().optional(),
    version: z.string().optional(),
    isDraft: z.boolean().optional(),
    isPublished: z.boolean().optional(),
  }),
});

const communityCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    extract: z.string().optional(),
    tags: z.string().optional(),
    authors: z.string().optional(),
    contributors: z.string().optional(),
    reviewers: z.string().optional(),
    dateCreated: z.string().optional(),
    dateLastReview: z.string().optional(),
    dateNextReview: z.string().optional(),
    dateLatestRealease: z.string().optional(),
    version: z.string().optional(),
    isDraft: z.boolean().optional(),
    isPublished: z.boolean().optional(),
  }),
});

const contributeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    extract: z.string().optional(),
    tags: z.string().optional(),
    authors: z.string().optional(),
    contributors: z.string().optional(),
    reviewers: z.string().optional(),
    dateCreated: z.string().optional(),
    dateLastReview: z.string().optional(),
    dateNextReview: z.string().optional(),
    dateLatestRealease: z.string().optional(),
    version: z.string().optional(),
    isDraft: z.boolean().optional(),
    isPublished: z.boolean().optional(),
  }),
});

const contributorCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const glossaryCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const packagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    extract: z.string().optional(),
    tags: z.string().optional(),
    authors: z.string().optional(),
    contributors: z.string().optional(),
    reviewers: z.string().optional(),
    dateCreated: z.string().optional(),
    dateLastReview: z.string().optional(),
    dateNextReview: z.string().optional(),
    dateLatestRealease: z.string().optional(),
    version: z.string().optional(),
    isDraft: z.boolean().optional(),
    isPublished: z.boolean().optional(),
  }),
});

const supportCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    extract: z.string().optional(),
    tags: z.string().optional(),
    authors: z.string().optional(),
    contributors: z.string().optional(),
    reviewers: z.string().optional(),
    dateCreated: z.string().optional(),
    dateLastReview: z.string().optional(),
    dateNextReview: z.string().optional(),
    dateLatestRealease: z.string().optional(),
    version: z.string().optional(),
    isDraft: z.boolean().optional(),
    isPublished: z.boolean().optional(),
  }),
});

export const collections = {
  "about": aboutCollection,
  "community": communityCollection,
  "contribute": contributeCollection,
  "contributor": contributorCollection,
  "glossary": glossaryCollection,
  "news": newsCollection,
  "packages": packagesCollection,
  "support": supportCollection,
};
