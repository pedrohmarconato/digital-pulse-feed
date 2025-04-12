
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import { ExternalLink, MessageSquare, ThumbsUp, Share2, BookOpen } from 'lucide-react';
import { NewsItem } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  const formatNumber = (num: number | undefined): string => {
    if (!num) return '0';
    return new Intl.NumberFormat().format(num);
  };
  
  const formatDate = (dateString: string, language: 'en' | 'pt'): string => {
    const date = new Date(dateString);
    return format(date, 'PPP', { 
      locale: language === 'en' ? enUS : ptBR
    });
  };

  return (
    <div className={`news-card news-card-${item.source} p-4 animate-fade-in`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={item.author.avatar} alt={item.author.name} />
            <AvatarFallback>
              {item.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{item.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {item.author.title || item.author.institution}
            </p>
          </div>
        </div>
        <Badge variant="outline" className="text-xs">
          {item.language === 'en' ? 
            (item.region === 'international' ? 'International' : 'Brazil') : 
            (item.region === 'international' ? 'Internacional' : 'Brasil')}
        </Badge>
      </div>
      
      <h3 className="font-medium mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{item.summary}</p>
      
      {item.imageUrl && (
        <div className="mb-3 rounded-md overflow-hidden">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-32 object-cover" 
            loading="lazy"
          />
        </div>
      )}
      
      <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
        <div className="flex items-center gap-3">
          {item.engagement.likes && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span>{formatNumber(item.engagement.likes)}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.language === 'en' ? 'Likes' : 'Curtidas'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          
          {item.engagement.comments && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>{formatNumber(item.engagement.comments)}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.language === 'en' ? 'Comments' : 'Comentários'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          
          {item.engagement.shares && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-3.5 w-3.5" />
                    <span>{formatNumber(item.engagement.shares)}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.language === 'en' ? 'Shares' : 'Compartilhamentos'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          
          {item.engagement.citations && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{formatNumber(item.engagement.citations)}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.language === 'en' ? 'Citations' : 'Citações'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <span>{formatDate(item.publishedAt, item.language)}</span>
          <a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            aria-label={item.language === 'en' ? 'Read more' : 'Leia mais'}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
