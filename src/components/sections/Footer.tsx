import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function Footer() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const qrSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIxIDIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMjF2MjFIMHoiIGZpbGw9IiNGRkYiLz48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMTUiIHk9IjEiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIxIiB5PSIxNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjE1IiB5PSIxNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjgiIHk9IjgiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjRkZGIi8+PHJlY3QgeD0iMTYiIHk9IjIiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiIGZpbGw9IiNGRkYiLz48cmVjdCB4PSIyIiB5PSIxNiIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iI0ZGRiIvPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iI0ZGRiIvPjxyZWN0IHg9IjkiIHk9IjkiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiIGZpbGw9IiNGRkYiLz48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMTciIHk9IjMiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIzIiB5PSIxNyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjE3IiB5PSIxNyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEiIGhlaWd0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+';
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center text-sm text-muted-foreground max-w-4xl mx-auto">
            <p className="font-semibold text-foreground mb-4">风险免责声明</p>
            <p className="mt-2 max-w-3xl mx-auto text-pretty leading-relaxed">
              外汇交易存在高风险，可能不适合所有投资者。在决定交易外汇之前，您应该仔细考虑您的投资目标、经验水平和风险承受能力。存在蒙受部分或全部初始投资损失的可能性，因此，您不应投入您无法承受损失的资金。过去的表现并非未来结果的指标。
            </p>
            <img src={qrSrc} alt="微信咨询扫码" className="py-4 mx-auto w-20 h-20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={() => setIsQrModalOpen(true)} />
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Euro Stable EA. All Rights Reserved.
            </p>
            <p className="mt-1">Built with ❤️ at Cloudflare</p>
          </div>
        </div>
      </div>
    <Dialog open={isQrModalOpen} onOpenChange={setIsQrModalOpen}>
    <DialogContent aria-describedby="qr-desc">
      <DialogHeader>
        <DialogTitle className="text-center">微信咨询扫码</DialogTitle>
        <DialogDescription id="qr-desc" className="text-center">
          扫描以上二维码添加微信咨询，长按识别或保存图片。
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-center p-8 mx-auto">
        <img src={qrSrc} alt="微信二维码" className="w-72 h-72 rounded-2xl shadow-2xl max-w-[90vw] max-h-[90vh]" />
      </div>
    </DialogContent>
  </Dialog>
</footer>
  );
}