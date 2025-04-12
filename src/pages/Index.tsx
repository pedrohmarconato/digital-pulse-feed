
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { NewsGrid } from '@/components/news/NewsGrid';
import { TopicSelector } from '@/components/filters/TopicSelector';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { useTopics } from '@/hooks/useTopics';
import { useLanguage } from '@/hooks/useLanguage';
import { mockNewsItems } from '@/lib/data';
import { Language } from '@/lib/types';

const Index = () => {
  const { selectedTopic, selectTopic } = useTopics('all');
  const { currentLanguage, toggleLanguage } = useLanguage('en');
  
  // In a real app, this would use React Query to fetch data
  const newsItems = mockNewsItems;
  
  const pageTitle = currentLanguage === 'en' 
    ? 'Latest Marketing, CRM & Business Insights' 
    : 'Últimas Novidades em Marketing, CRM e Negócios';
    
  const pageSubtitle = currentLanguage === 'en'
    ? 'Stay informed with the latest trends, research, and professional insights'
    : 'Mantenha-se informado com as últimas tendências, pesquisas e insights profissionais';
  
  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{pageTitle}</h1>
          <p className="text-muted-foreground">{pageSubtitle}</p>
        </div>
        <LanguageToggle 
          currentLanguage={currentLanguage} 
          onToggle={toggleLanguage}
        />
      </div>
      
      <div className="mb-8">
        <TopicSelector 
          selectedTopic={selectedTopic}
          onSelectTopic={selectTopic}
          language={currentLanguage}
        />
      </div>
      
      <NewsGrid 
        newsItems={newsItems}
        selectedTopic={selectedTopic}
        language={currentLanguage}
      />
    </MainLayout>
  );
};

export default Index;
