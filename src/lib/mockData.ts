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
    icon: ShieldCheck,
    title: "超低回撤控制",
    description: "部署多重风控算法，严格控制单笔交易风险，确保��户回撤始终处于可控范围。",
  },
  {
    icon: Zap,
    title: "全自动智能交易",
    description: "基于神经网络算法，24/7 自动识别市场趋势��执行交易，无需人工盯盘。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "支持动态仓位管理，随账户余额增长自动调整���数，实现复利的指数级增长。",
  },
  {
    icon: Clock,
    title: "专业技术支持",
    description: "���供一对一远程安装指导与策略优化建议，确保���一位用户都能顺利开启交易。",
  },
  {
    icon: BarChart,
    title: "多品种对冲策略",
    description: "���美匹配 EURUSD, GBPUSD 等主流货币对，通过多品种分散投资降低系统性风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过滤",
    description: "自动识别高影响财经数据发布时��，在极端波动行情前自动规避，保护本金安全。",
  },
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3 标准版",
    price: "$299",
    features: [
      "1个真实账户终身许可",
      "2个模拟账户许可",
      "标准技术支持",
      "建议初始资金：500美��� (美分账户)",
      "免费 VPS 云端挂载教程",
    ],
    isRecommended: false,
  },
  {
    name: "V3Pro 专业版",
    price: "$599",
    features: [
      "2个真实账户终身许可",
      "5个模拟账户许可",
      "终身免费版本更新",
      "优先技术支持响应",
      "高��新闻过滤系统",
      "建议初始资金：1000美元 (美分账户)",
      "赠送 1个月 高性能 VPS",
    ],
    isRecommended: true,
  },
  {
    name: "V4.beta 旗舰版",
    price: "即将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "全天候专业技术顾问",
      "独家 Beta 策略访问权",
      "建议初始资金：10000美元+",
      "低���迟专用服务器支持",
    ],
    isRecommended: false,
  },
];
// Data for the FAQ section
export const faqItems = [
  {
    question: "��么是 EA (智能交易系统)？",
    answer:
      "EA (Expert Advisor) 是一种在 MetaTrader 平台上运行的全自动交易程序，它根据预设的逻辑自动执行买卖操作，消除了情绪干扰，实现 24 小时不间断交易。",
  },
  {
    question: "Euro Stable EA 的最低资金要求是多少？",
    answer:
      "对于标准账户，���们建议最低入金 1000 美元。如果您使用美分账户 (Cent Account)，最低 100 美元即可开始运行，以确保有足够的保证金应对���场波动。",
  },
  {
    question: "我需要一直保持电脑开启吗？",
    answer:
      "是的，EA 需要 MT4 平台持续在线。我们强烈建议使用 VPS (虚拟专用服务器)，它可以让您的交易环境在云端 24/7 稳定运行，不受本地断网或断电影响。",
  },
  {
    question: "安装和设置过程复杂吗？",
    answer:
      "非常简单。我们提供详细的中文图文手册和视频教程。通常只需 10-15 分钟即可完成设置。我们的技术团队也提供远程协助服务。",
  },
  {
    question: "购买后是否有后续续费费用？",
    answer:
      "没有。您购买的是终身���权许可。所有未来的策略优化、参数更新和软件升级均对现有客户免费开��。",
  },
];
// Data for the stats ticker
export const statsData = [
  { icon: TrendingUp, label: "平均���率", value: "85.3%" },
  { icon: DollarSign, label: "累计盈���", value: "$228k+" },
  { icon: TrendingDown, label: "历史最大回撤", value: "15.2%" },
  { icon: Users, label: "全球活跃用户", value: "12,847" },
];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA 彻底改变了我的��资方式。它的稳定性令人印象深刻，回撤控制得非常好。",
    author: "张先生",
    role: "全职交易员",
  },
  {
    quote: "作为一名投资经理，我一直在寻找可靠的自动化工具。V3Pro 的表现超出了我的预期。",
    author: "Li Wei",
    role: "资产管理经理",
  },
  {
    quote: "客服团队非常专业，安装过程很顺利。运行两个月以来，收益非常稳定。",
    author: "王女士",
    role: "外汇爱好者",
  },
  {
    quote: "该系统的风控逻辑非常严��，尤其是在回撤管理上，展现了极高的专业水准，是长��资产配置的理想选择。",
    author: "Liu Ming",
    role: "专业投资人",
  },
  {
    quote: "在多次高波动极端行情中，EA的新闻过滤系统表现完美，成功规避了极端风险，这种稳定性在市面上非常罕见。",
    author: "Sun Li",
    role: "资深交易员",
  },
  {
    quote: "刚开始接触外汇非常迷茫，感谢技术团队的一对一远程安装服务，非常有耐心，让我这种新手也能轻松上手。",
    author: "Zhao Peng",
    role: "新手投资者",
  },
  {
    quote: "从量化分��的角度看，这款EA的入场逻辑非常精准，能有��过滤市场噪音，资金曲线的平滑度令人惊叹。",
    author: "Chen Xia",
    role: "机构分析师",
  },
  {
    quote: "这个EA的新闻过滤功能特别出色，避免了多次重大新闻时的损失，值得信赖。",
    author: "陈先生",
    role: "企业主",
  },
  {
    quote: "从安装到运行全程支持到位，策略参数也很适合小资金账户，收益很可观。",
    author: "刘小姐",
    role: "上班族投资者",
  },
  {
    quote: "对比其他EA，这个系统的回撤控制确实名不虚传，睡眠也能赚钱的感觉真好。",
    author: "赵工程师",
    role: "软件���程师",
  },
  {
    quote: "V3Pro专业版的VPS赠送服务很��心，运行一年多，月均收益稳定在15%以上。",
    author: "孙女士",
    role: "退休教师",
  },
  {
    quote: "多品种对冲策略让投资更加安全，���户曲线非常漂亮，强烈推荐给朋���。",
    author: "周先生",
    role: "金融分析师",
  },
  {
    quote: "技术团队响应很快，遇到问题都能及时解决。这个EA真正实现了稳定盈利。",
    author: "钱小姐",
    role: "自由职业者",
  },
];