import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <Link href="/" className="text-lg font-black tracking-tight">
      <span className={isLight ? "text-white" : "text-slate-900"}>Numa</span>
      <span className={isLight ? "text-sky-400" : "text-sky-600"}>Wellness</span>
    </Link>
  );
}
