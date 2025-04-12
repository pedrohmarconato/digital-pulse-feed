
import { useCallback, useState } from 'react';
import { Topic } from '@/lib/types';

export function useTopics(initialTopic: Topic = 'all') {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(initialTopic);

  const selectTopic = useCallback((topic: Topic) => {
    setSelectedTopic(topic);
  }, []);

  return {
    selectedTopic,
    selectTopic,
  };
}
