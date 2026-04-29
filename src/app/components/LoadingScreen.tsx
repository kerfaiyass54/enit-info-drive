import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center"
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <GraduationCap className="w-32 h-32 text-white" />
      </motion.div>
    </motion.div>
  );
}
