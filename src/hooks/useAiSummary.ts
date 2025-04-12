
import { useState, useEffect } from 'react';
import { Language } from '@/lib/types';

// Em uma implementação real, isso seria uma chamada para uma API de IA
const getMockSummary = (language: Language): string => {
  if (language === 'en') {
    return 'Today\'s marketing landscape shows increasing focus on AI-driven content strategies, with CRM innovations gaining traction among businesses. Data analytics remains a key topic, with professionals discussing integration of social media metrics with traditional business analytics.';
  } else {
    return 'O cenário de marketing hoje mostra um foco crescente em estratégias de conteúdo baseadas em IA, com inovações em CRM ganhando força entre empresas. Análise de dados continua sendo um tópico fundamental, com profissionais discutindo a integração de métricas de mídias sociais com análises de negócios tradicionais.';
  }
};

export function useAiSummary(language: Language) {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulando um atraso de carregamento para representar uma chamada de API
    const timer = setTimeout(() => {
      setSummary(getMockSummary(language));
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [language]);

  return {
    summary,
    isLoading
  };
}
