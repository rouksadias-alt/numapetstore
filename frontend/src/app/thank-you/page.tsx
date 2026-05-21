import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Pedido confirmado · NumaWellness",
  description: "Gracias por tu pedido en NumaWellness. Te contactamos pronto por WhatsApp.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-5 py-4">
        <div className="mx-auto flex max-w-2xl justify-center sm:justify-start">
          <Logo variant="dark" />
        </div>
      </header>

      <ThankYouContent />

      <footer className="mt-auto border-t border-slate-200 bg-white px-5 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-slate-700">
            Numa<span className="text-sky-600">Wellness</span>
          </span>{" "}
          · Empresa 100% panameña
        </p>
        <Link href="/" className="mt-2 inline-block font-semibold text-sky-600 hover:underline">
          Volver al inicio
        </Link>
      </footer>
    </div>
  );
}
