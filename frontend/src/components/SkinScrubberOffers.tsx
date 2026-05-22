"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "zustand";

import { createEventId, normalizePanamaPhone } from "@/lib/phone";

export type SkinPack = {
  id: "p1" | "p2" | "p3";
  label: string;
  qty: number;
  price: number;
  perUnit: number;
  saving?: string;
  badge?: string;
};

export const useSkinScrubberStore = create<{
  isOpen: boolean;
  selectedPack: SkinPack["id"];
  openCheckout: (pack?: SkinPack["id"]) => void;
  closeCheckout: () => void;
  setSelectedPack: (pack: SkinPack["id"]) => void;
}>((set) => ({
  isOpen: false,
  selectedPack: "p2",
  openCheckout: (pack) =>
    set((state) => ({ isOpen: true, selectedPack: pack ?? state.selectedPack })),
  closeCheckout: () => set({ isOpen: false }),
  setSelectedPack: (pack) => set({ selectedPack: pack }),
}));

export const SKIN_PACKS: SkinPack[] = [
  {
    id: "p1",
    label: "1 unidad",
    qty: 1,
    price: 39,
    perUnit: 39,
  },
  {
    id: "p2",
    label: "2 unidades",
    qty: 2,
    price: 59,
    perUnit: 29.5,
    saving: "Ahorras $19",
    badge: "⭐ Más elegido",
  },
  {
    id: "p3",
    label: "3 unidades",
    qty: 3,
    price: 79,
    perUnit: 26.3,
    saving: "Ahorras $38",
  },
];

const checkoutSchema = z.object({
  fullName: z.string().min(4, "Escribe nombre y apellido"),
  phone: z.string().refine((v) => normalizePanamaPhone(v) !== null, {
    message: "Usa un número válido de Panamá (+507 o 8 dígitos)",
  }),
  address: z.string().min(8, "Escribe tu dirección"),
  city: z.string().min(2, "Escribe tu ciudad"),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const fieldClass =
  "mt-1 w-full rounded-2xl border border-slate-300 bg-white p-3.5 text-slate-900 placeholder:text-slate-400";

export function SkinScrubberPackSelector() {
  const selected = useSkinScrubberStore((state) => state.selectedPack);
  const setSelected = useSkinScrubberStore((state) => state.setSelectedPack);

  return (
    <div>
      <p className="mb-3 text-xs font-black uppercase tracking-wider text-slate-500">
        Elige tu pack
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {SKIN_PACKS.map((pack) => {
          const active = selected === pack.id;
          return (
            <button
              type="button"
              key={pack.id}
              onClick={() => setSelected(pack.id)}
              className={`group relative flex flex-col items-start gap-1 rounded-2xl border p-4 text-left transition active:scale-[0.99] ${
                active
                  ? "border-2 border-slate-900 bg-stone-100 shadow-sm ring-2 ring-stone-200"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {pack.badge ? (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm whitespace-nowrap">
                  {pack.badge}
                </span>
              ) : null}

              <p className="text-lg font-black text-slate-900">{pack.label}</p>
              <p className="text-xs text-slate-500 leading-tight">
                ${pack.perUnit.toFixed(0)} por unidad
              </p>

              <div className="mt-2 flex w-full items-end justify-between gap-1">
                <p className="text-2xl font-black tracking-tight text-slate-800">
                  ${pack.price}
                </p>
                {pack.saving ? (
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">
                    {pack.saving}
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">
        ✓ Pago contra entrega · ✓ Envío gratis Panamá · ✓ Garantía 30 días
      </p>
    </div>
  );
}

export function SkinScrubberBuyButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const openCheckout = useSkinScrubberStore((state) => state.openCheckout);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openCheckout();
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export function SkinScrubberCheckout() {
  const router = useRouter();
  const isOpen = useSkinScrubberStore((state) => state.isOpen);
  const closeCheckout = useSkinScrubberStore((state) => state.closeCheckout);
  const selectedId = useSkinScrubberStore((state) => state.selectedPack);
  const selected = SKIN_PACKS.find((p) => p.id === selectedId) || SKIN_PACKS[1];
  const [submitting, setSubmitting] = useState(false);
  const [fastShipping, setFastShipping] = useState(false);
  const total = selected.price + (fastShipping ? 2 : 0);

  const form = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { fullName: "", phone: "", address: "", city: "" },
  });

  async function submit(values: CheckoutForm) {
    setSubmitting(true);
    const eventId = createEventId("Lead");
    const normalizedPhone = normalizePanamaPhone(values.phone);

    await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? ""}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_id: eventId,
        customer_name: values.fullName,
        phone: normalizedPhone,
        address: values.address,
        city: values.city,
        currency: "USD",
        total,
        items: [
          {
            product_slug: "skinscrubber-pro",
            product_name: "Skin Scrubber Pro — Limpiador Facial Ultrasónico",
            offer_label: selected.label,
            quantity: selected.qty,
            price: selected.price,
          },
          ...(fastShipping
            ? [{ product_slug: "fast-shipping", product_name: "Envío rápido + seguro", offer_label: "Prioritario", quantity: 1, price: 2 }]
            : []),
        ],
        session_id:
          typeof window !== "undefined" ? sessionStorage.getItem("nmp_sid") : null,
      }),
    }).catch(() => null);

    router.push("/landing/skinscrubber-pro/thank-you");
  }

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm"
        onClick={closeCheckout}
      />
      <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center pointer-events-none p-0 sm:p-4">
        <form
          onSubmit={form.handleSubmit(submit)}
          className="grid gap-5 rounded-t-3xl sm:rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl w-full max-w-lg max-h-[90dvh] overflow-y-auto pointer-events-auto"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">Tu Pedido</h2>
            <button
              type="button"
              onClick={closeCheckout}
              className="rounded-full bg-slate-100 px-3 py-1.5 font-bold text-slate-600 hover:bg-slate-200"
            >
              Cerrar
            </button>
          </div>

          <SkinScrubberPackSelector />

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-600">Nombre y apellido</label>
              <input
                {...form.register("fullName")}
                className={fieldClass}
                placeholder="Ej: María Rodríguez"
                autoComplete="name"
              />
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.fullName?.message}
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600">Teléfono</label>
              <input
                {...form.register("phone")}
                inputMode="tel"
                autoComplete="tel"
                className={fieldClass}
                placeholder="6XXX-XXXX"
              />
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.phone?.message}
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600">Ciudad</label>
              <input
                {...form.register("city")}
                autoComplete="address-level2"
                className={fieldClass}
                placeholder="Ej: Ciudad de Panamá"
              />
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.city?.message}
              </p>
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-600">Dirección de entrega</label>
              <input
                {...form.register("address")}
                autoComplete="street-address"
                className={fieldClass}
                placeholder="Calle, edificio, apto, referencia..."
              />
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.address?.message}
              </p>
            </div>
          </div>

          {/* Fast shipping checkbox */}
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200 bg-stone-100 p-4 transition hover:bg-stone-200">
            <input
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 accent-slate-900 cursor-pointer"
              checked={fastShipping}
              onChange={(e) => setFastShipping(e.target.checked)}
            />
            <div>
              <p className="font-black text-slate-900">
                🚀 Envío prioritario + seguro — <span className="text-slate-900">+$2</span>
              </p>
              <p className="mt-0.5 text-xs font-bold text-slate-500">
                Prioridad de despacho, empaque reforzado y seguro de entrega incluido.
              </p>
            </div>
          </label>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span className="font-bold">Producto ({selected.label})</span>
              <span>${selected.price}</span>
            </div>
            {fastShipping && (
              <div className="flex items-center justify-between text-sm text-slate-600 mt-1">
                <span className="font-bold">Envío prioritario + seguro</span>
                <span>$2</span>
              </div>
            )}
            <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total a pagar al recibir
              </p>
              <p className="text-2xl font-black text-slate-900">${total}</p>
            </div>
          </div>

          <button
            disabled={submitting}
            className="w-full rounded-full bg-slate-900 px-6 py-4 font-black text-white shadow-md transition active:scale-[0.99] hover:bg-slate-800 disabled:opacity-50"
          >
            {submitting
              ? "Procesando..."
              : `Confirmar pedido — Pago al recibir $${total}`}
          </button>
          <p className="text-center text-[11px] font-bold text-slate-500">
            ✓ No te cobramos ahora · Confirmamos por WhatsApp antes de despachar
          </p>
        </form>
      </div>
    </>
  );
}
