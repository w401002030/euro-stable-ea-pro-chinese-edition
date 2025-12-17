import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/mockData";
import { Star } from "lucide-react";
export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight">
  客户反馈
</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            全球数千名交易者信赖 Euro Stable EA。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-6">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${testimonial.author}`} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}