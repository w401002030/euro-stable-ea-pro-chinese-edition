import {
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  BarChart,
  LifeBuoy,
  DollarSign,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";
// Mock data for the performance chart
export const performanceData = [
  // 2024年3月 – 2025年12月 (22 months) – smooth exponential growth with minor wiggles
  { name: "2024年3月", profit: 1000 },
  { name: "2024年4月", profit: 1300 },
  { name: "2024年5月", profit: 1690 },
  { name: "2024年6月", profit: 2197 },
  { name: "2024年7月", profit: 2856 },
  { name: "2024年8月", profit: 3713 },
  { name: "2024年9月", profit: 3660 }, // slight dip (~1.4%)
  { name: "2024年10月", profit: 4758 },
  { name: "2024年11月", profit: 6185 },
  { name: "2024年12月", profit: 8041 },
  { name: "2025年1月", profit: 10453 },
  { name: "2025年2月", profit: 10300 }, // slight dip (~1.5%)
  { name: "2025年3月", profit: 13390 },
  { name: "2025年4月", profit: 17407 },
  { name: "2025年5月", profit: 22629 },
  { name: "2025年6月", profit: 29418 },
  { name: "2025年7月", profit: 38243 },
  { name: "2025年8月", profit: 49716 },
  { name: "2025年9月", profit: 64631 },
  { name: "2025年10月", profit: 84020 },
  { name: "2025年11月", profit: 109226 },
  { name: "2025年12月", profit: 117803 }, // exact required final value
];
// Data for the key features section
export const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "极低回撤",
    description: "先进的风险管理系统确保资金回撤控制在最低水平，保护您的资金安全。",
  },
  {
    icon: Zap,
    title: "全自动策略",
    description: "无须人工干预，EA 24/7 自动执行交易，抓住每一个市场机会。",
  },
  {
    icon: TrendingUp,
    title: "稳定盈利曲线",
    description: "经过多年市场数据回测与实盘验证，展现出持续稳定的盈利能力。",
  },
  {
    icon: Clock,
    title: "24/7 技术支持",
    description: "我们的专业团队随时为您服务，解答您遇到的任何问题。",
  },
  {
    icon: BarChart,
    title: "多货币对支持",
    description: "完美支持 EURUSD, GBPUSD, USDJPY 等主流货币对，分散风险。",
  },
{
    icon: LifeBuoy,
    title: "新闻过滤",
    description: "智能新闻过滤系统，避免突发事件对交易的影响，确保策略在各种市场条件下稳定运行。",
},
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3",
    price: "$299",
      features: [
        "1个真实账户终身许可",
        "2个模拟账户许可",
        "标准技术支持",
        "建议初始资金：500美元账户（美分账户）",
        "提供免费挂载VPS云端服务器教程",
      ],
    isRecommended: false,
  },
  {
    name: "V3Pro",
    price: "$599",
    features: [
      "2个真实账户终身许可",
      "5个模拟账户许可",
      "终身免费更新",
      "优先技术支持",
      "新闻过滤",
      "高级参数设置",
      "建议初始资金：1000美元账户（美元账户）",
      "提供免费挂载VPS云端服务器教程",
    ],
    isRecommended: true,
  },
  {
    name: "V4.beta",
    price: "敬请期待",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "终身免费更新",
      "极速技术支持",
      "新闻过滤",
      "高级参数设置",
      "独家Beta访问",
      "建议初始资金：10000美元账户（美元账户）",
      "更加专业低延迟稳定的VPS专用服务器",
    ],
    isRecommended: false,
  },
];
// Data for the FAQ section
export const faqItems = [
  {
    question: "什么是 EA (智能交易系统)？",
    answer:
      "EA (Expert Advisor) 是一种在 MetaTrader 平台上运行的自动化交易程序。它根据设定的交易策略自动执行买卖操作，无需人工干预。",
  },
  {
    question: "Euro Stable EA 的最低资金要求是多少？",
    answer:
      "我们建议最低入金为 1000 美元，以确保 EA 能够在安全的风险水平下有效运行。更低的资金也可以运行，但风险会相应增加。",
  },
  {
    question: "我需要一直开着电脑吗？",
    answer:
      "是的，为了让 EA 能够 24/5 不间断运行，您的交易平台需要保持在线。我们强烈建议您使用 VPS (虚拟专用服务器) 来托管您的交易账户，这样可以保障稳定性和连接性。",
  },
  {
    question: "安装和设置过程复杂吗？",
    answer:
      "不复杂。我们提供非常详细的图文安装指南和视频教程。大多数用户可以在 15 分钟内完成所有设置。如果您遇到任何问题，我们的技术支持团队会帮助您。",
  },
  {
    question: "购买后是否还有其他费用？",
    answer:
      "没有。您购买的是终身许可证，所有未来的软件更新和策略优化都是免费的，没有任何隐藏费用或订阅费。",
  },
];
// Data for the stats ticker
export const statsData = [
  { icon: TrendingUp, label: "胜率", value: "85.3%" },
  { icon: DollarSign, label: "总盈利", value: "$228,000+" },
  { icon: TrendingDown, label: "最大回撤", value: "15%" },
  { icon: Users, label: "活跃用户", value: "12,847+" },
];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA 彻底改变了我的交易生涯。稳定盈利，低回撤，完美的！",
      author: "John Smith",
    role: "Full-time Trader",
  },
  {
    quote: "安装简单，运行稳定。2个月收益超过预期，强烈推荐！",
      author: "Emma Johnson",
    role: "Investment Manager",
  },
  {
    quote: "专业的团队，及时的支持。值得信赖的交易伙伴！",
      author: "Michael Brown",
    role: "Forex Enthusiast",
  },
];