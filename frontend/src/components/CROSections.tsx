import { variants } from "@/config/products";

export function WarrantySection() {
  return (
    <section className="bg-[var(--color-slate-900, #0f172a)] px-5 py-16 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-sky-600, #0284c7)] mb-6 shadow-lg">
          <span className="text-4xl">🛡️</span>
        </div>
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-teal-300">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span> Empresa 100% Panameña
        </div>
        <h2 className="text-4xl font-black tracking-tight">Garantía de 30 Días Sin Riesgos</h2>
        <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
          Estamos tan seguros de que {`nuestros productos`} mejorarán la rutina en tu hogar, que te ofrecemos 30 días de garantía. Si no estás completamente satisfecha con la calidad o el resultado, te devolvemos tu dinero. 
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <h3 className="font-bold text-lg text-teal-300">1. Pide sin tarjeta</h3>
            <p className="mt-2 text-slate-400 text-sm">Reserva hoy y paga en Efectivo o Yappy solo cuando el producto llegue a tus manos.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <h3 className="font-bold text-lg text-teal-300">2. Envío Local Rápido</h3>
            <p className="mt-2 text-slate-400 text-sm">Stock en Ciudad de Panamá. Sin esperas de Miami ni trámites de aduanas.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <h3 className="font-bold text-lg text-teal-300">3. Atención 100% Local</h3>
            <p className="mt-2 text-slate-400 text-sm">Habla con nuestro equipo en Panamá por WhatsApp para coordinar tu entrega. Sin bots.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SizeGuide() {
  return (
    <section className="bg-[#f7f2e8] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <p className="font-black text-[var(--color-sky-600, #0284c7)] uppercase tracking-wider text-sm">Guía de Tallas</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-slate-900, #0f172a)] leading-tight">
            Encuentra la talla perfecta para tu mascota.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cada tamaño está diseñado para el peso y la raza de tu mascota, asegurando el máximo confort y ajuste.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className={`relative rounded-[2rem] border p-8 transition-transform hover:-translate-y-1 ${
                variant.id === "m"
                  ? "border-2 border-[var(--color-sky-600, #0284c7)] bg-white ring-4 ring-[var(--color-sky-50, #f0f9ff)] shadow-xl"
                  : "border-[var(--color-slate-200, #e2e8f0)] bg-white shadow-sm"
              }`}
            >
              {variant.id === "m" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-sky-600, #0284c7)] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                  ⭐ Más popular
                </div>
              )}
              {variant.badge ? (
                <p className="mb-4 inline-flex rounded-full bg-[var(--color-slate-50, #f8fafc)] px-3 py-1 text-sm font-black text-[var(--color-sky-600, #0284c7)] border border-[var(--color-sky-200, #bae6fd)]">
                  {variant.badge}
                </p>
              ) : <div className="h-9 mb-4"></div>}
              <p className="font-bold text-[var(--color-slate-500, #64748b)] uppercase text-xs tracking-wider">{variant.anchor}</p>
              <h3 className="mt-1 text-3xl font-black text-[var(--color-slate-900, #0f172a)]">{variant.label}</h3>
              <p className="mt-2 text-sm font-medium text-slate-600">{variant.size}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black text-[var(--color-sky-600, #0284c7)]">${variant.price}</span>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-600 font-medium flex items-start gap-2">
                  <span className="text-teal-600 mt-0.5">✓</span> Pago seguro contra entrega
                </p>
                <p className="mt-2 text-sm text-slate-600 font-medium flex items-start gap-2">
                  <span className="text-teal-600 mt-0.5">✓</span> Confirmación rápida por WhatsApp
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const reviews = [
    {
      name: "María C., Ciudad de Panamá",
      text: "Por fin mi sala no huele a perrito mojado. Se ve súper elegante y a mi perro le encantó desde el primer día. Lo mejor fue pagar al recibir.",
      product: "PeloCero Fresh Mat",
    },
    {
      name: "Ana P., La Chorrera",
      text: "Trabajo todo el día y me daba mucha culpa dejarlo solo. Ahora llego y lo veo entretenido. El proceso de compra por WhatsApp fue súper amable.",
      product: "JuegaSolo Motion Kit",
    },
    {
      name: "Carmen R., San Francisco",
      text: "Compré el pack de 2 para tener uno en el cuarto y otro en la sala. Es un alivio no tener que estar limpiando pelos todo el tiempo de mis muebles.",
      product: "PeloCero Fresh Mat",
    },
  ];

  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <p className="font-black text-[var(--color-amber-500, #f59e0b)] uppercase tracking-wider text-sm">Prueba Social</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-slate-900, #0f172a)] leading-tight">
            Más de 2,000 hogares en Panamá ya respiran tranquilos.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-slate-600, #475569)]">
            No tomes solo nuestra palabra. Escucha a otras mujeres que ya transformaron la rutina de sus mascotas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-[var(--color-slate-200, #e2e8f0)] bg-[var(--color-slate-50, #f8fafc)] p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 text-[var(--color-sky-200, #bae6fd)] opacity-50 text-6xl font-serif">"</div>
              <p className="text-xl font-black text-[var(--color-amber-500, #f59e0b)] mb-4">★★★★★</p>
              <p className="text-lg font-medium leading-relaxed text-[var(--color-slate-900, #0f172a)] relative z-10">"{review.text}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-sky-600, #0284c7)] text-white flex items-center justify-center font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-[var(--color-slate-900, #0f172a)]">{review.name}</p>
                  <p className="text-sm font-bold text-[var(--color-sky-600, #0284c7)]">{review.product}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "¿Es seguro el pago contra entrega?",
      answer:
        "Totalmente. No pedimos tu tarjeta de crédito. Haces tu reserva aquí, te escribimos por WhatsApp para confirmar, y pagas en efectivo o Yappy solo cuando recibes el producto en tus manos.",
    },
    {
      question: "¿Cuánto tarda el envío en Panamá?",
      answer:
        "Tenemos stock local. Normalmente entregamos en 24h hábiles por motorizado en Ciudad de Panamá. Para el interior, enviamos seguro y rápido vía Uno Express o Servientrega.",
    },
    {
      question: "¿Qué pasa si a mi mascota no le gusta?",
      answer:
        "Tienes nuestra Garantía de 30 Días. Si por alguna razón no se adapta o no cumple tus expectativas, te devolvemos tu dinero sin hacer preguntas difíciles.",
    },
    {
      question: "¿Cómo elijo la talla correcta para mi mascota?",
      answer:
        "Usa el peso de tu mascota como guía: S hasta 7 kg, M de 7 a 15 kg, L de 15 a 30 kg, y XL para más de 30 kg. Si tu mascota está en el límite, recomendamos subir una talla para mayor comodidad.",
    },
    {
      question: "¿Es fácil de lavar y mantener?",
      answer:
        "Sí, están diseñados específicamente para mujeres ocupadas. Los materiales repelen olores y la mayoría de nuestros productos de tela se pueden meter directamente a la lavadora en ciclo suave.",
    },
  ];

  return (
    <section className="bg-[#f7f2e8] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-black text-[var(--color-sky-600, #0284c7)] uppercase tracking-wider text-sm">Preguntas Frecuentes</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-slate-900, #0f172a)] leading-tight">
            Todo claro antes de pedir. Cero sorpresas.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[var(--color-slate-200, #e2e8f0)] bg-white p-6 shadow-sm transition-all hover:border-[var(--color-sky-600, #0284c7)]"
            >
              <summary className="cursor-pointer list-none text-xl font-black text-[var(--color-slate-900, #0f172a)] flex justify-between items-center">
                {faq.question}
                <span className="text-[var(--color-sky-600, #0284c7)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-lg text-[var(--color-slate-600, #475569)] border-t border-slate-100 pt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSections() {
  return (
    <>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="font-black text-[var(--color-sky-600, #0284c7)] uppercase tracking-wider text-sm">El problema que casi nadie mira</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-slate-900, #0f172a)] leading-tight">
              En Panamá, el calor y el encierro cambian la forma en que tu mascota vive (y cómo tú limpias).
            </h2>
            <p className="mt-5 text-xl leading-8 text-[var(--color-slate-600, #475569)]">
              Sabemos el esfuerzo que pones en mantener tu casa impecable. Pero cuando hace calor o hay aburrimiento, las mascotas buscan baldosas frías, rascan muebles o dejan olores en camas comunes.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--color-slate-600, #475569)]">
              No es tu culpa ni la de tu mascota. Es falta de las herramientas correctas. Diseñamos soluciones que se ven bien en tu sala, son fáciles de lavar y le devuelven la paz a tu hogar.
            </p>
          </div>
          <div className="order-1 lg:order-2 rounded-[2rem] bg-[var(--color-slate-50, #f8fafc)] p-8 border border-[var(--color-slate-200, #e2e8f0)] shadow-sm">
            <h3 className="font-black text-2xl text-[var(--color-slate-900, #0f172a)] mb-6">¿Te suena familiar?</h3>
            {[
              "Pelos y malos olores acumulados en camas tradicionales.",
              "Muebles rasguñados por ansiedad o aburrimiento.",
              "Preocupación constante por su hidratación en días calurosos.",
              "Estrés por lavar accesorios que tardan días en secar.",
            ].map((item) => (
              <div key={item} className="mb-4 rounded-2xl bg-white p-5 font-bold text-[var(--color-slate-900, #0f172a)] shadow-sm flex items-start gap-3">
                <span className="text-[var(--color-sky-600, #0284c7)] text-xl mt-0.5">⚠️</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-slate-50, #f8fafc)] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-black text-[var(--color-sky-600, #0284c7)] uppercase tracking-wider text-sm">Uso Diario</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-slate-900, #0f172a)] leading-tight">
              Cómo se integra a tu rutina diaria sin darte más trabajo.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "1. Integración natural",
                "No tienes que cambiar su comportamiento ni el tuyo. Nuestros productos están diseñados para encajar estéticamente en tu sala, cuarto o balcón.",
              ],
              [
                "2. Bienestar autónomo",
                "Funcionan como sistemas pasivos o inteligentes. Tu mascota obtiene alivio, hidratación o juego sin que tú tengas que detener tus tareas.",
              ],
              [
                "3. Limpieza sin estrés",
                "Pensados para la mujer moderna: materiales que repelen olores, superficies lavables a máquina y piezas fáciles de desarmar.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[2rem] border border-[var(--color-slate-200, #e2e8f0)] bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[var(--color-sky-50, #f0f9ff)] text-[var(--color-sky-600, #0284c7)] flex items-center justify-center font-black text-xl mb-6">
                  {title.charAt(0)}
                </div>
                <h3 className="text-2xl font-black text-[var(--color-slate-900, #0f172a)]">{title.substring(3)}</h3>
                <p className="mt-4 text-lg leading-7 text-[var(--color-slate-600, #475569)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-black text-[var(--color-sky-600, #0284c7)] uppercase tracking-wider text-sm">Inversión Inteligente</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-slate-900, #0f172a)] leading-tight">
              Por qué cuesta más que una opción común (y por qué lo vale).
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-slate-50 p-8 border border-slate-200 opacity-80">
              <h3 className="text-2xl font-black text-slate-700 flex items-center gap-2"><span className="text-slate-400">✕</span> Opciones comunes</h3>
              <ul className="mt-6 grid gap-4 text-slate-600 text-lg">
                <li className="flex items-start gap-2"><span>-</span> Guardan calor, humedad y malos olores.</li>
                <li className="flex items-start gap-2"><span>-</span> Materiales porosos difíciles de lavar.</li>
                <li className="flex items-start gap-2"><span>-</span> Estética que desentona con tu decoración.</li>
                <li className="flex items-start gap-2"><span>-</span> Vida útil corta, terminas comprando varias veces.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border-2 border-[var(--color-sky-600, #0284c7)] bg-white p-8 ring-4 ring-[var(--color-sky-50, #f0f9ff)] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[var(--color-sky-600, #0284c7)] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">Nuestra Solución</div>
              <h3 className="text-2xl font-black text-[var(--color-slate-900, #0f172a)] flex items-center gap-2"><span className="text-[var(--color-sky-600, #0284c7)]">✓</span> Calidad Premium</h3>
              <ul className="mt-6 grid gap-4 text-[var(--color-slate-600, #475569)] text-lg font-medium">
                <li className="flex items-start gap-2"><span className="text-[var(--color-sky-600, #0284c7)]">✓</span> Materiales técnicos que repelen olores y calor.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--color-sky-600, #0284c7)]">✓</span> Superficies pensadas para limpieza rápida y fácil.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--color-sky-600, #0284c7)]">✓</span> Diseño minimalista que eleva tu espacio.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--color-sky-600, #0284c7)]">✓</span> Durabilidad garantizada (Mejor valor en bundle).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
