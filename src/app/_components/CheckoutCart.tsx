"use client";

import { useCart } from "./CartProvider";

export function CheckoutCart() {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  return (
    <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
      {cartItems.length === 0 ? (
        <p className="rounded-2xl bg-slate-100 p-5 text-slate-600">
          Tu carrito esta vacio. Agrega productos para simular una orden.
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border-b border-black/10 pb-4"
            >
              <div>
                <h3 className="font-black">{item.name}</h3>
                <p className="text-sm text-slate-500">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="grid size-8 place-items-center rounded-full bg-slate-100 font-black"
                >
                  -
                </button>
                <span className="w-10 text-right font-black">
                  ${item.subtotal}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between text-xl font-black">
        <span>Total</span>
        <span>${cartTotal}</span>
      </div>
      <a
        href={`https://wa.me/50760000000?text=${encodeURIComponent(
          `Hola, quiero hacer un pedido en Panama Tropical Store. Total: $${cartTotal}`,
        )}`}
        className="mt-5 block rounded-full bg-emerald-700 px-6 py-3 text-center font-black text-white transition hover:bg-emerald-800"
      >
        Enviar pedido por WhatsApp
      </a>
    </div>
  );
}
