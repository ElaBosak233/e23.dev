import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allArticles } from "content-collections";
import { Badge } from "@/components/ui/badge";
import { MarkdownRender } from "@/components/ui/markdown-render";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils";

type Article = (typeof allArticles)[number];

export const Route = createFileRoute("/articles/$slug")({
  head: ({ loaderData }: { loaderData?: Article }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.title} - E23.DEV`,
          },
          {
            name: "description",
            content: loaderData.description || loaderData.excerpt,
          },
        ]
      : [],
  }),
  loader: ({ params }): Article => {
    const article = allArticles.find(
      (candidate: Article) => candidate.slug === params.slug
    );

    if (!article) {
      throw notFound();
    }

    return article;
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const article = Route.useLoaderData() as Article;

  return (
    <section
      className={cn([
        "flex-1",
        "mx-auto",
        "w-full",
        "max-w-4xl",
        "px-6",
        "md:px-10",
        "lg:px-12",
        "py-10",
        "md:py-12",
        "xl:py-16",
      ])}
    >
      {/* Article Header */}
      <header className="mb-8">
        {article.coverImage && (
          <img
            src={article.coverImage}
            alt={article.title}
            draggable={false}
            className="w-full h-96 object-cover rounded-2xl mb-6"
          />
        )}

        <h1 className="text-5xl font-bold mb-3">{article.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pb-6 border-b">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString()}
          </time>

          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tagItem) => (
                <Badge key={tagItem} asChild variant="outline">
                  <Link to="/articles" search={{ tag: tagItem, page: 1 }}>
                    {tagItem}
                  </Link>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </header>

      <Typography>
        <MarkdownRender articleSlug={article.slug} content={article.content} />
      </Typography>
    </section>
  );
}
