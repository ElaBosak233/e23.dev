const ABSOLUTE_OR_SPECIAL = /^(?:https?:\/\/|\/\/|data:|mailto:|tel:|#)/i;

/**
 * Turn `./assets/foo.png` (relative to an article folder) into a URL served
 * from `/articles/<slug>/assets/...` by the Nitro route.
 */
export function resolveArticleAssetUrl(
  articleSlug: string,
  src: string | undefined
): string | undefined {
  if (!src?.trim()) {
    return src;
  }
  const trimmed = src.trim();
  if (ABSOLUTE_OR_SPECIAL.test(trimmed) || trimmed.startsWith("/")) {
    return trimmed;
  }
  const path = trimmed.replace(/^\.\//, "");
  return `/articles/${articleSlug}/${path}`;
}
