import Image from "next/image";
import Link from "next/link";

import { NeckRelaxCheckout, NeckRelaxPackSelector } from "@/components/NeckRelaxOffers";

export const metadata = {
  title: "NeckRelax Pro · Adiós a la tensión cervical en 15 minutos",
  description:
    "Masajeador cervical EMS con calor infrarrojo. 6 modos · 9 intensidades. Pago contra entrega en Panamá. Garantía 30 días.",
};

const GALLERY = [
  { src: "/products/neckrelax-hero.jpg", alt: "NeckRelax Pro azul — vista principal" },
  { src: "/products/neckrelax-colors.jpg", alt: "Tres colores: blanco, negro y azul" },
  { src: "/products/neckrelax-lifestyle.jpg", alt: "NeckRelax Pro en el dormitorio" },
  {
    src: "/products/neckrelax-action.jpg",
    alt: "Mujer relajada usando NeckRelax Pro con alivio cervical",
  },
  {
    src: "/products/neckrelax-detail.jpg",
    alt: "Masaje por vibración EMS — electrodos y panel de control",
  },
  { src: "/products/neckrelax-side.jpg", alt: "Vista superior del masajeador negro" },
];

const BENEFITS = [
  {
    title: "Alivio EMS en profundidad",
    text: "Impulsos suaves que relajan el trapecio y la nuca — como un masaje profesional, sin salir de casa.",
    image: "/products/neckrelax-detail.jpg",
    icon: "⚡",
  },
  {
    title: "Calor infrarrojo 38–42°C",
    text: "Aumenta la circulación local y desbloquea la rigidez matutina en minutos.",
    image: "/products/neckrelax-action.jpg",
    icon: "🔥",
  },
  {
    title: "6 modos × 9 intensidades",
    text: "Amasado, golpeteo, acupuntura, EMS… Tú eliges. Empieza suave, sube cuando quieras.",
    image: "/products/neckrelax-side.jpg",
    icon: "🎛️",
  },
  {
    title: "Manos libres, 15 minutos",
    text: "Úsalo en el sofá, la cama o el escritorio. Auto-apagado — cero esfuerzo.",
    image: "/products/neckrelax-lifestyle.jpg",
    icon: "🛋️",
  },
  {
    title: "3 colores, mismo poder",
    text: "Blanco, negro o azul — elige el que combine con tu espacio.",
    image: "/products/neckrelax-colors.jpg",
    icon: "🎨",
  },
  {
    title: "Recargable USB-C",
    text: "~8 sesiones por carga. Llévalo a la oficina o de viaje sin cables enredados.",
    image: "/products/neckrelax-hero.jpg",
    icon: "🔋",
  },
];

const HOW_TO_STEPS = [
  {
    n: "1",
    title: "Colócalo en tu cuello",
    text: "Apoya sobre la nuca. Los electrodos tocan la piel sin presión excesiva.",
    image: "/products/neckrelax-lifestyle.jpg",
  },
  {
    n: "2",
    title: "Elige modo + intensidad",
    text: "Empieza en nivel 1–2. Sube gradualmente hasta sentir alivio cómodo.",
    image: "/products/neckrelax-detail.jpg",
  },
  {
    n: "3",
    title: "Relájate 15 minutos",
    text: "Netflix, lectura o antes de dormir. Se apaga solo al terminar la sesión.",
    image: "/products/neckrelax-action.jpg",
  },
];

const TRUST_BADGES = [
  { label: "Pago contra entrega", sub: "Efectivo o Yappy al recibir" },
  { label: "Envío 24–48h", sub: "Desde stock en Panamá" },
  { label: "Garantía 30 días", sub: "Satisfacción o reembolso" },
  { label: "+1,800 clientes", sub: "4.9★ en Latinoamérica" },
];

const INCLUDED = [
  "Masajeador NeckRelax Pro",
  "Cable de carga USB-C",
  "Control remoto",
  "Bolsa de viaje + manual en español",
];

export default function NeckRelaxLanding() {
  return (
    <div className="bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="text-lg font-black tracking-tight text-slate-900">
            Numa<span className="text-sky-600">Wellness</span>
          </Link>
          <nav className="hidden gap-5 text-sm font-bold text-slate-600 md:flex">
            <a href="#beneficios">Beneficios</a>
            <a href="#como-usar">Cómo usar</a>
            <a href="#confianza">Confianza</a>
            <a href="#testimonios">Reseñas</a>
            <a href="#pedir" className="rounded-full bg-sky-600 px-4 py-1.5 text-white">
              Pedir ahora
            </a>
          </nav>
        </div>
      </header>

      {/* Scarcity */}
      <div className="border-b border-amber-200 bg-amber-50 px-5 py-2.5 text-center text-sm font-bold text-amber-950">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-black uppercase tracking-wide text-white">
            Stock limitado
          </span>
          Quedan <strong>14 unidades</strong> al precio de lanzamiento · Se agotan rápido en Panamá
        </span>
      </div>

      <div className="border-b border-sky-200 bg-sky-50 px-5 py-2 text-center text-xs font-black text-sky-800">
        🚚 Pago contra entrega · Envío 24-48h · Sin tarjeta de crédito
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
              <span className="absolute bottom-4 right-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-white shadow">
                −42% vs fisioterapia/mes
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
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
            <div className="mb-3 flex flex-wrap items-center gap-2 text-sm font-bold">
              <span className="text-amber-500">★★★★★</span>
              <span className="text-slate-700">4.9/5</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-black text-emerald-800">
                Verificado · +1,847 reseñas
              </span>
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
                ["✓ 9 niveles de intensidad", "Suave para principiantes"],
                ["✓ Calor infrarrojo 38-42°C", "Circulación + relajación"],
                ["✓ Batería USB-C ~8 sesiones", "Casa, oficina o viaje"],
              ].map(([h, t]) => (
                <div key={h} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-sm font-black text-slate-900">{h}</p>
                  <p className="text-xs text-slate-500">{t}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-bold text-amber-950">
              ⏳ <strong>14 unidades</strong> con envío prioritario hoy — el precio sube cuando
              se agote el lote.
            </p>

            <div id="pack" className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <NeckRelaxPackSelector />
              <a
                href="#pedir"
                className="mt-4 block w-full rounded-full bg-sky-600 px-6 py-4 text-center font-black text-white shadow-md transition hover:bg-sky-700 active:scale-[0.99]"
              >
                Reservar el mío — Pago al recibir →
              </a>
              <p className="mt-2 text-center text-[11px] font-bold text-slate-500">
                ✓ Sin tarjeta · Confirmamos por WhatsApp · Stock real en Panamá
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-100 bg-slate-50 px-5 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm"
            >
              <p className="font-black text-slate-900">{b.label}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="px-5 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Beneficios
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
            Por qué miles eligen NeckRelax Pro
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            Tecnología de consultorio, en tu casa, por una fracción del costo mensual.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-10">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-sky-50 shadow-sm">
                <Image src={b.image} alt={b.title} fill className="object-cover" />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow">
                  {b.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 md:text-3xl">{b.title}</h3>
                <p className="mt-3 text-lg leading-8 text-slate-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-900 px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300">
            Galería del producto
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            Así se ve y se siente en la vida real
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3">
          {GALLERY.map((g) => (
            <div
              key={g.src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10"
            >
              <Image src={g.src} alt={g.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* PAIN */}
      <section id="problema" className="border-y border-slate-100 bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            El problema
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
              text: "Una sesión cuesta $30-$50 y necesitas mínimo 4 al mes.",
            },
            {
              icon: "💊",
              title: "Analgésicos = parche temporal",
              text: "Calman 2 horas, dañan el estómago, no atacan la causa.",
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

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-200 bg-sky-50 shadow-sm">
            <Image
              src="/products/neckrelax-action.jpg"
              alt="Mujer usando NeckRelax Pro — alivio cervical EMS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              Cómo funciona
            </p>
            <h2 className="mt-2 text-4xl font-black leading-tight tracking-tight">
              EMS + calor infrarrojo: la dupla de los fisioterapeutas.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Los electrodos EMS contraen y relajan los músculos profundos. El calor aumenta
              el flujo sanguíneo. Resultado: sensación de masaje profesional en 15 minutos.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-700">
              {[
                "Reduce rigidez cervical (uso diario recomendado)",
                "Estimula puntos de acupuntura del cuello",
                "Apagado automático de seguridad",
                "Material ABS grado médico + electrodos de silicona",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-sky-600">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-sky-50 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-sky-200 bg-white shadow-sm">
            <Image
              src="/products/neckrelax-colors.jpg"
              alt="NeckRelax Pro en tres colores"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              Qué recibes
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Todo lo necesario, sin sorpresas.
            </h2>
            <ul className="mt-6 grid gap-3">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-3 font-bold text-slate-800"
                >
                  <span className="text-sky-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section id="como-usar" className="px-5 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Cómo usar
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
            3 pasos. 15 minutos. Sin complicaciones.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Si puedes usar un celular, puedes usar NeckRelax Pro.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-3">
          {HOW_TO_STEPS.map((s) => (
            <article
              key={s.n}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-sky-50">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-xl font-black text-white">
                  {s.n}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-bold text-slate-500">
          Consejo: úsalo 1–2 veces al día (mañana o noche) durante 2 semanas para notar el cambio
          más claro.
        </p>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              Comparación
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              NeckRelax vs tus otras opciones
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
                  <td className="p-4">$160/mes (4 sesiones)</td>
                  <td className="p-4 text-slate-500">Citas + traslado</td>
                  <td className="p-4">★★★★☆</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Analgésicos</td>
                  <td className="p-4">$15-25/mes</td>
                  <td className="p-4 text-slate-500">Inmediato</td>
                  <td className="p-4 text-red-600">★★☆☆☆</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Masajista</td>
                  <td className="p-4">$60-80/sesión</td>
                  <td className="p-4 text-slate-500">1h + traslado</td>
                  <td className="p-4">★★★★☆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="confianza" className="border-y border-slate-100 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Confianza
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">
            Compra sin riesgo en Panamá
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {[
            {
              title: "Pago contra entrega",
              text: "Confirmamos por WhatsApp. Pagas solo cuando recibes en tu puerta.",
            },
            {
              title: "Garantía 30 días",
              text: "Si no sientes alivio, te devolvemos el dinero. Sin letra pequeña.",
            },
            {
              title: "Empresa panameña",
              text: "Soporte local en español. Envíos desde stock en territorio nacional.",
            },
            {
              title: "Uso seguro",
              text: "Auto-apagado a 15 min. Empieza siempre en intensidad baja.",
            },
          ].map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm"
            >
              <p className="text-lg font-black text-slate-900">🛡️ {t.title}</p>
              <p className="mt-2 text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 text-center">
          <p className="text-lg font-black text-amber-950">
            ⚠️ Lote de mayo: solo quedan <span className="text-2xl">14</span> unidades al precio
            promocional
          </p>
          <p className="mt-2 text-sm font-medium text-amber-900">
            El siguiente reabastecimiento llegará a $49. Reserva hoy al precio de lanzamiento.
          </p>
          <a
            href="#pedir"
            className="mt-4 inline-block rounded-full bg-amber-500 px-8 py-3 font-black text-white shadow hover:bg-amber-600"
          >
            Asegurar mi unidad →
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            Reseñas verificadas
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">
            +1,800 personas ya descansan mejor
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              name: "Andrea M.",
              role: "Diseñadora, Ciudad de Panamá",
              text: "Trabajo 10h al día en la laptop. Lo uso 15 min antes de dormir y duermo como bebé.",
              when: "Hace 2 semanas",
            },
            {
              name: "Carlos P.",
              role: "Contador, San Miguelito",
              text: "Reemplazó las 2 sesiones de fisioterapia que pagaba al mes. Vale cada centavo.",
              when: "Compra verificada",
            },
            {
              name: "Lucía R.",
              role: "Teletrabajo, Chitré",
              text: "El calor + EMS es real. Mi marido me lo quitó y tuvo que pedir el suyo.",
              when: "Hace 1 mes",
            },
          ].map((r) => (
            <article
              key={r.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-amber-500">★★★★★</p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  {r.when}
                </span>
              </div>
              <p className="mt-3 text-slate-800">&ldquo;{r.text}&rdquo;</p>
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
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-sky-700">
            FAQ
          </p>
          <h2 className="mt-2 text-center text-4xl font-black tracking-tight">
            Preguntas antes de pedir
          </h2>
          <div className="mt-10 grid gap-3">
            {[
              {
                q: "¿Duele la electroestimulación EMS?",
                a: "No. Empieza en nivel 1–2. Es cosquilleo + masaje, no dolor.",
              },
              {
                q: "¿Cómo se carga?",
                a: "USB-C incluido. ~2h de carga = ~8 sesiones de 15 min.",
              },
              {
                q: "¿Puedo usarlo con problemas cervicales graves?",
                a: "Consulta a tu médico si tienes hernia, marcapasos o embarazo.",
              },
              {
                q: "¿Cómo funciona el pago contra entrega?",
                a: "Pedido aquí → WhatsApp confirma dirección → pagas al recibir (24–48h).",
              },
              {
                q: "¿Qué pasa si no me gusta?",
                a: "30 días de garantía. Te reembolsamos sin preguntas raras.",
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

      {/* CHECKOUT */}
      <section id="pedir" className="bg-slate-900 px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 rounded-2xl border border-amber-400/40 bg-amber-500/10 px-5 py-4 text-center">
            <p className="font-black text-amber-200">
              🔥 Quedan 14 unidades — precio de lanzamiento $39
            </p>
          </div>
          <div className="mb-8 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300">
              Último paso
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              Confirma tu pedido en 30 segundos
            </h2>
            <p className="mt-3 text-slate-300">
              Sin tarjeta · Pago al recibir · Garantía 30 días
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


