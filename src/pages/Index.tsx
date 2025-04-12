
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import { MainLayout } from '@/components/layout/MainLayout';
import { NewsGrid } from '@/components/news/NewsGrid';
import { TopicSelector } from '@/components/filters/TopicSelector';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { useTopics } from '@/hooks/useTopics';
import { useLanguage } from '@/hooks/useLanguage';
import { useAiSummary } from '@/hooks/useAiSummary';
import { mockNewsItems } from '@/lib/data';
import { Language } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { selectedTopic, selectTopic } = useTopics('all');
  const { currentLanguage, toggleLanguage } = useLanguage('en');
  const { summary, isLoading } = useAiSummary(currentLanguage);
  
  // In a real app, this would use React Query to fetch data
  const newsItems = mockNewsItems;
  
  // Format the current date based on the selected language
  const currentDate = format(
    new Date(),
    'PP',
    { locale: currentLanguage === 'en' ? enUS : ptBR }
  );
  
  const pageTitle = currentLanguage === 'en' 
    ? `Latest Marketing, CRM & Business Insights - ${currentDate}` 
    : `Últimas Novidades em Marketing, CRM e Negócios - ${currentDate}`;
    
  const pageSubtitle = currentLanguage === 'en'
    ? 'Stay informed with the latest trends, research, and professional insights'
    : 'Mantenha-se informado com as últimas tendências, pesquisas e insights profissionais';
  
  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mb-6">
        <div className="md:mr-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{pageTitle}</h1>
          <p className="text-muted-foreground mb-4">{pageSubtitle}</p>
          
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
            </div>
          ) : (
            <div className="bg-primary/5 p-4 rounded-md border border-primary/10 mb-4">
              <p className="text-sm leading-relaxed">{summary}</p>
            </div>
          )}
        </div>
        <LanguageToggle 
          currentLanguage={currentLanguage} 
          onToggle={toggleLanguage}
          className="mb-4 md:mb-0"
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
