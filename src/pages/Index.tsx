
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FortuneTeller from '../components/FortuneTeller';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-20 sm:py-28" id="about">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block">
                <motion.span 
                  className="text-xs uppercase tracking-wider text-mystic-600 dark:text-mystic-400 font-medium bg-mystic-50 dark:bg-mystic-900/30 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  AI驱动的命运解读
                </motion.span>
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-cosmic-900 dark:text-cosmic-50 tracking-tight">
                <span className="mystic-text">探索命运的奥秘</span>
              </h1>
              <p className="mt-6 text-lg text-cosmic-600 dark:text-cosmic-300 max-w-2xl mx-auto">
                通过先进人工智能技术，我们将古老的占卜智慧与现代科技完美结合，为您提供独特而精准的命运解读。
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-mystic-300/5 to-transparent dark:from-mystic-900/5"></div>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                <motion.div 
                  className="frosted-glass rounded-xl p-6 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-400/30 to-mystic-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-mystic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">准确的命运预测</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400 text-sm">
                    我们的AI系统融合多种占卜方法，提供细致入微的命运解读，揭示您生活的潜在路径。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-400/30 to-mystic-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-mystic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">个性化分析</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400 text-sm">
                    每一次占卜都基于您的个人信息和具体问题，提供量身定制的指引，助您做出明智决策。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-400/30 to-mystic-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-mystic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">即时解读</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400 text-sm">
                    无需等待，高效率的AI算法将在瞬间为您提供深入的命运解读，随时随地获取指引。
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-mystic-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-lg mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-cosmic-900 dark:text-cosmic-50">开始您的命运之旅</h2>
              <p className="mt-3 text-cosmic-600 dark:text-cosmic-300">
                只需填写几个简单信息，即可获取详细的命运解读。
              </p>
            </motion.div>
            
            <FortuneTeller />
          </div>
        </section>
        
        <section className="py-16" id="faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-lg mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-cosmic-900 dark:text-cosmic-50">常见问题</h2>
              <p className="mt-3 text-cosmic-600 dark:text-cosmic-300">
                关于神秘占卜的一些常见疑问
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="frosted-glass rounded-xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">神秘占卜是如何工作的？</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400">
                    我们的系统结合传统占卜智慧与现代AI技术，分析您提供的个人信息和问题，生成精准的命运解读。系统会考虑星座、生辰八字等多种因素，提供全面的预测。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">占卜结果准确吗？</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400">
                    我们的AI系统经过大量数据训练，能够提供高度个性化和参考价值的预测。然而，未来始终存在变数，占卜结果应作为指导而非绝对真理。您的选择和行动仍是决定命运的关键因素。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">我的个人信息安全吗？</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400">
                    我们高度重视用户隐私。您提供的所有信息仅用于生成占卜结果，不会被存储或用于其他目的。我们采用先进的加密技术确保您的数据安全。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">我可以询问任何类型的问题吗？</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400">
                    是的，您可以询问关于爱情、事业、健康、财富等各个方面的问题。但请注意，占卜结果仅供参考，对于重要决策，建议同时咨询专业人士的意见。
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
