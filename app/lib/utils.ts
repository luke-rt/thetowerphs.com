const categories = new Map<string, string>([
  ["news-features", "News & Features"],
  ["opinions", "Opinions"],
  ["vanguard", "Vanguard"],
  ["arts-entertainment", "Arts & Entertainment"],
  ["sports", "Sports"],
]);

export function expandCategorySlug(slug: string) {
  return categories.get(slug);
}
