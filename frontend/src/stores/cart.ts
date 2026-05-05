"use client";

import { create } from "zustand";

import { offers, products, type Offer, type ProductSlug } from "@/config/products";

export type CartItem = {
  productSlug: ProductSlug;
  offerId: Offer["id"];
};

type CheckoutState = "closed" | "checkout" | "upsell" | "thank-you";

type CartStore = {
  items: CartItem[];
  isCartOpen: boolean;
  checkoutState: CheckoutState;
  addOffer: (productSlug: ProductSlug, offerId: Offer["id"]) => void;
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
  addOffer: (productSlug, offerId) =>
    set((state) => ({
      items: [...state.items, { productSlug, offerId }],
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
    const offer = offers.find((entry) => entry.id === item.offerId);

    if (!product || !offer) {
      throw new Error("Invalid cart item");
    }

    return {
      index,
      product,
      offer,
      total: offer.price,
    };
  });
}
