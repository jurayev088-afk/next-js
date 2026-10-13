"use client"
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080b14] text-white px-5 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
            Biz bilan bog‘laning
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Keling, <span className="text-cyan-400">suhbatlashamiz.</span>
          </h1>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto leading-7">
            Savolingiz bormi yoki yangi loyiha boshlamoqchimisiz?
            Bizga yozing, siz bilan bog‘lanishdan xursand bo‘lamiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold mb-3">
              Aloqa ma’lumotlari
            </h2>

            <p className="text-gray-400 mb-10">
              Biz bilan quyidagi manzillar orqali bog‘lanishingiz mumkin.
            </p>

            <div className="space-y-7">
              {[
                {
                  icon: MapPin,
                  title: "Manzil",
                  value: "Toshkent, O‘zbekiston",
                },
                {
                  icon: Phone,
                  title: "Telefon",
                  value: "+998 90 123 45 67",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@example.com",
                },
                {
                  icon: Clock,
                  title: "Ish vaqti",
                  value: "Dushanba – Juma, 09:00–18:00",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 p-6">
              <p className="text-lg font-semibold">
                Yangi g‘oyangiz bormi?
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Keling, uni birgalikda ajoyib loyihaga aylantiramiz.
              </p>
              <ArrowUpRight className="w-6 h-6 text-cyan-400 mt-4" />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Xabaringiz yuborishga tayyor!");
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Xabar yuborish
            </h2>

            <p className="text-gray-400 mb-8">
              Formani to‘ldiring, biz siz bilan bog‘lanamiz.
            </p>

            <div className="space-y-5">
              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Ismingiz
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="w-full rounded-xl border border-white/10 bg-[#0c1120] px-4 py-3.5 outline-none transition focus:border-cyan-400 placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Email manzilingiz
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-white/10 bg-[#0c1120] px-4 py-3.5 outline-none transition focus:border-cyan-400 placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Mavzu
                </label>
                <input
                  required
                  type="text"
                  placeholder="Xabar mavzusi"
                  className="w-full rounded-xl border border-white/10 bg-[#0c1120] px-4 py-3.5 outline-none transition focus:border-cyan-400 placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Xabaringiz
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Xabaringizni yozing..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0c1120] px-4 py-3.5 outline-none transition focus:border-cyan-400 placeholder:text-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 font-semibold text-[#080b14] transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-[0.98]"
              >
                Xabarni yuborish
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-gray-600 mt-12">
          © 2026 Barcha huquqlar himoyalangan.
        </p>
      </div>
    </main>
  );
}