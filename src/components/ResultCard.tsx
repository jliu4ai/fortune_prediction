
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface ResultCardProps {
  title: string;
  content: string;
  isLoading?: boolean;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  title, 
  content, 
  isLoading = false, 
  collapsible = false,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-mystic-400 via-mystic-500 to-mystic-600"></div>
      
      <div className={`p-5 ${collapsible ? 'cursor-pointer' : ''}`} onClick={() => collapsible && setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 flex items-center justify-between">
          <div className="flex items-center">
            <span className="relative">
              <Sparkles className="h-4 w-4 text-mystic-500 mr-2 animate-pulse-subtle" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-mystic-300 rounded-full animate-ping"></span>
            </span>
            {title}
          </div>
          {collapsible && (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-cosmic-600" />
            </motion.div>
          )}
        </h3>
        
        {isLoading ? (
          <div className="space-y-3 mt-3">
            <div className="h-4 bg-gradient-to-r from-cosmic-200/60 to-cosmic-200/30 dark:from-cosmic-700/60 dark:to-cosmic-700/30 rounded animate-shimmer"></div>
            <div className="h-4 bg-gradient-to-r from-cosmic-200/60 to-cosmic-200/30 dark:from-cosmic-700/60 dark:to-cosmic-700/30 rounded animate-shimmer w-5/6"></div>
            <div className="h-4 bg-gradient-to-r from-cosmic-200/60 to-cosmic-200/30 dark:from-cosmic-700/60 dark:to-cosmic-700/30 rounded animate-shimmer"></div>
            <div className="h-4 bg-gradient-to-r from-cosmic-200/60 to-cosmic-200/30 dark:from-cosmic-700/60 dark:to-cosmic-700/30 rounded animate-shimmer w-4/6"></div>
          </div>
        ) : (
          <motion.div 
            className="prose prose-sm max-w-none text-cosmic-700 dark:text-cosmic-300 overflow-hidden"
            initial={collapsible ? { height: isOpen ? "auto" : 0 } : { height: "auto" }}
            animate={{ 
              height: collapsible && !isOpen ? 0 : "auto",
              marginTop: collapsible && !isOpen ? 0 : 12,
              opacity: collapsible && !isOpen ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="leading-relaxed">{content}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ResultCard;
