import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar' | 'de';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        welcome: 'Welcome',
        welcomeMessage: 'Welcome to ENIT - National School of Engineering of Tunis',
        welcomeSubtitle: 'Your Gateway to Excellence in Engineering Education',

        // ✅ NEW (CS-focused welcome)
        csWelcomeTitle: 'Welcome Computer Science Engineering Students',
        csWelcomeSubtitle: 'Build your future through code, systems, and innovation',
        coding: 'Coding',
        systems: 'Systems',
        innovation: 'Innovation',

        curriculum: 'Curriculum',
        curriculumSubtitle: 'Explore all subjects for each academic year',

        years: 'Academic Years',
        yearsSubtitle: 'Access study materials for each year',

        resources: 'Learning Resources',
        resourcesSubtitle: 'Explore free online learning platforms',

        year1: '1st Year',
        year2: '2nd Year',
        year3: '3rd Year',

        accessDrive: 'Access Google Drive',

        semester: 'Semester',
        year: 'Year',

        subjects: 'Subjects',
    },

    fr: {
        welcome: 'Bienvenue',
        welcomeMessage: 'Bienvenue à l\'ENIT - École Nationale d\'Ingénieurs de Tunis',
        welcomeSubtitle: 'Votre Portail vers l\'Excellence en Formation d\'Ingénieurs',

        // ✅ NEW
        csWelcomeTitle: 'Bienvenue aux étudiants en génie informatique',
        csWelcomeSubtitle: 'Construisez votre avenir à travers le code, les systèmes et l’innovation',
        coding: 'Programmation',
        systems: 'Systèmes',
        innovation: 'Innovation',

        curriculum: 'Programme d\'Études',
        curriculumSubtitle: 'Explorez toutes les matières pour chaque année académique',

        years: 'Années Académiques',
        yearsSubtitle: 'Accédez aux supports de cours pour chaque année',

        resources: 'Ressources d\'Apprentissage',
        resourcesSubtitle: 'Explorez les plateformes d\'apprentissage en ligne gratuites',

        year1: '1ère Année',
        year2: '2ème Année',
        year3: '3ème Année',

        accessDrive: 'Accéder à Google Drive',

        semester: 'Semestre',
        year: 'Année',

        subjects: 'Matières',
    },

    ar: {
        welcome: 'مرحباً',
        welcomeMessage: 'مرحباً بكم في المدرسة الوطنية للمهندسين بتونس',
        welcomeSubtitle: 'بوابتك نحو التميز في التعليم الهندسي',

        // ✅ NEW
        csWelcomeTitle: 'مرحبًا بطلاب هندسة الإعلامية',
        csWelcomeSubtitle: 'ابنِ مستقبلك من خلال البرمجة والأنظمة والابتكار',
        coding: 'البرمجة',
        systems: 'الأنظمة',
        innovation: 'الابتكار',

        curriculum: 'المناهج الدراسية',
        curriculumSubtitle: 'استكشف جميع المواد لكل سنة دراسية',

        years: 'السنوات الأكاديمية',
        yearsSubtitle: 'الوصول إلى المواد الدراسية لكل سنة',

        resources: 'موارد التعلم',
        resourcesSubtitle: 'استكشف منصات التعلم المجانية عبر الإنترنت',

        year1: 'السنة الأولى',
        year2: 'السنة الثانية',
        year3: 'السنة الثالثة',

        accessDrive: 'الوصول إلى Google Drive',

        semester: 'الفصل',
        year: 'السنة',

        subjects: 'المواد',
    },

    de: {
        welcome: 'Willkommen',
        welcomeMessage: 'Willkommen an der ENIT - Nationale Ingenieurschule von Tunis',
        welcomeSubtitle: 'Ihr Tor zur Exzellenz in der Ingenieurausbildung',

        // ✅ NEW
        csWelcomeTitle: 'Willkommen Informatik-Studierende',
        csWelcomeSubtitle: 'Gestalten Sie Ihre Zukunft mit Code, Systemen und Innovation',
        coding: 'Programmierung',
        systems: 'Systeme',
        innovation: 'Innovation',

        curriculum: 'Lehrplan',
        curriculumSubtitle: 'Entdecken Sie alle Fächer für jedes Studienjahr',

        years: 'Akademische Jahre',
        yearsSubtitle: 'Zugriff auf Studienmaterialien für jedes Jahr',

        resources: 'Lernressourcen',
        resourcesSubtitle: 'Entdecken Sie kostenlose Online-Lernplattformen',

        year1: '1. Jahr',
        year2: '2. Jahr',
        year3: '3. Jahr',

        accessDrive: 'Zugriff auf Google Drive',

        semester: 'Semester',
        year: 'Jahr',

        subjects: 'Fächer',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};