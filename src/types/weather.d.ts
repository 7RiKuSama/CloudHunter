export interface Suggestion {
    country: string | null;
    city: string | null;
    county: string | null;
    formatted: string | null;
  }

export interface NewsArticleProps {
    title: string;
    publishedAt: string;
    source: string;
    url: string;
    description: string;
    image: string;
    content: string
}