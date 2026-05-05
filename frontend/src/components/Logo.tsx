import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-full bg-[#b4155a] text-lg font-black text-white ring-4 ring-[#f5d7e3]">
        N
      </span>
      <span className="leading-tight">
        <span className="block text-lg font-black tracking-tight text-[#2a1620]">
          Numapetstore
        </span>
        <span className="block text-[11px] font-bold text-[#8d6374]">
          Pet care premium
        </span>
      </span>
    </Link>
  );
}
