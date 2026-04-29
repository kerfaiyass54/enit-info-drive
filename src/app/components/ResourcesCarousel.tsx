import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { ExternalLink, BookOpen, Video, Code2, GraduationCap, Laptop } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const resources = [
  {
    name: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org',
    icon: Code2,
    color: 'from-green-500 to-emerald-500',
    description: 'Learn to code for free with interactive tutorials',
  },
  {
    name: 'Coursera',
    url: 'https://www.coursera.org',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    description: 'University-level courses from top institutions',
  },
  {
    name: 'edX',
    url: 'https://www.edx.org',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    description: 'Professional certificates and degrees online',
  },
  {
    name: 'Khan Academy',
    url: 'https://www.khanacademy.org',
    icon: Video,
    color: 'from-teal-500 to-green-500',
    description: 'Free educational videos and practice exercises',
  },
  {
    name: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu',
    icon: Laptop,
    color: 'from-red-500 to-orange-500',
    description: 'Free course materials from MIT',
  },
  {
    name: 'Codecademy',
    url: 'https://www.codecademy.com',
    icon: Code2,
    color: 'from-indigo-500 to-purple-500',
    description: 'Interactive coding lessons and projects',
  },
];

export function ResourcesCarousel() {
  const { t, language } = useLanguage();
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="resources" className="min-h-screen py-20 px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          {t('resources')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('resourcesSubtitle')}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <div key={idx} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group h-80"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${resource.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  />

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl text-center mb-4 text-gray-800 dark:text-gray-200">
                      {resource.name}
                    </h3>

                    <p className="text-center text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm">
                      {resource.description}
                    </p>

                    <motion.a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 bg-gradient-to-r ${resource.color} text-white py-3 px-6 rounded-xl hover:shadow-lg transition-shadow`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
