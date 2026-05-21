import { AppShell } from "@/components/Layout";

export default function AboutPage() {
  return (
    <AppShell>
      <main className="bg-[#f7f2e8] px-5 py-16 text-slate-950">
        <div className="mx-auto max-w-5xl">
          <p className="font-black text-sky-700">Sobre NumaWellness</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">
            Creamos NumaWellness para hogares panameños que buscan bienestar, confort y
            tranquilidad en el día a día.
          </h1>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Casa limpia", "Herramientas para reducir pelos visibles y desorden diario."],
              ["Hidratacion", "Rutinas que hacen el agua mas atractiva y facil de mantener."],
              ["Juego inteligente", "Estimulo para mascotas en hogares ocupados."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6">
                <h2 className="text-2xl font-black">{title}</h2>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </AppShell>
  );
}
