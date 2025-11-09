import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container-px mx-auto max-w-7xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <span className="font-semibold text-slate-900">Intelliwave</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <Link href="/services" className="hover:text-slate-900">Services</Link>
          <Link href="/a-propos" className="hover:text-slate-900">? propos</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
          <Link href="/contact" className="btn-primary">Obtenir un devis</Link>
        </nav>
      </div>
    </header>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" x2="1">
          <stop offset="0%" stopColor="#2B85FF" />
          <stop offset="100%" stopColor="#0A3A78" />
        </linearGradient>
      </defs>
      <path d="M2 42 C14 54 30 18 42 28 C54 38 62 18 62 18" fill="none" stroke="url(#lg)" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}
