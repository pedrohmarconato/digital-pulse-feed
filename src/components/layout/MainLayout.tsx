
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">NewsHub</h1>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              Beta
            </span>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>
      
      <main className="container py-8">
        {children}
      </main>
      
      <footer className="border-t py-6 mt-12">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2025 NewsHub - Marketing, CRM and Business News Aggregator</p>
        </div>
      </footer>
    </div>
  );
}
