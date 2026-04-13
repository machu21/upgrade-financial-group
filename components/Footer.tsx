export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background mt-24 md:mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight text-primary">U</span>
          <span className="text-sm font-bold tracking-tight text-foreground">pgrade Financial</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Upgrade Financial Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}