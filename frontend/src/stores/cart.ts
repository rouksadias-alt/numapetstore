"use client";

import { create } from "zustand";

import { variants, products, type Variant, type ProductSlug } from "@/config/products";

export type CartItem = {
  productSlug: ProductSlug;
  variantId: Variant["id"];
};

type CheckoutState = "closed" | "checkout" | "upsell" | "thank-you";

type CartStore = {
  items: CartItem[];
  isCartOpen: boolean;
  checkoutState: CheckoutState;
  addVariant: (productSlug: ProductSlug, variantId: Variant["id"]) => void;
  removeItem: (index: number) => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  openUpsell: () => void;
  closeCheckout: () => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isCartOpen: false,
  checkoutState: "closed",
  addVariant: (productSlug, variantId) =>
    set((state) => ({
      items: [...state.items, { productSlug, variantId }],
      isCartOpen: true,
    })),
  removeItem: (index) =>
    set((state) => ({
      items: state.items.filter((_, itemIndex) => itemIndex !== index),
    })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  openCheckout: () => set({ checkoutState: "checkout" }),
  openUpsell: () => set({ checkoutState: "upsell" }),
  closeCheckout: () => set({ checkoutState: "closed" }),
  clearCart: () => set({ items: [], checkoutState: "thank-you" }),
}));

export function getCartLines(items: CartItem[]) {
  return items.map((item, index) => {
    const product = products.find((entry) => entry.slug === item.productSlug);
    const variant = variants.find((entry) => entry.id === item.variantId);

    if (!product || !variant) {
      throw new Error("Invalid cart item");
    }

    return {
      index,
      product,
      variant,
      total: variant.price,
    };
  });
}
