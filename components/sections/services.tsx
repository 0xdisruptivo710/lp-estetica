"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const procedures = [
  {
    title: "Harmonização Facial",
    desc: "Protocolo completo com preenchimento, toxina botulínica e bioestimuladores para equilíbrio e naturalidade do rosto.",
    gradient: "linear-gradient(135deg, rgba(201,120,138,0.14) 0%, rgba(242,196,206,0.06) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z" />
        <path d="M17 4a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2" />
        <path d="M21 11a1 1 0 0 0 1 1 1 1 0 0 0-1 1 1 1 0 0 0-1-1 1 1 0 0 0 1-1" />
      </svg>
    ),
  },
  {
    title: "Limpeza de Pele Profunda",
    desc: "Tratamento profissional que remove impurezas, desobstrui poros e prepara a pele para protocolos avançados.",
    gradient: "linear-gradient(135deg, rgba(196,164,107,0.16) 0%, rgba(201,120,138,0.05) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Peeling Químico",
    desc: "Renovação celular com ácidos específicos para tratar manchas, textura irregular e sinais de envelhecimento.",
    gradient: "linear-gradient(135deg, rgba(74,21,48,0.09) 0%, rgba(201,120,138,0.06) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Radiofrequência Facial",
    desc: "Tecnologia de energia térmica que estimula colágeno, combate flacidez e melhora a firmeza da pele.",
    gradient: "linear-gradient(135deg, rgba(242,196,206,0.2) 0%, rgba(196,164,107,0.05) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Drenagem Linfática",
    desc: "Técnica que reduz retenção de líquidos, melhora o contorno corporal e promove bem-estar geral.",
    gradient: "linear-gradient(135deg, rgba(196,164,107,0.13) 0%, rgba(242,196,206,0.06) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Bioestimuladores de Colágeno",
    desc: "Estímulo natural de colágeno com ácido poli-L-láctico para uma pele mais firme e rejuvenescida.",
    gradient: "linear-gradient(135deg, rgba(201,120,138,0.11) 0%, rgba(196,164,107,0.08) 50%, rgba(250,247,245,1) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
