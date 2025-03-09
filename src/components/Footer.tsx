
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="frosted-glass rounded-xl px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-mystic-400 to-mystic-600 flex items-center justify-center mr-2">
                  <div className="w-4 h-4 rounded-full bg-white/90 dark:bg-cosmic-900/90 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-mystic-500 to-mystic-700"></div>
                  </div>
                </div>
                <h3 className="text-lg font-medium mystic-text">神秘占卜</h3>
              </div>
              <p className="text-sm text-cosmic-600 dark:text-cosmic-300">
                利用先进人工智能技术，为您提供富有洞察力的占卜服务。
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-cosmic-500 hover:text-mystic-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Weibo</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.519 9.11997C18.593 9.11997 18.666 9.12934 18.736 9.13847C19.114 9.18409 20.3 9.37934 20.3 10.3865C20.3 11.5908 18.6024 13.9296 14.565 13.9296C10.5275 13.9296 9.52747 11.8274 9.52747 10.6232C9.52747 9.41897 10.295 8.34284 11.0325 7.67971C12.0699 6.74471 13.5 6.23222 14.707 6.09659C15.9139 5.96097 16.9187 6.19047 17.7112 7.02421C18.2475 7.58972 18.519 8.33659 18.519 9.11997ZM15.0625 12.9999C16.5275 12.9999 17.7995 12.2918 17.7995 11.4187C17.7995 10.5455 16.5275 9.83746 15.0625 9.83746C13.5975 9.83746 12.3249 10.5455 12.3249 11.4187C12.3249 12.2918 13.5975 12.9999 15.0625 12.9999ZM14.3051 10.2777C14.707 10.2778 15.0332 10.6039 15.0332 11.0058C15.0332 11.4077 14.707 11.7338 14.3051 11.7339C13.9032 11.7339 13.577 11.4077 13.577 11.0058C13.577 10.604 13.9032 10.2779 14.3051 10.2777ZM15.5625 10.6865C15.6825 10.6865 15.7795 10.7835 15.7795 10.9036C15.7795 11.0236 15.6825 11.1206 15.5625 11.1206C15.4425 11.1206 15.3455 11.0236 15.3455 10.9036C15.3455 10.7835 15.4425 10.6865 15.5625 10.6865Z" />
                    <path d="M10.5 18.9999H8.75C4.625 18.9999 2.5 16.3749 2.5 12.6249V11.8749C2.5 6.74992 6.75 4.49992 8.75 3.99992C9.2 3.87492 9.675 4.12492 9.8 4.62492C9.925 5.12492 9.675 5.59992 9.175 5.72492C7.65 6.12492 4.5 7.77492 4.5 11.8749V12.6249C4.5 15.2499 5.875 16.9999 8.75 16.9999H10.5C11 16.9999 11.5 17.3749 11.5 17.9999C11.5 18.5629 11.049 18.9999 10.5 18.9999Z" />
                    <path d="M16.41 7.71506C16.205 7.71506 16 7.64006 15.8475 7.49006C15.6875 7.33756 15.6 7.13256 15.6 6.91506V6.91256V6.90756L15.605 6.00506V6.00256C15.605 5.67506 15.8525 5.42006 16.17 5.41506H16.175C16.35 5.41256 16.52 5.47506 16.6475 5.60006C16.78 5.72756 16.85 5.90506 16.845 6.08506V6.43756C16.845 6.43756 16.845 6.44256 16.845 6.44506V6.86256C16.845 7.33006 16.6475 7.59756 16.41 7.71506Z" />
                    <path d="M19.2855 7.71501C19.0805 7.71501 18.8755 7.64001 18.723 7.49001C18.563 7.33751 18.4755 7.12501 18.4755 6.90751V6.90251V6.90001V6.89751V6.89501V6.89251L18.4805 6.00501C18.4805 5.67751 18.728 5.42251 19.0455 5.41751H19.0505C19.2255 5.41501 19.3955 5.47751 19.523 5.60251C19.6555 5.73001 19.7255 5.90751 19.7205 6.08751V6.36751C19.7205 6.36751 19.7205 6.37001 19.7205 6.37251V6.37751V6.38001V6.38251V6.38751V6.39251V6.39751V6.40251V6.43501V6.80751C19.7305 7.27501 19.523 7.57751 19.2855 7.71501Z" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-cosmic-500 hover:text-mystic-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">WeChat</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.5 16C8.7 16 8 15.3 8 14.5C8 13.7 8.7 13 9.5 13C10.3 13 11 13.7 11 14.5C11 15.3 10.3 16 9.5 16ZM14.5 16C13.7 16 13 15.3 13 14.5C13 13.7 13.7 13 14.5 13C15.3 13 16 13.7 16 14.5C16 15.3 15.3 16 14.5 16ZM8.4 11C7.6 11 7 10.4 7 9.6C7 8.8 7.6 8.2 8.4 8.2C9.2 8.2 9.8 8.8 9.8 9.6C9.8 10.4 9.2 11 8.4 11ZM15.6 11C14.8 11 14.2 10.4 14.2 9.6C14.2 8.8 14.8 8.2 15.6 8.2C16.4 8.2 17 8.8 17 9.6C17 10.4 16.4 11 15.6 11ZM12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22Z" />
                  </svg>
                </motion.a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cosmic-700 dark:text-cosmic-200 mb-4">导航</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-sm text-cosmic-600 dark:text-cosmic-300 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">关于我们</a>
                </li>
                <li>
                  <a href="#fortune" className="text-sm text-cosmic-600 dark:text-cosmic-300 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">开始占卜</a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-cosmic-600 dark:text-cosmic-300 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">常见问题</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cosmic-700 dark:text-cosmic-200 mb-4">法律</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-cosmic-600 dark:text-cosmic-300 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">隐私政策</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-cosmic-600 dark:text-cosmic-300 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">使用条款</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-cosmic-200 dark:border-cosmic-800">
            <p className="text-xs text-center text-cosmic-500 dark:text-cosmic-400">
              &copy; {new Date().getFullYear()} 神秘占卜. 保留所有权利.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
