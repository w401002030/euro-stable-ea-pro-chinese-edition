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
    title: "全自动智能交易",
    description: "基于深度神经网络算法，24小时全天候自动识别市场趋势并执行交易，无需人工盯盘。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模���",
    description: "动态仓位管理，根据账户增长自动调��手数，实现指数级复利增长。",
  },
  {
    icon: BarChart,
    title: "主要外汇货��对优化",
    description: "完美适配EURUSD、GBPUSD等主流货币对，跨对分散投资降低系统风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过��",
    description: "自动检测高影响力经济事件，���动期暂停交易保护资金。",
  },
  {
    icon: ShieldCheck,
    title: "超低回撤控制",
    description: "多层风险算法严格限制单笔交易敞口，确保可控���撤。",
  },
  {
    icon: Clock,
    title: "专家技术支持",
    description: "���对一远程安装指导与策略优化，确保顺畅启动。",
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
    name: "V4 Beta 旗��版",
    price: "即将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "24/7 专家支持",
      "独家 Beta 访问",
      "建议初始资金：10000美元��上",
      "低延迟 VPS 支持"
    ],
    isRecommended: false
  }
];
// Data for the FAQ section - Restored to 6 core items
export const faqItems = [
  {
    question: "MT4是什么？",
    answer: "MT4 (MetaTrader 4) 是全球顶级的外汇交易平台，支持运行EA、高级图表分��及一键交易。"
  },
  {
    question: "EA是什么？",
    answer: "EA (Expert Advisor) 是全自动交易机器人，能够24/7基于预设逻辑执行交易，完全消除情绪干扰。"
  },
  {
    question: "最低资金？",
    answer: "v2.3 标准版最低500美元（美分账户），V3 Pro 专业版建议1000美元（美金账户）。"
  },
  {
    question: "24h开机？",
    answer: "是的，MT4需要持续在线。我们提供详细的VPS云端运行指南，确保您的EA 24小时稳定运行。"
  },
  {
    question: "安装？",
    answer: "非常简单，通常只需10分钟即可完成。我们附带视频教程，���提供远程技术支持。"
  },
  {
    question: "续费？",
    answer: "无任何后续费���。我们提供的是终身许可，并包含免费的策略更新。"
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
    quote: "作��投资经理，V3Pro 可靠性超预期。",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "专业支持，安装顺畅，3个��稳定盈利。",
    author: "Michael Chen",
    role: "Forex Enthusiast",
  },
  {
    quote: "严谨风险逻辑完美适合长期投资组合。",
    author: "Emma Wilson",
    role: "Professional Investor",
  },
  {
    quote: "新闻过滤器完美应对波动市场，避免风险。",
    author: "David Park",
    role: "Senior Trader",
  },
  {
    quote: "技术团队耐心指导，新手也能轻松上手。",
    author: "Olivia Kim",
    role: "Novice Investor",
  },
  {
    quote: "精准量化逻辑，收益曲线完美平滑。",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "新闻过滤器避免损失，值得信赖。",
    author: "Lily Wang",
    role: "Business Owner",
  },
  {
    quote: "全方���支持，完美适配小额账户。",
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
    quote: "快速问题解决，稳定持续收益。",
    author: "Kevin Anderson",
    role: "Freelancer",
  },
];