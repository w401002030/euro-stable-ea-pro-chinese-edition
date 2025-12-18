import { motion } from "framer-motion";
import { statsData } from "@/lib/mockData";
import { cn } from "@/lib/utils";
export function StatsTicker() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            实时数据更新
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-soft"
            >
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}