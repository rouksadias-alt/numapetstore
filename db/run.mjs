#!/usr/bin/env node
// Minimal SQL file runner used by `db:migrate` / `db:seed`.
// Picks up DATABASE_URL from `.env.local` / `.env` (via @next/env if available)
// or from the surrounding shell environment, then executes the given SQL file
// as a single statement batch.

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import postgres from "postgres";

async function loadDotEnv() {
  try {
    const { loadEnvConfig } = await import("@next/env");
    loadEnvConfig(process.cwd());
  } catch {
    // @next/env is bundled with Next.js, but if it's ever missing we fall back
    // to whatever is already in process.env.
  }
}

async function main() {
  const [, , file] = process.argv;
  if (!file) {
    console.error("Usage: node db/run.mjs <path-to-sql-file>");
    process.exit(1);
  }

  await loadDotEnv();

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error(
      "DATABASE_URL is not set. Define it in .env.local or in your shell.",
    );
    process.exit(1);
  }

  const sqlPath = resolve(process.cwd(), file);
  const sqlText = await readFile(sqlPath, "utf8");

  const sql = postgres(connectionString, { onnotice: () => {} });
  try {
    await sql.unsafe(sqlText);
    console.log(`Applied: ${file}`);
  } finally {
    await sql.end({ timeout: 5 });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
