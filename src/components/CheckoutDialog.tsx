import React, { useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
import { Copy, CheckCircle2 } from "lucide-react";
export function CheckoutDialog() {
  const isOpen = useCheckoutStore((state) => state.isOpen);
  const selectedPlan = useCheckoutStore((state) => state.selectedPlan);
  const close = useCheckoutStore((state) => state.close);
  const baseDescription = "欢迎电话咨询详细方案或通过微信联系，微信电话同号，在线时间：北京时间（UTC+8）09:00-18:00";
  const descriptionText = selectedPlan
    ? `欢迎对我们的 "${selectedPlan}" 方案感兴趣。${baseDescription}`
    : baseDescription;
  const phoneNum = "+86 18666888095";
  const overseasPhoneNum = "(719) 524-8014";
  const emailAddr = "673351805@qq.com";
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("已复制到剪��板！", {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
      });
    } catch {
      const textarea = document.createElement("textarea");
      Object.assign(textarea.style, {
        position: "fixed",
        left: "-99999px",
        top: "50%",
        width: "1px",
        height: "1px",
        opacity: "0",
      });
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (ok) {
        toast.success("已复制到剪贴板！");
      } else {
        toast.error("复制失���，请手动选择复制");
      }
    }
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-[95vw] sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">联系购买</DialogTitle>
          <DialogDescription className="text-lg md:text-xl font-semibold leading-relaxed text-foreground mt-2">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-6">
          <div className="w-full space-y-4">
            {[
              { label: "联系电话 / 微信", value: phoneNum },
              { label: "国际联系", value: overseasPhoneNum },
              { label: "联系邮箱", value: emailAddr },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
                  {item.label}
                </span>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-2 rounded-xl border border-border/50">
                  <code className="flex-1 text-sm sm:text-base font-mono font-medium text-foreground truncate px-2">
                    {item.value}
                  </code>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="h-9 px-3 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
                    onClick={() => copyToClipboard(item.value)}
                  >
                    <Copy className="h-3.5 w-3.5 mr-1.5" />
                    复制
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="sm:justify-center pt-2">
          <Button variant="outline" onClick={close} className="w-full rounded-xl h-11">
            返回预���
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}