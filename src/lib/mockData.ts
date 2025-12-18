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
  { name: "2024年3月", profit: 1000 },
  { name: "2024年4月", profit: 1300 },
  { name: "2024年5月", profit: 1690 },
  { name: "2024年6月", profit: 2197 },
  { name: "2024年7月", profit: 2856 },
  { name: "2024年8月", profit: 3713 },
  { name: "2024年9月", profit: 3660 },
  { name: "2024年10月", profit: 4758 },
  { name: "2024年11月", profit: 6185 },
  { name: "2024年12月", profit: 8041 },
  { name: "2025年1月", profit: 10453 },
  { name: "2025年2月", profit: 10300 },
  { name: "2025年3月", profit: 13390 },
  { name: "2025年4月", profit: 17407 },
  { name: "2025年5月", profit: 22629 },
  { name: "2025年6月", profit: 29418 },
  { name: "2025年7月", profit: 38243 },
  { name: "2025年8月", profit: 49716 },
  { name: "2025年9月", profit: 64631 },
  { name: "2025年10月", profit: 84020 },
  { name: "2025年11月", profit: 109226 },
  { name: "2025年12月", profit: 117803 },
];
// Data for the key features section
export const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Zap,
    title: "��自动智能交易",
    description: "基于��经网络算法，24/7 自动识别市场趋势并执行交易，无需人工盯盘。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "支��动态仓位管理，随账户余额增长自动调整手数，实现复利的指数级增长。",
  },
  {
    icon: BarChart,
    title: "完美适配策略",
    description: "完美适配 EURUSD, GBPUSD 等主流货币对，通过多品种分散投资降低系统性风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过滤",
    description: "自动识别重大影响财经数据发布时间，在极端波动行情前自动规避，保护本��安全。",
  },
  {
    icon: ShieldCheck,
    title: "超低回撤控制",
    description: "部署多重风控算法，严格控制每笔交易风险，确保账户回撤��终处于可控范围。",
  },
  {
    icon: Clock,
    title: "专业技术支持",
    description: "���供一对一远程安装指导与策略优化建议，确保每一位��户都能顺利开启交易。",
  },
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3 标准���",
    price: "$299",
    features: [
      "1个真实账户终身许可",
      "标准技术支持",
      "建议初始资金���500美元 (美分账户)",
      "免费 VPS 云端挂载���程",
    ],
    isRecommended: false,
  },
  {
    name: "V3Pro 专业版",
    price: "$599",
    features: [
      "2个真实账户终身许可",
      "终身免费版本更新",
      "优质技术支持响应",
      "高��新闻过滤系统",
      "建议初始资金：1000美元 (美分账户)",
      "免费 VPS 云端挂载教程",
    ],
    isRecommended: true,
  },
  {
    name: "V4.beta 旗��版",
    price: "即将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "全天候专业技术咨询",
      "独家 Beta 策略访问权",
      "建议初始资金：10000美元+",
      "低延迟专用服务器支持",
    ],
    isRecommended: false,
  },
];
// Data for the FAQ section
export const faqItems = [
  {
    question: "MT4是什么？",
    answer:
      "MT4 (MetaTrader 4) 是全球最流行的外汇交易平台，支持 EA 自动交易，提供图表分析、���单管理和一键交易等功能。",
  },
  {
    question: "什么是 EA (智能交易系统)？",
    answer:
      "EA (Expert Advisor) 是一种在 MetaTrader 平台上运行的全自动交易程序，它根据预设的逻辑自动执行买卖操作，消除了情绪���扰，实现 24 小时不间断交易。",
  },
  {
    question: "Euro Stable EA 的最低资金要求是多少？",
    answer:
      "对于标准账户，我们建议最低入金 1000 美元。如果您使用美分账户 (Cent Account)，最低 500 美元即可开始运行，并确保���足够保证金应对市场波动。",
  },
  {
    question: "我需要一直保持电脑开启吗？",
    answer:
      "是的，EA 需要 MT4 平台持续在线，���我们会提供部署 VPS (虚拟专用服务器) 的教程，它可以让您的交易环境在云端 24/7 ��定运行，不受本地断网或断电影响。",
  },
  {
    question: "安装和设置过程��杂吗？",
    answer:
      "非常简单。我们提供详细的中文图文手册和视频教程。通常只需 10-15 分钟即可完成设置。我们的���术团队也提供远程协助服务。",
  },
  {
    question: "购买后是否还有后续续费费用？",
    answer:
      "没有。您购买的是终身授权许可。所有未来的策略优化、参数更新和软件升级均对所有客户免费开放。",
  },
];
// Data for the stats ticker
export const statsData = [
  { icon: TrendingUp, label: "平均胜率", value: "85.3%" },
  { icon: DollarSign, label: "累计盈利", value: "$228k+" },
  { icon: TrendingDown, label: "历史最大回撤", value: "15.2%" },
  { icon: Users, label: "全球活跃用户", value: "12,847+" },
];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA 彻底改变了我的投资方式。它的稳定性���人印象深刻，回撤控制得非常好。",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "���为一名投资经理，我一直在寻找可靠的自动化工具。V3Pro 的表现超过了我的预期。",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "客服团队非常专业，安装过程很顺利。运行三个月以来，收益非常稳定。",
    author: "Michael Chen",
    role: "Forex Enthusiast",
  },
  {
    quote: "该系统的风控逻辑非常严密，特别是在回撤管理上，体现了极高的专业水平，是长期资产配置的理想选��。",
    author: "Emma Wilson",
    role: "Professional Investor",
  },
  {
    quote: "在近一年高波动极端行情下，EA的新闻过滤系统表现完美，成功规避了极端风险，这��稳定性在市面上非常罕见。",
    author: "David Park",
    role: "Senior Trader",
  },
  {
    quote: "刚开始���触外汇非常迷茫，感谢技术团队的一对一远程安装服务，非常有耐心，让我这种新手也能轻松上手。",
    author: "Olivia Kim",
    role: "Novice Investor",
  },
  {
    quote: "从量化分析的角度���，这款EA的入场逻辑非常精准，能有效过滤市场噪音，资金曲线的光滑度令人惊叹。",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "这个EA的新闻过滤功能特别出色，避免了多次重大新闻后���大损失，值得信赖。",
    author: "Lily Wang",
    role: "Business Owner",
  },
  {
    quote: "从安装到运行全程支持到位，策略参数也很适合小资金用户，收益很可观。",
    author: "Ethan Liu",
    role: "Retail Investor",
  },
  {
    quote: "对比其他EA，这个系统的回撤控制确实名不虚传，赚钱的感觉真好。",
    author: "Grace Huang",
    role: "Software Engineer",
  },
  {
    quote: "V3Pro专业版的运行一年多，月均收益稳定在15%以上。",
    author: "James Miller",
    role: "Private Investor",
  },
  {
    quote: "多品种对冲策略让投资���加安全，资金曲线非常漂亮，强烈推���给朋友。",
    author: "Sarah Thompson",
    role: "Financial Analyst",
  },
  {
    quote: "技术团队响应很快，遇到问题都能及时解决。这个EA真正实现了稳定盈利。",
    author: "Kevin Anderson",
    role: "Freelancer",
  },
];