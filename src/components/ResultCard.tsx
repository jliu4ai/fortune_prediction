
import React from 'react';
import { motion } from 'framer-motion';

interface ResultCardProps {
  title: string;
  content: string;
  isLoading?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, content, isLoading = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mystic-400/70 via-mystic-500/70 to-mystic-600/70"></div>
      
      <div className="p-6">
        <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-3 flex items-center">
          <span className="inline-block w-2 h-2 bg-mystic-500 rounded-full mr-2"></span>
          {title}
        </h3>
        
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse"></div>
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse"></div>
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse w-4/6"></div>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none text-cosmic-700 dark:text-cosmic-300">
            <p className="leading-relaxed">{content}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ResultCard;
