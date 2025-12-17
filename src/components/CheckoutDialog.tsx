import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
import { Copy, Check } from "lucide-react";
export function CheckoutDialog() {
  const isOpen = useCheckoutStore((state) => state.isOpen);
  const selectedPlan = useCheckoutStore((state) => state.selectedPlan);
  const close = useCheckoutStore((state) => state.close);
  const [copied, setCopied] = useState(false);
  const phone = "+86 18666888095";
  const handleCopy = () => {
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>联系购��</DialogTitle>
          {selectedPlan && (
            <DialogDescription>
              您对我们�� "{selectedPlan}" 方案感兴趣
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4 space-y-6 flex flex-col items-center">
          <img
            src="https://placehold.co/300x300/10B981/FFFFFF?text=微��二维码&font=roboto"
            alt="微信二维码"
            className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-xl shadow-lg border"
          />
          <p className="text-sm text-muted-foreground text-center px-4">
            扫码加微信咨询方案详情或电话联系
          </p>
          <div className="w-full px-4">
            <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <span className="font-mono text-lg text-secondary-foreground">
                {phone}
              </span>
              <Button size="icon" variant="ghost" onClick={handleCopy} aria-label="Copy phone number">
                {copied ? (
                  <Check className="h-5 w-5 text-emerald-500" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </Button>
            </div>
            {copied && (
              <p className="text-xs text-emerald-500 text-center mt-2 animate-fade-in">
                已复制到剪贴板!
              </p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={close} className="w-full">
            ��闭
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}