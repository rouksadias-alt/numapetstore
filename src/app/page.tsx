import { getAllProducts } from "@/lib/db";

import { AddToCartButton } from "./_components/AddToCartButton";
import { CartCounterLabel } from "./_components/CartCounterLabel";
import { CartProvider } from "./_components/CartProvider";
import { CheckoutCart } from "./_components/CheckoutCart";

// Skip build-time prerender so `next build` doesn't need a live DB.
// `getAllProducts` is wrapped in `unstable_cache(..., { revalidate: 60, tags: ["products"] })`,
// so the DB is hit at most once per minute across requests.
export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <CartProvider products={products}>
      <main className="min-h-screen bg-[#f7f2e8] text-slate-950">
        <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f2e8]/90 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <a href="#" className="text-xl font-black tracking-tight">
              Panama Tropical Store
            </a>
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
              <a href="#productos">Productos</a>
              <a href="#por-que">Por que Panama</a>
              <a href="#checkout">Checkout</a>
            </div>
            <a
              href="#checkout"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white"
            >
              <CartCounterLabel />
            </a>
          </nav>
        </header>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-900 px-4 py-2 text-sm font-bold text-emerald-50">
              Tienda custom Next.js para el mercado de Panama
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Productos utiles para calor, humedad y vida urbana tropical.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Una tienda sin Shopify, creada con React y Next.js, enfocada en
              necesidades reales de Panama: lluvia, humedad, movilidad, hogar y
              compras rapidas desde el celular.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#productos"
                className="rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800"
              >
                Ver productos
              </a>
              <a
                href="https://wa.me/50760000000"
                className="rounded-full border border-slate-950 px-6 py-3 text-center font-bold transition hover:bg-white"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-5">
            <div className="rounded-[1.5rem] bg-emerald-950 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">
                Producto ganador
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Mini deshumidificador para apartamentos
              </h2>
              <p className="mt-4 text-emerald-100">
                El clima humedo crea demanda constante en closets, dormitorios,
                zapatos y espacios pequenos.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">24h</p>
                  <p className="text-xs text-emerald-100">preventa</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">$39</p>
                  <p className="text-xs text-emerald-100">precio</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">507</p>
                  <p className="text-xs text-emerald-100">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="por-que" className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:grid-cols-4">
            {[
              ["Mercado", "E-commerce en crecimiento y fuerte uso mobile."],
              ["Clima", "Humedad, lluvia y calor generan compras repetibles."],
              ["Logistica", "Productos pequenos, faciles de almacenar y enviar."],
              ["Canal", "WhatsApp y pagos digitales para vender rapido."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="productos" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-bold text-emerald-700">Catalogo inicial</p>
              <h2 className="text-4xl font-black tracking-tight">
                Productos listos para test de mercado
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Selection basee sur categories fortes: hogar, electronica ligera,
              cuidado personal, movilidad y produits adaptes au climat tropical.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white"
              >
                <div className={`h-44 bg-gradient-to-br ${product.color} p-5`}>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-700">
                    {product.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-emerald-700">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{product.name}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-black">
                        ${product.price}
                      </span>
                      {product.oldPrice ? (
                        <span className="ml-2 text-sm text-slate-400 line-through">
                          ${product.oldPrice}
                        </span>
                      ) : null}
                    </div>
                    <AddToCartButton productId={product.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="checkout" className="bg-slate-950 px-5 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold text-emerald-300">Checkout MVP</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">
                Carrito simple para validar ventas antes de integrar pagos.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                La version inicial puede recibir pedidos por WhatsApp, Yappy,
                transferencia o pago contra entrega. Despues se puede conectar
                Stripe, PayPal o un procesador local.
              </p>
            </div>

            <CheckoutCart />
          </div>
        </section>
      </main>
    </CartProvider>
  );
}
