"use client";

import Image from "next/image";
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
                A maioria das clínicas de estética íntima perde oportunidades todos os dias
                — não por falta de demanda, mas de organização.
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Image accent */}
        <BlurFade inView delay={0.15}>
          <div className="relative mb-12 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="Profissional de estética pensativa"
              width={1200}
              height={400}
              className="h-56 w-full object-cover lg:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wine/40 via-transparent to-wine/20" />
            <div className="absolute bottom-6 left-6 max-w-xs">
              <p className="text-sm font-light leading-relaxed text-white/80">
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
