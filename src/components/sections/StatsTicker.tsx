import React from "react";
import { motion } from "framer-motion";
import { statsData } from "@/lib/mockData";
export function StatsTicker() {
  // Use two sets for a perfect infinite loop with percentage translation
  const marqueeStats = [...statsData, ...statsData];
  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            实时数据���新
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-16 items-center whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeStats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="flex items-center gap-4 px-4"
              >
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
                {/* Separator dot between items */}
                <div className="ml-8 md:ml-16 h-1.5 w-1.5 rounded-full bg-border" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}