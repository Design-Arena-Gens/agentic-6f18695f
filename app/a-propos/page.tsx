export default function AProposPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-16">
      <h1 className="text-3xl font-bold text-slate-900">? propos d'Intelliwave</h1>
      <p className="mt-4 text-slate-700">
        Nous sommes une agence sp?cialis?e en automatisation n8n et en conception de chatbots IA sur?mesure.
        Notre mission est d'orchestrer des syst?mes qui lib?rent du temps humain et amplifient la qualit? de service.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat label="Workflows en production" value="100+" />
        <Stat label="Temps ?conomis?/mois" value=">250h" />
        <Stat label="Satisfaction clients" value="4.9/5" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border p-6 text-center">
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}
