"use client";

import { useCart } from "./CartProvider";

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(productId)}
      className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-700"
    >
      Agregar
    </button>
  );
}
