"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { createEventId, normalizePanamaPhone } from "@/lib/phone";

export type NeckPack = {
  id: "p1" | "p2" | "p3";
  label: string;
  qty: number;
  price: number;
  perUnit: number;
  saving?: string;
  badge?: string;
};

export const NECK_PACKS: NeckPack[] = [
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
    price: 65,
    perUnit: 32.5,
    saving: "Ahorras $13",
    badge: "⭐ Más elegido",
  },
  {
    id: "p3",
    label: "3 unidades",
    qty: 3,
    price: 82,
    perUnit: 27.3,
    saving: "Ahorras $35",
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

export function NeckRelaxPackSelector({ onPick }: { onPick?: (pack: NeckPack) => void }) {
  const [selected, setSelected] = useState<NeckPack["id"]>("p2");

  return (
    <div>
      <p className="mb-3 text-xs font-black uppercase tracking-wider text-slate-500">
        Elige tu pack
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {NECK_PACKS.map((pack) => {
          const active = selected === pack.id;
          return (
            <button
              key={pack.id}
              onClick={() => {
                setSelected(pack.id);
                onPick?.(pack);
              }}
              className={`group relative flex flex-col items-start gap-1 rounded-2xl border p-4 text-left transition active:scale-[0.99] ${
                active
                  ? "border-2 border-sky-600 bg-sky-50 shadow-sm ring-2 ring-sky-100"
                  : "border-slate-200 bg-white hover:border-sky-400"
              }`}
            >
              {pack.badge ? (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm whitespace-nowrap">
                  {pack.badge}
                </span>
              ) : null}

              <p className="text-lg font-black text-slate-900">{pack.label}</p>
              <p className="text-xs text-slate-500 leading-tight">
                ${pack.perUnit.toFixed(0)} por unidad
              </p>

              <div className="mt-2 flex w-full items-end justify-between gap-1">
                <p className="text-2xl font-black tracking-tight text-sky-700">
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

export function NeckRelaxCheckout() {
  const router = useRouter();
  const [selected, setSelected] = useState<NeckPack>(NECK_PACKS[1]);
  const [submitting, setSubmitting] = useState(false);

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
        total: selected.price,
        items: [
          {
            product_slug: "neckrelax-pro",
            product_name: "NeckRelax Pro — Masajeador Cervical EMS",
            offer_label: selected.label,
            quantity: selected.qty,
            price: selected.price,
          },
        ],
        session_id:
          typeof window !== "undefined" ? sessionStorage.getItem("nmp_sid") : null,
      }),
    }).catch(() => null);

    router.push("/thank-you");
  }

  return (
    <form
      onSubmit={form.handleSubmit(submit)}
      className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <NeckRelaxPackSelector onPick={setSelected} />

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600">Nombre y apellido</label>
          <input
            {...form.register("fullName")}
            className={fieldClass}
            placeholder="Ej: María Rodríguez"
            autoComplete="name"
          />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.fullName?.message}</p>
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
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone?.message}</p>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-600">Ciudad</label>
          <input
            {...form.register("city")}
            autoComplete="address-level2"
            className={fieldClass}
            placeholder="Ej: Ciudad de Panamá"
          />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.city?.message}</p>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600">Dirección de entrega</label>
          <input
            {...form.register("address")}
            autoComplete="street-address"
            className={fieldClass}
            placeholder="Calle, edificio, apto, referencia..."
          />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.address?.message}</p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Total a pagar al recibir
          </p>
          <p className="text-2xl font-black text-slate-900">${selected.price}</p>
        </div>
        <div className="text-right text-xs font-bold text-slate-500">
          {selected.label}
          <br />
          ${selected.perUnit.toFixed(0)}/u
        </div>
      </div>

      <button
        disabled={submitting}
        className="w-full rounded-full bg-sky-600 px-6 py-4 font-black text-white shadow-md transition active:scale-[0.99] hover:bg-sky-700 disabled:opacity-50"
      >
        {submitting ? "Procesando..." : `Confirmar pedido — Pago al recibir $${selected.price}`}
      </button>
      <p className="text-center text-[11px] font-bold text-slate-500">
        ✓ No te cobramos ahora · Confirmamos por WhatsApp antes de despachar
      </p>
    </form>
  );
}
