"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getCartLines, useCartStore } from "@/stores/cart";

export function ThankYouContent() {
  const { items } = useCartStore();
  const lines = useMemo(() => {
    try {
      return getCartLines(items);
    } catch {
      return [];
    }
  }, [items]);

  const total = lines.reduce((sum, line) => sum + line.total, 0);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        "Hola! Tengo una pregunta sobre mi pedido en Numapet.",
      )}`
    : null;

  return (
    <main className="flex flex-1 items-center justify-center px-5 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-sky-700">
          Pedido recibido
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Gracias por tu pedido.
        </h1>
        <p className="mt-5 text-lg text-slate-600">
          Lo confirmamos por teléfono o WhatsApp antes de enviarlo contra entrega.
        </p>

        {lines.length > 0 ? (
          <div className="mt-8 rounded-2xl bg-sky-50 p-6 text-left">
            <h2 className="mb-4 text-lg font-black text-slate-900">Resumen de tu pedido</h2>
            <div className="space-y-3">
              {lines.map((line) => (
                <div key={line.index} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">{line.product.name}</p>
                    <p className="text-sm text-slate-500">
                      {line.variant.label} · {line.variant.size}
                    </p>
                  </div>
                  <p className="font-black text-sky-700">${line.total}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-sky-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-black text-slate-900">Total</span>
                <span className="text-2xl font-black text-sky-700">${total}</span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-black text-white transition hover:bg-[#1ebe57]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm5.396-7.43c-.299-.498-.66-.51-.949-.524-.247-.012-.53-.012-.812-.012-.282 0-.741.106-1.13.529-.387.422-1.482 1.448-1.482 3.531 0 2.083 1.519 4.094 1.731 4.376.212.282 2.951 4.713 7.244 6.422 3.57 1.422 4.296 1.139 5.07 1.069.776-.069 2.498-1.021 2.85-2.007.353-.987.353-1.832.247-2.008-.105-.176-.388-.282-.812-.494-.423-.211-2.498-1.232-2.886-1.374-.388-.141-.671-.211-.953.212-.283.422-1.094 1.374-1.342 1.656-.246.282-.495.317-.918.106-.423-.211-1.787-.659-3.405-2.102-1.258-1.122-2.108-2.508-2.355-2.93-.247-.422-.026-.65.186-.86.19-.19.423-.494.635-.741.21-.247.282-.423.422-.706.142-.282.07-.529-.035-.74-.106-.211-.929-2.243-1.272-3.069z" />
              </svg>
              Contactar por WhatsApp
            </a>
          ) : null}
          <Link
            href="/collection"
            className="inline-flex rounded-full bg-sky-600 px-7 py-4 font-black text-white transition hover:bg-sky-700"
          >
            Ver más productos
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 text-center text-xs font-bold text-slate-500 sm:grid-cols-4">
          {[
            ["💵", "Pago al recibir"],
            ["🚚", "Envío en Panamá"],
            ["↩️", "Garantía 30 días"],
            ["💬", "Soporte WhatsApp"],
          ].map(([icon, label]) => (
            <div key={label}>
              <div className="text-lg">{icon}</div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
