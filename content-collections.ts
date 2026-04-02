import { defineCollection, defineConfig } from "@content-collections/core";
import matter from "gray-matter";
import { z } from "zod";
import { resolveArticleAssetUrl } from "./src/utils/article-assets";

function excerptFromBody(body: string) {
  const { excerpt } = matter(body, { excerpt: true });
  return typeof excerpt === "string" ? excerpt : "";
}

const articles = defineCollection({
  name: "articles",
  directory: "./articles",
  include: "**/*.md",
  exclude: ["**/README.md"],
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: ({ content, ...article }) => {
    const slug =
      article._meta.fileName.replace(/\.md$/i, "") === "index"
        ? article._meta.directory || article._meta.path
        : article._meta.path.split("/").pop()?.replace(/\.md$/i, "") ||
          article._meta.path;

    const coverImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const coverSrc = coverImageMatch?.[2]?.trim();
    const coverImage = coverSrc
      ? resolveArticleAssetUrl(slug, coverSrc)
      : undefined;

    return {
      ...article,
      slug,
      excerpt: excerptFromBody(content),
      coverImage,
      content,
    };
  },
});

export default defineConfig({
  content: [articles],
});
