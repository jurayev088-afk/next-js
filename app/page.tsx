import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  LayoutDashboard,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Web dizayn",
    description: "Brendingizga mos, tushunarli va esda qoladigan interfeyslar.",
    color: "text-cyan-300",
    background: "bg-cyan-300/10",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web dasturlash",
    description: "Tez ishlaydigan, ishonchli va kengayishga tayyor saytlar.",
    color: "text-lime-300",
    background: "bg-lime-300/10",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobil tajriba",
    description: "Har qanday ekranda qulay ishlaydigan raqamli mahsulotlar.",
    color: "text-orange-300",
    background: "bg-orange-300/10",
  },
];

const projects = [
  {
    category: "E-commerce · UI/UX",
    title: "Navo Market",
    description: "Mahalliy brendlar uchun yangi avlod onlayn do‘koni.",
    initials: "N.",
    theme: "from-[#174f55] via-[#1b333c] to-[#131923]",
    accent: "text-cyan-200",
    previewAccent: "bg-cyan-200/80",
    label: "MAHALLIY TANLOV",
  },
  {
    category: "Platforma · Web app",
    title: "Orbit Workspace",
    description: "Jamoalar uchun vazifalarni bir joyda boshqarish platformasi.",
    initials: "O",
    theme: "from-[#3d4832] via-[#28312c] to-[#131923]",
    accent: "text-lime-200",
    previewAccent: "bg-lime-200/80",
    label: "JAMOA ISHI",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <section className="relative border-b border-white/[0.07]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_24%,rgba(34,211,238,0.11),transparent_35%),linear-gradient(135deg,transparent_55%,rgba(163,230,53,0.035))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:pb-28 lg:pt-28">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium text-cyan-100 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" />
              </span>
              G‘oyadan tayyor mahsulotgacha
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Raqamli g‘oyalar
              <span className="mt-2 block text-cyan-300">haqiqiy natija.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Biznesingiz uchun o‘ylangan dizayn va puxta texnologiyani
              birlashtiramiz. Har bir detal — maqsadingizga xizmat qiladi.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-13 items-center gap-3 rounded-lg bg-cyan-300 px-6 py-3.5 font-semibold text-[#071015] transition hover:bg-cyan-200"
              >
                Loyihani boshlash
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex min-h-13 items-center gap-2 rounded-lg border border-white/15 px-5 py-3.5 font-medium text-slate-200 transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                Ishlarimizni ko‘ring
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-lime-300" /> 20+ loyiha
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-lime-300" /> 2+ yil tajriba
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-lime-300" /> Har bir ekran uchun
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-8 rounded-full bg-cyan-400/[0.07] blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d121c] shadow-[0_28px_100px_rgba(0,0,0,0.42)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Studio workspace</p>
                    <p className="mt-0.5 text-xs text-slate-500">Haftalik ishlar</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.07] px-3 py-1.5 text-[11px] font-medium text-lime-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                  Ish jarayonida
                </span>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Joriy sprint</p>
                    <p className="mt-1 text-2xl font-semibold">3 ta loyiha</p>
                  </div>
                  <p className="pb-1 text-xs text-slate-500">16–20 oktabr</p>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Navo Market", phase: "Dizayn tasdiqlandi", percent: 82, tint: "bg-cyan-300" },
                    { name: "Orbit Workspace", phase: "Frontend ishlab chiqish", percent: 58, tint: "bg-lime-300" },
                    { name: "Samarqand Coffee", phase: "Tadqiqot va prototip", percent: 34, tint: "bg-orange-300" },
                  ].map((project) => (
                    <div key={project.name} className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium text-slate-100">{project.name}</p>
                          <p className="mt-1 text-xs text-slate-500">{project.phase}</p>
                        </div>
                        <span className="text-xs tabular-nums text-slate-400">{project.percent}%</span>
                      </div>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                        <div className={`h-full rounded-full ${project.tint}`} style={{ width: `${project.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <p className="text-xs text-slate-500">Bir jamoa, aniq reja, puxta natija.</p>
                  <div className="flex -space-x-2" aria-label="Studio team">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0d121c] bg-cyan-200 text-[10px] font-bold text-[#071015]">A</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0d121c] bg-lime-200 text-[10px] font-bold text-[#071015]">M</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0d121c] bg-orange-200 text-[10px] font-bold text-[#071015]">S</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-lg border border-white/10 bg-[#111823] px-4 py-3 shadow-xl sm:flex lg:-left-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-300/10 text-lime-200">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold">Keyingi bosqich</p>
                <p className="mt-0.5 text-[11px] text-slate-500">Sifat tekshiruvi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Nimalar qilamiz</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">G‘oyangizga kerakli yechim</h2>
          </div>
          <Link href="/service" className="inline-flex items-center gap-2 pb-1 text-sm text-slate-300 transition hover:text-cyan-200">
            Barcha xizmatlar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group border-t border-white/10 py-6 transition-colors hover:border-cyan-300/50 sm:py-7">
              <div className="flex items-center justify-between">
                <span className="text-xs tabular-nums text-slate-600">{service.number} / 03</span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${service.background} ${service.color}`}>
                  <service.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0b1019]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">Tanlangan ishlar</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Fikrlarimiz amalda</h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 pb-1 text-sm text-slate-300 transition hover:text-lime-200">
              Galereyaga o‘tish <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.title} href="/gallery" className="group overflow-hidden rounded-lg border border-white/[0.08] bg-[#0d121c] transition hover:border-white/20">
                <div className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.theme} p-8 sm:min-h-64`}>
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="relative w-full max-w-xs -rotate-2 rounded-lg border border-white/15 bg-[#0c1119]/90 p-4 shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-xs font-bold ${project.accent}`}>{project.initials}</span>
                        <span className="text-xs font-semibold">{project.title}</span>
                      </div>
                      <span className={`text-[9px] font-semibold tracking-wider ${project.accent}`}>{project.label}</span>
                    </div>
                    <div className="grid grid-cols-[1fr_0.8fr] gap-3 pt-4">
                      <div className="space-y-2.5 pt-1">
                        <div className={`h-2 w-4/5 rounded-full ${project.previewAccent}`} />
                        <div className="h-1.5 w-full rounded-full bg-white/15" />
                        <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                        <div className="mt-3 h-6 w-20 rounded bg-white/10" />
                      </div>
                      <div className={`flex aspect-square items-end justify-end rounded-md bg-gradient-to-br ${project.theme} p-2`}>
                        <div className="h-8 w-8 rounded-full border border-white/20 bg-white/10" />
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <div className="flex flex-wrap items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-400">{project.description}</p>
                  </div>
                  <ArrowUpRight className="mb-1 h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-cyan-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-8 rounded-xl border border-cyan-300/15 bg-[linear-gradient(110deg,rgba(34,211,238,0.08),rgba(163,230,53,0.035)_55%,rgba(255,255,255,0.015))] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Hamkorlikka tayyormisiz?</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Keyingi yaxshi loyiha sizniki bo‘lsin.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">G‘oyangizni ayting. Biz uni qanday amalga oshirishni birga rejalashtiramiz.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-[#071015] transition hover:bg-cyan-200">
            Suhbatni boshlash <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-6 text-center text-xs text-slate-600">
        © 2026 Creative Studio · Raqamli yechimlar, puxta natijalar.
      </footer>
    </main>
  );
}
  