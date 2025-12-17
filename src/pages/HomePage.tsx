import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PerformanceChart } from "@/components/sections/PerformanceChart";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
export function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PerformanceChart />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}