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
/**
 * CheckoutDialog – a simple contact modal.
 *
 * - Shows a title and description (optionally prefixed with the selected plan).
 * - Provides phone and email contact details.
 * - Uses primitive selectors from the checkout store.
 * - No QR code image is rendered.
 */
export function CheckoutDialog() {
  // Primitive selectors for store state
  const isOpen = useCheckoutStore((state) => state.isOpen);
  const selectedPlan = useCheckoutStore((state) => state.selectedPlan);
  const close = useCheckoutStore((state) => state.close);
  // Base description (fixed garbled text)
  const baseDescription = "扫码加微信咨询方案详情或电话联系，微电同号。";
  // Full description, optionally including the selected plan
  const descriptionText = selectedPlan
    ? `您对我们的 "${selectedPlan}" 方案感兴趣。${baseDescription}`
    : baseDescription;
  // Early exit when the dialog is not open
  if (!isOpen) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-md" aria-describedby="checkout-desc">
        <DialogHeader>
          <DialogTitle>联系购买</DialogTitle>
          <DialogDescription id="checkout-desc">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>
        {/* Contact information */}
        <div className="py-4 space-y-2">
          <p className="text-center text-sm text-muted-foreground">
            联系电话：+86 18666888095
          </p>
          <p className="text-center text-sm text-muted-foreground">
            联系邮箱：673351805@qq.com
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