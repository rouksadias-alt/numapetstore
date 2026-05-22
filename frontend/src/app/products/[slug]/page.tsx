import { notFound, redirect } from "next/navigation";
import Image from "next/image";

import { VariantSelector } from "@/components/CartDrawer";
import {
  SizeGuide,
  EducationSections,
  FAQSection,
  ReviewsSection,
  WarrantySection,
} from "@/components/CROSections";
import { AppShell } from "@/components/Layout";
import { getProduct, products } from "@/config/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// Slugs that have their own dedicated standalone landing page
const STANDALONE_PRODUCTS = new Set(["neckrelax-pro", "skinscrubber-pro"]);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Standalone landing pages live in /app/landing/<slug>/page.tsx
  if (STANDALONE_PRODUCTS.has(slug)) {
    redirect(`/landing/${slug}`);
  }

  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <AppShell>
      <main className="bg-[#f7f2e8] text-slate-950">
        
        {/* 1. Hero: Image Left, Text Right */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#ead3dd] bg-white shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-6"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex text-amber-500">★★★★★</span>
              <span className="font-bold text-slate-600 text-sm">4.9/5 (Mas de 2,000 panameñas felices)</span>
            </div>
            <p className="font-black text-[#b4155a] uppercase tracking-wider text-sm">Compra segura contra entrega</p>
            <h1 className="mt-2 text-5xl font-black tracking-tight text-[#2a1620]">{product.heroHeadline}</h1>
            <p className="mt-5 text-xl leading-8 text-slate-700 font-medium">{product.heroSubheadline}</p>
            
            <div className="mt-8 bg-white p-6 rounded-3xl border border-[#ead3dd] shadow-sm">
              <VariantSelector productSlug={product.slug} />
            </div>
            
            <div className="mt-6 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-6 text-sm font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇵🇦</span> Stock en Panamá
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛡️</span> Garantía 30 días
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Paga al recibir con:</span>
                <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">Efectivo</span>
                <span className="px-2 py-1 bg-[#004b87] rounded text-white">Yappy</span>
                <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">ACH</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Pain: Text Left, Image Right */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="font-black text-[#b4155a] uppercase tracking-wider text-sm">El problema real en casa</p>
              <h2 className="mt-2 text-4xl font-black text-[#2a1620] leading-tight">No es solo un lujo. Es eliminar la fricción diaria.</h2>
              <p className="mt-4 text-lg text-slate-600">Sabemos lo frustrante que es querer mantener una casa impecable mientras tu mascota sufre por el clima o el aburrimiento.</p>
              <div className="mt-8 grid gap-4">
                {product.pain.map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl bg-[#fff7fb] p-5 border border-[#f2c6d8]">
                    <span className="text-[#b4155a] text-xl mt-1">✕</span>
                    <p className="font-bold text-[#2a1620] text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 min-h-[400px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-md">
              <Image
                src="/products/cooling-mat-action.png"
                alt="Mascota usando el producto"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. Mechanism: Image Left, Text Right */}
        <section className="bg-[#fff7fb] px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] bg-white shadow-md border border-[#ead3dd]">
              <Image
                src="/products/cooling-mat-washable.png"
                alt="Mecanismo del producto"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-black text-[#b4155a] uppercase tracking-wider text-sm">Cómo funciona</p>
              <h2 className="mt-2 text-4xl font-black text-[#2a1620] leading-tight">Diseñado como un sistema inteligente.</h2>
              <p className="mt-5 text-xl leading-8 text-slate-700">{product.mechanism}</p>
              <div className="mt-8 rounded-3xl bg-white border border-[#ead3dd] p-8 shadow-sm">
                <h3 className="font-black text-xl text-[#2a1620] mb-4">¿Qué incluye tu paquete?</h3>
                <ul className="grid gap-3 text-slate-700 font-medium">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-teal-600 text-xl">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Science: Text Left, Image Right */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="font-black text-teal-700 uppercase tracking-wider text-sm">Respaldo Científico</p>
              <h2 className="mt-2 text-4xl font-black text-[#2a1620] leading-tight">{product.science?.headline || "Diseño basado en datos"}</h2>
              <p className="mt-5 text-xl leading-8 text-slate-700">{product.science?.description || "Cada detalle ha sido probado para garantizar la máxima eficacia y confort."}</p>
              <div className="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100">
                <p className="font-bold text-teal-900 italic">"La innovación detrás de {product.shortName} transforma por completo la experiencia en el hogar, combinando estética con funcionalidad comprobada."</p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 min-h-[400px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-md">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-xl">
                [Imagen Científica / Diagrama]
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ingredients / Materials: Image Left, Text Right */}
        <section className="bg-[#f7f2e8] px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] bg-white shadow-md border border-[#ead3dd]">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-xl">
                [Imagen de Materiales / Texturas]
              </div>
            </div>
            <div>
              <p className="font-black text-[#b4155a] uppercase tracking-wider text-sm">Materiales Premium</p>
              <h2 className="mt-2 text-4xl font-black text-[#2a1620] leading-tight">{product.ingredients?.headline || "Calidad que se siente"}</h2>
              <p className="mt-5 text-lg text-slate-600 mb-6">Seleccionamos cuidadosamente cada componente para asegurar durabilidad, seguridad y una estética que complemente tu hogar.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(product.ingredients?.items || ["Material premium", "Acabado resistente", "Fácil de limpiar", "Diseño seguro"]).map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-[#ead3dd] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#fff7fb] flex items-center justify-center text-[#b4155a] font-black">
                      {i + 1}
                    </div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Authority / Proof: Text Left, Image Right */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="font-black text-[#d49a23] uppercase tracking-wider text-sm">Autoridad y Confianza</p>
              <h2 className="mt-2 text-4xl font-black text-[#2a1620] leading-tight">{product.authority?.headline || "La elección de los expertos"}</h2>
              <p className="mt-5 text-xl leading-8 text-slate-700">{product.authority?.description || "Recomendado por especialistas para mejorar la calidad de vida en el hogar."}</p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                      <Image src={`/products/cooling-mat-hero.png`} alt="User" width={48} height={48} className="object-cover opacity-50" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-600">
                  Únete a más de <span className="text-[#b4155a]">2,000 familias</span> en Panamá.
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 min-h-[400px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-md">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-xl">
                [Imagen de Autoridad / Sello]
              </div>
            </div>
          </div>
        </section>

        <WarrantySection />

        <EducationSections />

        <SizeGuide />

        <section className="bg-slate-950 px-5 py-20 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-black text-teal-300 uppercase tracking-wider text-sm">Oferta exclusiva de lanzamiento</p>
            <h2 className="mt-3 text-5xl font-black leading-tight">Elige tu talla y reserva hoy. <br/><span className="text-teal-400">Paga al recibir.</span></h2>
            <p className="mt-6 text-xl text-slate-300">Sin riesgos. Sin tarjetas de crédito. Solo confirmas por WhatsApp y pagas en la puerta de tu casa.</p>
            <div className="mt-10 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
              <VariantSelector productSlug={product.slug} />
            </div>
          </div>
        </section>

        <ReviewsSection />
        <FAQSection />
      </main>
    </AppShell>
  );
}