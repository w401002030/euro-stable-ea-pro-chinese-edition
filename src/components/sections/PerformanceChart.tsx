import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PerformanceChart() {
  const [equityCurveLoaded, setEquityCurveLoaded] = useState(false);
  const [statsPanelLoaded, setStatsPanelLoaded] = useState(false);

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
              查看我们的EA在过去2年内实盘稳定资金增长曲线。
            </p>
          </div>

          <Card className="shadow-xl dark:shadow-emerald-500/10">
            <CardHeader>
              <CardTitle>资金增长曲线 (实盘)</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Inline SVGs replace external image files */}
              <div className="h-96 md:h-[28rem] lg:h-[32rem] w-full flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Equity Curve */}
                  <div className="relative w-full h-48 md:h-64 lg:h-72">
                    {!equityCurveLoaded && (
                      <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                    )}
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjUwMCI+PHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMGYxNzJhIi8+PHBhdGggZD0iTTUwLDQwMCBMNzAwLDE1MCBMMTM1MCwyNTAiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+PHRleHQgeD0iMjAiIHk9IjMwIiBmaWxsPSIjZmZmIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+5rW35a2K5YWz5ZCM5YyW5Y+35YyW5ZCMIE1hclI0LURlYzI1PC90ZXh0Pjwvc3ZnPg=="
                      alt="MT5欧元程序号权益曲线 (Mar'24 - Dec'25) 余额/权益/回撤/成交量"
                      className="absolute inset-0 w-full h-full rounded-xl shadow-lg object-cover transition-opacity duration-500"
                      style={{ opacity: equityCurveLoaded ? 1 : 0 }}
                      onLoad={() => setEquityCurveLoaded(true)}
                      onError={() => {}}
                    />
                  </div>

                  {/* Stats Panel */}
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md h-32 md:h-40">
                      {!statsPanelLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                      )}
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2I4MmY2Ii8+PC9zdmc+"
                        alt="性能统计信息面板 (+9413.77 USD | +128% | 最大回撤 3.2%)"
                        className="absolute inset-0 w-full h-full rounded-xl shadow-md object-cover transition-opacity duration-500"
                        style={{ opacity: statsPanelLoaded ? 1 : 0 }}
                        onLoad={() => setStatsPanelLoaded(true)}
                        onError={() => {}}
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
//