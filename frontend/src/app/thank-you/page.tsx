import Link from "next/link";

import { AppShell } from "@/components/Layout";

export default function ThankYouPage() {
  return (
    <AppShell>
      <main className="grid min-h-[70vh] place-items-center bg-[#f7f2e8] px-5 py-16 text-center text-slate-950">
        <div className="max-w-2xl rounded-[2rem] bg-white p-8">
          <p className="font-black text-teal-700">Pedido recibido</p>
          <h1 className="mt-3 text-5xl font-black">Gracias por tu pedido.</h1>
          <p className="mt-5 text-lg text-slate-600">
            Lo vamos a confirmar por telefono o WhatsApp antes de enviarlo contra entrega.
          </p>
          <Link href="/collection" className="mt-8 inline-flex rounded-full bg-teal-700 px-7 py-4 font-black text-white">
            Ver mas productos
          </Link>
        </div>
      </main>
    </AppShell>
  );
}
