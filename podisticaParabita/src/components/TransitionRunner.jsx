import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react'; // Usiamo Lucide come per il resto del sito

const TransitionRunner = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-blue-600"
      initial={{ x: '-100%' }}
      animate={{ x: ['-100%', '0%', '100%'] }}
      transition={{ 
        duration: 1.2, 
        ease: "easeInOut",
        times: [0, 0.5, 1] 
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* L'omino che corre */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
        >
          <Activity size={80} className="text-white" />
        </motion.div>
        <span className="text-white font-black uppercase tracking-widest mt-4">
          Running to next page...
        </span>
      </div>
    </motion.div>
  );
};

export default TransitionRunner;