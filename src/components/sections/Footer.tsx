export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">风险免责声明</p>
<p className="mt-2 max-w-3xl mx-auto text-pretty">
  外汇交易存在高风险，可能不适合所有投资者。在决定交易外汇之前，您应该仔细考虑您的投资目标、经验水平和风险承受能力。存在蒙受部分或全部初始投资损失的可能性，因此，您不应投入您无法承受损失的资金。过去的表现并非未来结果的指标。
</p>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Euro Stable EA. All Rights Reserved.
            </p>
            <p className="mt-1">Built with ❤️ at Cloudflare</p>
          </div>
        </div>
      </div>
    </footer>
  );
}