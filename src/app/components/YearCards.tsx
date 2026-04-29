import { motion } from 'motion/react';
import { ExternalLink, BookOpen, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const yearData = [
  {
    year: 1,
    icon: BookOpen,
    driveLink: 'https://drive.google.com/drive/folders/1i79gxB-pSYbR9_S_VLdJdaOfgG_hALE5?usp=sharing',
    color: 'from-blue-500 to-cyan-500',
    description: 'Foundation courses in mathematics, physics, and programming',
  },
  {
    year: 2,
    icon: Sparkles,
    driveLink: 'https://drive.google.com/drive/folders/1QMWHBzpRq8ZWyizi1So20ycgDBE2ToaC?usp=sharing',
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced topics in software engineering and systems',
  },
  {
    year: 3,
    icon: Award,
    driveLink: 'https://drive.google.com/drive/folders/1U1zda62zqIThH1lCvzXKWgCJwq8b5ODd?usp=sharing',
    color: 'from-orange-500 to-red-500',
    description: 'Final year graduation project (Projet de Fin d\'Études)',
  },
];

export function YearCards() {
  const { t, language } = useLanguage();

  return (
    <section id="years" className="min-h-screen py-20 px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {t('years')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('yearsSubtitle')}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {yearData.map((data, idx) => {
          const Icon = data.icon;
          return (
            <motion.div
              key={data.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${data.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              />

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl text-center mb-4 text-gray-800 dark:text-gray-200">
                  {language === 'fr'
                    ? `${data.year}ère Année`
                    : language === 'ar'
                    ? `السنة ${['الأولى', 'الثانية', 'الثالثة'][data.year - 1]}`
                    : language === 'de'
                    ? `${data.year}. Jahr`
                    : `Year ${data.year}`
                  }
                </h3>

                <p className="text-center text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  {data.description}
                </p>

                <motion.a
                  href={data.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 bg-gradient-to-r ${data.color} text-white py-3 px-6 rounded-xl hover:shadow-lg transition-shadow`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('accessDrive')}</span>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
