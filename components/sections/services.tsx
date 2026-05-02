"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const procedures = [
  {
    title: "Protocolos Faciais",
    desc: "Harmonização, peelings, bioestimuladores e tratamentos avançados — cada protocolo com fluxo próprio de retorno e manutenção.",
    gradient: "linear-gradient(135deg, rgba(201,120,138,0.14) 0%, rgba(242,196,206,0.06) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2c4 0 6 4 6 9 0 6-3 11-6 11s-6-5-6-11c0-5 2-9 6-9z" />
        <circle cx="10" cy="11" r="0.6" fill="currentColor" />
        <circle cx="14" cy="11" r="0.6" fill="currentColor" />
        <path d="M10.5 16c.5.6 1 .9 1.5.9s1-.3 1.5-.9" />
      </svg>
    ),
  },
  {
    title: "Protocolos Corporais",
    desc: "Drenagem, modeladora, remodelagem e radiofrequência. Sessões e cronogramas organizados sem retrabalho.",
    gradient: "linear-gradient(135deg, rgba(196,164,107,0.16) 0%, rgba(201,120,138,0.05) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5" />
        <path d="M8 10c1.5 1 6.5 1 8 0" />
        <path d="M10 12v5l-1 4" />
        <path d="M14 12v5l1 4" />
      </svg>
    ),
  },
  {
    title: "Rejuvenescimento Íntimo",
    desc: "Procedimentos estético-funcionais para a região íntima — laser, radiofrequência e protocolos com follow-up discreto.",
    gradient: "linear-gradient(135deg, rgba(74,21,48,0.09) 0%, rgba(201,120,138,0.06) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3l2 5 5 1-3.6 3.4.8 5L12 14.8 7.8 17.4l.8-5L5 9l5-1z" />
      </svg>
    ),
  },
  {
    title: "Transplante Capilar",
    desc: "Avaliação, planejamento de unidades foliculares e acompanhamento pós-operatório com lembretes e fotos por etapa.",
    gradient: "linear-gradient(135deg, rgba(242,196,206,0.2) 0%, rgba(196,164,107,0.05) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M5 21c1-5 1.5-9 3-12" />
        <path d="M9 21c.5-6 1-10 2-13" />
        <path d="M13 21c.2-6 .5-11 1-14" />
        <path d="M17 21c-.2-5-.2-9 .5-12" />
        <circle cx="8" cy="6" r="0.7" fill="currentColor" />
        <circle cx="11" cy="4.5" r="0.7" fill="currentColor" />
        <circle cx="14" cy="5" r="0.7" fill="currentColor" />
        <circle cx="17" cy="7" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="procedimentos" className="relative bg-cream py-28 lg:py-32">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,120,138,.06),transparent)]" />

      <div className="relative mx-auto max-w-[1100px] px-7">
        {/* Header */}
        <div className="mb-16 text-center">
          <BlurFade inView>
            <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose">
              Procedimentos
            </span>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-wine">
              Tratamentos que sua clínica<br />
              <em className="italic">já domina.</em> Nós automatizamos o resto.
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <p className="mx-auto mt-4 max-w-[540px] text-[1.05rem] font-light leading-relaxed text-wine/50">
              Cada protocolo exige acolhimento único. O AIOS CRM entende o fluxo de cada procedimento
              para agendar, acompanhar e reativar com a sensibilidade que suas pacientes merecem.
            </p>
          </BlurFade>
        </div>

        {/* Procedures grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {procedures.map((p, i) => (
            <BlurFade key={i} inView delay={0.08 * i}>
              <SpotlightCard className="h-full">
                {/* Gradient header */}
                <div
                  className="relative h-44 overflow-hidden rounded-t-2xl"
                  style={{ background: p.gradient }}
                >
                  {/* Decorative shapes */}
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-rose/10 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border border-gold/10 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute right-[22%] top-[30%] h-2 w-2 rounded-full bg-gold/25 transition-all duration-500 group-hover:bg-gold/50 group-hover:scale-150" />
                  <div className="absolute left-[30%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-rose/20 transition-all duration-500 group-hover:bg-rose/40" />
                  <div className="absolute right-[45%] top-[55%] h-1 w-1 rounded-full bg-wine/10" />

                  {/* Centered icon */}
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-rose shadow-lg shadow-wine/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-rose/10">
                      <div className="scale-[1.4]">{p.icon}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-5">
                  <h3 className="mb-2 font-serif text-lg font-medium text-wine">
                    {p.title}
                  </h3>
                  <p className="text-[0.88rem] font-light leading-relaxed text-wine/50">
                    {p.desc}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-rose via-gold to-transparent transition-transform duration-500 group-hover:scale-y-100" />
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
