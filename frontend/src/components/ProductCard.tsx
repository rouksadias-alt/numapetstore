import Link from "next/link";
import Image from "next/image";

import { AddVariantButton } from "@/components/CartDrawer";
import type { Product } from "@/config/products";

export function ProductCard({ product }: { product: Product }) {
  const isStandalone = product.slug === "neckrelax-pro" || product.slug === "skinscrubber-pro";
  const bgClass = isStandalone ? "bg-slate-100" : "bg-[#fdebf3]";
  const textClass = isStandalone ? "text-slate-500" : "text-[#b78399]";
  const btnClass = isStandalone ? "bg-slate-900 hover:bg-slate-800" : "bg-[#b4155a] hover:bg-[#95104a]";
  const priceColor = isStandalone ? "text-slate-900" : "text-[#b4155a]";

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#ead3dd] bg-white shadow-sm flex flex-col">
      <div className={`relative h-52 ${bgClass} p-6 ${textClass}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="mb-3 text-sm font-black text-[#d49a23]">
          ★★★★★ <span className="text-[#7b5867]">4.9 estrellas · Pago contra entrega</span>
        </p>
        <p className={`text-xs font-black uppercase tracking-[0.2em] ${priceColor}`}>
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-black">{product.cardHeading}</h3>
        <p className="mt-3 min-h-16 text-[#6c4a58]">{product.cardSubheading}</p>
        <div className="mt-auto pt-5">
          <div className="mb-5 rounded-2xl bg-[#fff7fb] p-4 text-sm font-bold text-[#7b2149]">
            🔥 Oferta de lanzamiento · Pago contra entrega · Envío 24-48h en Panamá
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {isStandalone ? (
              <Link
                href={`/landing/${product.slug}`}
                className={`w-full rounded-full ${btnClass} px-6 py-3.5 text-center font-black text-white shadow-md transition active:scale-[0.99]`}
              >
                Ver detalles
              </Link>
            ) : (
              <>
                <AddVariantButton productSlug={product.slug} />
                <Link
                  href={`/products/${product.slug}`}
                  className="rounded-full border border-slate-300 px-6 py-3 text-center font-black"
                >
                  Ver pagina
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
