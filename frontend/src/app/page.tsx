import Image from "next/image";

import {
  BundleOffers,
  EducationSections,
  FAQSection,
  ReviewsSection,
} from "@/components/CROSections";
import { AddOfferButton, OfferSelector } from "@/components/CartDrawer";
import { AppShell } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/config/products";

export default function Home() {
  return (
    <AppShell>
      <main className="bg-[#fff7fb] text-[#2a1620]">
        <section className="relative overflow-hidden border-b border-[#ead3dd] bg-[radial-gradient(circle_at_20%_20%,#fde1ee,transparent_35%),linear-gradient(180deg,#fff7fb,#fdeef5)] px-5 py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b4155a]">
                Numapet Ritual
              </p>
              <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:mx-0">
                Cuando tu mascota vive mejor, tu casa tambien respira.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6c4a58] lg:mx-0">
                Kits premium para hogares con mascotas en Panama: menos pelos,
                agua mas atractiva y juego inteligente sin complicarte.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-bold text-[#4f7a58] lg:justify-start">
                <span>✓ Pago contra entrega</span>
                <span>✓ Confirmacion +507</span>
                <span>✓ Ofertas por bundle</span>
              </div>
              <div className="mx-auto mt-8 max-w-xl lg:mx-0">
                <OfferSelector productSlug="pelocero-casa-kit" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ead3dd] bg-white p-4 shadow-sm">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src="/products/cooling-mat-hero.png"
                  alt="PeloCero Fresh Mat para mascotas"
                  fill
                  priority
                  className="object-contain p-5"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b4155a]">
                  Producto destacado
                </p>
                <h2 className="mt-2 text-2xl font-black">PeloCero Fresh Mat</h2>
                <p className="mt-2 text-sm text-[#6c4a58]">
                  Descanso fresco, suave y lavable para perros y gatos.
                </p>
                <div className="mt-3 text-sm font-black text-amber-500">★★★★★</div>
                <div className="mt-5">
                  <AddOfferButton productSlug="pelocero-casa-kit" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#ead3dd] bg-[#fdebf3] px-5 py-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
            {[
              ["Sin pago por adelantado", "Confirmas primero por telefono."],
              ["Rutina completa", "Limpieza, agua y juego en un sistema."],
              ["Bundle inteligente", "2 y 3 piezas con mejor valor."],
              ["Soporte local", "Comunicacion clara por WhatsApp."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white/70 p-4">
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm text-[#7b5867]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 max-w-3xl">
            <p className="font-black text-teal-700">Coleccion principal</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-center md:text-left">
              Elige tu ritual Numapet.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <EducationSections />

        <BundleOffers />

        <section className="bg-white px-5 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#fdebf3]">
              <Image
                src="/products/cooling-mat-washable.png"
                alt="Alfombra lavable para mascotas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-black text-[#b4155a] uppercase tracking-wider text-sm">Calidad Comprobada</p>
              <h2 className="mt-2 text-4xl font-black">
                Diseñado para resistir la rutina de tu hogar.
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Olvídate de las camas que se rompen al primer lavado o acumulan malos olores. Nuestros productos están fabricados con materiales de alta resistencia, fáciles de limpiar y pensados para durar años, no meses.
              </p>
              <ul className="mt-6 grid gap-3 text-[#6c4a58] font-medium">
                <li className="flex items-center gap-2"><span className="text-[#b4155a]">✓</span> Costuras reforzadas anti-rasguños</li>
                <li className="flex items-center gap-2"><span className="text-[#b4155a]">✓</span> Materiales que repelen líquidos y olores</li>
                <li className="flex items-center gap-2"><span className="text-[#b4155a]">✓</span> 100% lavable a máquina en casa</li>
              </ul>
            </div>
          </div>
        </section>

        <ReviewsSection />
        <FAQSection />
      </main>
    </AppShell>
  );
}
