// This is a mock implementation of the fortune service.
// In a real application, this would connect to an AI service.

interface FortuneRequest {
  name: string;
  birthdate: string;
  category: string;
  question?: string;
}

interface FortuneResponse {
  title: string;
  content: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5500';

export const getFortune = async (request: FortuneRequest): Promise<FortuneResponse> => {
  const birthDate = new Date(request.birthdate);
  const zodiacSign = getZodiacSign(birthDate);

  try {
    // 尝试调用后端 API
    const requestData = {
      ...request,
      zodiacSign,
    };

    const response = await fetch(`${API_BASE_URL}/api/fortune`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.title && data.content) {
        return data;
      }
    }
    
    // 如果 API 调用失败或返回格式不正确，使用本地预测
    console.log('后端服务未响应，使用本地预测');
    return generateLocalFortune(request, zodiacSign);

  } catch (error) {
    console.error('获取运势预测失败，使用本地预测:', error);
    return generateLocalFortune(request, zodiacSign);
  }
};

// 生成本地预测
function generateLocalFortune(request: FortuneRequest, zodiacSign: string): FortuneResponse {
  const { name, category, question } = request;
  const nameLength = name.length;
  
  let title = `${name}的${getCategoryName(category)} - ${zodiacSign}`;
  let content = '';

  // 根据类别生成相应的预测内容
  switch (category) {
    case 'love':
      content = generateLoveFortune(nameLength, zodiacSign);
      break;
    case 'career':
      content = generateCareerFortune(nameLength, zodiacSign);
      break;
    case 'health':
      content = generateHealthFortune(nameLength, zodiacSign);
      break;
    case 'wealth':
      content = generateWealthFortune(nameLength, zodiacSign);
      break;
    default:
      content = generateGeneralFortune(nameLength, zodiacSign);
  }

  // 如果有具体问题，添加问题的回答
  if (question && question.trim().length > 0) {
    content += `\n\n关于您提出的问题："${question}"，智慧指引显示：${generateSpecificAnswer(question, zodiacSign)}`;
  }

  return { title, content };
}

// Helper functions

function getZodiacSign(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return '白羊座';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return '金牛座';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return '双子座';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return '巨蟹座';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return '狮子座';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return '处女座';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return '天秤座';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return '天蝎座';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return '射手座';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return '摩羯座';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return '水瓶座';
  return '双鱼座';
}

function getCategoryName(category: string): string {
  const categories: Record<string, string> = {
    'love': '爱情运势',
    'career': '事业前景',
    'health': '健康指引',
    'wealth': '财富预测',
    'general': '综合运势'
  };
  
  return categories[category] || '运势';
}

function generateLoveFortune(nameLength: number, zodiacSign: string): string {
  const fortunes = [
    `${zodiacSign}的您近期爱情运势逐渐上升。您的魅力将在社交场合闪耀，吸引对的人注意。已有伴侣的您，关系将更加稳固，共同经历会带来更深的连结。保持真诚和开放的心态，爱情将给您带来满足和喜悦。`,
    `您的感情生活正处于转变期。过去的经历使您更加清楚自己在爱情中的需求和界限。未来三个月内，可能会遇到令您心动的人，但不要急于确定关系，给彼此更多了解的时间。已有伴侣的您，需要更多耐心和包容来度过这段时期。`,
    `指引显示，您的爱情生活即将迎来重要转折。单身的您可能在一次意外的相遇中遇到心仪对象。已有伴侣的您，关系将更加深入，有望迈向更稳定的阶段。记住，真正的爱情需要双方共同努力和理解。`
  ];
  
  return fortunes[nameLength % fortunes.length];
}

function generateCareerFortune(nameLength: number, zodiacSign: string): string {
  const fortunes = [
    `作为${zodiacSign}，您的职业发展正处于上升期。您的创造力和专业技能将得到重要人物的认可。未来六个月内，可能会有晋升或新工作机会。保持专注和积极的态度，不要害怕承担更多责任，这将为您的长期职业发展奠定基础。`,
    `您的职业道路可能面临一些挑战，但这些正是成长的机会。您的适应能力和解决问题的技巧将帮助您度过难关。考虑拓展您的专业网络，寻求导师指导。记住，每一次职业挑战都是为了让您站在更高的平台上。`,
    `预测显示您的职业运势正在变得明朗。您过去的努力将开始得到回报，特别是在创新方面的贡献。保持对新知识的渴望，不断学习和提升自己。未来可能有意想不到的职业机会出现，要保持开放的心态和敏锐的洞察力。`
  ];
  
  const index = nameLength % fortunes.length;
  return fortunes[index];
}

function generateHealthFortune(nameLength: number, zodiacSign: string): string {
  const fortunes = [
    `${zodiacSign}的您需要特别关注身体的平衡。保持规律的作息和适当的运动对您尤为重要。近期您的精力可能略有下降，建议增加户外活动和轻度有氧运动。同时，注意饮食均衡，减少刺激性食物的摄入，这将帮助您维持良好的健康状态。`,
    `您的健康状况整体良好，但需要注意情绪管理。压力和焦虑可能是您健康的主要威胁。建议尝试冥想或呼吸练习来舒缓心情。同时，确保充足的睡眠和水分摄入。定期健康检查也是维持健康的重要部分。`,
    `分析显示您的身体能量正在恢复。这是增强体质的好时机，可以开始一项新的运动或健身计划。特别注意保护关节和脊椎健康。平衡的饮食、充足的休息和适当的运动将帮助您保持活力和健康。记住，身心健康是相互关联的。`
  ];
  
  const index = nameLength % fortunes.length;
  return fortunes[index];
}

function generateWealthFortune(nameLength: number, zodiacSign: string): string {
  const fortunes = [
    `作为${zodiacSign}，您的财务状况将逐渐稳定。过去的投资可能开始显现回报，但仍需谨慎管理资金。未来三个月是理财规划的好时机，考虑多元化投资组合。避免冲动消费，将更多注意力放在长期财务目标上。`,
    `您的财富运势正在上升。可能会有意外的收入或投资机会。然而，提示您要谨慎对待看似诱人的快速致富计划。建立应急基金，减少不必要的债务，并考虑咨询专业财务顾问，这将帮助您实现财务稳健增长。`,
    `分析显示您的财务状况可能面临一些波动。这是审视和调整财务计划的好时机。减少非必要开支，增加储蓄率。未来可能有新的收入来源，但需要您主动寻找和把握机会。记住，财务自由来自于明智的决策和长期规划。`
  ];
  
  const index = nameLength % fortunes.length;
  return fortunes[index];
}

function generateGeneralFortune(nameLength: number, zodiacSign: string): string {
  const fortunes = [
    `${zodiacSign}的您正处于人生的重要转折点。过去的努力将开始结出果实，但同时也会面临新的挑战。保持乐观和适应性强的态度将帮助您度过这段时期。在人际关系方面，真诚的交流将带来意想不到的支持和机会。记住，每一次变化都是成长的机会。`,
    `您的整体运势呈现上升趋势。直觉将是您重要的引导力量，学会信任自己的内心声音。未来六个月内，可能会有重要的决定需要您做出，请充分考虑长远影响。您的个人魅力将帮助您建立重要的人际连接，这些关系将在未来发挥重要作用。`,
    `解读显示您正进入一个自我发现和成长的时期。这是反思过去和规划未来的好时机。您可能会重新评估自己的价值观和目标。保持开放的心态，不要害怕探索新的道路。您的韧性和创造力将帮助您克服障碍，实现真正的自我。`
  ];
  
  const index = nameLength % fortunes.length;
  return fortunes[index];
}

function generateSpecificAnswer(question: string, zodiacSign: string): string {
  const questionLength = question.length;
  const isPositiveQuestion = question.includes('能') || question.includes('可以') || question.includes('会');
  
  const answers = [
    `智慧分析显示这条路径充满挑战但值得尝试。保持耐心和毅力，结果将超出您的预期。关键是不要轻易放弃，即使遇到困难也要坚持自己的目标。`,
    `预示这可能不是最佳时机。建议再等待一段时间，同时做好充分准备。在未来三个月内，更有利的机会将会出现。`,
    `您的问题背后隐藏着更深层次的考量。建议您反思自己真正的需求和动机。生活的智慧支持您寻找真实的答案，而不仅仅是表面的解决方案。`,
    `指引您向前迈进。虽然道路上有不确定性，但您具备克服挑战的能力。信任自己的判断，同时保持灵活性，调整计划以适应变化的情况。`,
    `分析显示这是一个需要平衡和耐心的时期。在做出决定前，确保您已经考虑了所有可能的选项和后果。咨询您信任的人可能会带来新的视角。`
  ];
  
  let index = questionLength % answers.length;
  if (isPositiveQuestion && index % 2 === 0) {
    index = (index + 1) % answers.length;
  }
  
  return answers[index];
}
