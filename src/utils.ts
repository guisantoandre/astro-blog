import { getCollection, type CollectionEntry } from "astro:content";

export function formatDate(date: Date): string {
   return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
   });
}

export function sortByDate(articles: CollectionEntry<"articles">[]) {
   return articles.sort(
      (a: CollectionEntry<"articles">, b: CollectionEntry<"articles">) => {
         return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
      },
   );
}

export async function getAllArticles(): Promise<CollectionEntry<"articles">[]> {
   const allArticles = (await getCollection(
      "articles",
   )) as CollectionEntry<"articles">[];

   return sortByDate(allArticles);
}

// Filter articles based on query
export function searchResults(
   articles: CollectionEntry<"articles">[],
   query: string | null,
): CollectionEntry<"articles">[] {
   if (!query) return articles;

   const queryLower = query;

   return articles.filter((article) => {
      const titleMatch = article.data.title.toLowerCase().includes(queryLower);

      const bodyMatch = article.body?.toLowerCase().includes(queryLower);

      const tagMatch = article.data.tags.some((tag) =>
         tag.toLowerCase().includes(queryLower),
      );

      return titleMatch || bodyMatch || tagMatch;
   });
}

// export function captalize(str: string): string {
//    return str.charAt(0).toUpperCase() + str.slice(1);
// }
