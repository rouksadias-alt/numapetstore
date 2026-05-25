"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { adminApi } from "@/lib/admin-api";
import { Logo } from "@/components/Logo";

const NAV = [
  { href: "/admin/dashboard", label: "Overview" },
  { href: "/admin/orders",    label: "Orders" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    adminApi
      .me()
      .then((r) => {
        setUser(r.user);
        setAuthChecked(true);
      })
      .catch(() => router.replace("/admin"));
  }, [router]);

  async function logout() {
    try {
      await adminApi.logout();
    } catch {}
    router.replace("/admin");
  }

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-400 bg-[#f3efe8]">
        Cargando…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3efe8] text-slate-900 font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="text-xs text-slate-500 max-w-xs leading-tight">
          Metrics only count valid Panama, non-VPN traffic after backend IP screening.
        </div>
        
        <div className="flex items-center gap-6">
          <button
            onClick={logout}
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:shadow"
          >
            Logout
          </button>
          <div className="h-8 w-32 relative">
            <Logo brand="numawellness" variant="dark" />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 pb-12">
        {/* TABS */}
        <div className="mb-8 flex items-center">
          <nav className="inline-flex items-center gap-1 rounded-full bg-white p-1.5 shadow-sm">
            {NAV.map((n) => {
              const active = pathname?.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-[#144f3e] text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {children}
      </main>
    </div>
  );
}
