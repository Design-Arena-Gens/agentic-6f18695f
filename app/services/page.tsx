export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-7xl py-16">
      <h1 className="text-3xl font-bold text-slate-900">Nos services</h1>
      <p className="mt-2 text-slate-600 max-w-prose">De l'id?ation au run, Intelliwave couvre tout le cycle de vie de vos automatisations et assistants IA.</p>

      <div id="chatbots" className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Chatbots IA sur?mesure</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
          <li>Capture de besoins, p?rim?tre, KPIs</li>
          <li>Conception de prompts, personnalit?s, garde?fous</li>
          <li>RAG: indexation de vos documents, recherche vectorielle</li>
          <li>Int?grations: site web, Slack, WhatsApp, CRM</li>
          <li>Analytics: qualit?, taux de r?solution, boucles d'am?lioration</li>
        </ul>
      </div>

      <div id="n8n" className="mt-8 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Automatisation avec n8n</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
          <li>Design de workflows r?silients et idempotents</li>
          <li>Gestion d'erreurs, retries, files d'attente</li>
          <li>S?curit?: secrets, permissions, observabilit?</li>
          <li>D?ploiement: cloud, on?prem, conteneuris?</li>
          <li>Run: monitoring, alerting, SLOs</li>
        </ul>
      </div>

      <div id="data" className="mt-8 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Data & Int?grations</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
          <li>Connecteurs API, webhooks, ETL l?gers</li>
          <li>Mise en qualit? des donn?es</li>
          <li>Dashboards d'exploitation et d'impact</li>
        </ul>
      </div>
    </div>
  );
}
