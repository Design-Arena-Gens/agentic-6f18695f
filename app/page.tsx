import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function Page() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="container-px mx-auto max-w-7xl pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs text-brand-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Automatisation n8n & Chatbots IA
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Acc?l?rez votre croissance avec des workflows n8n et chatbots sur?mesure
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-prose">
                Intelliwave con?oit et op?re des automatisations robustes et des assistants
                conversationnels entra?n?s sur vos donn?es. Moins de t?ches manuelles, plus de valeur.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Parler ? un expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-ghost">Voir nos services</Link>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-slate-600">
                <div>
                  <p className="text-3xl font-bold text-slate-900">250h+</p>
                  <p>?conomis?es / mois chez nos clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">99.9%</p>
                  <p>taux de succ?s des ex?cutions</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-brand-100 via-white to-brand-200 grid place-items-center">
                  <svg viewBox="0 0 200 60" className="w-2/3 text-brand-700">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0%" stopColor="#2B85FF" />
                        <stop offset="100%" stopColor="#0A3A78" />
                      </linearGradient>
                    </defs>
                    <path d="M0,40 C30,60 70,10 100,30 C130,50 170,0 200,20" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" />
                    <text x="100" y="55" textAnchor="middle" className="fill-brand-800" fontSize="10">INTELLIWAVE</text>
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
                  <div className="rounded-md border p-3">CRM ? Slack ? Notion</div>
                  <div className="rounded-md border p-3">RAG ? Recherche Vectorielle</div>
                  <div className="rounded-md border p-3">Monitoring ? Alerting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Solutions pr?tes ? d?ployer</h2>
        <p className="mt-2 text-slate-600 max-w-prose">Des acc?l?rateurs con?us par Intelliwave pour d?marrer vite et bien.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-brand-700 font-semibold">{s.badge}</div>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <Link href={s.href} className="mt-4 inline-flex items-center text-brand-700 font-semibold">En savoir plus<ArrowRight className="ml-2 h-4 w-4"/></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-px mx-auto max-w-7xl py-16">
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">Pr?t ? surfer la vague AI ?</h3>
                <p className="mt-2 text-brand-100/90">R?servez un audit gratuit de vos processus et repartez avec un plan d'automatisation prioris?.</p>
              </div>
              <div className="md:text-right">
                <Link href="/contact" className="btn-primary bg-white text-brand-700 hover:bg-brand-50">R?server un audit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const solutions = [
  {
    badge: "Chatbots IA",
    title: "Assistant client fine-tun? sur vos donn?es",
    desc: "Un chatbot contextuel (RAG) connect? ? votre base de connaissances, Slack et votre CRM.",
    href: "/services#chatbots"
  },
  {
    badge: "Automatisation n8n",
    title: "Pipelines robustes et monitor?s",
    desc: "Des workflows fiables pour relier vos apps, nettoyer les donn?es et d?clencher des actions.",
    href: "/services#n8n"
  },
  {
    badge: "Data & Ops",
    title: "Int?gration, qualit?, observabilit?",
    desc: "Connecteurs API, webhooks, files d'attente, m?triques et alertes pour des op?rations sereines.",
    href: "/services#data"
  }
];
