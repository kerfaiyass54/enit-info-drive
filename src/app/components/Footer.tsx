import { motion } from 'motion/react';
import { Heart, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-2xl text-gray-800 dark:text-gray-200">ENIT</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          National School of Engineering of Tunis
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-500">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>for ENIT Students</span>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">
          © {new Date().getFullYear()} ENIT. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
