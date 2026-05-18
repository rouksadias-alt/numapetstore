"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "@/lib/types";

type CartItem = Product & {
  quantity: number;
  subtotal: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({
  products,
  children,
}: {
  products: Product[];
  children: ReactNode;
}) {
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = useCallback((productId: number) => {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }));
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((current) => {
      const nextQuantity = (current[productId] ?? 0) - 1;
      if (nextQuantity <= 0) {
        const next = { ...current };
        delete next[productId];
        return next;
      }

      return { ...current, [productId]: nextQuantity };
    });
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const cartItems: CartItem[] = products
      .filter((product) => cart[product.id])
      .map((product) => ({
        ...product,
        quantity: cart[product.id],
        subtotal: product.price * cart[product.id],
      }));

    const cartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    const cartTotal = cartItems.reduce(
      (total, item) => total + item.subtotal,
      0,
    );

    return { cartItems, cartCount, cartTotal, addToCart, removeFromCart };
  }, [cart, products, addToCart, removeFromCart]);

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }
  return context;
}
