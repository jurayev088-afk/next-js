import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-white/[0.07] bg-[#0a0e17] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="inline-flex w-fit items-center gap-3" aria-label="Creative Studio bosh sahifa">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <Code2 className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide">Creative Studio</span>
            <span className="mt-0.5 block text-[10px] text-slate-500">Raqamli mahsulotlar studiyasi</span>
          </span>
        </Link>

        <nav aria-label="Asosiy navigatsiya" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
          <Link className="transition hover:text-white" href="/about">Biz haqimizda</Link>
          <Link className="transition hover:text-white" href="/service">Xizmatlar</Link>
          <Link className="transition hover:text-white" href="/gallery">Ishlar</Link>
          <Link className="transition hover:text-white" href="/posts">Maqolalar</Link>
          <Link className="transition hover:text-white" href="/contact">Aloqa</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3.5 py-2 font-medium text-white transition hover:border-cyan-200/50 hover:bg-cyan-200/[0.06]">
            Loyiha taklif qilish <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
