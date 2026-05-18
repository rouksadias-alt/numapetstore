import "server-only";

import postgres from "postgres";
import { unstable_cache } from "next/cache";

import type { Product } from "./types";

const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Mini Deshumidificador Smart",
    category: "Hogar tropical",
    price: 39,
    oldPrice: 55,
    description:
      "Compacto para closets, dormitorios y apartamentos con humedad alta.",
    badge: "Mas vendido",
    color: "from-emerald-100 to-cyan-100",
  },
  {
    id: 2,
    name: "Ventilador Portatil USB",
    category: "Calor y movilidad",
    price: 24,
    description:
      "Bateria recargable para transporte, oficina, playa y viajes cortos.",
    badge: "Entrega rapida",
    color: "from-sky-100 to-blue-100",
  },
  {
    id: 3,
    name: "Botella Termica 1L",
    category: "Vida diaria",
    price: 29,
    oldPrice: 36,
    description:
      "Mantiene bebidas frias durante el dia en clima caliente y humedo.",
    badge: "Eco choice",
    color: "from-lime-100 to-emerald-100",
  },
  {
    id: 4,
    name: "Organizador Anti-Humedad",
    category: "Casa y closet",
    price: 18,
    description:
      "Set para proteger ropa, zapatos y bolsos durante temporada lluviosa.",
    badge: "Pack familiar",
    color: "from-amber-100 to-orange-100",
  },
  {
    id: 5,
    name: "Mochila Impermeable Urbana",
    category: "Trabajo y universidad",
    price: 49,
    oldPrice: 65,
    description:
      "Protege laptop y accesorios contra lluvia repentina en la ciudad.",
    badge: "Nuevo",
    color: "from-slate-100 to-zinc-200",
  },
  {
    id: 6,
    name: "Kit Frescura Personal",
    category: "Beauty & care",
    price: 32,
    description:
      "Toalla quick-dry, atomizador y pouch para dias de calor intenso.",
    badge: "Bundle",
    color: "from-rose-100 to-pink-100",
  },
];

type ProductRow = {
  id: number;
  name: string;
  category: string;
  price: number | string;
  old_price: number | string | null;
  description: string;
  badge: string;
  color: string;
};

let client: ReturnType<typeof postgres> | null = null;

export function getDbClient() {
  if (client) return client;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL environment variable is not set. Define it in .env.local (development) or in your Easypanel app service environment (production).",
    );
  }

  client = postgres(connectionString, {
    // postgres.js converts numerics to strings by default; we map them in mapProductRow.
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10,
  });

  return client;
}

function mapProductRow(row: ProductRow): Product {
  const product: Product = {
    id: Number(row.id),
    name: row.name,
    category: row.category,
    price: Number(row.price),
    description: row.description,
    badge: row.badge,
    color: row.color,
  };

  if (row.old_price !== null && row.old_price !== undefined) {
    product.oldPrice = Number(row.old_price);
  }

  return product;
}

async function fetchAllProducts(): Promise<Product[]> {
  try {
    const sql = getDbClient();
    const rows = await sql<ProductRow[]>`
      SELECT id, name, category, price, old_price, description, badge, color
      FROM products
      ORDER BY id ASC
    `;
    return rows.map(mapProductRow);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Using fallback products because the local database is unavailable.",
        error,
      );
      return fallbackProducts;
    }

    throw error;
  }
}

export const getAllProducts = unstable_cache(
  fetchAllProducts,
  ["products:getAll"],
  {
    tags: ["products"],
    revalidate: 60,
  },
);
