import { AppShell } from "@/components/Layout";

export default function ContactPage() {
  return (
    <AppShell>
      <main className="bg-[#f7f2e8] px-5 py-16 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-black text-teal-700">Contacto</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight">
              Te ayudamos a confirmar tu pedido por WhatsApp.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Para entregas contra entrega, primero confirmamos tus datos y zona.
            </p>
          </div>
          <form className="rounded-[2rem] bg-white p-6">
            <label className="block text-sm font-bold">Nombre</label>
            <input className="mt-2 w-full rounded-2xl border border-slate-300 p-4" />
            <label className="mt-4 block text-sm font-bold">Telefono</label>
            <input className="mt-2 w-full rounded-2xl border border-slate-300 p-4" />
            <label className="mt-4 block text-sm font-bold">Mensaje</label>
            <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-300 p-4" />
            <button className="mt-5 w-full rounded-full bg-teal-700 px-6 py-4 font-black text-white">
              Enviar mensaje
            </button>
          </form>
        </div>
      </main>
    </AppShell>
  );
}
