"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 text-rose">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const checks = [
  { strong: "Resposta em menos de 3 min", text: "— IA acolhe, tira dúvidas e agenda com empatia" },
  { strong: "Tom personalizado", text: "— discreta, acolhedora e no ritmo da paciente" },
  { strong: "Funciona 24h, 7 dias", text: "— nunca perca uma paciente por falta de resposta" },
];

export function Solution() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-cream py-28 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-7">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[72px]">
          {/* Text */}
          <div>
            <BlurFade inView>
              <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose">
                A solução
              </span>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-wine">
                O CRM que entende a <em className="italic">delicadeza</em> do seu nicho
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="my-5 text-[1.05rem] font-light leading-relaxed text-wine/50">
                O AIOS CRM é a plataforma de gestão feita para clínicas de estética facial e corporal que
                querem crescer com eficiência, reter pacientes com cuidado e profissionalizar
                o atendimento sem perder o toque humano.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <div className="flex flex-col gap-3.5">
                {checks.map((c, i) => (
                  <div key={i} className="group flex items-start gap-3 text-[0.92rem]">
                    <div className="mt-0.5 flex h-[22px] w-[22px] min-w-[22px] items-center justify-center rounded-full bg-rose/10 transition-colors duration-300 group-hover:bg-rose/20">
                      <CheckIcon />
                    </div>
                    <span className="text-wine/70">
                      <strong className="font-semibold text-wine">{c.strong}</strong>{" "}{c.text}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Real CRM screenshot inside MagicCard */}
          <BlurFade inView delay={0.2} direction="right">
            <MagicCard className="mx-auto max-w-[560px] lg:mx-0">
              <div className="p-3 sm:p-4">
                {/* Window chrome */}
                <div className="mb-3 flex items-center gap-2 border-b border-gold/10 pb-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-red-300" />
                  <span className="h-[7px] w-[7px] rounded-full bg-amber-300" />
                  <span className="h-[7px] w-[7px] rounded-full bg-green-300" />
                  <span className="flex-1" />
                  <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-widest text-wine/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    AIOS &bull; CRM ao vivo
                  </span>
                </div>

                {/* Kanban screenshot */}
                <div className="overflow-hidden rounded-lg ring-1 ring-wine/5">
                  <Image
                    src="/plataforma/crm-kanban.jpg"
                    alt="CRM em Kanban do AIOS: pacientes em colunas Prospecção, Contrato, Visita, Reclamação e Retenção, cada card com ticket, status e atendente."
                    width={1802}
                    height={943}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
                    className="h-auto w-full"
                  />
                </div>

                <p className="mt-3 px-1 text-[0.72rem] text-wine/45">
                  Visão real do funil de pacientes — da primeira consulta ao retorno e reativação.
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
