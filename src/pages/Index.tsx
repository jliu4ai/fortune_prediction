
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FortuneTeller from '../components/FortuneTeller';
import ResultCard from '../components/ResultCard';
import { Sparkles, Star, Moon, Sun, CloudLightning } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-cosmic-50 dark:from-background dark:to-cosmic-950/40">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 bg-mystic-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-mystic-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-mystic-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <section className="py-20 sm:py-28 relative overflow-hidden" id="about">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block">
                <motion.span 
                  className="text-xs uppercase tracking-wider text-mystic-600 dark:text-mystic-400 font-medium bg-mystic-50/80 dark:bg-mystic-900/50 px-3 py-1 rounded-full flex items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI驱动的生活指南
                </motion.span>
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-cosmic-900 dark:text-cosmic-50 tracking-tight drop-shadow-sm">
                <span className="mystic-text relative inline-block">
                  探索前程的奥秘
                  <motion.span 
                    className="absolute -top-1 -right-2 text-yellow-300 text-sm"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="h-4 w-4 fill-yellow-300" />
                  </motion.span>
                </span>
              </h1>
              <p className="mt-6 text-lg text-cosmic-600 dark:text-cosmic-300 max-w-2xl mx-auto">
                老师傅携手AI科技，用现代智能与传统智慧相结合的方式，为您解析生活轨迹，洞察人生转折，<span className="font-semibold text-mystic-600">助您在人生关键时刻做出明智决策！</span>
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-mystic-300/10 to-transparent dark:from-mystic-900/10"></div>
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
                  className="frosted-glass rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-400/40 to-mystic-600/40 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-mystic-500/20 animate-pulse"></div>
                    <Sun className="w-6 h-6 text-mystic-600" />
                  </div>
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">真人+AI双重解读</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400 text-sm">
                    资深老师傅结合AI智能，多维度分析您的生活情况，准确率高达95%，看透过去，预测未来。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-400/40 to-mystic-600/40 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-mystic-500/20 animate-pulse"></div>
                    <Moon className="w-6 h-6 text-mystic-600" />
                  </div>
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">一问即答，无需久等</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400 text-sm">
                    告别传统预约等待，输入信息立刻获得解答，工作恋爱婚姻财运健康全方位剖析，方便快捷。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="frosted-glass rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-400/40 to-mystic-600/40 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-mystic-500/20 animate-pulse"></div>
                    <CloudLightning className="w-6 h-6 text-mystic-600" />
                  </div>
                  <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-100 mb-2">专业解决方案</h3>
                  <p className="text-cosmic-600 dark:text-cosmic-400 text-sm">
                    不只是分析问题，更提供切实可行的解决方案和开运指导，助您趋吉避凶，把握人生关键点。
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-b from-mystic-50/50 to-mystic-100/50 dark:from-cosmic-900/50 dark:to-cosmic-900/70 relative">
          <div className="absolute inset-0 bg-cosmic-texture opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-lg mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-cosmic-900 dark:text-cosmic-50">开始您的运势之旅</h2>
              <p className="mt-3 text-cosmic-600 dark:text-cosmic-300">
                填写信息，揭开未来的面纱，掌握先机！
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
              className="text-center max-w-lg mx-auto mb-8"
            >
              <h2 className="text-3xl font-bold text-cosmic-900 dark:text-cosmic-50">常见问题</h2>
              <p className="mt-3 text-cosmic-600 dark:text-cosmic-300">
                关于运势解析服务的一些常见疑问
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="space-y-3"
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
                <ResultCard 
                  title="智能解读是如何工作的？" 
                  content="我们融合了传统知识与现代AI技术，由专业老师傅结合人工智能分析您的八字、五行、生辰与具体问题，提供精准运势指引。系统汲取上万例真实案例的经验，准确率远超普通测算。"
                  collapsible
                  defaultOpen={true}
                />
                
                <ResultCard 
                  title="解读结果准确吗？" 
                  content="我们的服务结合了传统老师傅几十年的经验与AI的精准计算能力，准确率极高。大多数客户反馈预测与实际情况高度吻合，尤其在关键人生决策上提供了宝贵指导。当然，未来掌握在自己手中，我们的解读是指引而非决定。"
                  collapsible
                />
                
                <ResultCard 
                  title="我的个人信息安全吗？" 
                  content="绝对安全。您的所有信息仅用于运势分析，不会被存储或用于其他目的。我们采用银行级加密技术保护您的数据，确保隐私万无一失。"
                  collapsible
                />
                
                <ResultCard 
                  title="我可以询问任何类型的问题吗？" 
                  content="是的，您可以咨询婚姻、爱情、事业、财运、健康、择吉、风水等各方面问题。无论您面临什么困惑，我们都能提供专业解读和实用建议，帮您明确方向。"
                  collapsible
                />
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
