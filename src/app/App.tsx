import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { WelcomePage } from './components/WelcomePage';
import { SubjectsCarousel } from './components/SubjectsCarousel';
import { YearCards } from './components/YearCards';
import { ResourcesCarousel } from './components/ResourcesCarousel';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {isLoading && <LoadingScreen />}
          <Navigation />
          <div className="pt-20">
            <WelcomePage />
            <SubjectsCarousel />
            <YearCards />
            <ResourcesCarousel />
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}