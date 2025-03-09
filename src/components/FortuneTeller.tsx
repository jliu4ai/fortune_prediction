
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ResultCard from './ResultCard';
import { getFortune } from '../utils/fortuneService';

const categories = [
  { id: 'love', name: '爱情' },
  { id: 'career', name: '事业' },
  { id: 'health', name: '健康' },
  { id: 'wealth', name: '财富' },
  { id: 'general', name: '综合' },
];

const FortuneTeller = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [category, setCategory] = useState('general');
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fortune, setFortune] = useState<{ title: string; content: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !birthdate) {
      toast({
        title: "信息不完整",
        description: "请填写您的姓名和出生日期.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setFortune(null);
    
    try {
      const result = await getFortune({
        name,
        birthdate,
        category,
        question,
      });
      
      setTimeout(() => {
        setFortune(result);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('解读出错:', error);
      toast({
        title: "解读失败",
        description: "无法获取您的运势预测，请稍后再试.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto" id="fortune">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="frosted-glass rounded-xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-cosmic-800 dark:text-cosmic-200">您的姓名</Label>
                <Input 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="请输入您的姓名"
                  className="glass-input"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="birthdate" className="text-cosmic-800 dark:text-cosmic-200">出生日期</Label>
                <Input 
                  id="birthdate" 
                  type="date" 
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="glass-input"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className="text-cosmic-800 dark:text-cosmic-200">解读类别</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="选择解读类别" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="question" className="text-cosmic-800 dark:text-cosmic-200">您的问题 <span className="text-cosmic-500 text-xs">(选填)</span></Label>
                <Textarea 
                  id="question" 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="请描述您想了解的具体问题..."
                  className="glass-input min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-mystic-500 to-mystic-700 hover:from-mystic-600 hover:to-mystic-800 text-white border-none relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isLoading ? "解读中..." : "开始解读"}
                </span>
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-mystic-600 to-mystic-800 group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-6 bg-white/40"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-6 bg-white/40"></span>
              </Button>
            </form>
          </motion.div>
        </div>
        
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {isLoading && (
              <ResultCard 
                title="正在解读您的运势..." 
                content="" 
                isLoading={true} 
              />
            )}
            
            {!isLoading && fortune && (
              <ResultCard 
                title={fortune.title} 
                content={fortune.content} 
              />
            )}
            
            {!isLoading && !fortune && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="frosted-glass rounded-xl p-8 h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-mystic-400/40 to-mystic-600/40 rounded-full animate-pulse-subtle"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-mystic-300/30 to-mystic-500/30 rounded-full animate-pulse-subtle" style={{ animationDelay: "0.2s" }}></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-mystic-200/20 to-mystic-400/20 rounded-full animate-pulse-subtle" style={{ animationDelay: "0.4s" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-mystic-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-cosmic-800 dark:text-cosmic-200 mb-2">
                  欢迎来到智能解读
                </h3>
                <p className="text-cosmic-600 dark:text-cosmic-400 max-w-md">
                  填写左侧表格信息，我们将通过先进的AI技术为您提供个性化的生活解读。您的星座、生辰八字和具体问题都将影响您的运势解读结果。
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FortuneTeller;
