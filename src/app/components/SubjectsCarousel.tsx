import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const subjectsByYear = [
    {
        year: 1,
        subjects: [
            { name: 'Mathématiques 📐' },
            { name: 'Analyse Numérique 📊' },
            { name: 'Probabilités 📈' },
            { name: 'Statistiques 📉' },
            { name: 'Logique 🔍' },
            { name: 'Circuits Logiques 💡' },
            { name: 'Architecture des Ordinateurs 💻' },
            { name: 'Programmation Procédurale 🧑‍💻' },
            { name: 'Programmation Orientée Objet 🎯' },
            { name: 'Structures de Données 🏗️' },
            { name: 'Systèmes d’Exploitation 🖥️' },
            { name: 'Signaux & Systèmes 📡' },
            { name: 'Anglais 🇬🇧' },
            { name: 'Français 🇫🇷' },
            { name: 'Économie 💰' },
            { name: 'Entrepreneuriat 🚀' },
        ],
    },
    {
        year: 2,
        subjects: [
            { name: 'Analyse & Conception OO 🧠' },
            { name: 'Recherche Opérationnelle 🔍' },
            { name: 'Programmation Fonctionnelle ⚙️' },
            { name: 'Systèmes d’Exploitation Avancés 🖥️' },
            { name: 'Calcul Parallèle ⚡' },
            { name: 'Algorithmique Avancée 🧩' },
            { name: 'Réseaux 🌐' },
            { name: 'Protocoles & Routage 📡' },
            { name: 'Bases de Données 💾' },
            { name: 'Compilation ⚙️' },
            { name: 'Intelligence Artificielle 🤖' },
            { name: 'Machine Learning 🧠' },
            { name: 'Développement Web 🌍' },
            { name: 'Développement Mobile 📱' },
            { name: 'Sécurité Informatique 🔐' },
            { name: 'Business 💼' },
            { name: 'Communication 💬' },
            { name: 'Allemand 🇩🇪' },
        ],
    },
    {
        year: 3,
        subjects: [
            { name: 'Architecture Logicielle 🏛️' },
            { name: 'Cloud & Virtualisation ☁️' },
            { name: 'Microservices ⚙️' },
            { name: 'Big Data 📊' },
            { name: 'Data Mining ⛏️' },
            { name: 'DevOps 🔄' },
            { name: 'Tests Logiciels 🧪' },
            { name: 'Sécurité Avancée 🔐' },
            { name: 'Projet de Fin d’Études 🎓' },
        ],
    },
];

export function SubjectsCarousel() {
    const { t, language } = useLanguage();
    const sliderRef = useRef<any>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <section
            id="curriculum"
            className="min-h-screen py-20 px-4"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('curriculum')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    {t('curriculumSubtitle')}
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
                <Slider ref={sliderRef} {...settings}>
                    {subjectsByYear.map((yearData) => (
                        <div key={yearData.year} className="px-4">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-4xl text-center mb-10 text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2">
                                    <GraduationCap />
                                    {t('year')} {yearData.year}
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {yearData.subjects.map((subject, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg text-center text-white"
                                        >
                                            {subject.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}