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
        <div className="py-4 flex flex-col items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEgAQMAAAAuTTzDAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAByklEQVRoge2ZO3aDMBBFh0NByRK0FJYGS/NStASXFD6ezE8Kjo2DXCWHNwUG+dI85isRwWB/1CY2uxPxQpQyDfZMs6+vgFqgrNf+3jEv8oc+9QYtuj4AqlASyXoVk/kiYqqa8jQvIvMV0EeQKX4hGjk8E9DnEBWR5abb/ywnhkqYW2Qng/ZzAaC3kHuiQyK/iOxv+DqgFujBJs7j6jlz384JmZhrb8qpmCxQ5MYkbwBqg7L+SJq07jD8NKr2WN0X0DGITWRttWdWxT1nejYdAA0bMYcbeXcoDc063DofSayEA2qBopyY4t5qlzfStjUCdACy+XitXaNGdiRQi3lAtVdJVlsMkvtotU1ZQI3Q5KOK5EnatopaaCgBaoPUfevcIjVnjK5HE2jahvnJIY9sqqa1hXyPkLaFGtARKOu9zXdSnLOuW870VpsBNUOxc6NdTxRqsmn5Gp8BED2OdFSUVcsJUBtULGqLO+PDA6DD0KY2c3Q939Xoee/wvFDWq48kvt3lUPgsAWqCUjklqdtd1V4cpQA6CulCmZwpjgIA/YBsU8ah0mo/eyag95BePbJnH1X80PNVLgD0C+QB7Ypf6qFxaYEAwWD/3L4AbMKs+VF20TgAAAAASUVORK5CYII="
            alt="微信二维码"
            className="w-full h-auto max-h-80 mx-auto rounded-xl shadow-lg object-contain select-none"
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