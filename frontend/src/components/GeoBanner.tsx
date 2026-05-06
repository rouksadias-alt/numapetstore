"use client";

import { useEffect, useState } from "react";

type Geo = {
  country: string | null;
  country_name: string | null;
  is_allowed: boolean;
};

export function GeoBanner() {
  const [geo, setGeo] = useState<Geo | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return;
    const ctrl = new AbortController();
    fetch(`${apiUrl}/api/geo`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) return;
        setGeo({
          country: data.country ?? null,
          country_name: data.country_name ?? null,
          is_allowed: Boolean(data.is_allowed),
        });
      })
      .catch(() => null);
    return () => ctrl.abort();
  }, []);

  if (!geo || !geo.country || geo.is_allowed) return null;

  return (
    <div
      role="alert"
      className="w-full bg-amber-100 text-amber-900 text-sm px-4 py-2 text-center border-b border-amber-200"
    >
      Solo enviamos a Panamá. Detectamos que estás en{" "}
      <strong>{geo.country_name ?? geo.country}</strong>. Si crees que es un
      error, contáctanos por WhatsApp.
    </div>
  );
}
