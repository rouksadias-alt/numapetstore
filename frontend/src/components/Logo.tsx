import Link from "next/link";

export function Logo({ variant = "dark", brand = "numapet" }: { variant?: "dark" | "light", brand?: "numapet" | "numawellness" }) {
  const isLight = variant === "light";

  if (brand === "numawellness") {
    return (
      <Link href="/" className="text-lg font-black tracking-tight">
        <span className={isLight ? "text-white" : "text-slate-900"}>Numa</span>
        <span className={isLight ? "text-sky-400" : "text-sky-600"}>Wellness</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="text-lg font-black tracking-tight">
      <span className={isLight ? "text-white" : "text-slate-900"}>Numa</span>
      <span className={isLight ? "text-[#f2c6d8]" : "text-[#b4155a]"}>pet</span>
    </Link>
  );
}
