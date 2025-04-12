
import { NewsQuadrant } from './NewsQuadrant';
import { NewsItem, Topic, Language } from '@/lib/types';
import { getNewsBySource } from '@/lib/data';

interface NewsGridProps {
  newsItems: NewsItem[];
  selectedTopic: Topic;
  language: Language;
}

export function NewsGrid({ newsItems, selectedTopic, language }: NewsGridProps) {
  // Filter by topic and language
  const filteredItems = newsItems.filter(item => {
    const matchesTopic = selectedTopic === 'all' || item.topics.includes(selectedTopic);
    const matchesLanguage = item.language === language;
    return matchesTopic && matchesLanguage;
  });
  
  // Group by source
  const linkedinPosts = filteredItems.filter(item => item.source === 'linkedin');
  const academicArticles = filteredItems.filter(item => item.source === 'academic');
  const blogPosts = filteredItems.filter(item => item.source === 'blog');
  
  // Determine section titles based on language
  const sectionTitles = {
    linkedin: language === 'en' ? 'LinkedIn Insights' : 'Insights do LinkedIn',
    academic: language === 'en' ? 'Academic Research' : 'Pesquisa Acadêmica',
    blog: language === 'en' ? 'Marketing Blogs' : 'Blogs de Marketing',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewsQuadrant 
        title={sectionTitles.linkedin} 
        source="linkedin" 
        items={linkedinPosts} 
      />
      <NewsQuadrant 
        title={sectionTitles.academic} 
        source="academic" 
        items={academicArticles} 
      />
      <NewsQuadrant 
        title={sectionTitles.blog} 
        source="blog" 
        items={blogPosts} 
      />
    </div>
  );
}
