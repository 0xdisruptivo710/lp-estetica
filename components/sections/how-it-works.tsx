"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    num: 1,
    title: "Conversa Estratégica",
    desc: "Analisamos sua operação, o perfil das suas pacientes e os gargalos no atendimento para desenhar a solução ideal para sua clínica.",
    gradient: "linear-gradient(135deg, rgba(201,120,138,0.18) 0%, rgba(242,196,206,0.06) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "Setup Personalizado",
    desc: "Treinamos a IA com a linguagem da sua clínica, seus protocolos e o tom que suas pacientes já conhecem e confiam.",
    gradient: "linear-gradient(135deg, rgba(196,164,107,0.2) 0%, rgba(201,120,138,0.05) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" />
        <path d="M11 17v.01" /><path d="M7 14v.01" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Integração em 48h",
    desc: "Conectamos WhatsApp, Instagram e seu site em menos de 2 dias. Você acompanha tudo em tempo real pelo painel.",
    gradient: "linear-gradient(135deg, rgba(74,21,48,0.12) 0%, rgba(201,120,138,0.06) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Evolução Contínua",
    desc: "Seu gestor dedicado analisa métricas, ajusta fluxos e garante que os resultados melhorem a cada mês.",
    gradient: "linear-gradient(135deg, rgba(242,196,206,0.22) 0%, rgba(196,164,107,0.06) 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3" />
        <path d="m7 14 4-4 4 4 6-6" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-cream py-28 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-7">
        {/* Header */}
        <div className="mb-16 text-center">
          <BlurFade inView>
            <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose">
              Como funciona
            </span>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-wine">
              Da conversa inicial à sua<br />clínica <em className="italic">automatizada.</em>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <p className="mx-auto mt-4 max-w-[520px] text-[1.05rem] font-light leading-relaxed text-wine/50">
              Um processo simples e direto para colocar sua clínica no piloto automático — sem complicação, sem demora.
            </p>
          </BlurFade>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-[10%] right-[10%] top-[72px] hidden h-px bg-gold/20 lg:block" />

          {steps.map((s, i) => (
            <BlurFade key={i} inView delay={0.12 * i}>
              <div className="group flex flex-col items-center text-center">
                {/* Gradient card with icon */}
                <div
                  className="relative mb-5 flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl"
                  style={{ background: s.gradient }}
                >
                  {/* Decorative shapes */}
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-rose/10 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full border border-gold/10 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute right-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-gold/20" />
                  <div className="absolute left-[30%] bottom-[25%] h-1 w-1 rounded-full bg-rose/15" />

                  {/* Step number */}
                  <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-wine/[0.07]">
                    <span className="text-[0.65rem] font-bold text-wine/40">0{s.num}</span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-rose shadow-lg shadow-wine/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-rose/10">
                    {s.icon}
                  </div>
                </div>

                <h3 className="mb-2 font-serif text-[1.05rem] font-medium text-wine">
                  {s.title}
                </h3>
                <p className="mx-auto max-w-[220px] text-[0.82rem] font-light leading-relaxed text-wine/50">
                  {s.desc}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
