import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import {
  SkinScrubberCheckout,
  SkinScrubberPackSelector,
  SkinScrubberBuyButton,
} from "@/components/SkinScrubberOffers";

export const metadata = {
  title: "Skin Scrubber Pro · Poros limpios en 5 minutos desde tu casa",
  description:
    "Limpiador facial ultrasónico. Elimina puntos negros, grasa y células muertas en 5 minutos. Pago contra entrega en Panamá. Garantía 30 días.",
};

const BENEFITS = [
  {
    icon: "🔬",
    title: "Limpieza ultrasónica profunda",
    text: "24,000 vibraciones por segundo desalojan la mugre, grasa y restos de maquillaje que tu jabón ni toca. Mira lo que sale y quedarás 😱.",
  },
  {
    icon: "🖤",
    title: "Adiós puntos negros",
    text: "La espátula desliza suave sobre poros abiertos (piel húmeda) y extrae los comedones sin apretar ni irritar. Mucho mejor que las tiras.",
  },
  {
    icon: "✨",
    title: "Piel más suave al toque",
    text: "Exfolia sin raspar. Con solo 2–3 usos a la semana la textura mejora notablemente — tus serums penetran el doble mejor.",
  },
  {
    icon: "⚡",
    title: "Ionización + / −",
    text: "Modo ion+ abre poros para limpiar; modo ion− los cierra y ayuda a que los activos de tu rutina entren más profundo.",
  },
  {
    icon: "🌿",
    title: "Suave hasta para piel sensible",
    text: "Sin cerdas, sin químicos abrasivos. Solo vibración controlada. Empieza una vez por semana si tu piel es delicada.",
  },
  {
    icon: "🔋",
    title: "USB-C, cabe en la cartera",
    text: "Ligero, recargable y discreto. Úsalo en casa, en el hotel o donde quieras sin necesidad de enchufes raros.",
  },
];

const HOW_TO = [
  {
    n: "1",
    title: "Humedece muy bien tu cara",
    text: "Esto es clave. La espátula necesita deslizarse sobre piel mojada para vibrar correctamente. Con piel seca no funciona igual.",
  },
  {
    n: "2",
    title: "Desliza en modo limpieza",
    text: "Pon el dispositivo en ángulo de 45°, empuja suavemente hacia arriba. Verás la mugre acumularse en la espátula. Limpia entre pasadas.",
  },
  {
    n: "3",
    title: "Finaliza con modo ion−",
    text: "Cierra los poros y aplica tu suero. Con el modo ion+ puedes darle un boost extra de absorción a tus activos.",
  },
];

const REVIEWS = [
  {
    name: "Valeria R.",
    location: "Ciudad de Panamá",
    text: "Broooo esto no es chiste. Pensé que era hype de TikTok pero NO. Lo usé la primera vez y quedé con la cara como bebé. Puntos negros en la nariz: bye.",
    stars: "★★★★★",
  },
  {
    name: "Daniela M.",
    location: "Miraflores",
    text: "Llevo 3 semanas usándolo dos veces por semana y literalmente siento los poros más pequeños. Mi fundación entra mucho más parejo. Valió cada peso.",
    stars: "★★★★★",
  },
  {
    name: "Karla B.",
    location: "San Miguelito",
    text: "Tengo piel grasa y mixta desde siempre y NADA me la controlaba. Con este aparatico en 5 minutos la cara queda fresca y sin brillo. Wow.",
    stars: "★★★★★",
  },
];

const INCLUDED = [
  "Skin Scrubber Pro — espátula ultrasónica",
  "Cable de carga USB-C",
  "Guía rápida de uso en español",
  "Empaque seguro (cero casilleros)",
];

const TRUST = [
  { label: "Pago al recibir", sub: "Efectivo o Yappy en la puerta" },
  { label: "Envío 24–48h", sub: "Stock real en Panamá" },
  { label: "Garantía 30 días", sub: "Si no te gusta, te devolvemos la plata" },
  { label: "+900 clientas", sub: "4.9★ en Panamá" },
];

export default function SkinScrubberLanding() {
  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-rose-100 selection:text-rose-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo brand="numawellness" />
          <nav className="hidden gap-6 text-sm font-bold text-slate-600 md:flex items-center">
            <a href="#beneficios" className="hover:text-rose-500 transition-colors">Beneficios</a>
            <a href="#como-usar" className="hover:text-rose-500 transition-colors">Cómo usar</a>
            <a href="#testimonios" className="hover:text-rose-500 transition-colors">Reseñas</a>
          </nav>
          <SkinScrubberBuyButton className="rounded-full bg-rose-500 px-5 py-2.5 text-sm font-black text-white shadow-md hover:bg-rose-600 transition-transform hover:scale-105">
            Quiero el mío →
          </SkinScrubberBuyButton>
        </div>
      </header>

      {/* URGENCY BAR */}
      <div className="bg-rose-500 px-5 py-2 text-center text-xs font-black text-white">
        🔥 Stock limitado · Pago contra entrega · Envío en Panamá en 24–48h
      </div>

      {/* HERO */}
      <section className="relative px-5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-slate-50 to-pink-50 -z-10" />
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="left">
            <div>
              <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-rose-600 animate-pulse">
                🔥 Trending en TikTok Panamá
              </span>
              <h1 className="mt-5 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Poros limpios<br />
                <span className="text-rose-500">en 5 minutos</span><br />
                desde tu casa.
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-lg">
                Deja de gastar en faciales caros. El <strong>Skin Scrubber Pro</strong> elimina puntos negros, grasa acumulada y células muertas con ultrasonido — sin irritar, sin químicos.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <SkinScrubberBuyButton className="rounded-full bg-rose-500 px-8 py-4 text-lg font-black text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.5)] transition-all hover:scale-105 hover:bg-rose-600 active:scale-95">
                  Quiero mi Skin Scrubber — $39 →
                </SkinScrubberBuyButton>
                <p className="text-sm font-bold text-slate-500">
                  💵 Pagas al recibirlo · Sin riesgo
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {TRUST.map((t) => (
                  <div key={t.label} className="rounded-2xl bg-white border border-slate-200 p-3 text-center shadow-sm">
                    <p className="text-xs font-black text-slate-900">{t.label}</p>
                    <p className="mt-0.5 text-[10px] text-slate-500">{t.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Hero product visual placeholder */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-100 to-pink-200 shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <span className="text-8xl">🔬</span>
                  <p className="text-center text-2xl font-black text-rose-700">Skin Scrubber Pro</p>
                  <p className="text-center text-sm font-bold text-rose-600">Limpiador Facial Ultrasónico</p>
                </div>
                <span className="absolute left-5 top-5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-xl">
                  24,000 vibraciones/seg
                </span>
              </div>
              {/* Floating social proof */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white border border-slate-200 p-3 shadow-xl">
                <p className="text-xs font-black text-slate-900">⭐ 4.9/5</p>
                <p className="text-[10px] text-slate-500">+900 reseñas Panamá</p>
              </div>
              <div className="absolute -top-4 -right-4 rounded-2xl bg-rose-500 p-3 shadow-xl">
                <p className="text-xs font-black text-white">💵 Pago</p>
                <p className="text-[10px] text-rose-100">al recibir</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-slate-900 px-5 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-rose-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-pink-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-rose-300">
              ¿Te suena familiar?
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Lavas, limpias, hidratas…<br />y la cara sigue
              <span className="text-rose-400"> sucia por dentro.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
              El jabón limpia la superficie, pero los poros son como túneles — la mugre acumulada, la grasa y los restos de maquillaje se quedan ahí dentro. Tu cara lo siente.
            </p>
          </FadeIn>
          <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "😤", text: "Puntos negros que vuelven aunque los aprietes" },
              { icon: "💆", text: "Poros grandes que se notan aunque te maquilles" },
              { icon: "😞", text: "Piel opaca, cansada, textura irregular" },
            ].map((item) => (
              <StaggerItem key={item.text}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="mt-3 font-bold text-slate-200">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.3}>
            <div className="mt-12 rounded-3xl bg-rose-500/20 border border-rose-500/30 p-8">
              <p className="text-2xl font-black text-white">
                El problema no es tu rutina.<br />
                <span className="text-rose-300">Es que el jabón no llega hasta ahí abajo.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-14 text-center">
            <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-rose-600">
              Por qué funciona
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Lo que el <span className="text-rose-500">ultrasonido</span> logra<br />
              y tu limpieza normal no.
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <StaggerItem key={b.title}>
                <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-rose-200">
                  <span className="text-4xl">{b.icon}</span>
                  <h3 className="mt-4 text-xl font-black text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* HOW TO */}
      <section id="como-usar" className="bg-slate-900 px-5 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 h-80 w-80 rounded-full bg-rose-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <FadeIn className="mb-14 text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-rose-300">
              Súper fácil de usar
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Facial de spa en casa.<br />
              <span className="text-rose-400">Sin cita. Sin salir.</span>
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {HOW_TO.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.15}>
                <div className="text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500 text-3xl font-black text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] mx-auto">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-white">{s.title}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4} className="mt-12 rounded-3xl border border-amber-400/30 bg-amber-400/10 p-6 text-center">
            <p className="font-black text-amber-300 text-lg">⚠️ Importante: siempre sobre piel húmeda</p>
            <p className="mt-2 text-slate-300 text-sm">Máximo 2–3 veces por semana. No reemplaza al dermatólogo, es apoyo a tu rutina skincare.</p>
          </FadeIn>
        </div>
      </section>

      {/* OFFER / PRICING */}
      <section id="pedir" className="bg-gradient-to-br from-rose-50 to-pink-50 px-5 py-20 relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl">
          <FadeIn className="mb-12 text-center">
            <span className="inline-block rounded-full bg-rose-500 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white animate-pulse">
              🔥 Oferta de lanzamiento
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl text-slate-900">
              Elige tu pack y<br />
              <span className="text-rose-500">paga solo al recibirlo.</span>
            </h2>
            <p className="mt-4 text-xl text-slate-600">Sin tarjeta. Sin riesgo. El delivery llega a tu puerta.</p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xl">
            <SkinScrubberPackSelector />
            <div className="mt-6">
              <SkinScrubberBuyButton className="w-full rounded-full bg-rose-500 px-8 py-5 text-xl font-black text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-rose-600 active:scale-95">
                Confirmar pedido ahora — Pago al recibir →
              </SkinScrubberBuyButton>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 text-center text-xs font-bold text-slate-600">
              {[
                ["💵", "Paga en efectivo o Yappy"],
                ["🚚", "Envío en Panamá"],
                ["↩️", "Garantía 30 días"],
                ["💬", "Soporte WhatsApp"],
              ].map(([icon, label]) => (
                <div key={String(label)} className="flex flex-col items-center gap-1 rounded-xl bg-slate-50 p-2">
                  <span className="text-base">{icon}</span>
                  <span className="leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-slate-500 mb-4">📦 Qué incluye tu pedido</p>
              <ul className="grid gap-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white text-xs font-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="testimonios" className="px-5 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-14 text-center">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-700">
              Lo que dicen en Panamá
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Ellas ya lo probaron.<br />
              <span className="text-rose-500">Sus poros tampoco mienten.</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <StaggerItem key={r.name}>
                <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <div className="absolute top-6 right-6 text-rose-200 opacity-50 text-6xl font-serif leading-none">"</div>
                  <p className="text-xl font-black text-amber-500 mb-3">{r.stars}</p>
                  <p className="text-lg font-medium text-slate-700 italic leading-relaxed mb-5">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white font-black text-lg">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{r.name}</p>
                      <p className="text-xs text-slate-500">{r.location} · <span className="font-bold text-green-600">✓ Compra verificada</span></p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rose-500 px-5 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-rose-400 to-pink-700" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Tu cara te lo está pidiendo.<br />
              Dale lo que necesita.
            </h2>
            <p className="mt-6 text-xl text-rose-100">
              Limpieza profunda desde $39 — pago al recibir — entrega en Panamá.
            </p>
            <SkinScrubberBuyButton className="mt-10 rounded-full bg-white px-10 py-5 text-xl font-black text-rose-600 shadow-2xl transition-all hover:scale-105 hover:shadow-rose-300/50 active:scale-95">
              Quiero mi Skin Scrubber ahora →
            </SkinScrubberBuyButton>
            <p className="mt-5 text-sm font-bold text-rose-200">
              ✓ Garantía 30 días · ✓ Stock en Panamá · ✓ Cero riesgo
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 px-5 py-10 text-center text-slate-400 text-sm">
        <Logo brand="numawellness" variant="light" />
        <p className="mt-4">
          © {new Date().getFullYear()} NumaWellness · Bienestar premium en Panamá
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs font-bold text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <Link href="/collection" className="hover:text-white transition-colors">Productos</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contacto</Link>
        </div>
        <p className="mt-4 text-xs text-slate-600 max-w-lg mx-auto">
          El Skin Scrubber Pro es un dispositivo de apoyo a la rutina de skincare. No es un tratamiento médico. Úsalo sobre piel húmeda, máximo 2–3 veces por semana.
        </p>
      </footer>

      <SkinScrubberCheckout />
    </div>
  );
}
