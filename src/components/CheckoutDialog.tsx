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
import { useCallback } from "react";
/**
 * CheckoutDialog – a simple contact modal.
 *
 * - Shows a title and description (optionally prefixed with the selected plan).
 * - Provides phone and email contact details with copy‑to‑clipboard buttons.
 * - Uses primitive selectors from the checkout store.
 * - No QR code image is rendered.
 */
export function CheckoutDialog() {
  // Primitive selectors for store state
  const isOpen = useCheckoutStore((state) => state.isOpen);
  const selectedPlan = useCheckoutStore((state) => state.selectedPlan);
  const close = useCheckoutStore((state) => state.close);
  const baseDescription = "欢迎来电咨询详细方案或WeChat联系，微信电话同号码，在线时间：am10:00-pm17:00";
const descriptionText = selectedPlan
  ? `您对我们的 "${selectedPlan}" 方案感兴趣。${baseDescription}`
  : baseDescription;
  // Contact details
  const phoneNum = "+86 18666888095";
  const overseasPhoneNum = "(719) 524-8014";
  const emailAddr = "673351805@qq.com";
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("已复制到剪贴板！");
    } catch {
      // Fallback for older browsers
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
      toast.success(ok ? "已复制到剪贴板！" : "复制失败");
    }
  }, []);
  // Early exit when the dialog is not open
  if (!isOpen) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-sm sm:max-w-md">
        <DialogHeader>
          <DialogTitle>联系购买</DialogTitle>
          <DialogDescription className="text-lg md:text-xl font-semibold leading-relaxed mt-2 text-muted-foreground">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col items-center gap-3">
          <p className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full justify-center sm:justify-between">
            <span className="text-base text-muted-foreground shrink-0">联系电话：</span>
            <code className="text-lg font-semibold text-foreground font-mono bg-muted px-2 py-1 rounded-md select-all select-text">
              {phoneNum}
            </code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-14 shrink-0 ml-2"
              onClick={() => copyToClipboard(phoneNum)}
            >
              复制
            </Button>
          </p>
          <p className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full justify-center sm:justify-between">
            <span className="text-base text-muted-foreground shrink-0">国际联系：</span>
            <code className="text-lg font-semibold text-foreground font-mono bg-muted px-2 py-1 rounded-md select-all select-text">
              {overseasPhoneNum}
            </code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-14 shrink-0 ml-2"
              onClick={() => copyToClipboard(overseasPhoneNum)}
            >
              复制
            </Button>
          </p>
          <p className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full justify-center sm:justify-between">
            <span className="text-base text-muted-foreground shrink-0">联系邮箱：</span>
            <code className="text-lg font-semibold text-foreground font-mono bg-muted px-2 py-1 rounded-md select-all select-text">
              {emailAddr}
            </code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-14 shrink-0 ml-2"
              onClick={() => copyToClipboard(emailAddr)}
            >
              复制
            </Button>
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={close} className="w-full">
            关闭
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}