import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function PerformanceChart() {
  const [equityCurveLoaded, setEquityCurveLoaded] = useState(false);
  const [statsPanelLoaded, setStatsPanelLoaded] = useState(false);
  // Fallback URLs in case local images fail to load
  const fallbackEquityCurve = "https://placehold.co/1400x500/0f172a/10b981/000000?text=MT5%E5%85%83%E6%AC%A7%E7%A8%8B%E5%BA%8F%E5%8F%B7%E6%9D%83%E5%88%A9%E6%9B%B2%E7%BA%BF+%28Mar%2724-Dec%2725%29+%E4%BD%99%E9%A2%9D%2F%E6%9D%83%E7%9B%8A%2F%E5%9B%9E%E6%92%A4%2F%E6%88%90%E4%BA%A4%E9%87%8F&font=roboto";
  const fallbackStatsPanel = "https://placehold.co/800x300/3b82f6/ffffff/0f172a?text=%E6%80%A7%E8%83%BD%E7%BB%9F%E8%AE%1+9413.77+USD+%7C+%2B128%25+%7C+%E8%83%8C%E9%9A%97%E5%9B%9E%E5%88%A9+3.2%25&font=roboto";
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    if (e.currentTarget.src !== fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    }
  };
  return (
    <section id="performance" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              真实的历史性能
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              查看我们的EA在过去2��内实盘稳定资金增长曲线。
            </p>
          </div>
          <Card className="shadow-xl dark:shadow-emerald-500/10">
            <CardHeader>
              <CardTitle>资金增长曲线 (实盘)</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Client: Upload HD MT5 screenshots to public/charts/ to replace placeholders */}
              <div className="h-96 md:h-[28rem] lg:h-[32rem] w-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="relative w-full h-48 md:h-64 lg:h-72">
                    {!equityCurveLoaded && (
                      <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                    )}
                    <img
                      src="/charts/euro-equity-curve.png"
                      alt="MT5欧元���序号权益曲线 (Mar'24 - Dec'25) 余额/权益/回撤/成交量"
                      className="absolute inset-0 w-full h-full rounded-xl shadow-lg object-cover transition-opacity duration-500"
                      style={{ opacity: equityCurveLoaded ? 1 : 0 }}
                      onLoad={() => setEquityCurveLoaded(true)}
                      onError={(e) => handleImageError(e, fallbackEquityCurve)}
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md h-32 md:h-40">
                      {!statsPanelLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                      )}
                      <img
                        src="/charts/euro-stats-panel.png"
                        alt="性能统计��充面板 (+9413.77 USD | +128% | 背景回撤 3.2%)"
                        className="absolute inset-0 w-full h-full rounded-xl shadow-md object-cover transition-opacity duration-500"
                        style={{ opacity: statsPanelLoaded ? 1 : 0 }}
                        onLoad={() => setStatsPanelLoaded(true)}
                        onError={(e) => handleImageError(e, fallbackStatsPanel)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}