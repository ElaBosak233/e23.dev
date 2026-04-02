import { Link, useNavigate } from "@tanstack/react-router";
import parse, {
  type DOMNode,
  domToReact,
  Element,
  type HTMLReactParserOptions,
} from "html-react-parser";
import { useEffect, useState } from "react";
import { resolveArticleAssetUrl } from "@/utils/article-assets";
import { type MarkdownResult, renderMarkdown } from "@/utils/markdown";

const hashScrollOpts = { behavior: "smooth" as const, block: "start" as const };

function scrollToHeadingId(id: string) {
  document.getElementById(id)?.scrollIntoView(hashScrollOpts);
}

type MarkdownRenderProps = {
  content: string;
  /** Used to fix relative `./assets/...` image paths from the article folder. */
  articleSlug?: string;
};

function renderInternalLink(
  href: string,
  children: DOMNode[],
  options: HTMLReactParserOptions
) {
  const hashIndex = href.indexOf("#");
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex + 1) : undefined;

  if (hash !== undefined && hash.length > 0) {
    return (
      <Link
        to={path || "/"}
        hash={hash}
        resetScroll={false}
        hashScrollIntoView={hashScrollOpts}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {domToReact(children, options)}
      </Link>
    );
  }

  return (
    <Link
      to={path}
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {domToReact(children, options)}
    </Link>
  );
}

export function MarkdownRender({ content, articleSlug }: MarkdownRenderProps) {
  const navigate = useNavigate();
  const [result, setResult] = useState<MarkdownResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);
    renderMarkdown(content)
      .then((res) => {
        if (!cancelled) {
          setResult(res);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("渲染失败");
          setResult(null);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [content]);

  useEffect(() => {
    if (!result) {
      return;
    }
    const applyHashScroll = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) {
        return;
      }
      scrollToHeadingId(decodeURIComponent(raw));
    };
    const frame = requestAnimationFrame(applyHashScroll);
    const onHashChange = () => {
      applyHashScroll();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [result]);

  if (isLoading) {
    return <span className="text-muted-foreground">加载中…</span>;
  }

  if (error) {
    return <span className="text-red-600 dark:text-red-500">{error}</span>;
  }

  if (!result) {
    return <span className="text-muted-foreground">无法加载内容</span>;
  }

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === "a") {
          const href = domNode.attribs.href;
          if (!href) {
            return;
          }
          if (href.startsWith("#")) {
            const fragment = href.slice(1);
            const id = fragment ? decodeURIComponent(fragment) : "";
            return (
              <a
                href={href}
                className={domNode.attribs.class}
                onClick={(event) => {
                  event.preventDefault();
                  if (!id) {
                    return;
                  }
                  void navigate({
                    hash: id,
                    replace: true,
                    resetScroll: false,
                    hashScrollIntoView: hashScrollOpts,
                  });
                }}
              >
                {domToReact(domNode.children as DOMNode[], options)}
              </a>
            );
          }
          if (href.startsWith("/") && !href.startsWith("//")) {
            return renderInternalLink(
              href,
              domNode.children as DOMNode[],
              options
            );
          }
          return (
            <a
              href={href}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {domToReact(domNode.children as DOMNode[], options)}
            </a>
          );
        }

        if (domNode.name === "img" && articleSlug) {
          const src = domNode.attribs.src;
          const resolved = resolveArticleAssetUrl(articleSlug, src);
          return (
            <img
              {...domNode.attribs}
              src={resolved}
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md max-w-full h-auto my-4"
              alt={domNode.attribs.alt || ""}
            />
          );
        }

        if (domNode.name === "img") {
          return (
            <img
              {...domNode.attribs}
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md max-w-full h-auto my-4"
              alt={domNode.attribs.alt || ""}
            />
          );
        }
      }
    },
  };

  return parse(result.markup, options);
}
