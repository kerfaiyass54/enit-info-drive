import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { GraduationCap, Home, BookOpen, Award, Library } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('welcome')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl text-gray-800 dark:text-gray-200">ENIT</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <motion.button
            onClick={() => scrollToSection('welcome')}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('curriculum')}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-4 h-4" />
            <span>Curriculum</span>
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('years')}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-4 h-4" />
            <span>Years</span>
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('resources')}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Library className="w-4 h-4" />
            <span>Resources</span>
          </motion.button>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
