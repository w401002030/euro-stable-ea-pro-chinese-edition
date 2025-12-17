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
  { name: "第1���", profit: 10000 },
  { name: "第2周", profit: 10250 },
  { name: "第3周", profit: 10600 },
  { name: "第4周", profit: 10900 },
  { name: "第5周", profit: 11350 },
  { name: "第6周", profit: 11800 },
  { name: "第7周", profit: 12100 },
  { name: "第8周", profit: 12550 },
  { name: "第9周", profit: 13000 },
  { name: "第10周", profit: 13600 },
  { name: "第11周", profit: 14200 },
  { name: "第12周", profit: 15000 },
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
    description: "先进的风险管理系统���资金回撤控制在最低水平，保护您的资本安全。",
  },
  {
    icon: Zap,
    title: "全自动策略",
    description: "无需人工干预，EA 24/7 自动执行交易，���捉每一个市场机会。",
  },
  {
    icon: TrendingUp,
    title: "稳定盈利曲��",
    description: "经过多年市场数据回测与实盘验证，展现��持续稳定的盈利能力。",
  },
  {
    icon: Clock,
    title: "24/7 技术支持",
    description: "我们的专业团队随时为您服务，解答您遇到的任何问题。",
  },
  {
    icon: BarChart,
    title: "多货币对支持",
    description: "优化支持 EURUSD, GBPUSD, USDJPY 等主流货币对，分散风险。",
  },
  {
    icon: LifeBuoy,
    title: "终身免费更新",
    description: "一次购买，即可���受所有后续策略优化和软件版本更新。",
  },
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "标准版",
    price: "$299",
    features: [
      "1个真实账户终身许可",
      "无限模拟账户许可",
      "终身免费更新",
      "标准技术支持",
    ],
    isRecommended: false,
  },
  {
    name: "专业版",
    price: "$499",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户许可",
      "终身免费更新",
      "优先技术支持",
      "高级参数设置",
    ],
    isRecommended: true,
  },
];
// Data for the FAQ section
export const faqItems = [
  {
    question: "什么是 EA (智能交易系统)？",
    answer:
      "EA (Expert Advisor) 是一种在 MetaTrader 平台上运行的自动化交易程序。它根据��设的交易策略自动执行买卖操作，无需人工干预。",
  },
  {
    question: "Euro Stable EA 的最低��金要求是多少？",
    answer:
      "我们建议最低入金为 1000 美元，以确保 EA 能够在安全的风险水平下有效运行。更低的资金也可以运行，但风险会相应增加。",
  },
  {
    question: "我需要一直开着电脑吗？",
    answer:
      "是的，为了让 EA 能够 24/5 不间断运行，您的交易平台需要��持在线。我们强烈建议您使用 VPS (虚拟专用服务器) 来托管您的交易账户，这样可以保证稳定性和连接性。",
  },
  {
    question: "安装和设置过程复杂吗？",
    answer:
      "不复杂。我们提供非常详细的图文安装指南和视频教程。大多数用户可以在 15 分钟内完成所有设置。如果您遇到任何问题，我们的技术支持团队会帮助您。",
  },
  {
    question: "购买���是否还有其他费用？",
    answer:
      "没有。您购买的是终身许可证，所有未来的软件更新和策略优化都是免费的，没有任何隐藏费用或订阅费。",
  },
];
// Data for the stats ticker
export const statsData = [
  { icon: TrendingUp, label: "胜率", value: "92.3%" },
  { icon: DollarSign, label: "总盈利", value: "¥1,580,000+" },
  { icon: TrendingDown, label: "最大回撤", value: "仅 3.2%" },
  { icon: Users, label: "活跃用户", value: "12,847+" },
];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA ���底改变了我的交易生涯。稳定盈利，低回撤，完���！",
    author: "张伟",
    role: "全职交易员",
  },
  {
    quote: "安装简单，运行稳定。三个月收益超过预期，强烈推荐！",
    author: "王芳",
    role: "投资经理",
  },
  {
    quote: "专业的团队，及时的���持。值得信赖的交易伙伴！",
    author: "陈明",
    role: "外汇爱好者",
  },
];