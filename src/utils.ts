import type { CollectionEntry } from "astro:content";

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
