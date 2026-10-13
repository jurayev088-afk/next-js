"use client"
import {
  Code2,
  Rocket,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "2+", label: "Yillik tajriba" },
    { number: "20+", label: "Tugallangan loyiha" },
    { number: "15+", label: "Mamnun mijozlar" },
    { number: "100%", label: "Mas'uliyat" },
  ];

  const features = [
    {
      icon: Code2,
      title: "Zamonaviy texnologiyalar",
      description:
        "Eng so‘nggi texnologiyalar yordamida tezkor va sifatli web-saytlar yaratamiz.",
    },
    {
      icon: Rocket,
      title: "Tezkor yechimlar",
      description:
        "G‘oyalarni zamonaviy dizayn va qulay funksiyalar bilan haqiqatga aylantiramiz.",
    },
    {
      icon: Users,
      title: "Jamoaviy ishlash",
      description:
        "Har bir loyihaga individual yondashib, mijozlar bilan birga ishlaymiz.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080b14] text-white px-5 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-7">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Biz haqimizda
            </span>

            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Biz yaratamiz,
              <span className="block text-cyan-400 mt-2">
                siz rivojlanasiz.
              </span>
            </h1>

            <p className="text-gray-400 leading-8 mt-7 max-w-xl">
              Biz zamonaviy texnologiyalar, kreativ g‘oyalar va chiroyli
              dizayn orqali raqamli dunyoda yangi imkoniyatlar yaratamiz.
              Maqsadimiz — har bir loyihani sifatli va o‘ziga xos qilish.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-[#080b14] transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Biz bilan bog‘laning
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/10 px-6 py-4 font-medium transition hover:bg-white/5"
              >
                Batafsil
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111b30] via-[#0c1220] to-[#080b14] p-8 sm:p-12">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Creative Studio</p>
                    <p className="text-sm text-gray-500">Digital solutions</p>
                  </div>
                </div>
                <span className="text-cyan-400 text-sm">● Online</span>
              </div>

              <div className="relative space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-cyan-400/70" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-5/6 rounded-full bg-white/10" />
                    <div className="h-3 w-2/3 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <div className="h-10 w-28 rounded-xl bg-cyan-400" />
                    <div className="h-10 w-24 rounded-xl border border-white/10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Rocket className="w-6 h-6 text-cyan-400 mb-3" />
                    <p className="font-semibold">Innovatsiya</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Yangi g‘oyalar
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Award className="w-6 h-6 text-cyan-400 mb-3" />
                    <p className="font-semibold">Sifat</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mukammal natija
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">
                {stat.number}
              </h2>
              <p className="text-sm text-gray-400 mt-3">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Features */}
        <section id="services" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Bizning ustunliklarimiz
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Nima uchun biz?
            </h2>
            <p className="text-gray-400 mt-4 leading-7">
              Har bir loyihada sifat, kreativlik va foydalanuvchi qulayligini
              birinchi o‘ringa qo‘yamiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 mb-6 transition group-hover:bg-cyan-400/20">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sifat kafolati</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent p-8 sm:p-12 text-center">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Birgalikda nimadir
              <span className="text-cyan-400"> ajoyib </span>
              yaratamizmi?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-400 leading-7">
              Loyihangiz haqida gaplashamiz va uni keyingi bosqichga olib
              chiqamiz.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-[#080b14] transition hover:bg-cyan-300"
            >
              Loyihani boshlash
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <footer className="pt-8 mt-12 border-t border-white/10 text-center text-sm text-gray-600">
          © 2026 Creative Studio. Barcha huquqlar himoyalangan.
        </footer>
      </div>
    </main>
  );
}