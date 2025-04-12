
import { TOPICS } from '@/lib/data';
import { Topic } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TopicSelectorProps {
  selectedTopic: Topic;
  onSelectTopic: (topic: Topic) => void;
  language: 'en' | 'pt';
}

export function TopicSelector({ 
  selectedTopic, 
  onSelectTopic,
  language 
}: TopicSelectorProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium">
        {language === 'en' ? 'Topics' : 'Tópicos'}
      </h2>
      <div className="flex flex-wrap gap-2">
        {TOPICS.map((topic) => (
          <Badge
            key={topic.id}
            variant={selectedTopic === topic.id ? "default" : "outline"}
            className={cn(
              "cursor-pointer hover:bg-primary/90 transition-colors",
              selectedTopic === topic.id ? "bg-primary text-primary-foreground" : "hover:text-primary-foreground"
            )}
            onClick={() => onSelectTopic(topic.id)}
          >
            {language === 'en' ? topic.label.en : topic.label.pt}
          </Badge>
        ))}
      </div>
    </div>
  );
}
