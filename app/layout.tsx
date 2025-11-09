import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Intelliwave ? Agence d'automatisation AI & chatbots n8n",
    template: "%s ? Intelliwave"
  },
  description: "Agence fran?aise sp?cialis?e en automatisation n8n et chatbots IA sur-mesure. Nous concevons des assistants qui transforment vos processus et votre relation client.",
  metadataBase: new URL("https://agentic-6f18695f.vercel.app"),
  openGraph: {
    title: "Intelliwave ? Automatisation AI & chatbots n8n",
    description: "Automatisez. Acc?l?rez. Personnalisez. Vos flux n8n et chatbots IA sur-mesure.",
    url: "https://agentic-6f18695f.vercel.app",
    siteName: "Intelliwave",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Intelliwave ? Automatisation AI & chatbots n8n"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
