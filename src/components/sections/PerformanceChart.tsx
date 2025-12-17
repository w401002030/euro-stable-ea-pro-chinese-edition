import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function PerformanceChart() {
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
              <div className="h-96 md:h-[28rem] lg:h-[32rem] w-full flex flex-col justify-center">
                <div className="space-y-6">
                  <img
                    src="https://placehold.co/1400x500/0f172a/10b981/000000?text=MT5%E5%85%83%E6%AC%A7%E7%A8%8B%E5%BA%8F%E5%8F%B7%E6%9D%83%E5%88%A9%E6%9B%B2%E7%BA%BF+%28Mar%2724-Dec%2725%29+%E4%BD%99%E9%A2%9D%2F%E6%9D%83%E7%9B%8A%2F%E5%9B%9E%E6%92%A4%2F%E6%88%90%E4%BA%A4%E9%87%8F&font=roboto"
                    alt="主权益曲线图 (Mar'24 - Dec'25)"
                    className="w-full h-48 md:h-64 lg:h-72 rounded-xl shadow-lg object-cover"
                  />
                  <div className="flex justify-center">
                    <img
                      src="https://placehold.co/800x300/3b82f6/ffffff/0f172a?text=%E6%80%A7%E8%83%BD%E7%BB%9F%E8%AE%1+9413.77+USD+%7C+%2B128%25+%7C+%E8%83%8C%E9%9A%97%E5%9B%9E%E5%88%A9+3.2%25&font=roboto"
                      alt="性能统计补充面��"
                      className="w-full max-w-md h-32 md:h-40 rounded-xl shadow-md object-cover"
                    />
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