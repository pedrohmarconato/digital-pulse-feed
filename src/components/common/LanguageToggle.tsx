
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Language } from '@/lib/types';

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: () => void;
}

export function LanguageToggle({ currentLanguage, onToggle }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="ghost" 
        size="sm"
        className={cn(
          "text-xs font-medium",
          currentLanguage === 'en' ? "text-primary" : "text-muted-foreground"
        )}
        onClick={currentLanguage === 'pt' ? onToggle : undefined}
      >
        EN
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button 
        variant="ghost" 
        size="sm"
        className={cn(
          "text-xs font-medium",
          currentLanguage === 'pt' ? "text-primary" : "text-muted-foreground"
        )}
        onClick={currentLanguage === 'en' ? onToggle : undefined}
      >
        PT
      </Button>
    </div>
  );
}
