import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { performanceData } from "@/lib/mockData";
export function PerformanceChart() {
  const formatYAxis = (tickItem: number) => {
    return `$${(tickItem / 1000).toFixed(1)}k`;
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
              查看我们的EA在过去12周内模拟的稳定资金增长曲线。
            </p>
          </div>
          <Card className="shadow-xl dark:shadow-emerald-500/10">
            <CardHeader>
              <CardTitle>资金增长曲线 (模拟)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 md:h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="colorProfit"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10B981"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10B981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      tickFormatter={formatYAxis}
                      domain={['dataMin - 500', 'dataMax + 500']}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                      labelStyle={{ color: "hsl(var(--foreground))" }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "账户净值"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="profit"
                      stroke="#10B981"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorProfit)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}