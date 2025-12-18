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
    description: "基于深度神经网络算法，24/7 自动识别市场趋势并执行交易，无需人工盯盘。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "支持动态仓位管理，随账户余额增长自动调整手数，实现复利的指数级增长。",
  },
  {
    icon: BarChart,
    title: "主流货币对适配",
    description: "完美适配 EURUSD, GBPUSD 等主流货币对，通过多品种分散投资降低系统性风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过滤",
    description: "自动识别重大影响财经数据发布时间，在极端波动行情前自动规避，保护本金安全。",
  },
  {
    icon: ShieldCheck,
    title: "超低回撤控制",
    description: "部署多重风控算法，严格控制每笔交易风险，确保账户回撤始终处于可控范围。",
  },
  {
    icon: Clock,
    title: "专业技术支持",
    description: "提供一对一远程安装指南与策略优化建议，确保每一位用户都能顺利开启交易。",
  },
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3 标准版",
    price: "$299",
    features: [
      "1个真实账户终身许可",
      "标准技术支持",
      "建议初始资金：最低500美元 (美分账户)",
      "免费 VPS 云端挂载教程",
    ],
    isRecommended: false,
  },
  {
    name: "V3Pro 专业版",
    price: "$599",
    features: [
      "2个真实账户终身许可",
      "终身免费版本更新",
      "优先技术支持响应",
      "高级新闻过滤系统",
      "建议初始资金：1000美元 (美金账户)",
      "免费 VPS 云端挂载教程",
    ],
    isRecommended: true,
  },
  {
    name: "V4.beta 旗舰版",
    price: "即将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "全天24小时专业技术咨询",
      "独家 Beta 策略访问权",
      "建议初始资金：10000美元+",
      "低延迟专用 VPS 支持",
    ],
    isRecommended: false,
  },
];
// Data for the FAQ section
export const faqItems = [
  {
    question: "MT4是什么？",
    answer:
      "MT4 (MetaTrader 4) 是全球最流行的外汇交易平台，支持 EA 自动交易，提供图表分析与下单管理和一键交易等功能。",
  },
  {
    question: "什么是 EA (智能交易系统)？",
    answer:
      "EA (Expert Advisor) 是一种在 MetaTrader 平台上运行的全自动交易程序，它根据预设的逻辑自动执行买卖操作，消除了情绪干扰，实现 24 小时不间断交易。",
  },
  {
    question: "Euro Stable EA 的最低资金要求是多少？",
    answer:
      "对于标准账户，我们建议最低入金 1000 美元 (美金账户)。如果您使用美分账户 (Cent Account)，最低 500 美元即可开始运行，并确保有足够保证金应对市场波动。",
  },
  {
    question: "我需要一直保持电脑开启吗？",
    answer:
      "是的，EA 需要 MT4 平台持续在线，我们提供部署 VPS (虚拟专用服务器) 的教程，它可以让您的交易环境在云端 24/7 稳定运行，不受本地断网或断电影响。",
  },
  {
    question: "安装和设置过程复杂吗？",
    answer:
      "非常简单。我们提供详细的中文图文手册和视频教程。通常只需 10-15 分钟即可完成设置。我们的技术团队也提供远程协助服务。",
  },
  {
    question: "购买后是否还有后续续费费用？",
    answer:
      "没有。您购买的是终身授权许可。所有未来的策略优化、参数更新和软件升级均对所有客户免费开放。",
  },
  {
    question: "24小时免费热线",
    answer:
      "请使用页面联系方式咨询：电话 +86 18666888095 / (719) 524-8014, 邮箱 673351805@qq.com, 客服24小时在线。",
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
    quote: "Euro Stable EA 彻底改变了我的投资方式。它的稳定性令人印象深刻，回撤控制得非常好。",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "作为一位投资经理，我一直在寻找可靠的自动化工具。V3Pro 的表现超出了我的预期。",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "客服团队非常专业，安装过程很顺利。运行三个月以来，收益非常稳定。",
    author: "Michael Chen",
    role: "Forex Enthusiast",
  },
  {
    quote: "该系统的风控逻辑非常严密，尤其是在回撤管理上，体现了极高的专业水平，是长期资产配置的理想选择。",
    author: "Emma Wilson",
    role: "Professional Investor",
  },
  {
    quote: "在过去一年高波动极端行情下，EA的新闻过滤系统表现完美，成功规避了极端风险，这份稳定性在市场上非常出色。",
    author: "David Park",
    role: "Senior Trader",
  },
  {
    quote: "刚开始接触外汇非常茫然，感谢技术团队的一对一远程安装服务，非常有耐心，让我这种新手也能轻松上手。",
    author: "Olivia Kim",
    role: "Novice Investor",
  },
  {
    quote: "从量化分析的角度看，这款EA的捕捉市场逻辑非常精准，能有效过滤市场噪音，资金曲线的光滑度令人赞叹。",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "这个EA的新闻过滤功能特别出色，避免了多次重大新闻后的重大损失，值得信赖。",
    author: "Lily Wang",
    role: "Business Owner",
  },
  {
    quote: "从安装到运行全程支持到位，策略参数也很适合小资金用户，收益很可观。",
    author: "Ethan Liu",
    role: "Retail Investor",
  },
  {
    quote: "对比其他EA，这个系统的回撤控制得名不虚传，赚钱的感觉很棒。",
    author: "Grace Huang",
    role: "Software Engineer",
  },
  {
    quote: "V3Pro专业版的运行一年多，月化收益稳定在15%以上。",
    author: "James Miller",
    role: "Private Investor",
  },
  {
    quote: "多品种对冲策略让投资更安心，资金曲线非常漂亮，强烈推荐给朋友。",
    author: "Sarah Thompson",
    role: "Financial Analyst",
  },
  {
    quote: "技术团队响应很快，遇到问题都能及时解决。这个EA真正实现了稳定盈利。",
    author: "Kevin Anderson",
    role: "Freelancer",
  },
];