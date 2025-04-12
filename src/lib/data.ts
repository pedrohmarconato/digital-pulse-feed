
import { NewsItem, Topic } from './types';

export const TOPICS: { id: Topic; label: { en: string; pt: string } }[] = [
  { id: 'all', label: { en: 'All', pt: 'Todos' } },
  { id: 'marketing', label: { en: 'Marketing', pt: 'Marketing' } },
  { id: 'crm', label: { en: 'CRM', pt: 'CRM' } },
  { id: 'business', label: { en: 'Business', pt: 'Negócios' } },
  { id: 'data-analytics', label: { en: 'Data Analytics', pt: 'Análise de Dados' } },
  { id: 'social-media', label: { en: 'Social Media', pt: 'Mídias Sociais' } },
];

export const mockNewsItems: NewsItem[] = [
  // LinkedIn Posts
  {
    id: 'li-1',
    title: 'How AI is Transforming Digital Marketing in 2025',
    summary: 'Artificial intelligence is no longer just a buzzword in marketing. It\'s transforming how we approach digital campaigns, audience targeting, and content creation.',
    source: 'linkedin',
    author: {
      name: 'Sarah Johnson',
      title: 'VP of Marketing at TechGrowth',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-10T14:30:00Z',
    topics: ['marketing', 'data-analytics'],
    language: 'en',
    region: 'international',
    engagement: {
      likes: 1453,
      comments: 87,
      shares: 245,
    },
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'li-2',
    title: 'Por que CRM é essencial para empresas em crescimento',
    summary: 'Um bom sistema de CRM não é apenas para grandes corporações. Empresas em crescimento podem se beneficiar enormemente da organização e insights que um CRM proporciona.',
    source: 'linkedin',
    author: {
      name: 'Carlos Mendes',
      title: 'Diretor de Vendas na SalesForce Brasil',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-09T10:15:00Z',
    topics: ['crm', 'business'],
    language: 'pt',
    region: 'brazil',
    engagement: {
      likes: 872,
      comments: 63,
      shares: 128,
    },
  },
  {
    id: 'li-3',
    title: 'The Future of B2B Sales: Relationship-Driven Commerce',
    summary: 'In an increasingly digital world, the human element of B2B sales is becoming more important than ever. Here\'s how relationship-driven commerce is shaping the future.',
    source: 'linkedin',
    author: {
      name: 'Michael Zhang',
      title: 'Sales Strategy Director at GlobalB2B',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-08T16:45:00Z',
    topics: ['business', 'crm'],
    language: 'en',
    region: 'international',
    engagement: {
      likes: 1205,
      comments: 91,
      shares: 187,
    },
    imageUrl: '/placeholder.svg',
  },

  // Academic Articles
  {
    id: 'ac-1',
    title: 'Customer Journey Analytics: A Framework for Multi-Touch Attribution',
    summary: 'This research presents a novel framework for multi-touch attribution in complex customer journeys, incorporating both online and offline touchpoints.',
    source: 'academic',
    author: {
      name: 'Dr. Elizabeth Chen',
      institution: 'MIT Sloan School of Management',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-03-15T00:00:00Z',
    topics: ['marketing', 'data-analytics'],
    language: 'en',
    region: 'international',
    engagement: {
      citations: 47,
      views: 2103,
    },
  },
  {
    id: 'ac-2',
    title: 'Impacto das Redes Sociais no Comportamento do Consumidor Brasileiro',
    summary: 'Este estudo analisa como as plataformas sociais influenciam decisões de compra e a percepção de marca no mercado brasileiro entre 2023-2025.',
    source: 'academic',
    author: {
      name: 'Dra. Ana Lucia Martins',
      institution: 'FGV',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-02-28T00:00:00Z',
    topics: ['marketing', 'social-media'],
    language: 'pt',
    region: 'brazil',
    engagement: {
      citations: 23,
      views: 1870,
    },
  },
  {
    id: 'ac-3',
    title: 'Predictive Analytics in CRM: Beyond Purchase Forecasting',
    summary: 'This paper explores advanced predictive modeling techniques that go beyond traditional purchase forecasting to predict customer lifetime value, churn risk, and relationship depth.',
    source: 'academic',
    author: {
      name: 'Dr. James Wilson',
      institution: 'Stanford Business School',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-01T00:00:00Z',
    topics: ['crm', 'data-analytics'],
    language: 'en',
    region: 'international',
    engagement: {
      citations: 31,
      views: 1645,
    },
  },

  // Blog Posts
  {
    id: 'blog-1',
    title: '10 Content Marketing Strategies That Actually Drive Conversions',
    summary: 'Content marketing isn\'t just about creating content. It\'s about creating content that converts. Here are 10 strategies that have been proven to work in 2025.',
    source: 'blog',
    author: {
      name: 'Alex Rivera',
      title: 'Content Strategy Expert',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-11T09:00:00Z',
    topics: ['marketing', 'social-media'],
    language: 'en',
    region: 'international',
    engagement: {
      likes: 437,
      comments: 52,
      shares: 98,
    },
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'blog-2',
    title: 'Como implementar um CRM sem interromper suas operações',
    summary: 'A implementação de um novo sistema de CRM pode ser desafiadora, mas com a abordagem certa, você pode fazê-lo sem prejudicar as operações diárias da sua empresa.',
    source: 'blog',
    author: {
      name: 'Mariana Santos',
      title: 'Consultora de CRM',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-07T14:00:00Z',
    topics: ['crm', 'business'],
    language: 'pt',
    region: 'brazil',
    engagement: {
      likes: 289,
      comments: 37,
      shares: 64,
    },
  },
  {
    id: 'blog-3',
    title: 'The Rise of Zero-Party Data: What Marketers Need to Know',
    summary: 'As third-party cookies phase out, zero-party data is becoming increasingly important. This article explains what it is and how to effectively collect and use it.',
    source: 'blog',
    author: {
      name: 'Priya Patel',
      title: 'Digital Privacy Specialist',
      avatar: '/placeholder.svg',
    },
    url: '#',
    publishedAt: '2025-04-05T11:30:00Z',
    topics: ['marketing', 'data-analytics'],
    language: 'en',
    region: 'international',
    engagement: {
      likes: 512,
      comments: 43,
      shares: 112,
    },
  },
];

export function getNewsBySource(source: string) {
  return mockNewsItems.filter(item => item.source === source);
}

export function getNewsByTopic(topic: Topic) {
  if (topic === 'all') {
    return mockNewsItems;
  }
  return mockNewsItems.filter(item => item.topics.includes(topic));
}

export function getNewsByLanguage(language: string) {
  return mockNewsItems.filter(item => item.language === language);
}
