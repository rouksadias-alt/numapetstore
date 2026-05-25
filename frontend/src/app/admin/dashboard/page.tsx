"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DateRange } from "@/components/admin/DateRange";
import {
  adminApi,
  isoDaysAgo,
  isoToday,
  statusMeta,
  type StatsResponse,
} from "@/lib/admin-api";

function formatPercent(n: number) {
  return `${(n * 100).toFixed(2)}%`;
}
function formatCurrency(n: number, ccy = "USD") {
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: ccy }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
}

export default function DashboardPage() {
  const [from, setFrom] = useState(isoDaysAgo(6));
  const [to, setTo] = useState(isoToday());
  const [data, setData] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const stats = await adminApi.stats(from, to);
      setData(stats);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setLoading(false);
    }
  }, [from, to]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <DateRange
            from={from}
            to={to}
            onChange={(f, t) => {
              setFrom(f);
              setTo(t);
            }}
          />
        </div>

        {error ? (
          <div className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800">{error}</div>
        ) : null}

        <StatCards data={data} loading={loading} />

        {data ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
            <DailyBars data={data} />
            <ChannelRevenue data={data} />
          </div>
        ) : null}
      </div>
    </AdminShell>
  );
}

function StatCards({ data, loading }: { data: StatsResponse | null; loading: boolean }) {
  const rev = data?.orders.revenue ?? 0;
  const confirmedOrders = (data?.orders.by_status.confirmed ?? 0) + (data?.orders.by_status.shipped ?? 0) + (data?.orders.by_status.delivered ?? 0);
  const cvr = data?.conversion_rate ?? 0;
  const aov = confirmedOrders > 0 ? rev / confirmedOrders : 0;

  const cards = [
    {
      label: "Revenue",
      value: loading ? "…" : formatCurrency(rev),
      isPrimary: true,
      icon: "↗",
    },
    {
      label: "Confirmed Orders",
      value: loading ? "…" : confirmedOrders.toLocaleString(),
      icon: "🛍️",
    },
    {
      label: "Conversion Rate",
      value: loading ? "…" : formatPercent(cvr),
      icon: "📊",
    },
    {
      label: "Unique Sessions",
      value: loading ? "…" : (data?.visits.sessions_valid ?? 0).toLocaleString(),
      icon: "👥",
    },
    {
      label: "Page Views",
      value: loading ? "…" : (data?.visits.valid ?? 0).toLocaleString(),
      icon: "👁️",
    },
    {
      label: "Total Orders",
      value: loading ? "…" : (data?.orders.valid ?? 0).toLocaleString(),
      icon: "📈",
    },
    {
      label: "AOV",
      value: loading ? "…" : formatCurrency(aov),
      icon: "💰",
    },
    {
      label: "VPN Traffic",
      value: loading ? "…" : (data?.visits.vpn ?? 0).toLocaleString(),
      icon: "🛡️",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className={`rounded-[1.5rem] p-6 shadow-sm transition-all ${
            c.isPrimary
              ? "bg-[#144f3e] text-white"
              : "bg-white text-slate-900 border border-slate-100"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className={`text-xs font-bold tracking-wide ${c.isPrimary ? "text-white/80" : "text-slate-500"}`}>
              {c.label}
            </div>
            <div className={`text-sm ${c.isPrimary ? "text-white/80" : "text-slate-400"}`}>
              {c.icon}
            </div>
          </div>
          <div className="mt-4 text-3xl font-black tracking-tight">
            {c.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function DailyBars({ data }: { data: StatsResponse }) {
  const max = Math.max(1, ...data.daily.map((d) => d.orders_valid));
  
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
      <h3 className="mb-6 font-bold text-slate-900">Daily Trend</h3>
      <div className="space-y-4">
        {data.daily.slice().reverse().map((d) => (
          <div key={d.day} className="flex items-center gap-4">
            <div className="w-24 shrink-0 text-sm font-semibold text-slate-700">
              {d.day}
            </div>
            <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex items-center">
              <div
                className="h-full bg-[#144f3e] rounded-full"
                style={{ width: `${Math.max(2, (d.orders_valid / max) * 100)}%` }}
              />
            </div>
            <div className="w-20 shrink-0 text-right text-sm font-bold text-slate-900">
              {d.orders_valid} orders
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChannelRevenue({ data }: { data: StatsResponse }) {
  // Mock revenue distribution based on top sources to match the design style
  // Since we only have visits per source right now, we'll display visits
  
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
      <h3 className="mb-6 font-bold text-slate-900">Top Sources</h3>
      {data.top_sources.length === 0 ? (
        <p className="text-sm text-slate-400">Sin datos</p>
      ) : (
        <div className="space-y-5">
          {data.top_sources.map((s, i) => (
            <div key={`${s.source}-${i}`} className="flex items-center justify-between">
              <span className="font-bold text-slate-700 lowercase tracking-tight">
                {s.source}
              </span>
              <span className="font-bold text-slate-900">
                {s.visits.toLocaleString()} visits
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
