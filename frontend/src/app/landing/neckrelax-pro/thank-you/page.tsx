import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Pedido confirmado · NeckRelax Pro",
  description: "Gracias por tu pedido de NeckRelax Pro en NumaWellness. Te contactamos pronto por WhatsApp.",
};

const REVIEWS = [
  {
    name: "Carmen V.",
    text: "Pensé que era otro aparato más, pero no. Llego del tranque, me lo pongo 15 minutos en el sofá y quedo nueva. Santo remedio para el estrés del cuello.",
    rating: "★★★★★",
  },
  {
    name: "Ana M.",
    text: "El calorcito que da es una maravilla cuando estás trabajando con el aire a todo meter. Ya mis compañeras de oficina me pidieron que les encargue uno.",
    rating: "★★★★★",
  }
];

export default function NeckRelaxThankYouPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50769300643";
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hola NumaWellness, acabo de pedir mi NeckRelax Pro y quiero confirmar mi pedido."
  )}`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      <header className="border-b border-slate-200 bg-white px-5 py-4">
        <div className="mx-auto flex max-w-4xl justify-center sm:justify-start">
          <Logo brand="numawellness" />
        </div>
      </header>

      <main className="flex-1 px-5 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          
          {/* CONFIRMATION SECTION */}
          <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm lg:p-12 mb-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl mb-6">
              🎉
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-sky-600">
              Pedido Recibido
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              ¡Felicidades por dar el primer paso!
            </h1>
            <p className="mt-5 text-xl text-slate-600 max-w-2xl mx-auto">
              Tu pedido de <strong>NeckRelax Pro</strong> está casi listo. Te vamos a escribir por WhatsApp para confirmar la dirección antes de enviarlo. <strong>Recuerda que pagas al recibir en tus manos.</strong>
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm5.396-7.43c-.299-.498-.66-.51-.949-.524-.247-.012-.53-.012-.812-.012-.282 0-.741.106-1.13.529-.387.422-1.482 1.448-1.482 3.531 0 2.083 1.519 4.094 1.731 4.376.212.282 2.951 4.713 7.244 6.422 3.57 1.422 4.296 1.139 5.07 1.069.776-.069 2.498-1.021 2.85-2.007.353-.987.353-1.832.247-2.008-.105-.176-.388-.282-.812-.494-.423-.211-2.498-1.232-2.886-1.374-.388-.141-.671-.211-.953.212-.283.422-1.094 1.374-1.342 1.656-.246.282-.495.317-.918.106-.423-.211-1.787-.659-3.405-2.102-1.258-1.122-2.108-2.508-2.355-2.93-.247-.422-.026-.65.186-.86.19-.19.423-.494.635-.741.21-.247.282-.423.422-.706.142-.282.07-.529-.035-.74-.106-.211-.929-2.243-1.272-3.069z" />
                </svg>
                Confirmar mi pedido ahora
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm font-bold text-slate-500">
              <span className="flex items-center gap-2">🚚 Envío Rápido</span>
              <span className="flex items-center gap-2">💵 Pago en Efectivo o Yappy</span>
            </div>
          </section>

          {/* ACTION & REVIEWS */}
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Prepárate para esto 👇</h2>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-md border border-slate-200">
                <Image
                  src="/products/neckrelax-lifestyle.jpg"
                  alt="Usando NeckRelax Pro en casa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-center font-bold text-slate-600">Alivio profundo donde y cuando lo necesites.</p>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Lo que dicen en Panamá</h2>
              <div className="grid gap-6">
                {REVIEWS.map((rev, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-xl font-black text-amber-500 mb-3">{rev.rating}</p>
                    <p className="text-lg font-medium text-slate-700 italic mb-4">"{rev.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-900">{rev.name}</p>
                        <p className="text-xs font-bold text-green-600">✓ Compra verificada</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
        <Link href="/landing/neckrelax-pro" className="mt-3 inline-block font-bold text-sky-600 hover:underline">
          Volver a NeckRelax Pro
        </Link>
      </footer>
    </div>
  );
}
