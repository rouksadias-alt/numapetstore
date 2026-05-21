import Image from "next/image";
import Link from "next/link";

import {
  SizeGuide,
  EducationSections,
  FAQSection,
  ReviewsSection,
} from "@/components/CROSections";
import { AddVariantButton, MobileBuyBar, VariantSelector } from "@/components/CartDrawer";
import { AppShell } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/config/products";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export default function Home() {
  return (
    <AppShell>
      <main className="bg-slate-50 text-slate-900 overflow-hidden selection:bg-sky-200 selection:text-sky-900">
        
        {/* HERO SECTION */}
        <section className="relative px-5 py-12 lg:py-24 overflow-hidden border-b border-slate-200/60 bg-white/50 backdrop-blur-md">
          {/* Background effects */}
          <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-100/60 blur-[120px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-50/50 blur-[80px]" />

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            
            {/* TEXT COLUMN */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <FadeIn delay={0.1}>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600">
                  NumaWellness · Bienestar Panamá
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-slate-800 lg:justify-start">
                  <span className="text-amber-500 text-lg">★★★★★</span>
                  <span className="bg-sky-100 px-2 py-0.5 rounded text-sky-800">4.9/5</span>
                  <span className="text-slate-500">· +2,000 hogares panameños</span>
                </div>
                <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:mx-0 lg:text-7xl">
                  Bienestar pa' ti y <br className="hidden lg:block"/>tu mascota.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-600 lg:mx-0">
                  Soluciones que de verdad funcionan para el clima loco de Panamá. Desde alfombras refrescantes pa' los perros acalorados hasta masajeadores pa' tu cuello trancado.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-bold text-emerald-700 bg-emerald-50 w-fit mx-auto lg:mx-0 px-4 py-2 rounded-full border border-emerald-100">
                  <span>🚚 Pago en la puerta</span>
                  <span className="text-emerald-300">•</span>
                  <span>🇵🇦 Envío en Panamá</span>
                  <span className="text-emerald-300">•</span>
                  <span>🛡️ Garantía 30 días</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mx-auto mt-10 grid max-w-xl gap-4 lg:mx-0">
                  {[
                    {
                      quote: "Compré el NeckRelax pa' mí y la alfombra pal perro. Santo remedio pa' ambos después del tranque.",
                      name: "María C.",
                      city: "San Francisco",
                    },
                    {
                      quote: "Me resolvieron rapidísimo por WhatsApp. Pagué al recibir, cero estrés con tarjetas.",
                      name: "Carlos R.",
                      city: "Costa del Este",
                    },
                  ].map((r) => (
                    <div
                      key={r.name}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white/80 p-4 text-left shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-slate-900 text-xl font-black text-white shadow-inner">
                        {r.name.charAt(0)}
                      </div>
                      <div className="flex-1 leading-tight">
                        <p className="text-xs font-black text-amber-500 tracking-widest">★★★★★</p>
                        <p className="mt-1 text-sm font-medium text-slate-800 leading-snug">
                          “{r.quote}”
                        </p>
                        <p className="mt-2 text-xs font-bold text-sky-700">
                          {r.name} · {r.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* IMAGE/FEATURED COLUMN */}
            <div className="order-1 lg:order-2">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-[2.5rem] border border-white/50 bg-white/60 p-4 shadow-2xl backdrop-blur-md ring-1 ring-black/5">
                  <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-slate-50 sm:min-h-[400px] lg:min-h-[480px]">
                    <Image
                      src="/products/cooling-mat-hero.png"
                      alt="PeloCero Fresh Mat para mascotas"
                      fill
                      priority
                      className="object-contain p-4 lg:p-8 transition-transform duration-700 hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg animate-pulse">
                      Best seller mascotas
                    </span>
                  </div>
                  <div className="hidden p-6 lg:block">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600">
                      Top en Panamá
                    </p>
                    <h2 className="mt-2 text-3xl font-black text-slate-900">PeloCero Fresh Mat</h2>
                    <p className="mt-2 text-base text-slate-600 leading-relaxed">
                      La alfombra que enfría a tu mascota sin gastar luz. Lavable, suavecita y anti-pelos.
                    </p>
                    <div className="mt-6">
                      <AddVariantButton productSlug="pelocero-casa-kit" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="border-b border-slate-200/50 bg-slate-100/50 px-5 py-10">
          <div className="mx-auto max-w-7xl">
            <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Pagas al recibir", "Revisas tu paquete primero, pagas en efectivo o Yappy."],
                ["Soluciones reales", "Productos pensados pal clima y estilo de vida panameño."],
                ["Tallas exactas", "Opciones S a XL. Algo pa' cada quien."],
                ["Atención pritty", "Soporte real por WhatsApp. Cero bots enredados."],
              ].map(([title, text]) => (
                <StaggerItem key={title} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                  <h3 className="font-black text-slate-900 text-lg">{title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{text}</p>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* COLLECTION GRID */}
        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 max-w-3xl text-center mx-auto">
            <FadeIn>
              <p className="font-black text-sky-600 uppercase tracking-widest text-sm">Nuestra Colección</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-slate-900">
                Elige tu ritual NumaWellness.
              </h2>
              <p className="mt-5 text-xl text-slate-600 leading-relaxed">
                Cada producto es un "life hack" pa' que vivas más tranquilo en casa.
              </p>
            </FadeIn>
          </div>
          
          <StaggerChildren className="grid gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <StaggerItem key={product.slug} className="h-full">
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <EducationSections />

        <SizeGuide />

        {/* QUALITY SECTION */}
        <section className="bg-slate-900 px-5 py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-sky-900/20 blur-[100px]" />
          
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="right" className="relative min-h-[400px] overflow-hidden rounded-[3rem] bg-slate-800 shadow-2xl border border-white/10">
              <Image
                src="/products/cooling-mat-washable.png"
                alt="Alfombra lavable para mascotas"
                fill
                className="object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </FadeIn>
            
            <div>
              <FadeIn direction="left">
                <p className="font-black text-sky-400 uppercase tracking-wider text-sm">Calidad a prueba de balas</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl leading-tight">
                  Hechos pa' aguantar la rosca diaria.
                </h2>
                <p className="mt-6 text-slate-300 text-xl leading-relaxed">
                  Tas cansado de comprar cosas que se dañan a la semana. Nosotros también. Por eso nos aseguramos de que nuestros productos aguanten palo, sean fáciles de lavar y no te compliquen la vida.
                </p>
                <ul className="mt-8 grid gap-4 text-slate-200 font-medium text-lg">
                  <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white font-black">✓</span> Costuras anti-desmadre</li>
                  <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white font-black">✓</span> Materiales que no agarran mal olor</li>
                  <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white font-black">✓</span> Fácil de limpiar, cero complicaciones</li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        <ReviewsSection />
        <FAQSection />
      </main>
    </AppShell>
  );
}
