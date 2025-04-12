
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsItem, NewsSource } from '@/lib/types';
import { NewsCard } from './NewsCard';

interface NewsQuadrantProps {
  title: string;
  source: NewsSource;
  items: NewsItem[];
}

export function NewsQuadrant({ title, source, items }: NewsQuadrantProps) {
  return (
    <Card className="h-full">
      <CardHeader className={`bg-news-${source} bg-opacity-10 rounded-t-lg`}>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 overflow-auto max-h-[600px]">
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map(item => (
              <NewsCard key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No items available
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
