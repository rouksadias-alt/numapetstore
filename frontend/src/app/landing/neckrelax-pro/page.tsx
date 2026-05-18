import Image from "next/image";
import Link from "next/link";

import { NeckRelaxCheckout, NeckRelaxPackSelector } from "@/components/NeckRelaxOffers";

export const metadata = {
  title: "NeckRelax Pro · Adiós a la tensión cervical en 15 minutos",
  description:
    "Masajeador cervical EMS con calor infrarrojo. 6 modos · 9 intensidades. Pago contra entrega en Panamá. Garantía 30 días.",
};

const GALLERY = [
  { src: "/products/neckrelax-hero.jpg", alt: "NeckRelax Pro azul vista principal" },
  { src: "/products/neckrelax-lifestyle.jpg", alt: "Mujer relajada usando NeckRelax Pro" },
  { src: "/products/neckrelax-detail.jpg", alt: "Detalle electrodos y display LED" },
  { src: "/products/neckrelax-side.jpg", alt: "Vista lateral ergonómica" },
  { src: "/products/neckrelax-colors.jpg", alt: "Colores disponibles: blanco, negro, azul" },
];

export default function NeckRelaxLanding() {
  return (
    <div className="bg-white text-slate-900">
      {/* Minimal header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="text-lg font-black tracking-tight text-slate-900">
            Numa<span className="text-sky-600">Wellness</span>
          </Link>
          <div className="hidden gap-6 text-sm font-bold text-slate-600 md:flex">
            <a href="#beneficios">Beneficios</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#pedir" className="rounded-full bg-sky-600 px-4 py-1.5 text-white">
              Pedir ahora
            </a>
          </div>
        </div>
      </header>

      <div className="border-b border-sky-200 bg-sky-50 px-5 py-2 text-center text-xs font-black text-sky-800">
        🚚 Pago contra entrega en Panamá · Envío 24-48h · Garantía 30 días
      </div>

      {/* HERO */}
      <section className="px-5 py-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-4 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src={GALLERY[0].src}
                alt={GALLERY[0].alt}
                fill
                priority
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow">
                Best seller wellness
              </span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {GALLERY.slice(1).map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  <Image src={g.src} alt={g.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-bold">
              <span className="text-amber-500">★★★★★</span>
              <span className="text-slate-700">4.9/5</span>
              <span className="text-slate-500">· +1,800 clientes en Latinoamérica</span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              Masajeador Cervical EMS + Calor Infrarrojo
            </p>
            <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
              Libera tu cuello del estrés diario en{" "}
              <span className="bg-sky-100 px-2 text-sky-700">15 minutos</span> al día.
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              NeckRelax Pro combina <strong>electroestimulación EMS</strong> y{" "}
              <strong>calor infrarrojo a 42°C</strong> para relajar los músculos cervicales
              profundos. Sin manos, sin pastillas, sin pagar $40 por fisioterapia.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                ["✓ 6 modos de masaje", "Amasado, golpeteo, EMS, acupuntura..."],
                ["✓ 9 niveles de intensidad", "Suave para principiantes, intenso para experto"],
                ["✓ Calor infrarrojo 38-42°C", "Aumenta circulación sanguínea"],
                ["✓ Batería USB-C ~8 sesiones", "Úsalo en casa, oficina o viaje"],
              ].map(([h, t]) => (
                <div key={h} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-sm font-black text-slate-900">{h}</p>
                  <p className="text-xs text-slate-500">{t}</p>
                </div>
              ))}
            </div>

            <div id="pack" className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <NeckRelaxPackSelector />
              <a
                href="#pedir"
                className="mt-4 block w-full rounded-full bg-sky-600 px-6 py-4 text-center font-black text-white shadow-md transition hover:bg-sky-700 active:scale-[0.99]"
              >
                Quiero el mío — Pago contra entrega →
              </a>
              <p className="mt-2 text-center text-[11px] font-bold text-slate-500">
                ✓ Sin tarjeta · Confirmamos por WhatsApp antes de enviar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section id="beneficios" className="border-y border-slate-100 bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            ¿Te suena familiar?
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            8 horas frente a la pantalla = un cuello que grita auxilio.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {[
            {
              icon: "💻",
              title: "Tech Neck del teletrabajo",
              text: "Pasas horas frente al laptop y terminas con los hombros como piedra.",
            },
            {
              icon: "😣",
              title: "Despertar con tortícolis",
              text: "Te levantas con dolor cervical sin entender por qué. Pasa cada semana.",
            },
            {
              icon: "💸",
              title: "Fisioterapia cara",
              text: "Una sesión cuesta $30-$50 y necesitas mínimo 4 al mes. No es sostenible.",
            },
            {
              icon: "💊",
              title: "Analgésicos = parche temporal",
              text: "Calman 2 horas, dañan el estómago, no atacan la causa del problema.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <h3 className="font-black text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MECHANISM */}
      <section id="como-funciona" className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-200 bg-sky-50 shadow-sm">
            <Image
              src="/products/neckrelax-lifestyle.jpg"
              alt="Mujer usando NeckRelax Pro en cama"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              La tecnología detrás
            </p>
            <h2 className="mt-2 text-4xl font-black leading-tight tracking-tight">
              EMS + Calor Infrarrojo: la combinación que usan los fisioterapeutas.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Los <strong>electrodos EMS</strong> envían impulsos suaves que contraen y relajan
              los músculos cervicales profundos, mientras el <strong>calor infrarrojo</strong>{" "}
              aumenta la circulación sanguínea local. Resultado: tu cuello se siente como
              después de un masaje profesional.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-700">
              {[
                "Reduce la rigidez cervical hasta 70% según estudios de fisioterapia",
                "Aumenta el flujo sanguíneo en la zona cervical",
                "Estimula los puntos de acupuntura del cuello",
                "Apaga automáticamente a los 15 minutos",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="text-sky-600">●</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* USAGE */}
      <section className="bg-sky-50 px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Cómo se usa
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">3 pasos. 15 minutos. Listo.</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            { n: "1", title: "Colócalo en tu cuello", text: "Apoya cómodamente sobre la nuca, los electrodos tocan la piel sin presión." },
            { n: "2", title: "Elige modo + intensidad", text: "6 modos × 9 niveles. Empieza suave y sube según tu comodidad." },
            { n: "3", title: "Relájate 15 min", text: "Auto-apagado a los 15 minutos. Hazlo viendo Netflix o antes de dormir." },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-2xl font-black text-white">
                {s.n}
              </div>
              <h3 className="mt-4 text-xl font-black text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              ¿Por qué NeckRelax vs alternativas?
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              Comparado con tus otras opciones.
            </h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="p-4">Opción</th>
                  <th className="p-4">Costo</th>
                  <th className="p-4">Comodidad</th>
                  <th className="p-4">Efectividad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-sky-50">
                  <td className="p-4 font-black text-sky-800">⭐ NeckRelax Pro</td>
                  <td className="p-4 font-bold">$39 (1 vez)</td>
                  <td className="p-4">En casa, 15 min</td>
                  <td className="p-4 font-bold text-emerald-700">★★★★★</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Fisioterapia</td>
                  <td className="p-4">$40/sesión × 4 = $160/mes</td>
                  <td className="p-4 text-slate-500">Citas, traslado</td>
                  <td className="p-4">★★★★☆</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Analgésicos</td>
                  <td className="p-4">$15-25/mes</td>
                  <td className="p-4 text-slate-500">Inmediato</td>
                  <td className="p-4 text-red-600">★★☆☆☆ (parche)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Masajista profesional</td>
                  <td className="p-4">$60-80/sesión</td>
                  <td className="p-4 text-slate-500">1h, traslado</td>
                  <td className="p-4">★★★★☆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Lo que dicen
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">
            +1,800 personas ya descansan mejor.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              name: "Andrea M.",
              role: "Diseñadora, 32 años",
              text: "Trabajo 10h al día en la laptop. Llevaba meses con dolor cervical. Lo uso 15 min antes de dormir y duermo como bebé.",
            },
            {
              name: "Carlos P.",
              role: "Contador, 41 años",
              text: "Llegaba a casa con la espalda alta tiesa. Esto reemplazó las 2 sesiones de fisioterapia que pagaba al mes.",
            },
            {
              name: "Lucía R.",
              role: "Madre teletrabajo, 35 años",
              text: "Pensé que era otro gadget chino más. Sorpresa: el calor + EMS es REAL. Mi marido también lo usa ahora.",
            },
          ].map((r) => (
            <article
              key={r.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-amber-500">★★★★★</p>
              <p className="mt-3 text-slate-800">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 font-black text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 text-center text-4xl font-black tracking-tight">
            Todo claro antes de pedir.
          </h2>
          <div className="mt-10 grid gap-3">
            {[
              {
                q: "¿Duele la electroestimulación EMS?",
                a: "Para nada. Empieza con intensidad 1 y subes hasta donde te sientas cómoda. La mayoría usa nivel 3-5. Es una sensación de cosquilleo + masaje, no dolor.",
              },
              {
                q: "¿Cómo se carga?",
                a: "Por cable USB-C (incluido). Una carga de 2h te da ~8 sesiones de 15 minutos.",
              },
              {
                q: "¿Sirve si tengo hernia cervical o problemas serios?",
                a: "Consulta primero con tu médico. NeckRelax Pro es ideal para tensión muscular y rigidez, no reemplaza tratamiento médico de patologías graves.",
              },
              {
                q: "¿Cómo es el pago contra entrega?",
                a: "Haces tu pedido aquí. Te contactamos por WhatsApp para confirmar dirección. Pagas en efectivo o Yappy cuando recibes el producto en tu puerta (24-48h en Panamá).",
              },
              {
                q: "¿Qué pasa si no me funciona?",
                a: "Tienes 30 días de garantía. Si no estás satisfecho, te reembolsamos. Sin preguntas raras.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-400"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-black text-slate-900">
                  {f.q}
                  <span className="text-sky-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CHECKOUT */}
      <section id="pedir" className="bg-slate-900 px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300">
              Reserva ahora
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              Confirma tu pedido en 30 segundos.
            </h2>
            <p className="mt-3 text-slate-300">
              Sin tarjeta. Pago al recibir. Garantía 30 días.
            </p>
          </div>
          <NeckRelaxCheckout />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 text-sm text-slate-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} NumaWellness · Empresa 100% panameña.</p>
          <div className="flex gap-5">
            <Link href="/">Inicio</Link>
            <Link href="/contact">Contacto</Link>
            <a href="https://wa.me/50760000000" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
