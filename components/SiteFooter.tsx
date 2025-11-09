import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">Intelliwave</span>
            </div>
            <p className="mt-2 text-slate-600">Automatisation n8n et chatbots IA sur?mesure.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Liens</div>
            <ul className="mt-2 space-y-2">
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/a-propos" className="hover:underline">? propos</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Solutions</div>
            <ul className="mt-2 space-y-2">
              <li>Chatbots IA</li>
              <li>Workflows n8n</li>
              <li>Data & Ops</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="mailto:hello@intelliwave.ai" className="hover:underline">hello@intelliwave.ai</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">? {new Date().getFullYear()} Intelliwave. Tous droits r?serv?s.</div>
      </div>
    </footer>
  );
}
