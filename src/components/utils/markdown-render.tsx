import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeToc, {
    HtmlElementNode,
    Options as RehypeTocOptions,
} from "@jsdevtools/rehype-toc";
import rehypeAutolinkHeadings, {
    Options as RehypeAutolinkHeadingsOptions,
} from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode, {
    Options as RehyptPrettyCodeOptions,
} from "rehype-pretty-code";

type MarkdownRenderProps = {
    src: string;
    headingAnchors?: boolean;
    setToc?: (toc: HtmlElementNode) => void;
};

function MarkdownRender(props: MarkdownRenderProps) {
    const { src, headingAnchors = true, setToc } = props;

    const rehypePlugins: Array<any> = [rehypeKatex, rehypeSlug];

    if (headingAnchors) {
        rehypePlugins.push([
            rehypeAutolinkHeadings,
            {
                behavior: "wrap",
            } satisfies RehypeAutolinkHeadingsOptions,
        ]);
    }

    if (setToc) {
        rehypePlugins.push([
            rehypeToc,
            {
                headings: ["h2", "h3"],
                customizeTOC: (toc) => {
                    setToc(toc);
                    return false;
                },
            } satisfies RehypeTocOptions,
        ]);
    }

    rehypePlugins.push([
        rehypePrettyCode,
        {
            grid: true,
            theme: {
                dark: "github-dark",
                light: "github-light",
            },
            keepBackground: false,
            bypassInlineCode: false,
        } satisfies RehyptPrettyCodeOptions,
    ]);

    rehypePlugins.push(rehypeStringify);

    return (
        <MDXRemote
            source={src}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkMath, remarkParse],
                    rehypePlugins: rehypePlugins,
                },
            }}
        />
    );
}

export { MarkdownRender };
