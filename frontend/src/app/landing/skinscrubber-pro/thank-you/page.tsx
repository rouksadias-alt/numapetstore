import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Pedido confirmado · Skin Scrubber Pro",
  description: "Gracias por tu pedido del Skin Scrubber Pro en NumaWellness. Te contactamos por WhatsApp para confirmar.",
};

const REVIEWS = [
  {
    name: "Valeria R.",
    location: "Ciudad de Panamá",
    text: "Primera vez que uso algo así y quedé con la cara como bebé. Los puntos negros de la nariz: literalmente desaparecieron. Lo voy a regalar a mi mamá también.",
    stars: "★★★★★",
  },
  {
    name: "Daniela M.",
    location: "Miraflores",
    text: "Tres semanas usando 2 veces por semana y mis poros visiblemente más pequeños. Mi base entra mucho más suave. Esto es real, no es hype.",
    stars: "★★★★★",
  },
  {
    name: "Karla B.",
    location: "San Miguelito",
    text: "Piel grasa mixta de siempre y NADA me la controlaba. Con este aparatico en 5 minutos la cara queda fresca. Wow. 100% lo recomiendo.",
    stars: "★★★★★",
  },
  {
    name: "Andrea P.",
    location: "Bella Vista",
    text: "Me lo recomendó mi esteticista y tenía razón. Ahora lo hago en casa y ahorro un dineral. La primera sesión me quedé con la boca abierta de ver lo que salió.",
    stars: "★★★★★",
  },
  {
    name: "Luciana V.",
    location: "El Cangrejo",
    text: "Tenía miedo de que me irritara la piel (soy súper sensible) pero nada. Suavísimo. Ya van 4 semanas y mi piel luce diferente, la gente me pregunta qué estoy haciendo.",
    stars: "★★★★★",
  },
  {
    name: "Mariela C.",
    location: "Los Andes, Panamá",
    text: "Mi hija me lo mostró en TikTok y pensé que era otro gadget inútil. Me lo compré igual y wow — uso menos maquillaje porque la textura mejoró un montón.",
    stars: "★★★★★",
  },
];

const TIPS = [
  { icon: "💧", tip: "Siempre úsalo sobre piel húmeda — es el secreto para que funcione bien." },
  { icon: "📅", tip: "Empieza 1 vez por semana. Luego sube a 2–3 cuando tu piel se adapte." },
  { icon: "✨", tip: "Después de usarlo, aplica tu suero en modo ion+ para mejor absorción." },
  { icon: "🧼", tip: "Limpia la espátula con agua tibia y jabón suave después de cada uso." },
];

export default function SkinScrubberThankYouPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50769300643";
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hola NumaWellness! Acabo de pedir mi Skin Scrubber Pro y quiero confirmar mi pedido. 🙌"
  )}`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 selection:bg-rose-100">

      <header className="border-b border-slate-200 bg-white px-5 py-4">
        <div className="mx-auto flex max-w-4xl justify-center sm:justify-start">
          <Logo brand="numawellness" />
        </div>
      </header>

      <main className="flex-1 px-5 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* CONFIRMATION */}
          <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm lg:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl mb-6">
              🎉
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-rose-500">
              Pedido Recibido
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              ¡Tu Skin Scrubber Pro<br />está en camino!
            </h1>
            <p className="mt-5 text-xl text-slate-600 max-w-2xl mx-auto">
              Te vamos a escribir por <strong>WhatsApp</strong> para confirmar tu dirección antes de despachar. Recuerda que <strong>pagas en efectivo o Yappy al recibirlo.</strong>
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm5.396-7.43c-.299-.498-.66-.51-.949-.524-.247-.012-.53-.012-.812-.012-.282 0-.741.106-1.13.529-.387.422-1.482 1.448-1.482 3.531 0 2.083 1.519 4.094 1.731 4.376.212.282 2.951 4.713 7.244 6.422 3.57 1.422 4.296 1.139 5.07 1.069.776-.069 2.498-1.021 2.85-2.007.353-.987.353-1.832.247-2.008-.105-.176-.388-.282-.812-.494-.423-.211-2.498-1.232-2.886-1.374-.388-.141-.671-.211-.953.212-.283.422-1.094 1.374-1.342 1.656-.246.282-.495.317-.918.106-.423-.211-1.787-.659-3.405-2.102-1.258-1.122-2.108-2.508-2.355-2.93-.247-.422-.026-.65.186-.86.19-.19.423-.494.635-.741.21-.247.282-.423.422-.706.142-.282.07-.529-.035-.74-.106-.211-.929-2.243-1.272-3.069z" />
              </svg>
              Confirmar mi pedido por WhatsApp
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-slate-500">
              <span>🚚 Envío en 24–48h</span>
              <span>💵 Pago al recibir</span>
              <span>↩️ Garantía 30 días</span>
            </div>
          </section>

          {/* PRODUCT IN ACTION */}
          <section className="grid gap-4 sm:grid-cols-3">
            {[
              { src: "/products/skinscrubber-action.jpg", alt: "Skin Scrubber Pro en acción" },
              { src: "/products/skinscrubber-result.jpg", alt: "Resultado piel limpia" },
              { src: "/products/skinscrubber-colors.jpg", alt: "Colores disponibles" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            ))}
          </section>

          {/* TIPS */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">
              Consejos para tu primera sesión 💆‍♀️
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {TIPS.map((t) => (
                <div key={t.tip} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <p className="font-bold text-slate-700 leading-relaxed">{t.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* REVIEWS */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">
              Lo que te espera 👇
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((r) => (
                <div key={r.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="absolute top-4 right-5 text-rose-200 opacity-40 text-5xl font-serif leading-none">"</div>
                  <p className="text-lg font-black text-amber-500 mb-3">{r.stars}</p>
                  <p className="text-slate-700 italic leading-relaxed mb-4">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white font-black">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-sm">{r.name}</p>
                      <p className="text-[10px] text-slate-500">{r.location}</p>
                      <p className="text-xs font-bold text-green-600">✓ Compra verificada</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-slate-700">
            Numa<span className="text-sky-600">Wellness</span>
          </span>{" "}
          · Todos los derechos reservados
        </p>
        <Link
          href="/landing/skinscrubber-pro"
          className="mt-3 inline-block font-bold text-rose-500 hover:underline"
        >
          ← Volver al Skin Scrubber Pro
        </Link>
      </footer>
    </div>
  );
}
