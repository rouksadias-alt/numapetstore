import Link from "next/link";
import Image from "next/image";

import { AddVariantButton } from "@/components/CartDrawer";
import type { Product } from "@/config/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--color-slate-200, #e2e8f0)] bg-white shadow-sm">
      <div className="relative h-52 bg-[var(--color-sky-50, #f0f9ff)] p-6 text-[var(--color-slate-400, #94a3b8)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6">
        <p className="mb-3 text-sm font-black text-[var(--color-amber-500, #f59e0b)]">
          ★★★★★ <span className="text-[var(--color-slate-500, #64748b)]">4.9 estrellas · Pago contra entrega</span>
        </p>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-sky-600, #0284c7)]">
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-black">{product.cardHeading}</h3>
        <p className="mt-3 min-h-16 text-[var(--color-slate-600, #475569)]">{product.cardSubheading}</p>
        <div className="mt-5 rounded-2xl bg-[var(--color-slate-50, #f8fafc)] p-4 text-sm font-bold text-[var(--color-sky-800, #0369a1)]">
          🔥 Oferta de lanzamiento · Pago contra entrega · Envío 24-48h en Panamá
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <AddVariantButton productSlug={product.slug} />
          <Link
            href={`/products/${product.slug}`}
            className="rounded-full border border-slate-300 px-6 py-3 text-center font-black"
          >
            Ver pagina
          </Link>
        </div>
      </div>
    </article>
  );
}
