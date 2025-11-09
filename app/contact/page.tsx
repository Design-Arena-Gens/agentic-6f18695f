"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(fd.entries())),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (e) {
      setStatus("error");
    }
  }
  return (
    <div className="container-px mx-auto max-w-3xl py-16">
      <h1 className="text-3xl font-bold text-slate-900">Contactez?nous</h1>
      <p className="mt-2 text-slate-600">Parlez?nous de votre projet, nous revenons vers vous sous 24h.</p>

      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700">Nom</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Entreprise</label>
          <input name="company" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" />
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Envoi?" : "Envoyer"}
          </button>
          {status === "success" && <span className="text-sm text-green-700">Message envoy?. Merci !</span>}
          {status === "error" && <span className="text-sm text-red-600">Une erreur est survenue. R?essayez.</span>}
        </div>
      </form>
    </div>
  );
}
