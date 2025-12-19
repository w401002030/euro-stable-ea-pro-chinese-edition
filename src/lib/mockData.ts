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
    title: "Fully Automated AI Trading",
    description: "Powered by deep neural network algorithms, automatically identifies market trends and executes trades 24/7—no manual monitoring required.",
  },
  {
    icon: TrendingUp,
    title: "Compound Growth Engine",
    description: "Dynamic position management adjusts lot sizes as account grows, enabling exponential compounding.",
  },
  {
    icon: BarChart,
    title: "Major FX Pairs Optimized",
    description: "Perfectly suited for EURUSD, GBPUSD & majors; diversifies across pairs to reduce systemic risk.",
  },
  {
    icon: LifeBuoy,
    title: "Smart News Filter",
    description: "Auto-detects high-impact economic releases & pauses during volatility to protect capital.",
  },
  {
    icon: ShieldCheck,
    title: "Ultra-Low Drawdown Control",
    description: "Multi-layered risk algorithms strictly limit per-trade exposure for controlled drawdowns.",
  },
  {
    icon: Clock,
    title: "Expert Tech Support",
    description: "One-on-one remote setup guidance & strategy optimization to ensure seamless start.",
  },
];
// Data for the pricing plans
export const pricingPlans = [
  {
    name: "v2.3 Standard Edition",
    price: "$299",
    features: [
      "1 Live Account Lifetime License",
      "Standard Technical Support",
      "Min. Capital: $500 (Cent Account)",
      "Free VPS Deployment Guide",
    ],
    isRecommended: false,
  },
  {
    name: "V3 Pro Edition",
    price: "$599",
    features: [
      "2 Live Accounts Lifetime License",
      "Lifetime Free Updates",
      "Priority Support",
      "Advanced News Filter",
      "Min. Capital: $1,000 (USD Account)",
      "Free VPS Hosting Guide",
    ],
    isRecommended: true,
  },
  {
    name: "V4 Beta Flagship Edition",
    price: "Coming Soon",
    features: [
      "3 Live Accounts Lifetime License",
      "Unlimited Demo Licenses",
      "24/7 Expert Support",
      "Exclusive Beta Access",
      "Min. Capital: $10,000+",
      "Low-Latency VPS Support",
    ],
    isRecommended: false,
  },
];
// Data for the FAQ section
export const faqItems = [
  {
    question: "What is MT4?",
    answer:
      "MT4 (MetaTrader 4) is the world's top forex platform with EA support, charting, orders & one-click trading.",
  },
  {
    question: "What is an EA (Expert Advisor)?",
    answer:
      "Fully automated trading robot for MetaTrader; executes logic-based trades 24/7 without emotions.",
  },
  {
    question: "Minimum capital for Euro Stable EA?",
    answer:
      "Standard: $1,000 USD. Cent: $500 min. for margin/volatility.",
  },
  {
    question: "Need PC on 24/7?",
    answer:
      "MT4 must stay online. VPS guides for reliable cloud 24/7 ops.",
  },
  {
    question: "Setup complexity?",
    answer:
      "Simple: 10-15 min with guides/videos. Remote help available.",
  },
  {
    question: "Recurring fees?",
    answer:
      "None—lifetime license w/ free updates forever.",
  },
  {
    question: "24/7 Support",
    answer:
      "Phone: +86 18666888095 / (719) 524-8014 | Email: 673351805@qq.com | Live chat.",
  },
];
// Data for the stats ticker
export const statsData = [
  { icon: TrendingUp, label: "Win Rate", value: "85.3%" },
  { icon: DollarSign, label: "Total Profit", value: "$228k+" },
  { icon: TrendingDown, label: "Max Drawdown", value: "15.2%" },
  { icon: Users, label: "Active Users", value: "12,847+" },
];
// Data for testimonials
export const testimonials = [
  {
    quote: "Euro Stable EA transformed my investing. Impressive stability & drawdown control.",
    author: "Alex Johnson",
    role: "Full-time Trader",
  },
  {
    quote: "As investment manager, V3Pro exceeded expectations in reliability.",
    author: "Sophia Lee",
    role: "Asset Manager",
  },
  {
    quote: "Pro support, smooth setup. Stable profits for 3 months.",
    author: "Michael Chen",
    role: "Forex Enthusiast",
  },
  {
    quote: "Rigorous risk logic ideal for long-term portfolios.",
    author: "Emma Wilson",
    role: "Professional Investor",
  },
  {
    quote: "News filter aced volatile markets, avoided risks.",
    author: "David Park",
    role: "Senior Trader",
  },
  {
    quote: "Tech team patiently setup for newbie.",
    author: "Olivia Kim",
    role: "Novice Investor",
  },
  {
    quote: "Precise quant logic, smooth curves.",
    author: "Ryan Zhang",
    role: "Institutional Analyst",
  },
  {
    quote: "News filter prevented losses, trustworthy.",
    author: "Lily Wang",
    role: "Business Owner",
  },
  {
    quote: "Full support, suits small accounts.",
    author: "Ethan Liu",
    role: "Retail Investor",
  },
  {
    quote: "Top drawdown control, confident profits.",
    author: "Grace Huang",
    role: "Software Engineer",
  },
  {
    quote: "15%+ monthly for a year.",
    author: "James Miller",
    role: "Private Investor",
  },
  {
    quote: "Hedging for peace, beautiful curve.",
    author: "Sarah Thompson",
    role: "Financial Analyst",
  },
  {
    quote: "Fast fixes, stable earnings.",
    author: "Kevin Anderson",
    role: "Freelancer",
  },
];