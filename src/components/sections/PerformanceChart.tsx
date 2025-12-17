import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { performanceData } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
export function PerformanceChart() {
  return (
    <section
      id="performance"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
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
  查看我的EA从小资金开启的稳定增长曲线。并感受
  <span
    className="font-bold"
    style={{
      background:
        "linear-gradient(90deg, #10B981 0%, #F59E0B 20%, #FCD34D 40%, #FBBF24 55%, #EF4444 75%, #EC4899 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow:
        "0 0 10px rgba(16,185,129,0.6), 0 0 20px rgba(245,158,11,0.5), 0 0 30px rgba(239,68,68,0.4), 0 0 40px rgba(236,72,153,0.3)",
      filter:
        "drop-shadow(0 0 12px rgba(255,255,255,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
    }}
  >
    复利
  </span>
  带来的魅力
</p>
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                onClick={() => window.open('https://www.myfxbook.com/zh/members/RobotForexProEA/eurostable-ea-lite/10995603', '_blank')}
                className="w-full max-w-sm mx-auto bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                查看实盘业绩
              </Button>
            </div>
          </div>
          <Card className="shadow-xl dark:shadow-emerald-500/10">
            <CardHeader>
              <CardTitle>资金增长曲线</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto h-[28rem] md:h-[32rem] lg:h-[36rem] p-0 pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <defs>
                    <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#10B981"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="100%"
                        stopColor="#10B981"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="hsl(var(--muted))"
                  />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={14}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={14}
                    domain={['dataMin - 50', 'dataMax + 50']}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                    cursor={{ stroke: 'hsl(var(--foreground))', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#10B981"
                    strokeWidth={3}
                    fill="url(#profitFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}