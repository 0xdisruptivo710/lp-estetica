"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    num: 1,
    title: "Conversa Estratégica",
    desc: "Analisamos sua operação, o perfil das suas pacientes e os gargalos no atendimento para desenhar a solução ideal para sua clínica.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "Setup Personalizado",
    desc: "Treinamos a IA com a linguagem da sua clínica, seus protocolos e o tom que suas pacientes já conhecem e confiam.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Integração em 48h",
    desc: "Conectamos WhatsApp, Instagram e seu site em menos de 2 dias. Você acompanha tudo em tempo real pelo painel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Evolução Contínua",
    desc: "Seu gestor dedicado analisa métricas, ajusta fluxos e garante que os resultados melhorem a cada mês.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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

        {/* Image divider */}
        <BlurFade inView delay={0.15}>
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
              alt="Clínica moderna e organizada"
              width={1200}
              height={350}
              className="h-48 w-full object-cover lg:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wine/30 via-transparent to-wine/20" />
            <div className="absolute bottom-6 right-6 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <span className="text-[0.75rem] font-medium text-white">
                Do diagnóstico à automação completa em 48h
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Steps */}
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gold/20 lg:block" />

          {steps.map((s, i) => (
            <BlurFade key={i} inView delay={0.12 * i}>
              <div className="group text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-gold bg-cream text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold/20">
                  {s.icon}
                </div>
                <h3 className="mb-2 font-serif text-[1.05rem] font-medium text-wine">
                  {s.title}
                </h3>
                <p className="mx-auto max-w-[200px] text-[0.82rem] font-light leading-relaxed text-wine/50">
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
