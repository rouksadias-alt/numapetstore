import Image from "next/image";
import Link from "next/link";

import { NeckRelaxCheckout, NeckRelaxPackSelector, NeckRelaxBuyButton } from "@/components/NeckRelaxOffers";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "NeckRelax Pro · Adiós a la tensión cervical en 15 minutos",
  description:
    "Masajeador cervical EMS con calor infrarrojo. 6 modos · 9 intensidades. Pago contra entrega en Panamá. Garantía 30 días.",
};

const HERO_IMAGE = {
  src: "/products/neckrelax-hero.jpg",
  alt: "NeckRelax Pro azul — vista principal",
};

const THUMBNAILS = [
  { src: "/products/neckrelax-lifestyle.jpg", alt: "NeckRelax Pro en el dormitorio" },
  { src: "/products/neckrelax-colors.jpg", alt: "Tres colores: blanco, negro y azul" },
  { src: "/products/neckrelax-side.jpg", alt: "Vista superior del masajeador" },
];

const BENEFITS = [
  {
    title: "Alivio EMS profundo",
    text: "Impulsos suaves que relajan el trapecio y la nuca — como si tuvieras un masajista en casa, pritty ¿no?",
    icon: "⚡",
  },
  {
    title: "Calor infrarrojo 38–42°C",
    text: "Despierta el flujo de sangre y descongela tu cuello después de la oficina con el aire a todo meter.",
    icon: "🔥",
  },
  {
    title: "6 modos × 9 intensidades",
    text: "Amasado, golpeteo, acupuntura, EMS… Tú decides el nivel. Empieza suave y sube cuando quieras.",
    icon: "🎛️",
  },
  {
    title: "Manos libres, 15 minutos",
    text: "Úsalo en el sofá, tirado en la cama o en el escritorio. Auto-apagado inteligente, cero esfuerzo.",
    icon: "🛋️",
  },
  {
    title: "3 colores top",
    text: "Blanco, negro o azul. Escoge el que más combine con tu estilo.",
    icon: "🎨",
  },
  {
    title: "Recargable USB-C",
    text: "Olvida los cables enredados. Te da hasta 8 sesiones por carga. Perfecto para llevar al interior.",
    icon: "🔋",
  },
];

const HOW_TO_STEPS = [
  {
    n: "1",
    title: "Póntelo en el cuello",
    text: "Apóyalo sobre la nuca. Asegúrate de que los electrodos toquen la piel sin mucha presión.",
  },
  {
    n: "2",
    title: "Elige tu nivel",
    text: "Empieza suave (nivel 1-2). Sube la intensidad poco a poco cuando le vayas agarrando el gusto.",
  },
  {
    n: "3",
    title: "Relájate 15 minutos",
    text: "Mira Netflix, lee o úsalo antes de dormir. Se apaga solo, así que relax total.",
  },
];

const TRUST_BADGES = [
  { label: "Pago al recibir", sub: "Efectivo o Yappy en la puerta" },
  { label: "Envío 24–48h", sub: "Stock en Panamá (nada de casilleros)" },
  { label: "Garantía 30 días", sub: "Si no te gusta, te devolvemos la plata" },
  { label: "+1,800 clientes", sub: "4.9★ en Panamá y LatAm" },
];

const INCLUDED = [
  "Masajeador NeckRelax Pro",
  "Cable de carga rápido USB-C",
  "Control remoto inalámbrico",
  "Bolsa de viaje + manual en español",
];

export default function NeckRelaxLanding() {
  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-sky-200 selection:text-sky-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="text-xl font-black tracking-tight text-slate-900 transition-transform hover:scale-105">
            Numa<span className="text-sky-600">Wellness</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-bold text-slate-600 md:flex items-center">
            <a href="#beneficios" className="hover:text-sky-600 transition-colors">Beneficios</a>
            <a href="#como-usar" className="hover:text-sky-600 transition-colors">Cómo usar</a>
            <a href="#testimonios" className="hover:text-sky-600 transition-colors">Reseñas</a>
            <NeckRelaxBuyButton className="rounded-full bg-slate-900 px-5 py-2 text-white shadow-lg transition-transform hover:scale-105 hover:bg-slate-800">
              Pedir ahora
            </NeckRelaxBuyButton>
          </nav>
        </div>
      </header>

      {/* ANNOUNCEMENT BARS */}
      <div className="border-b border-amber-200 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 px-5 py-2.5 text-center text-sm font-bold text-amber-950">
        <FadeIn delay={0.1}>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-black uppercase tracking-wide text-white animate-pulse">
              Stock limitado
            </span>
            Quedan <strong>14 unidades</strong> en promo · ¡Se van volando!
          </span>
        </FadeIn>
      </div>

      <div className="border-b border-sky-200 bg-sky-50 px-5 py-2 text-center text-xs font-black text-sky-800">
        <FadeIn delay={0.2}>
          🚚 Pago contra entrega en Panamá · Sin tarjeta de crédito
        </FadeIn>
      </div>

      {/* HERO SECTION */}
      <section className="relative px-5 py-12 lg:py-24">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/50 blur-[100px]" />
        <div className="absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-100/40 blur-[80px]" />

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <FadeIn direction="right" className="order-2 lg:order-1 rounded-[2.5rem] border border-white/50 bg-white/60 p-4 shadow-2xl backdrop-blur-sm ring-1 ring-black/5">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-xl">
                Best seller wellness
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {THUMBNAILS.map((g) => (
                <div
                  key={g.src}
                  className="group relative aspect-square overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm"
                >
                  <Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left" delay={0.1}>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-bold">
                <span className="text-amber-500 text-lg">★★★★★</span>
                <span className="text-slate-700">4.9/5</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 shadow-sm border border-emerald-200">
                  Verificado · +1,847 reseñas
                </span>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">
                Masajeador EMS + Calor Infrarrojo
              </p>
              <h1 className="mt-3 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-[4rem]">
                ¿Tas harto del dolor de cuello después del tranque?
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-slate-600">
                Libera esa tensión brutal en <span className="font-bold text-sky-700 bg-sky-100 px-2 rounded-md">15 minutos</span>. El NeckRelax Pro afloja tus músculos con tecnología EMS y calor a 42°C. Olvídate de pagar fisioterapia cara.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                {[
                  ["✓ 6 modos de masaje", "Amasado, EMS, acupuntura..."],
                  ["✓ 9 intensidades", "Suave para empezar"],
                  ["✓ Calor a 42°C", "Flujo de sangre a mil"],
                  ["✓ Batería USB-C", "Hasta 8 usos por carga"],
                ].map(([h, t]) => (
                  <div key={h} className="rounded-2xl border border-white bg-white/60 p-4 shadow-sm backdrop-blur-md">
                    <p className="text-sm font-black text-slate-900">{h}</p>
                    <p className="text-xs text-slate-500 mt-1">{t}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div id="pack" className="mt-8 rounded-[2rem] border border-white bg-white p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -z-10 opacity-50"></div>
                <NeckRelaxPackSelector />
                <NeckRelaxBuyButton className="mt-5 block w-full rounded-full bg-slate-900 px-6 py-4 text-center text-lg font-black text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.6)] active:scale-95">
                  Pedir mi NeckRelax — Pago al recibir →
                </NeckRelaxBuyButton>
                <p className="mt-3 text-center text-xs font-bold text-slate-500 flex justify-center gap-2 items-center">
                  <span>🛡️ Garantía 30 días</span>
                  <span>•</span>
                  <span>📱 Confirmamos por WhatsApp</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200/60 bg-white/50 px-5 py-10 backdrop-blur-sm">
        <StaggerChildren className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((b) => (
            <StaggerItem
              key={b.label}
              className="rounded-[1.5rem] bg-white px-5 py-6 text-center shadow-md border border-slate-100 hover:border-sky-200 transition-colors"
            >
              <p className="font-black text-slate-900 text-lg">{b.label}</p>
              <p className="mt-2 text-sm font-medium text-slate-500">{b.sub}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* PAIN SECTION */}
      <section id="problema" className="px-5 py-24 relative bg-slate-900">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-400">
              La triste realidad
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              8 horas de ofi + 2 horas de tranque = <span className="text-sky-400">un cuello vuelto leña.</span>
            </h2>
          </FadeIn>
        </div>
        
        <StaggerChildren className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {[
            {
              icon: "💻",
              title: "Cuello trancado del teletrabajo",
              text: "Estás pegado a la pantalla con postura de T-Rex y los hombros como roca.",
            },
            {
              icon: "❄️",
              title: "El aire de la ofi a todo meter",
              text: "Te congela el cuello y llegas a la casa sin poder girar la cabeza.",
            },
            {
              icon: "💸",
              title: "Fisioterapia carísima",
              text: "Pagar $40 por sesión duele casi tanto como el cuello mismo.",
            },
            {
              icon: "💊",
              title: "Analgésicos = puro cuento",
              text: "Calman un rato, te friegan el estómago y no atacan la raíz del dolor.",
            },
          ].map((p) => (
            <StaggerItem
              key={p.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center rounded-2xl bg-white/10 w-16 h-16 text-3xl shrink-0">{p.icon}</span>
                <div>
                  <h3 className="text-xl font-black text-white">{p.title}</h3>
                  <p className="mt-2 text-base text-slate-300">{p.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="px-5 py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-l from-sky-50 to-transparent"></div>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right" className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-slate-200 shadow-2xl">
            <Image
              src="/products/neckrelax-lifestyle.jpg"
              alt="NeckRelax Pro en uso — alivio cervical en casa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-2xl font-black text-white leading-tight">"Cero estrés, me lo pongo mientras leo y santo remedio."</p>
            </div>
          </FadeIn>
          
          <div>
            <FadeIn direction="left">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
                La Ciencia
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl">
                La dupla ganadora: <br/> EMS + Calor Infrarrojo
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-600">
                Los pulsos eléctricos (EMS) aflojan el nudo desde adentro, mientras el calor a 42°C activa la sangre. Es como tener las manos de un fisio desbaratando esa tensión, pero en tu propio sofá.
              </p>
              <ul className="mt-8 grid gap-4 text-lg text-slate-700 font-medium">
                {[
                  "Adiós rigidez: úsalo a diario para no llegar al colapso.",
                  "Puntos de acupuntura estimulados directamente.",
                  "Sistema seguro: se apaga solo a los 15 minutos.",
                  "Súper flexible, se adapta a cualquier tamaño de cuello.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="px-5 py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
              ¿Por qué es un hit?
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Diseñado para Panamá
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
              No es un masajeador más. Es tecnología portátil para aguantar el ritmo frenético de la semana.
            </p>
          </FadeIn>
        </div>
        <StaggerChildren className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <StaggerItem
              key={b.title}
              className="rounded-[2rem] border border-slate-200/60 bg-white p-8 text-left shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-4xl mb-6 shadow-sm border border-slate-100">{b.icon}</span>
              <h3 className="text-2xl font-black text-slate-900">{b.title}</h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">{b.text}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* HOW TO USE */}
      <section id="como-usar" className="px-5 py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-6xl text-center relative z-10">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-400">
              Cero enredos
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Si sabes usar WhatsApp, <br/><span className="text-slate-400">sabes usar NeckRelax Pro.</span>
            </h2>
          </FadeIn>
        </div>
        
        <StaggerChildren delayOrder={0.2} className="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-3 relative z-10">
          {HOW_TO_STEPS.map((s) => (
            <StaggerItem
              key={s.n}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="border-b border-white/10 bg-white/10 px-8 py-10 flex flex-col items-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-3xl font-black text-white shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                  {s.n}
                </span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-white">{s.title}</h3>
                <p className="mt-4 text-lg text-slate-300">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
              La matemática no miente
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              NeckRelax Pro vs lo que haces hoy
            </h2>
          </FadeIn>
          <FadeIn direction="up">
            <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-2xl">
              <table className="w-full text-left text-base min-w-[600px]">
                <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
                  <tr>
                    <th className="p-6 font-black text-lg">Opción</th>
                    <th className="p-6 font-black text-lg">Costo</th>
                    <th className="p-6 font-black text-lg">Comodidad</th>
                    <th className="p-6 font-black text-lg">Nota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-sky-50/50 transition-colors hover:bg-sky-50">
                    <td className="p-6 font-black text-sky-700 text-lg flex items-center gap-2"><span>⭐</span> NeckRelax Pro</td>
                    <td className="p-6 font-black text-lg">$45 (Solo 1 vez)</td>
                    <td className="p-6 font-medium text-slate-700">En pijama, 15 min</td>
                    <td className="p-6 font-black text-emerald-600 text-lg">★★★★★</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50">
                    <td className="p-6 font-bold text-slate-700">Fisioterapia</td>
                    <td className="p-6 text-slate-600">$160/mes (4 citas)</td>
                    <td className="p-6 text-slate-500">Manejar + tranque</td>
                    <td className="p-6 text-slate-400 tracking-widest">★★★★☆</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50">
                    <td className="p-6 font-bold text-slate-700">Pastillas (Ibuprofeno)</td>
                    <td className="p-6 text-slate-600">$20 al mes</td>
                    <td className="p-6 text-slate-500">Te friega la panza</td>
                    <td className="p-6 text-slate-400 tracking-widest">★★☆☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="px-5 py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
              Reseñas Reales
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Cientos de cuellos felices en Panamá
            </h2>
          </FadeIn>
        </div>
        <StaggerChildren className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              name: "Andrea M.",
              role: "Diseñadora, San Francisco",
              text: "Fren, paso 10 horas en la laptop y el dolor de cuello me mataba. Me lo pongo en la noche, el calorcito es lo máximo y duermo como bebé.",
            },
            {
              name: "Carlos P.",
              role: "Contador, Costa del Este",
              text: "Honestamente estaba escéptico. Pero esos corrientazos EMS aflojan la tensión brutal. Ya cancelé la cita del quiropráctico, no bromeo.",
            },
            {
              name: "Lucía R.",
              role: "Teletrabajo, Brisas del Golf",
              text: "Buenazo. La combinación de calor y masajes es otro nivel. Mi esposo me lo quitó apenas vio cómo funcionaba, tuvimos que pedir el segundo.",
            },
          ].map((r) => (
            <StaggerItem
              key={r.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
            >
              <p className="text-amber-500 text-xl tracking-widest">★★★★★</p>
              <p className="mt-6 text-lg font-medium text-slate-800 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 font-black text-white text-xl shadow-md">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-900">{r.name}</p>
                  <p className="text-sm text-sky-600 font-bold">{r.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* CHECKOUT SECTION */}
      <section id="pedir" className="bg-slate-900 px-5 py-24 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-tl-full blur-[120px] opacity-20 -z-10"></div>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <FadeIn direction="right">
            <h2 className="text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Llévatelo hoy mismo.<br/>
              <span className="text-sky-400">Paga en tu puerta.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300">
              Llenas el form, te escribimos al WhatsApp, confirmamos y te llega a la casa. Efectivo o Yappy al recibir. Cero estrés.
            </p>
            <div className="mt-10 grid gap-6">
              {[
                {
                  t: "Entrega Rápida",
                  d: "Despacho desde bodega en la ciudad, te llega volando.",
                },
                {
                  t: "Garantía de 30 Días",
                  d: "Si no afloja tu estrés, escríbenos y te devolvemos el dinero.",
                },
              ].map((x) => (
                <div key={x.t} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-black text-xl">{x.t}</h3>
                    <p className="text-slate-400 mt-1 text-base">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2} className="flex flex-col items-center justify-center text-center">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm w-full">
              <p className="text-2xl font-black text-white">¿Listo para relajarte?</p>
              <p className="mt-2 text-slate-300">Completa tus datos de envío en nuestro formulario seguro.</p>
              <NeckRelaxBuyButton className="mt-8 w-full rounded-full bg-sky-500 px-8 py-4 text-xl font-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
                Abrir formulario de pedido →
              </NeckRelaxBuyButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-center text-slate-500 border-t border-slate-800">
        <p className="text-sm font-medium">© {new Date().getFullYear()} NumaWellness · Empresa 100% panameña.</p>
        <p className="mt-2 text-xs opacity-60 max-w-3xl mx-auto">
          Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad.
          Consulta con tu médico antes de usar si tienes marcapasos o condiciones médicas graves.
        </p>
      </footer>
      <NeckRelaxCheckout />
    </div>
  );
}
