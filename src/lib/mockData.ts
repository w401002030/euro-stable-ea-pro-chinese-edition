import {
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart,
  LifeBuoy,
  Clock,
  DollarSign,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";
// Mock data for the performance chart
export const performanceData = [
  { name: "Mar 2024", profit: 1000 },
  { name: "Apr 2024", profit: 1300 },
  { name: "May 2024", profit: 1690 },
  { name: "Jun 2024", profit: 2197 },
  { name: "Jul 2024", profit: 2856 },
  { name: "Aug 2024", profit: 3713 },
  { name: "Sep 2024", profit: 3660 },
  { name: "Oct 2024", profit: 4758 },
  { name: "Nov 2024", profit: 6185 },
  { name: "Dec 2024", profit: 8041 },
  { name: "Jan 2025", profit: 10453 },
  { name: "Feb 2025", profit: 10300 },
  { name: "Mar 2025", profit: 13390 },
  { name: "Apr 2025", profit: 17407 },
  { name: "May 2025", profit: 22629 },
  { name: "Jun 2025", profit: 29418 },
  { name: "Jul 2025", profit: 38243 },
  { name: "Aug 2025", profit: 49716 },
  { name: "Sep 2025", profit: 64631 },
  { name: "Oct 2025", profit: 84020 },
  { name: "Nov 2025", profit: 109226 },
  { name: "Dec 2025", profit: 117803 },
];
// Data for the key features section
export const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Zap,
    title: "自动智能交易",
    description: "基于深度神经网络算法，24小时全天候自动识别市场趋势并执行交易，无需人工盯盘。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "动态仓位管理，根���账户增长自动调整手数，实现指数级复利增长。",
  },
  {
    icon: BarChart,
    title: "主要外汇��币对优化",
    description: "完美适配EURUSD、GBPUSD等主流货币对，跨对分散投资降低系统风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过��",
    description: "自动检测高影响力经��事件，波动期暂停交易保护资金。",
  },
  {
    icon: ShieldCheck,
    title: "超低回撤控制",
    description: "多层风险算法严格限制单笔交易敞口，确保可控回撤。",
  },
  {
    icon: Clock,
    title: "一对一技术支持",
    description: "一对一远程安装指导与策略优化，确保顺畅启动。",
  }
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3 标准版",
    price: "$299",
    features: [
      "1个真实账户终���许可",
      "标准技术支持",
      "建议初始资金：最低500美元 (美���账户)",
      "免费 VPS 部署教程"
    ],
    isRecommended: false
  },
  {
    name: "V3 Pro 专业版",
    price: "$599",
    features: [
      "2个真实账户终身许可",
      "终身免费更新",
      "优先技术支持",
      "高级新闻过滤",
      "建议初始资金：1000美元 (美金账户)",
      "免费 VPS 主机教程"
    ],
    isRecommended: true
  },
  {
    name: "V4 Beta 旗舰版",
    price: "即将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "24/7 专家支持",
      "独家 Beta 访问",
      "建议初始资金：10000美元以上",
      "低延迟 VPS 支持"
    ],
    isRecommended: false
  }
];
// Refined and concise FAQ section (approx. 120 chars each)
export const faqItems = [
  {
    question: "什么是 MT4 (MetaTrader 4) 平台？",
    answer: "MT4是全球公认的在线外汇交易标杆平台。它以卓越的稳定性、强大的图表分析和对EA脚本的完美支持著称。通过毫秒级的执行速度与高度安全的数据加密，MT4为您提供了理想的算法交易环境，是连接全球流动性市场、实现���人值守交易的核心桥梁。"
  },
  {
    question: "EA (智能交易系统) 的核心优势是什么？",
    answer: "EA的核心优势在于排除了贪婪、恐惧��情绪干扰。Euro Stable EA采用神经网络算法，24/7全天候精准监控市场。相比人工，它的执行速度更���、计算更严谨，能严格遵循预设的风险管理规则，在释放您双手的同��，捕捉肉眼难以发现的微小获利机会。"
  },
  {
    question: "开始交易需要准备多少初始资金？",
    answer: "门槛取决于您的风险偏好。新手建议选择标准版，从500美元美分账户���步，以极高保证金水平确保安全。若追求更优成本控制，建议使用专业版配合1000美元以上美金账户。充足的资金能让动态仓位管理系统更有发挥���间，增强抗风险能力并稳健获利。"
  },
  {
    question: "为什么需要 24 小时开机���行？如何实现？",
    answer: "为了捕捉欧美盘跨时段机会，MT4必须持续在线。若关机或断网，可能错过平仓时机或造成损失。最佳方案是使用VPS（云端永不关机电脑）。我们提供详尽的国内���主流VPS部署教程，确保EA实现100%在线率与极低交易延迟，让每一笔订单都在最优价格瞬间成交。"
  },
  {
    question: "软件的安装和后续配置复杂吗？",
    answer: "安装流程极简，零基础用户10分钟内即可完成。购买后您将获��视频手册、PDF指南及预设最优参数文件。只需将文件存入MT4指定目录并开启自动交易。我们还提供一对一远程技术援助，确保每位投资者都能顺利启动，让技术不再成为您开启量化投资的���槛。"
  },
  {
    question: "购买后需要支付后续月费或订阅费吗？",
    answer: "Euro Stable EA采用一次性付费、终身授权模式。无月费、无��费、无任何隐性订阅成本。我们承诺为授权用户提供终身免费的策略优化与算法更新，确保系统始终适应市场变化。作为VIP客户，您还将享有后续新版本升级的独家折��，体验长期的技术服务支持。"
  }
];
// Data for the stats ticker
export const statsData = [
  { icon: TrendingUp, label: "胜率", value: "85.3%" },
  { icon: DollarSign, label: "总盈利", value: "$228k+" },
  { icon: TrendingDown, label: "最大回撤", value: "15.2%" },
  { icon: Users, label: "活跃用户", value: "12,847+" }
];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA 彻底改变了��的投资，稳定性与回撤控制令人印象深刻。",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "作为投资经理，V3Pro 可靠性远超预期。",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "专业支持，安装顺畅，3个月稳定盈利。",
    author: "Michael Chen",
    role: "Forex Enthusiast",
  },
  {
    quote: "严谨风险逻辑完美适合长期投资组合。",
    author: "Emma Wilson",
    role: "Professional Investor",
  },
  {
    quote: "新闻过滤器完美应对波动市场，��免风险。",
    author: "David Park",
    role: "Senior Trader",
  },
  {
    quote: "技术团队耐心指导，新手也能轻松上手。",
    author: "Olivia Kim",
    role: "Novice Investor",
  },
  {
    quote: "精准量化逻辑，收益曲线���美平滑。",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "新闻过滤器避免损失，值得信赖。",
    author: "Lily Wang",
    role: "Business Owner",
  },
  {
    quote: "全方位支持，完美适配小��账户。",
    author: "Ethan Liu",
    role: "Retail Investor",
  },
  {
    quote: "顶级回撤控制，盈利信心十足。",
    author: "Grace Huang",
    role: "Software Engineer",
  },
  {
    quote: "连续一年月收益15%以上。",
    author: "James Miller",
    role: "Private Investor",
  },
  {
    quote: "对冲策略带来安心，完美收益曲线。",
    author: "Sarah Thompson",
    role: "Financial Analyst",
  },
  {
    quote: "快速问题解决，稳定���续收益。",
    author: "Kevin Anderson",
    role: "Freelancer",
  },
];