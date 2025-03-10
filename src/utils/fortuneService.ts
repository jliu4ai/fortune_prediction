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

// Vite 环境变量，支持后端 API URL 配置
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://52.28.100.202:5500/generate-report ';

export const getFortune = async (request: FortuneRequest): Promise<FortuneResponse> => {
  console.log('getFortune called with request:', request);
  const birthDate = new Date(request.birthdate);
  const zodiacSign = getZodiacSign(birthDate);

  try {
    console.log('Calling API with request:', request);
    console.log('API URL:', API_BASE_URL);

    // 构造 API 请求数据
    const input = `姓名：${request.name}，出生日期：${request.birthdate}`;
    const requestData = { input };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8秒超时

      const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('API Response status:', response.status);

      if (!response.ok) {
        console.error(`API returned error status: ${response.status}`);
        return generateLocalFortune(request, zodiacSign); // 使用本地生成
      }

      const data = await response.json();
      console.log('API Response data:', data);

      // 保持 title 逻辑不变，只解析 content
      return {
        title: `${request.name}的${getCategoryName(request.category)} - ${zodiacSign}`,
        content: data.report || "无法获取运势预测，请稍后再试。" // 解析 OpenAI 返回的 report
      };

    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      return generateLocalFortune(request, zodiacSign); // 网络错误时使用本地生成
    }
  } catch (error) {
    console.error('获取运势预测失败，使用本地预测:', error);
    return generateLocalFortune(request, zodiacSign);
  }
};

// 本地预测（当 API 失败时调用）
function generateLocalFortune(request: FortuneRequest, zodiacSign: string): FortuneResponse {
  console.log('Generating local fortune for', request.name, 'with zodiac sign', zodiacSign);
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

  console.log('Local fortune generation complete:', { title, contentLength: content.length });
  return { title, content };
}

// ⭐ 辅助函数（不变）：
function getZodiacSign(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const signs = [
    '摩羯座', '水瓶座', '双鱼座', '白羊座', '金牛座', '双子座',
    '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座'
  ];
  const dates = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
  return day > dates[month - 1] ? signs[month] : signs[month - 1];
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

// 🏆 假设的本地预测逻辑（略去具体内容）
function generateLoveFortune(nameLength: number, zodiacSign: string): string { return `爱情运势 ${zodiacSign}`; }
function generateCareerFortune(nameLength: number, zodiacSign: string): string { return `事业前景 ${zodiacSign}`; }
function generateHealthFortune(nameLength: number, zodiacSign: string): string { return `健康指引 ${zodiacSign}`; }
function generateWealthFortune(nameLength: number, zodiacSign: string): string { return `财富预测 ${zodiacSign}`; }
function generateGeneralFortune(nameLength: number, zodiacSign: string): string { return `综合运势 ${zodiacSign}`; }
function generateSpecificAnswer(question: string, zodiacSign: string): string { return `智慧指引: ${zodiacSign}`; }
