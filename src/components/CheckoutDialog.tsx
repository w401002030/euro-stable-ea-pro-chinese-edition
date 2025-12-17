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
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      // Fallback for browsers where the Clipboard API is unavailable or blocked
      const textarea = document.createElement('textarea');
      textarea.value = phone;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } finally {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>联系购买</DialogTitle>
{selectedPlan && (
  <DialogDescription>
    {`您对我们的 "${selectedPlan}" 方案感兴趣`}
  </DialogDescription>
)}
        </DialogHeader>
        <div className="py-4 space-y-6 flex flex-col items-center">
          <svg
            className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-xl shadow-lg border"
            width="300"
            height="300"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <rect width="300" height="300" fill="#10B981" />
            
            <rect x="30" y="30" width="60" height="60" fill="#FFFFFF" />
            <rect x="210" y="30" width="60" height="60" fill="#FFFFFF" />
            <rect x="30" y="210" width="60" height="60" fill="#FFFFFF" />
            <rect x="210" y="210" width="60" height="60" fill="#FFFFFF" />
            
            <rect x="90" y="90" width="120" height="120" fill="#FFFFFF" stroke="#000000" strokeWidth="4" rx="10" />
            
            <rect x="105" y="105" width="20" height="20" fill="#000000" />
            <rect x="135" y="105" width="20" height="20" fill="#000000" />
            <rect x="105" y="135" width="20" height="20" fill="#000000" />
            <rect x="165" y="105" width="20" height="20" fill="#000000" />
            
            <text x="150" y="160" fontSize="24" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">
              微信二维码
            </text>
          </svg>
          <p className="text-sm text-muted-foreground text-center px-4">
            扫码加微信咨询方案详情或电话联系，微电同号
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
  关闭
</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}