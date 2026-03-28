"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

const problems = [
  "Leads que chegam pelo Instagram e nunca mais respondem depois do primeiro contato?",
  "Equipe usando WhatsApp pessoal sem histórico, sem controle e sem padronização?",
  "Pacientes que fizeram o primeiro procedimento e simplesmente desapareceram?",
  "Sem saber quem está em qual etapa da jornada de tratamento ou protocolo?",
  "Agendamentos esquecidos por falta de confirmação e lembrete automático?",
  "Tráfego pago rodando e você sem saber qual campanha trouxe cada paciente?",
];

export function Problems() {
  return (
    <section id="problemas" className="relative bg-white py-28 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-7">
        <div className="mb-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <BlurFade inView delay={0}>
              <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose">
                Cenário atual
              </span>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-wine">
                Você se identifica com alguma dessas <em className="italic">situações?</em>
              </h2>
            </BlurFade>
          </div>

          <div className="flex items-start gap-6">
            <BlurFade inView delay={0.2}>
              <p className="max-w-[520px] text-[1.05rem] font-light leading-relaxed text-wine/50">
                A maioria das clínicas de estética facial e corporal perde oportunidades todos os dias
                — não por falta de demanda, mas de organização.
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Gradient accent banner */}
        <BlurFade inView delay={0.15}>
          <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-wine via-wine/90 to-wine/80 px-8 py-10 lg:px-12 lg:py-14">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-rose/10" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-gold/10" />
            <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-gold/20" />
            <div className="absolute left-[40%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-rose/20" />
            <div className="absolute right-[50%] top-[60%] h-1 w-1 rounded-full bg-blush/15" />

            <div className="relative z-10 flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-8">
              {/* Quote icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose/15 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blush">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="max-w-lg font-serif text-[1.15rem] font-light italic leading-relaxed text-cream/70">
                Cada lead não respondido é uma paciente que buscou ajuda — e encontrou silêncio.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Problems grid */}
        <div className="grid border-t border-gold/20 md:grid-cols-2">
          {problems.map((text, i) => (
            <BlurFade key={i} inView delay={0.08 * i}>
              <div className={cn(
                "group flex gap-4 border-b border-gold/20 py-7 transition-colors hover:bg-cream",
                i % 2 === 0 ? "pr-6 md:border-r md:border-gold/20" : "md:pl-6"
              )}>
                <span className="min-w-[32px] font-serif text-2xl text-rose transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.92rem] leading-relaxed text-wine/70">
                  {text}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
