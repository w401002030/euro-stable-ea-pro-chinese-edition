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
  { name: "Apr 2024", profit: 1021 },
  { name: "May 2024", profit: 1045 },
  { name: "Jun 2024", profit: 1068 },
  { name: "Jul 2024", profit: 1092 },
  { name: "Aug 2024", profit: 1118 },
  { name: "Sep 2024", profit: 1105 },
  { name: "Oct 2024", profit: 1132 },
  { name: "Nov 2024", profit: 1160 },
  { name: "Dec 2024", profit: 1195 },
  { name: "Jan 2025", profit: 1224 },
  { name: "Feb 2025", profit: 1215 },
  { name: "Mar 2025", profit: 1248 },
  { name: "Apr 2025", profit: 1282 },
  { name: "May 2025", profit: 1315 },
  { name: "Jun 2025", profit: 1350 },
  { name: "Jul 2025", profit: 1388 },
  { name: "Aug 2025", profit: 1425 },
  { name: "Sep 2025", profit: 1465 },
  { name: "Oct 2025", profit: 1502 },
  { name: "Nov 2025", profit: 1545 },
  { name: "Dec 2025", profit: 1582 },
];
// Data for the key features section
export const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Zap,
    title: "全自动智���交易",
    description: "基于深度神经网络算法，24小时全天候自动���别市场趋势并执行交易，无需人工盯盘。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "动态仓位管理，根��账户增长自动调整手数，实现指数级复利增长。",
  },
  {
    icon: BarChart,
    title: "主流货币��优化",
    description: "完美适配EURUSD、GBPUSD等主流货币对，跨对分散投资降低系统风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过滤",
    description: "自动检测高影响力经��事件，波动期暂停交易保护资金。",
  },
  {
    icon: ShieldCheck,
    title: "多层风险算法",
    description: "内置多层风险控制逻辑，严格限制单笔交易��口，确保回撤处于可控范围。",
  },
  {
    icon: Clock,
    title: "一对一技术支持",
    description: "一对一远程安装指导与策略优化，确保您的量化交易系统顺畅启动。",
  }
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3 标准版",
    price: "$299",
    features: [
      "1��真实账户终身许可",
      "标准技术支持",
      "建议初始资金：最低500美元 (美分账户)",
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
    price: "��将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "24/7 专家支持",
      "独家 Beta ��问",
      "建议初始资金：10000美元以上",
      "低延迟 VPS 支持"
    ],
    isRecommended: false
  }
];
// Refined and concise FAQ section
export const faqItems = [
  {
    question: "什么是 MT4 (MetaTrader 4) 平台？",
    answer: "MT4是全球公认的在线外汇交易标杆平台。它以卓越的稳定性、强大的图表分析和对EA脚本的���美支持著称，为您提供理想的自动化交易环境。"
  },
  {
    question: "EA (智能交易系统) 的核心优���是什么？",
    answer: "EA能排除人类贪婪��恐惧的情绪干扰。Euro Stable EA采用神经网络算法，24/7全天候精准监控市场，严格执行预设风控，实现稳健获利。"
  },
  {
    question: "开始交易需要准备多少初始资金？",
    answer: "建议美分账户500美元起步，美金账户1000美元以上。充足的初始资金能让动态仓位管理系统更有发挥空间，增强抗风险能力并确保长期稳健获利。"
  },
  {
    question: "为什么需要 24 小时开机运行？如何实现？",
    answer: "为了捕捉跨时段机���并确保平仓安全，MT4必须持续在线。我们建议并提供详尽的VPS（云端电脑）部署教程，确保EA实现100%在线与极低延迟。"
  },
  {
    question: "软件的安装和后续��置复杂吗？",
    answer: "安装流程极简，零基���用户10分钟内即可完成。我们提供视频手册、预设参数文件及一对一远程技术援助，确保每位投资者都能顺利启动系统。"
  },
  {
    question: "购买后需要支付后续��费或订阅费吗？",
    answer: "Euro Stable EA采用一次性付费、终身��权模式。无任何隐性订阅成本。我们承诺为授权用户提供终身免费的策略优化与算法更新支持。"
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
    quote: "Euro Stable EA 彻底改变了我的投资，稳定性与回撤控制令人印象深刻。",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "作为投资经理，V3Pro 的可���性远超预期，收益曲线非常平滑。",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "专业支持，安装顺畅，3个月稳定盈利，值得信任。",
    author: "Michael Chen",
    role: "Forex Enthusiast",
  },
  {
    quote: "严谨风险逻辑完美适合长期投资组合。全方位支持非常到位。",
    author: "Emma Wilson",
    role: "Professional Investor",
  },
  {
    quote: "新闻过滤器完美应对波动市场，规避风险，让我信心十足。",
    author: "David Park",
    role: "Senior Trader",
  },
  {
    quote: "技术团队耐心指导，���手也能轻松上手，收益曲线优美。",
    author: "Olivia Kim",
    role: "Novice Investor",
  },
  {
    quote: "精准量化逻辑，连续一年稳定增长。问题解决速度极快。",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "对��策略带来安心，顶级回撤控制。值得推荐给所有零售投资者。",
    author: "Sarah Thompson",
    role: "Financial Analyst",
  },
];