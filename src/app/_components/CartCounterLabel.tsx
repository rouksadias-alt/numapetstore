"use client";

import { useCart } from "./CartProvider";

export function CartCounterLabel() {
  const { cartCount } = useCart();
  return <>Carrito ({cartCount})</>;
}
