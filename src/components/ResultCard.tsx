
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mystic-400/70 via-mystic-500/70 to-mystic-600/70"></div>
      
      <div className={`p-5 ${collapsible ? 'cursor-pointer' : ''}`} onClick={() => collapsible && setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 flex items-center justify-between">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-mystic-500 rounded-full mr-2"></span>
            {title}
          </div>
          {collapsible && (
            <ChevronDown className={`h-5 w-5 text-cosmic-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </h3>
        
        {isLoading ? (
          <div className="space-y-3 mt-3">
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse"></div>
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse"></div>
            <div className="h-4 bg-cosmic-200/50 dark:bg-cosmic-700/50 rounded animate-pulse w-4/6"></div>
          </div>
        ) : (
          <div className={`prose prose-sm max-w-none text-cosmic-700 dark:text-cosmic-300 ${collapsible ? 'overflow-hidden transition-all duration-300' : ''}`} style={{ maxHeight: collapsible && !isOpen ? '0' : '500px', marginTop: collapsible && !isOpen ? '0' : '0.75rem', opacity: collapsible && !isOpen ? 0 : 1 }}>
            <p className="leading-relaxed">{content}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ResultCard;
