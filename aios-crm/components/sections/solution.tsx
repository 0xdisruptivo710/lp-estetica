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
      {/* Decorative image strip */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.04]">
        <Image
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
          alt=""
          fill
          className="object-cover"
        />
      </div>

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
                O AIOS CRM é a plataforma de gestão feita para clínicas de estética íntima que
                querem crescer com discrição, reter pacientes com cuidado e profissionalizar
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

          {/* Chat mockup inside MagicCard */}
          <BlurFade inView delay={0.2} direction="right">
            <MagicCard className="mx-auto max-w-[500px] lg:mx-0">
              <div className="p-6">
                {/* Window chrome */}
                <div className="mb-4 flex items-center gap-2 border-b border-gold/10 pb-3.5">
                  <span className="h-[7px] w-[7px] rounded-full bg-red-300" />
                  <span className="h-[7px] w-[7px] rounded-full bg-amber-300" />
                  <span className="h-[7px] w-[7px] rounded-full bg-green-300" />
                  <span className="flex-1" />
                  <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-wine/30">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                    AIOS IA &bull; Ativa
                  </span>
                </div>

                {/* Chat */}
                <div className="flex flex-col gap-3">
                  <div className="self-end rounded-2xl rounded-br-sm bg-gradient-to-br from-rose to-[#d48a9a] px-4 py-3 text-[0.84rem] leading-relaxed text-white" style={{ maxWidth: "84%" }}>
                    <span className="mb-1 block text-[0.58rem] font-bold uppercase tracking-widest text-white/60">Paciente</span>
                    Oi, vi no Instagram sobre o rejuvenescimento íntimo. Queria saber mais, mas tenho um pouco de vergonha de perguntar...
                  </div>
                  <div className="self-start rounded-2xl rounded-bl-sm border border-gold/10 bg-cream px-4 py-3 text-[0.84rem] leading-relaxed text-wine/70" style={{ maxWidth: "84%" }}>
                    <span className="mb-1 block text-[0.58rem] font-bold uppercase tracking-widest text-rose">AIOS IA</span>
                    Olá! Fico feliz que tenha entrado em contato. Aqui você pode perguntar com total tranquilidade e sigilo. Posso te explicar como funciona e tirar todas as dúvidas. O que gostaria de saber?
                  </div>
                  <div className="self-end rounded-2xl rounded-br-sm bg-gradient-to-br from-rose to-[#d48a9a] px-4 py-3 text-[0.84rem] leading-relaxed text-white" style={{ maxWidth: "84%" }}>
                    <span className="mb-1 block text-[0.58rem] font-bold uppercase tracking-widest text-white/60">Paciente</span>
                    Dói? Quantas sessões precisa?
                  </div>
                  <div className="self-start rounded-2xl rounded-bl-sm border border-gold/10 bg-cream px-4 py-3 text-[0.84rem] leading-relaxed text-wine/70" style={{ maxWidth: "84%" }}>
                    <span className="mb-1 block text-[0.58rem] font-bold uppercase tracking-widest text-rose">AIOS IA</span>
                    O procedimento é tranquilo — usamos anestésico tópico. O protocolo padrão é de 3 sessões com intervalo de 30 dias. Posso verificar horários para uma avaliação gratuita?
                  </div>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
