import { createFileRoute, Link } from "@tanstack/react-router";
import { allArticles } from "content-collections";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

const PAGE_SIZE = 10;

const articlesNewestFirst = [...allArticles].sort((left, right) => {
  return new Date(right.date).getTime() - new Date(left.date).getTime();
});

type ArticlesIndexSearch = {
  tag?: string;
  page: number;
};

function parseArticlesSearch(raw: unknown): ArticlesIndexSearch {
  const record =
    raw && typeof raw === "object" && !Array.isArray(raw)
      ? (raw as Record<string, unknown>)
      : {};

  const tag =
    typeof record.tag === "string" && record.tag.trim() !== ""
      ? record.tag.trim()
      : undefined;

  let page = 1;
  const rawPage = record.page;
  if (typeof rawPage === "number" && Number.isFinite(rawPage)) {
    page = Math.max(1, Math.floor(rawPage));
  } else if (typeof rawPage === "string" && rawPage.trim() !== "") {
    const parsed = Number.parseInt(rawPage, 10);
    if (Number.isFinite(parsed)) {
      page = Math.max(1, parsed);
    }
  }

  return { tag, page };
}

function visiblePages(current: number, total: number): (number | "gap")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const set = new Set<number>();
  set.add(1);
  set.add(total);
  for (let delta = -1; delta <= 1; delta++) {
    const candidate = current + delta;
    if (candidate >= 1 && candidate <= total) {
      set.add(candidate);
    }
  }

  const sorted = [...set].sort((left, right) => left - right);
  const out: (number | "gap")[] = [];
  let previous = 0;

  for (const value of sorted) {
    if (value - previous > 1) {
      out.push("gap");
    }
    out.push(value);
    previous = value;
  }

  return out;
}

export const Route = createFileRoute("/articles/")({
  validateSearch: parseArticlesSearch,
  head: () => ({
    meta: [
      {
        title: "Articles - E23.DEV",
      },
    ],
  }),
  component: Articles,
});

function Articles() {
  const { tag, page } = Route.useSearch();

  const tags = [
    ...new Set(articlesNewestFirst.flatMap((article) => article.tags ?? [])),
  ].sort((left, right) => left.localeCompare(right, "zh-CN"));

  const filtered = articlesNewestFirst.filter((article) => {
    if (tag && !(article.tags ?? []).includes(tag)) {
      return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pageArticles = filtered.slice(start, start + PAGE_SIZE);

  const searchBase: Pick<ArticlesIndexSearch, "tag"> = tag ? { tag } : {};

  const pageSearch = (nextPage: number): ArticlesIndexSearch => ({
    ...searchBase,
    page: nextPage,
  });

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
      {tags.length > 0 && (
        <div className="mb-8 space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge
              asChild
              variant={!tag ? "default" : "outline"}
              className="cursor-pointer"
            >
              <Link to="/articles" search={{ page: 1 }}>
                All
              </Link>
            </Badge>
            {tags.map((item) => (
              <Badge
                key={item}
                asChild
                variant={tag === item ? "default" : "outline"}
                className="cursor-pointer"
              >
                <Link to="/articles" search={{ tag: item, page: 1 }}>
                  {item}
                </Link>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {pageArticles.map((article) => (
          <div
            key={article.slug}
            className="border bg-card/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-500"
          >
            <Link
              to="/articles/$slug"
              params={{ slug: article.slug }}
              className="group"
            >
              {article.coverImage && (
                <img
                  src={article.coverImage}
                  alt={article.title}
                  draggable={false}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )}

              <h2 className="text-2xl font-bold mb-2 transition-colors">
                {article.title}
              </h2>
            </Link>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("zh-CN")}
              </time>
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((item) => (
                    <Badge key={item} asChild variant="outline">
                      <Link to="/articles" search={{ tag: item, page: 1 }}>
                        {item}
                      </Link>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {article.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {article.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No articles like that.
          </p>
          {tag && (
            <Link
              to="/articles"
              search={{ page: 1 }}
              className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              清除筛选
            </Link>
          )}
        </div>
      )}

      {filtered.length > PAGE_SIZE && (
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              {safePage <= 1 ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="pointer-events-none pl-1.5! opacity-50"
                  aria-disabled
                >
                  <ChevronLeftIcon
                    data-icon="inline-start"
                    className="cn-rtl-flip size-4"
                  />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
              ) : (
                <Button asChild variant="ghost" size="sm" className="pl-1.5!">
                  <Link
                    to="/articles"
                    search={pageSearch(safePage - 1)}
                    aria-label="Previous"
                  >
                    <ChevronLeftIcon
                      data-icon="inline-start"
                      className="cn-rtl-flip size-4"
                    />
                    <span className="hidden sm:inline">Previous</span>
                  </Link>
                </Button>
              )}
            </PaginationItem>

            {visiblePages(safePage, totalPages).map((item, index) =>
              item === "gap" ? (
                <PaginationItem key={`gap-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item}>
                  <Button
                    asChild
                    variant={item === safePage ? "outline" : "ghost"}
                    size="sm"
                  >
                    <Link
                      to="/articles"
                      search={pageSearch(item)}
                      aria-current={item === safePage ? "page" : undefined}
                    >
                      {item}
                    </Link>
                  </Button>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              {safePage >= totalPages ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="pointer-events-none pr-1.5! opacity-50"
                  aria-disabled
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRightIcon
                    data-icon="inline-end"
                    className="cn-rtl-flip size-4"
                  />
                </Button>
              ) : (
                <Button asChild variant="ghost" size="sm" className="pr-1.5!">
                  <Link
                    to="/articles"
                    search={pageSearch(safePage + 1)}
                    aria-label="Next"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRightIcon
                      data-icon="inline-end"
                      className="cn-rtl-flip size-4"
                    />
                  </Link>
                </Button>
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
