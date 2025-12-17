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
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";
export function CheckoutDialog() {
  const isOpen = useCheckoutStore((state) => state.isOpen);
  const selectedPlan = useCheckoutStore((state) => state.selectedPlan);
  const close = useCheckoutStore((state) => state.close);
  const handleConfirm = () => {
    toast.success("购买成��！", {
      description: "感谢您的购买，相关许可信息已发送至您的邮箱。",
      icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
    });
    close();
  };
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>确认您的订单</DialogTitle>
          <DialogDescription>
            您即将购买 {selectedPlan ? `"${selectedPlan}"` : "Euro Stable EA"}。这是一个模拟的结账流程。
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="font-semibold text-secondary-foreground">订单详情</h3>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="font-medium">选择的方案: </span>
              {selectedPlan || "标准版 (默认)"}
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            点��“确认购买”即表示您同意我们的���务条款。
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={close}>
            取消
          </Button>
          <Button onClick={handleConfirm} className="bg-emerald-500 hover:bg-emerald-600 text-white">
            确认购买
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}