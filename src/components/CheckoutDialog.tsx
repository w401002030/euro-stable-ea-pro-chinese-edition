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
  const baseDescription = "扫码加微信咨询方案详情或电话联系，微电同号。";
  const descriptionText = selectedPlan
    ? `您对我们的 "${selectedPlan}" 方案感兴趣。${baseDescription}`
    : baseDescription;
  // Contact details
  const phoneNum = "+86 18666888095";
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
      <DialogContent className="sm:max-w-md" aria-describedby="checkout-desc">
        <DialogHeader>
          <DialogTitle>联系购买</DialogTitle>
<DialogDescription><span id="checkout-desc">{descriptionText}</span></DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col items-center gap-3">
          <p className="flex items-center gap-2 text-2xl lg:text-3xl font-bold leading-snug text-foreground w-full justify-between">
            <span>联系电话：</span>
            <code className="font-mono bg-muted px-1.5 py-px rounded text-sm select-all">
              {phoneNum}
            </code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-16 shrink-0"
              onClick={() => copyToClipboard(phoneNum)}
            >
              复制
            </Button>
          </p>
          <p className="flex items-center gap-2 text-2xl lg:text-3xl font-bold leading-snug text-foreground w-full justify-between">
            <span>联系邮箱：</span>
            <code className="font-mono bg-muted px-1.5 py-px rounded text-sm select-all">
              {emailAddr}
            </code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-16 shrink-0"
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