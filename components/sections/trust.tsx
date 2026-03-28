"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const differentials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Sigilo absoluto",
    desc: "Comunicações criptografadas e tom discreto. Suas pacientes se sentem seguras em cada interação.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" />
        <path d="M11 17v.01" /><path d="M7 14v.01" />
      </svg>
    ),
    title: "IA treinada para o nicho",
    desc: "Não é um chatbot genérico. Nossa IA foi treinada com linguagem acolhedora específica para estética facial e corporal.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Gestor dedicado",
    desc: "Um profissional AIOS cuida da sua conta, otimiza fluxos e garante que os resultados evoluam mês a mês.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "API oficial do WhatsApp",
    desc: "Nada de números bloqueados. Integração verificada com a API oficial do Meta para sua clínica.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Ativação em 48 horas",
    desc: "Da assinatura à primeira mensagem automática em menos de 2 dias. Sem burocracia, sem complexidade.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Conformidade LGPD",
    desc: "Dados das pacientes armazenados com criptografia e em conformidade total com a Lei Geral de Proteção de Dados.",
  },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-32">
      {/* Decorative top line */}
      <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-[1100px] px-7">
        {/* Header */}
        <div className="mb-16 text-center">
          <BlurFade inView>
            <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose">
              Por que o AIOS
            </span>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-wine">
              Feito para quem cuida de<br /><em className="italic">mulheres com sensibilidade.</em>
            </h2>
          </BlurFade>
        </div>

        {/* Grid */}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <BlurFade key={i} inView delay={0.08 * i}>
              <div className="group flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/15 bg-cream text-rose transition-all duration-300 group-hover:border-rose/20 group-hover:bg-rose/[0.06] group-hover:shadow-lg group-hover:shadow-rose/[0.06]">
                  {d.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 font-serif text-[1.05rem] font-medium text-wine">
                    {d.title}
                  </h3>
                  <p className="text-[0.88rem] font-light leading-relaxed text-wine/50">
                    {d.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom trust badges */}
        <BlurFade inView delay={0.4}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 border-t border-gold/10 pt-12">
            {[
              { num: "120+", label: "Clínicas ativas" },
              { num: "98%", label: "Satisfação" },
              { num: "50k+", label: "Pacientes impactadas" },
              { num: "24/7", label: "IA disponível" },
            ].map((b, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-2xl font-normal tracking-tight text-wine">
                  {b.num}
                </div>
                <div className="text-[0.72rem] font-medium uppercase tracking-wider text-wine/30">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
