export interface NewsArticle {
  title: string;
  author: string;
  url: string;
  publishedAt: string;
  description?: string | null;
  source?: string | null;
}
