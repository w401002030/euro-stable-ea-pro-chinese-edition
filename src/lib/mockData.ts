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
    title: "��自动智能交易",
    description: "基于��度神经网络算法，24小时全天候自动识别市场趋势并执行交易，无需人工盯盘��",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "���态仓位管理，根据账户增长自动调整手数，实现指数级复利增长。",
  },
  {
    icon: BarChart,
    title: "主要外汇货币对��化",
    description: "完美适配EURUSD、GBPUSD等主流货币对，跨对分散投资降��系统风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过滤",
    description: "自动���测高影响力经济事件，波动期暂停交易保护资金。",
  },
  {
    icon: ShieldCheck,
    title: "超低回��控制",
    description: "多层风险算法严���限制单笔交易敞口，确保可控回撤。",
  },
  {
    icon: Clock,
    title: "一对一技术���持",
    description: "一对一远程安装指导与策略优化，确保顺畅启动。",
  }
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
      "无��模拟账户许可",
      "24/7 专家支持",
      "独家 Beta 访问",
      "建议初始资金：10000美元以上",
      "低延迟 VPS 支持"
    ],
    isRecommended: false
  }
];
// Enhanced FAQ section with professional Chinese content
export const faqItems = [
  {
    question: "什么是 MT4 (MetaTrader 4) 平台？",
    answer: "MetaTrader 4 (MT4) 是目���全球范围内应用最广泛、最受认可的在线外汇交易平台。它之所以成为行业标杆，是因为其卓越的稳定性、强大的图表分析功能以及对自动化交易脚本（即 EA）的完美支持。MT4 为投资者提供了高度安全的数据加密环境和毫秒级的执行速度，同时��直观的界面让无论是新手还是专业交易员都能快速上手。通过 MT4，您可以实时监控市场动态、应用数百种技术指标，并利用我们的 Euro Stable EA 实现全天候的无人值守交易。它是您连接全球流动性市场、执行精密算法交易的桥梁。"
  },
  {
    question: "EA (智能交易系统) 的核��优势是什么？",
    answer: "EA，即 Expert Advisor（专家���问），是运行在交易平台上的智能交易软件。它的核心优势在于能够完全排除人类交易中常见的焦虑、贪婪和疲劳等负面情绪干扰。Euro Stable EA 采用复杂的数学模型和神经网络算法，能够 24/7 全天候监控市场，在瞬息万变的机会面前做出毫秒级的决策和���行。相比人工交易，EA 的执行速度更快、计算精准度更高，且能严格遵循预设的风险��理规则。它不仅能帮您释放双手，从繁琐的看盘中解脱出来，更能通过严谨的量化逻辑捕捉人类肉眼难以发现的微小获利机会，是现代量化投资的最佳���择。"
  },
  {
    question: "开始交易需要准备多少初始资金？",
    answer: "资金门��取决于您选择的风险管理策略。对于初学者或希望进行小��测试的用户，我们强烈建议从 v2.3 标准版开始，并使用“美分账户”。在这种模式下，仅需 500 美元的初始资金，系统就能在极高的保证金水平下运行，最大程度确保账户安全。如果您具备一定的投资经验并追求更优的成本控制，V3 Pro 专业版建议配合 1000 美元以上的“美金标准账户”使用。充足的资金基础能让 EA 的动态仓位管理系统有更大的发���空间，在面对市场波动时具备更强的抗风险能力。我们始终建议您在充分理解风险的前提下，投入不影响日常生活的闲置资金进行投资。"
  },
  {
    question: "为什么需要 24 小时开机运行？如何实现？",
    answer: "为了捕捉全天候的市场波动，特别是欧美盘跨时段的交易机会，您的 MT4 软件必须保持持���在线。如果因为个人电脑关机或网络断开导致 EA 停止运行，可能会错过平仓时���或造成亏损。解决这一问题的最佳方案是使用 VPS（虚拟专用服务器）。VPS 本质上���一台运行在云端的 24 小时永不关机的电脑。我们为每位客户提供详尽的 VPS 部署教程，涵盖了国内外主流服务商如阿里云、腾讯云以及专门针对外汇优化的���延迟 VPS。通过 VPS 运行，不仅可以实现 100% 的在线率，还能显著降低交易延迟，确保 EA 的每一笔订单都能在最优价格瞬间成交。"
  },
  {
    question: "软件的安装和后续配置复杂吗？",
    answer: "软件的安装过程非常人性化，���使是零基础的用户也能在 10 分钟内完成。购买后，您将获得包含高清��频操作手册、PDF 安装指南以及我们预设的最佳参数文件（Set Files）的完整安装包。您只需将文件拖入 MT4 的指定目录，点击启用自动交易即可。我们不仅提供了不同波动率偏好的预设模板，还提供了一对一的远程技术支持。如果您在安装过程中遇到任何困难，我们的���家团队将通过远程桌面工具为您完成全部配置工作。我们致力于让技术不再成为门槛，确保每位投资者都能顺利启动系统，开启全自动化的财富增值旅程。"
  },
  {
    question: "购买后需要支付后续月费���订阅费吗？",
    answer: "Euro Stable EA 采用的是一次性付费、终身授权模式。我们坚信透明、诚实的收费策略是建立长期信任的基础。一旦购买，您将获得该版本的终身许可，不需要支付任何月费、年费或后续的订阅费用。更重要的是，我们承诺为授权用户提供终身免费的策略优化和软件更新。随着市场环境的变化，我们的研发团队会不断升级 EA 的过滤机制和核心算法，确保其始终保持竞争力。��为我们的 VIP 客户，您还将获得后续新版本升级的独家折扣权益。我们卖出的不仅仅是一套软件，更是长期的技术服务与持续优化的投资策略支持。"
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
    quote: "Euro Stable EA 彻底���变了我的投资，稳定性与回撤控制令人印象深刻。",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "作为投资经理，V3Pro 可���性远超预期。",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "专业支持，安装顺畅，3个���稳定盈利。",
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
    quote: "精准量化逻辑，收益��线完美平滑。",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "新闻过滤器避免损失，值得信赖。",
    author: "Lily Wang",
    role: "Business Owner",
  },
  {
    quote: "全方位���持，完美适配小额账户。",
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