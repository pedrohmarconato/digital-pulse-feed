
export type Language = 'en' | 'pt';

export type Topic = 
  | 'all'
  | 'marketing'
  | 'crm'
  | 'business'
  | 'data-analytics'
  | 'social-media';

export type NewsSource = 'linkedin' | 'academic' | 'blog';

export type Region = 'international' | 'brazil';

export interface EngagementMetrics {
  likes?: number;
  comments?: number;
  shares?: number;
  citations?: number;
  views?: number;
}

export interface Author {
  name: string;
  title?: string;
  institution?: string;
  avatar?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: NewsSource;
  author: Author;
  url: string;
  publishedAt: string;
  topics: Topic[];
  language: Language;
  region: Region;
  engagement: EngagementMetrics;
  imageUrl?: string;
}
