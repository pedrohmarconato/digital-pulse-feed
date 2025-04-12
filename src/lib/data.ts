import { NewsItem, Topic, Influencer, Blog } from './types';

export const TOPICS: { id: Topic; label: { en: string; pt: string } }[] = [
  { id: 'all', label: { en: 'All', pt: 'Todos' } },
  { id: 'marketing', label: { en: 'Marketing', pt: 'Marketing' } },
  { id: 'crm', label: { en: 'CRM', pt: 'CRM' } },
  { id: 'business', label: { en: 'Business', pt: 'Negócios' } },
  { id: 'data-analytics', label: { en: 'Data Analytics', pt: 'Análise de Dados' } },
  { id: 'social-media', label: { en: 'Social Media', pt: 'Mídias Sociais' } },
];

export const INFLUENCERS: Influencer[] = [
  // International Influencers - LinkedIn
  {
    id: 'neil-patel',
    name: 'Neil Patel',
    title: 'Digital Marketing Expert, Co-founder of NP Digital',
    bio: 'Especialista em marketing digital e cofundador da NP Digital, Neil compartilha insights sobre SEO, marketing de conteúdo e estratégias de crescimento.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'data-analytics', 'social-media']
  },
  {
    id: 'ann-handley',
    name: 'Ann Handley',
    title: 'Chief Content Officer at MarketingProfs',
    bio: 'Diretora de Conteúdo da MarketingProfs e autora renomada, Ann é referência em marketing de conteúdo e storytelling.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'social-media']
  },
  {
    id: 'rand-fishkin',
    name: 'Rand Fishkin',
    title: 'Co-founder of Moz and SparkToro',
    bio: 'Cofundador da Moz e da SparkToro, Rand é especialista em SEO e marketing digital, compartilhando análises e tendências do setor.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'data-analytics']
  },
  {
    id: 'jill-konrath',
    name: 'Jill Konrath',
    title: 'B2B Sales Consultant and Author',
    bio: 'Autora e consultora em vendas B2B, Jill é conhecida por seu trabalho em estratégias de vendas e uso eficaz do LinkedIn para negócios.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['business', 'crm']
  },
  {
    id: 'paul-greenberg',
    name: 'Paul Greenberg',
    title: 'Author of "CRM at the Speed of Light"',
    bio: 'Autor de "CRM at the Speed of Light" e analista influente em CRM e experiência do cliente.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['crm', 'business']
  },
  
  // Brazilian Influencers - LinkedIn
  {
    id: 'ricardo-amorim',
    name: 'Ricardo Amorim',
    title: 'Economista e Influenciador',
    bio: 'Economista e influenciador mais seguido do LinkedIn na América Latina, compartilha análises sobre economia, tecnologia e inovação.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'brazil',
    topics: ['business', 'data-analytics']
  },
  {
    id: 'luiza-helena-trajano',
    name: 'Luiza Helena Trajano',
    title: 'Presidente do Conselho de Administração do Magazine Luiza',
    bio: 'Presidente do Conselho de Administração do Magazine Luiza, compartilha sua visão sobre empreendedorismo e gestão.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'brazil',
    topics: ['business', 'crm']
  },
  {
    id: 'gustavo-caetano',
    name: 'Gustavo Caetano',
    title: 'Fundador da Sambatech',
    bio: 'Fundador da Sambatech, reconhecido por suas contribuições em inovação e transformação digital.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'brazil',
    topics: ['marketing', 'business']
  },
  {
    id: 'sofia-esteves',
    name: 'Sofia Esteves',
    title: 'Fundadora do Grupo Cia de Talentos',
    bio: 'Fundadora do Grupo Cia de Talentos, referência na área de recursos humanos.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'brazil',
    topics: ['business', 'crm']
  },
  {
    id: 'camila-farani',
    name: 'Camila Farani',
    title: 'Investidora do Shark Tank Brasil',
    bio: 'Investidora do Shark Tank Brasil, compartilha insights sobre inovação e liderança.',
    platforms: {
      linkedin: '#',
      twitter: '#'
    },
    imageUrl: '/placeholder.svg',
    region: 'brazil',
    topics: ['business', 'marketing']
  },
];

export const BLOGS: Blog[] = [
  {
    id: 'hubspot-blog',
    name: 'HubSpot Blog',
    description: 'Referência em inbound marketing, vendas e CRM.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'crm', 'business']
  },
  {
    id: 'neil-patel-blog',
    name: 'Neil Patel Blog',
    description: 'Dicas práticas de SEO, marketing de conteúdo e análise de dados.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'data-analytics']
  },
  {
    id: 'marketing-profs',
    name: 'MarketingProfs',
    description: 'Conteúdo voltado para profissionais de marketing B2B.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'business']
  },
  {
    id: 'moz-blog',
    name: 'Moz Blog',
    description: 'Especializado em SEO e marketing de busca.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'data-analytics']
  },
  {
    id: 'content-marketing-institute',
    name: 'Content Marketing Institute',
    description: 'Foco em estratégias de marketing de conteúdo.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'social-media']
  },
  {
    id: 'kissmetrics-blog',
    name: 'Kissmetrics Blog',
    description: 'Análises e métricas para otimização de marketing.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'data-analytics']
  },
  {
    id: 'buffer-blog',
    name: 'Buffer Blog',
    description: 'Dicas sobre redes sociais e marketing digital.',
    url: '#',
    imageUrl: '/placeholder.svg',
    region: 'international',
    topics: ['marketing', 'social-media']
  },
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

export function getInfluencersByTopic(topic: Topic) {
  if (topic === 'all') {
    return INFLUENCERS;
  }
  return INFLUENCERS.filter(influencer => influencer.topics.includes(topic));
}

export function getInfluencersByRegion(region: string) {
  return INFLUENCERS.filter(influencer => influencer.region === region);
}

export function getBlogsByTopic(topic: Topic) {
  if (topic === 'all') {
    return BLOGS;
  }
  return BLOGS.filter(blog => blog.topics.includes(topic));
}

export function getBlogsByRegion(region: string) {
  return BLOGS.filter(blog => blog.region === region);
}
