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
}[] = [{icon: Zap, title: "全自动智能交易", description: "基于深度神经网络算法，24小时全天候自动识别市场趋势并执行交易，无需人工盯盘。"}, {icon: TrendingUp, title: "复利增长模式", description: "动态仓位管理，根据账户增长自动调整手数，实现指数级复利增长。"}, {icon: BarChart, title: "主要外汇货币对优化", description: "完美适配EURUSD、GBPUSD等主流货币对，跨对分散投资降低系统风险。"}, {icon: LifeBuoy, title: "智能新闻过滤", description: "自动检测高影响力经济事件，波动期暂停交易保护资金。"}, {icon: ShieldCheck, title: "超低回撤控制", description: "多层风险算法严格限制单笔交易敞口，确保可控回撤。"}, {icon: Clock, title: "专家技术支持", description: "一对一远程安装指导与策略优化，确保顺畅启动。"}];
// Data for the pricing plans
export const pricingPlans = [{name: "v2.3 标准版", price: "$299", features: ["1个真实账户终身许可","标准技术支持","建议初始资金：最低500美元 (美分账户)","免费VPS部署教程"], isRecommended: false}, {name: "V3 Pro 专业版", price: "$599", features: ["2个真实账户终身许可","终身免费更新","优先技术支持","高级新闻过滤","建议初始资金：1000美元 (美金账户)","免费VPS主机教程"], isRecommended: true}, {name: "V4 Beta 旗舰版", price: "即将推出", features: ["3个真实账户终身许可","无限模拟账户许可","24/7专家支持","独家Beta访问","建议初始资金：10000美元以上","低延迟VPS支持"], isRecommended: false}];
// Data for the FAQ section
export const faqItems = [{question: "什么是MT4？", answer: "MT4 (MetaTrader 4) 是全球顶级外汇平台，支持EA、图表、订单和一键交易。"}, {question: "什么是EA（专家顾问）？", answer: "全自动交易机器人，24/7基于逻辑执行交易，无情绪干扰。"}, {question: "最低资金要求？", answer: "标准：1000美元。美分账户：500美元最低。"}, {question: "需要24小时开机？", answer: "MT4需持续在线，提供VPS云端运行指南。"}, {question: "安装复杂吗？", answer: "简单，10-15分钟附教程视频，远程支持可用。"}, {question: "有续费吗？", answer: "无——终身许可，免费更新。"}, {question: "24小时热线", answer: "电话: +86 18666888095 / (719) 524-8014 | 邮箱: 673351805@qq.com | 直播聊天。"}];
// Data for the stats ticker
export const statsData = [{icon: TrendingUp, label: "胜率", value: "85.3%"}, {icon: DollarSign, label: "总盈利", value: "$228k+"}, {icon: TrendingDown, label: "最大回撤", value: "15.2%"}, {icon: Users, label: "活跃用户", value: "12,847+"}];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA 彻底改变了我的投资，稳定性与回撤控制令人印象深刻。",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "作为投资经理，V3Pro 可靠性超预期。",
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
    quote: "全方位支持，完美适配小额账户。",
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