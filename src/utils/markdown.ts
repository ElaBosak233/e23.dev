import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import {
  type BundledLanguage,
  type BundledTheme,
  type HighlighterGeneric,
  createHighlighter as shikiCreateHighlighter,
} from "shiki";
import { unified } from "unified";

export type MarkdownResult = {
  markup: string;
};

let highlighterSingleton: Promise<
  HighlighterGeneric<BundledLanguage, BundledTheme>
> | null = null;

function getHighlighter(): Promise<
  HighlighterGeneric<BundledLanguage, BundledTheme>
> {
  highlighterSingleton ??= shikiCreateHighlighter({
    themes: ["github-dark", "github-light"],
    langs: [
      "javascript",
      "typescript",
      "markdown",
      "rust",
      "python",
      "php",
      "bash",
      "json",
      "yaml",
    ],
  });
  return highlighterSingleton;
}

export async function renderMarkdown(content: string): Promise<MarkdownResult> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      grid: true,
      theme: {
        dark: "github-dark",
        light: "github-light",
      },
      getHighlighter: () => getHighlighter(),
      keepBackground: false,
      bypassInlineCode: false,
    } satisfies RehypePrettyCodeOptions)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["anchor"] },
    })
    .use(rehypeStringify)
    .process(content);

  return {
    markup: String(result),
  };
}
