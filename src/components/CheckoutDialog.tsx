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
  const baseDescription = "欢迎电话咨询详细方案或通过微信联系，微信电话同号，在线时间：（UTC-5）9:00-18:00";
  const descriptionText = selectedPlan
    ? `��对我们的 "${selectedPlan}" 方案感兴趣。${baseDescription}`
    : baseDescription;
  const phoneNum = "+86 18666888095";
  const overseasPhoneNum = "(719) 524-8014";
  const emailAddr = "673351805@qq.com";
  const wechatLink = "https://u.wechat.com/EDmRt5y9nsZ8VMKR5blaogE?s=2";
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("已复制到���贴板！", {
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
      <DialogContent
        className="max-w-[95vw] sm:max-w-md rounded-2xl"
        aria-describedby="checkout-desc"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">联系购买</DialogTitle>
          <DialogDescription id="checkout-desc" className="text-lg md:text-xl leading-relaxed mt-2 text-muted-foreground">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>
        <div className="py-6 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <div
              onClick={() => window.open(wechatLink, '_blank')}
              className="p-3 bg-white rounded-2xl border-2 border-emerald-100 shadow-md dark:border-emerald-900/30 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://placehold.co/200x200/07A86E/FFFFFF?text=微信二��码"
                alt="扫码二维码加微信"
                title="扫码二维码加微信"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg"
              />
            </div>
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
              扫码��加微信客服
            </p>
          </div>
          <div className="w-full space-y-4">
            {[
              { label: "联系电话", value: phoneNum },
              { label: "���际联系", value: overseasPhoneNum },
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
        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={close} className="w-full rounded-xl h-11">
            返回预览
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}