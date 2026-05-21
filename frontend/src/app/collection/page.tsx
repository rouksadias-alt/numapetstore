import { AppShell } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/config/products";

export default function CollectionPage() {
  return (
    <AppShell>
      <main className="bg-[#f7f2e8] px-5 py-16 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="font-black text-sky-700">Colección NumaWellness</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-tight">
            Kits premium para limpiar, hidratar y entretener mejor.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Elige una oferta. La mejor conversion viene de mostrar el 2-pack como
            opcion mas elegida y el 3-pack como valor familiar.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </main>
    </AppShell>
  );
}
