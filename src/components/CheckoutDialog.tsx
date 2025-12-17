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
        <DialogContent className="sm:max-w-lg" aria-describedby="checkout-desc">
        <DialogHeader>
          <DialogTitle>联系购买</DialogTitle>
{selectedPlan && (
  <DialogDescription>
    {`您对我们的 "${selectedPlan}" 方案感兴趣`}
  </DialogDescription>
)}
        </DialogHeader>
        <div className="py-4 space-y-6 flex flex-col items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEgAQMAAAAuTTzDAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAByklEQVRoge2ZO3aDMBBFh0NByRK0FJYGS/NStASXFD6ezE8Kjo2DXCWHNwUG+dI85isRwWB/1CY2uxPxQpQyDfZMs6+vgFqgrNf+3jEv8oc+9QYtuj4AqlASyXoVk/kiYqqa8jQvIvMV0EeQKX4hGjk8E9DnEBWR5abb/ywnhkqYW2Qng/ZzAaC3kHuiQyK/iOxv+DqgFujBJs7j6jlz384JmZhrb8qpmCxQ5MYkbwBqg7L+SJq07jD8NKr2WN0X0DGITWRttWdWxT1nejYdAA0bMYcbeXcoDc063DofSayEA2qBopyY4t5qlzfStjUCdACy+XitXaNGdiRQi3lAtVdJVlsMkvtotU1ZQI3Q5KOK5EnatopaaCgBaoPUfevcIjVnjK5HE2jahvnJIY9sqqa1hXyPkLaFGtARKOu9zXdSnLOuW870VpsBNUOxc6NdTxRqsmn5Gp8BED2OdFSUVcsJUBtULGqLO+PDA6DD0KY2c3Q939Xoee/wvFDWq48kvt3lUPgsAWqCUjklqdtd1V4cpQA6CulCmZwpjgIA/YBsU8ah0mo/eyag95BePbJnH1X80PNVLgD0C+QB7Ypf6qFxaYEAwWD/3L4AbMKs+VF20TgAAAAASUVORK5CYII="
            alt="微信二维码"
            className="w-72 h-72 mx-auto rounded-xl shadow-xl [image-rendering:pixelated] [image-rendering:-moz-crisp-edges] [-webkit-image-rendering:optimize-contrast] select-none"
          />
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