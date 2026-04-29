import { motion } from 'motion/react';
import { GraduationCap, Code, Cpu, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function WelcomePage() {
    const { t, language } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            id="welcome"
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 opacity-50" />

            {/* Floating blobs */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
                        style={{
                            width: Math.random() * 300 + 50,
                            height: Math.random() * 300 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
                <motion.div variants={itemVariants} className="mb-8">
                    <GraduationCap className="w-24 h-24 mx-auto text-blue-600 dark:text-blue-400" />
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                    {t('welcome')}
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl mb-4 text-gray-800 dark:text-gray-200"
                >
                    {t('csWelcomeTitle')}
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12"
                >
                    {t('csWelcomeSubtitle')}
                </motion.p>

                {/* Highlights */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-8 justify-center"
                >
                    <motion.div
                        className="flex items-center gap-3 text-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
              {t('coding')}
            </span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-3 text-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300">
              {t('systems')}
            </span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-3 text-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                        <span className="text-gray-700 dark:text-gray-300">
              {t('innovation')}
            </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}