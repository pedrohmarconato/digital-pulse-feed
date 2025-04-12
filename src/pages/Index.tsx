
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
import { Calendar, Sparkles } from 'lucide-react';

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
  
  const summaryTitle = currentLanguage === 'en'
    ? "AI Pulse"
    : "IA Pulse";

  return (
    <MainLayout>
      <div className="mb-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="w-full md:w-3/4">
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            ) : (
              <div className="bg-primary/5 p-4 rounded-md border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-medium text-primary">{summaryTitle}</h2>
                </div>
                <p className="text-sm leading-relaxed">{summary}</p>
              </div>
            )}
          </div>
          
          <div className="flex flex-row md:flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">{currentDate}</span>
            </div>
            <LanguageToggle 
              currentLanguage={currentLanguage} 
              onToggle={toggleLanguage}
            />
          </div>
        </div>
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
