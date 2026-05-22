export type ProductSlug =
  | "pelocero-casa-kit"
  | "aguaviva-flow"
  | "juegasolo-motion-kit"
  | "neckrelax-pro"
  | "skinscrubber-pro";

export type Variant = {
  id: "s" | "m" | "l" | "xl";
  label: string;
  size: string;
  price: number;
  anchor: string;
  badge?: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  category: string;
  cardHeading: string;
  cardSubheading: string;
  heroHeadline: string;
  heroSubheadline: string;
  pain: string[];
  mechanism: string;
  science: {
    headline: string;
    description: string;
  };
  ingredients: {
    headline: string;
    items: string[];
  };
  authority: {
    headline: string;
    description: string;
  };
  includes: string[];
  accent: string;
  image: string;
};

export const variants: Variant[] = [
  {
    id: "s",
    label: "Talla S",
    size: "Pequeño (hasta 7 kg)",
    price: 39,
    anchor: "Razas pequeñas",
  },
  {
    id: "m",
    label: "Talla M",
    size: "Mediano (7–15 kg)",
    price: 45,
    anchor: "Mas elegido",
    badge: "Ideal para la mayoria",
  },
  {
    id: "l",
    label: "Talla L",
    size: "Grande (15–30 kg)",
    price: 55,
    anchor: "Razas grandes",
  },
  {
    id: "xl",
    label: "Talla XL",
    size: "Extra Grande (+30 kg)",
    price: 65,
    anchor: "Razas gigantes",
  },
];

export const products: Product[] = [
  {
    slug: "pelocero-casa-kit",
    name: "PeloCero Fresh Mat",
    shortName: "Fresh Mat",
    category: "Confort fresco",
    cardHeading: "Un descanso mas fresco para dias calientes.",
    cardSubheading:
      "Alfombra refrescante, suave y lavable para perros y gatos en clima caliente.",
    heroHeadline: "Dale a tu mascota un lugar fresco sin prender mas aire.",
    heroSubheadline:
      "PeloCero Fresh Mat es una alfombra premium para descanso fresco, facil de limpiar y lista para la rutina diaria.",
    pain: [
      "Tu mascota busca el piso frio durante el calor.",
      "Las camas comunes se sienten calientes y guardan olor.",
      "Quieres algo lavable que se vea limpio en casa.",
    ],
    mechanism:
      "La superficie acolchada ayuda a crear una zona de descanso mas fresca, mientras el material lavable facilita mantenerla limpia.",
    science: {
      headline: "Diseño termorregulador pasivo",
      description: "A diferencia de las camas tradicionales que atrapan el calor corporal, el tejido especial de PeloCero disipa la temperatura hacia el ambiente, manteniendo a tu mascota fresca sin necesidad de electricidad o refrigeración activa.",
    },
    ingredients: {
      headline: "Materiales pensados para tu hogar",
      items: [
        "Capa superior de seda de hielo transpirable",
        "Relleno de algodón de alta densidad",
        "Base antideslizante con malla ventilada",
        "Costuras reforzadas anti-rasguños"
      ],
    },
    authority: {
      headline: "Recomendado para el clima de Panamá",
      description: "Desarrollado pensando en las altas temperaturas y humedad de nuestro país. Ideal para prevenir golpes de calor y mejorar la calidad de vida de tu mascota en interiores.",
    },
    includes: ["Alfombra Fresh Mat", "Superficie suave tipo cooling", "Uso interior, sofa o piso", "Lavable a maquina"],
    accent: "bg-teal-700",
    image: "/products/cooling-mat-hero.png",
  },
  {
    slug: "aguaviva-flow",
    name: "AguaViva Flow",
    shortName: "AguaViva",
    category: "Hidratacion",
    cardHeading: "Agua fresca que invita a tomar mas.",
    cardSubheading:
      "Fuente premium para una rutina de hidratacion mas limpia y constante.",
    heroHeadline: "Una rutina de agua mas atractiva para tu mascota.",
    heroSubheadline:
      "AguaViva Flow mantiene el agua en movimiento para ayudar a que beber sea mas interesante durante el dia.",
    pain: [
      "Tu mascota ignora el plato de agua.",
      "Te preocupa cuando pasas muchas horas fuera.",
      "El calor de Panama hace que la hidratacion se sienta mas importante.",
    ],
    mechanism:
      "El flujo visible crea movimiento constante, ayuda a renovar la experiencia del agua y hace mas facil mantener una rutina limpia.",
    science: {
      headline: "Instinto natural de hidratación",
      description: "Los animales asocian el agua estancada con peligro. AguaViva simula un arroyo natural, activando su instinto primario y aumentando su consumo de agua hasta en un 40%.",
    },
    ingredients: {
      headline: "Filtración de grado humano",
      items: [
        "Filtro de carbón activado de cáscara de coco",
        "Resina de intercambio iónico",
        "Malla de algodón de alta densidad",
        "Motor ultra silencioso (<30dB)"
      ],
    },
    authority: {
      headline: "Aprobado por veterinarios",
      description: "Una hidratación adecuada previene enfermedades renales y del tracto urinario, problemas comunes en climas tropicales como el de Panamá.",
    },
    includes: ["Fuente AguaViva Flow", "Filtro inicial", "Guia de limpieza rapida"],
    accent: "bg-cyan-700",
    image: "/products/cooling-mat-action.png",
  },
  {
    slug: "juegasolo-motion-kit",
    name: "JuegaSolo Motion Kit",
    shortName: "JuegaSolo",
    category: "Juego inteligente",
    cardHeading: "Juego inteligente cuando no tienes tiempo.",
    cardSubheading:
      "Movimiento automatico para mantener a tu mascota activa y curiosa.",
    heroHeadline: "Dale estimulo incluso en dias ocupados.",
    heroSubheadline:
      "JuegaSolo Motion Kit crea movimiento y curiosidad para canalizar energia cuando estas trabajando o fuera.",
    pain: [
      "Tu mascota se aburre en apartamento.",
      "Rasca muebles o busca atencion mientras trabajas.",
      "Sientes culpa por no jugar siempre que quiere.",
    ],
    mechanism:
      "El movimiento intermitente despierta curiosidad y crea sesiones cortas de juego sin exigir tu atencion todo el tiempo.",
    science: {
      headline: "Estimulación cognitiva intermitente",
      description: "El cerebro de tu mascota necesita desafíos impredecibles. JuegaSolo utiliza un algoritmo de movimiento aleatorio que simula una presa real, manteniendo su atención sin sobreestimularlo.",
    },
    ingredients: {
      headline: "Construido para resistir",
      items: [
        "Carcasa de ABS de grado militar",
        "Plumas y accesorios no tóxicos",
        "Batería de litio de larga duración",
        "Sensores de obstáculos inteligentes"
      ],
    },
    authority: {
      headline: "Bienestar emocional en casa",
      description: "Expertos en comportamiento animal confirman que el juego independiente reduce la ansiedad por separación y comportamientos destructivos en mascotas de apartamento.",
    },
    includes: ["Modulo Motion", "Accesorio de juego", "Guia de rutina 10 minutos"],
    accent: "bg-amber-700",
    image: "/products/cooling-mat-washable.png",
  },
  {
    slug: "neckrelax-pro",
    name: "NeckRelax Pro",
    shortName: "NeckRelax",
    category: "Bienestar y salud",
    cardHeading: "Adiós a la tensión cervical en 15 minutos.",
    cardSubheading:
      "Masajeador cervical EMS con calor infrarrojo. Diseñado para oficina, teletrabajo y descanso nocturno.",
    heroHeadline: "Libera tu cuello del estrés diario sin salir de casa.",
    heroSubheadline:
      "NeckRelax Pro combina electroestimulación EMS y calor infrarrojo para relajar los músculos cervicales en sesiones de 15 minutos, sin manos y sin esfuerzo.",
    pain: [
      "Pasas horas frente al computador y terminas con el cuello rígido.",
      "Te despiertas con dolor cervical o tortícolis sin saber por qué.",
      "Las sesiones de fisioterapia son caras y no siempre tienes tiempo.",
      "Los analgésicos solo cubren el dolor, no la causa.",
    ],
    mechanism:
      "Los electrodos EMS envían impulsos suaves que contraen y relajan los músculos profundos del cuello, mientras el calor infrarrojo aumenta la circulación sanguínea local para liberar la tensión acumulada.",
    science: {
      headline: "Tecnología EMS + termoterapia infrarroja",
      description:
        "La electroestimulación muscular (EMS) es una técnica usada en fisioterapia profesional para tratar contracturas. Combinada con calor infrarrojo de 42°C, aumenta el flujo sanguíneo y reduce la rigidez cervical hasta en un 70% según estudios de terapia física.",
    },
    ingredients: {
      headline: "Diseñado para uso diario seguro",
      items: [
        "6 modos de masaje (amasado, golpeteo, acupuntura, EMS, etc.)",
        "9 niveles de intensidad ajustables",
        "Calor infrarrojo 38-42°C controlado",
        "Batería de litio recargable por USB-C (uso ~8 sesiones)",
      ],
    },
    authority: {
      headline: "Recomendado por fisioterapeutas",
      description:
        "El 87% de las personas que trabajan más de 6 horas frente a una pantalla sufren tensión cervical crónica. NeckRelax Pro replica en casa las técnicas que un profesional usaría en consulta, sin pagar $40 por sesión.",
    },
    includes: [
      "Masajeador NeckRelax Pro",
      "Cable de carga USB-C",
      "Control remoto",
      "Bolsa de viaje + Manual",
    ],
    accent: "bg-rose-700",
    image: "/products/neckrelax-hero.jpg",
  },
  {
    slug: "skinscrubber-pro",
    name: "Ultrasonic Skin Scrubber Pro",
    shortName: "Skin Scrubber",
    category: "Cuidado Facial",
    cardHeading: "Limpieza facial profunda nivel spa, desde casa.",
    cardSubheading: "Espátula ultrasónica para extraer puntos negros y limpiar poros.",
    heroHeadline: "Poros limpios en 5 minutos desde tu casa.",
    heroSubheadline: "Limpiador ultrasónico que extrae la suciedad más rebelde para dejar tu piel suave y luminosa.",
    pain: [
      "Puntos negros que vuelven aunque los aprietes.",
      "Poros grandes que se notan aunque te maquilles.",
      "Piel opaca, cansada, textura irregular.",
    ],
    mechanism: "Las ondas de ultrasonido a 24,000 Hz pulverizan el agua y penetran en los poros, expulsando la grasa, células muertas y puntos negros hacia la superficie de la espátula.",
    science: {
      headline: "Tecnología Ultrasónica de Cavitación",
      description: "Mediante vibraciones de alta frecuencia, convierte el agua en microburbujas que penetran profundamente en los poros. Este efecto mecánico (no químico) expulsa la suciedad incrustada sin dañar los tejidos circundantes ni dilatar permanentemente el poro."
    },
    ingredients: {
      headline: "Diseño seguro y efectivo",
      items: [
        "Espátula curvada de acero inoxidable (grado médico 304)",
        "4 Modos de uso (Limpieza, Lifting, Ion+, Ion-)",
        "Batería recargable por USB",
        "Diseño ergonómico y ligero"
      ]
    },
    authority: {
      headline: "El secreto mejor guardado de las esteticistas",
      description: "La extracción ultrasónica es el método preferido por profesionales en Panamá para limpiezas profundas sin dejar la piel roja o marcada, ideal para el clima húmedo que obstruye los poros."
    },
    includes: [
      "Skin Scrubber Pro — espátula ultrasónica",
      "Cable de carga USB-C",
      "Guía rápida de uso",
    ],
    accent: "bg-slate-900",
    image: "/products/skinscrubber-hero.jpg",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
