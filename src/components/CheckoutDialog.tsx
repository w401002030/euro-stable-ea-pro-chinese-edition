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
export function CheckoutDialog() {
  const isOpen = useCheckoutStore((state) => state.isOpen);
  const selectedPlan = useCheckoutStore((state) => state.selectedPlan);
  const close = useCheckoutStore((state) => state.close);
  const baseDescription = "扫码加微信咨询方案详情或电话联系，微电同号。";
  const descriptionText = selectedPlan
    ? `您对我们的 "${selectedPlan}" 方案感兴趣。${baseDescription}`
    : baseDescription;
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-md" aria-describedby="checkout-desc">
        <DialogHeader>
          <DialogTitle>联系购买</DialogTitle>
          <DialogDescription id="checkout-desc">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>

        {/* QR code image – centered with padding */}
        <div className="py-4 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/288x288/2E7D32/FFFFFF?text=微信二维码"
            alt="微信二维码，扫码联系购买"
            className="w-72 h-72 rounded-xl shadow-lg object-contain"
          />
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