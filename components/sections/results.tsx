"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Particles } from "@/components/ui/particles";

const stats = [
  {
    target: 123,
    prefix: "R$ ",
    suffix: " mil",
    label: "Resgatados em recompras de inativas",
    source: "Cliente AIOS — Larissa Tieghi",
  },
  {
    target: 256,
    prefix: "",
    suffix: "",
    label: "Recompras de pacientes em um ciclo",
    source: "Cliente AIOS — Larissa Tieghi",
  },
  {
    target: 4,
    prefix: "",
    suffix: "",
    label: "Agendamentos em 48h pós-inauguração",
    source: "Face Doctor Recreio / RJ — Débora Osório",
  },
];

const testimonials = [
  {
    text: "Estamos com a IA da empresa AIOS que é fantástica e faz um atendimento muito humanizado. Inauguramos no dia 21/08/25 e até o dia 23/08/25 já tínhamos 4 agendamentos realizados por ela.",
    name: "Débora Osório",
    role: "Face Doctor — Recreio dos Bandeirantes / RJ",
    initials: "DO",
  },
  {
    text: "VENDAS AIOS: R$ 55.238,00. RESGATE INATIVO / RECOMPRA: R$ 123.446,90. 256 recompras dos nossos clientes que a equipe trabalha.",
    name: "Larissa Tieghi",
    role: "Cliente AIOS",
    initials: "LT",
  },
  {
    text: "A Sophia tá querendo ganhar a placa de funcionária do mês. Agendou uma cliente de boa — em 20 minutos a cliente já está aqui.",
    name: "Thais Infante",
    role: "Cliente AIOS",
    initials: "TI",
  },
  {
    text: "A cada evidência sua só comprova que tomamos a decisão certa.",
    name: "Thayná",
    role: "Cliente AIOS",
    initials: "TH",
  },
];

const screenshots = [
  {
    src: "/depoimentos/dep-03-debora-face-doctor.jpg",
    alt: "Mensagem de Débora Osório, da Face Doctor Recreio dos Bandeirantes/RJ, relatando 4 agendamentos em 48h após inauguração com a IA Sophia da AIOS.",
  },
  {
    src: "/depoimentos/dep-04-larissa-tieghi.jpg",
    alt: "Print do relatório enviado por Larissa Tieghi: R$55.238 em vendas AIOS, R$123.446,90 em resgate de inativas, 256 recompras totais.",
  },
  {
    src: "/depoimentos/dep-02-thais-infante.jpg",
    alt: "Mensagem de Thais Infante celebrando a Sophia agendando uma paciente que chegou em 20 minutos.",
  },
  {
    src: "/depoimentos/dep-01-thayna.jpg",
    alt: "Mensagem de cliente para Felipe: 'a cada evidência sua só comprova que tomamos a decisão certa'.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-wine py-28 text-cream lg:py-32">
      {/* Background effects */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={40}
        color="#C4A46B"
        size={0.3}
        staticity={60}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_45%_50%_at_15%_40%,rgba(201,120,138,.1),transparent),radial-gradient(ellipse_40%_40%_at_85%_60%,rgba(196,164,107,.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-7">
        {/* Header */}
        <div className="mb-16 text-center">
          <BlurFade inView>
            <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Resultados reais
            </span>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-cream">
              Números de operações reais.<br />
              <em className="italic text-blush">Atribuídos. Verificáveis.</em>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <p className="mx-auto mt-4 max-w-[560px] text-[1.02rem] font-light leading-relaxed text-cream/60">
              Sem médias do setor, sem promessas redondas. Cada número abaixo veio de uma clínica em produção com o AIOS.
            </p>
          </BlurFade>
        </div>

        {/* Stats */}
        <div className="mb-20 grid gap-10 border-b border-gold/10 pb-16 md:grid-cols-3">
          {stats.map((s, i) => (
            <BlurFade key={i} inView delay={0.15 * i}>
              <div className="text-center">
                <div className="mb-2 font-serif text-[clamp(3rem,6vw,4.5rem)] font-normal leading-none tracking-tight text-gold">
                  <AnimatedCounter
                    target={s.target}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mb-2 text-[0.92rem] text-cream/70">{s.label}</div>
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-gold/60">
                  {s.source}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <BlurFade key={i} inView delay={0.1 * i}>
              <div className="group h-full rounded-2xl border border-gold/10 bg-cream/[0.04] p-8 transition-all duration-400 hover:-translate-y-1 hover:bg-cream/[0.07] hover:shadow-2xl hover:shadow-black/15">
                <div className="mb-4 font-serif text-4xl leading-none text-gold/50">&ldquo;</div>
                <p className="mb-6 text-[0.95rem] font-light leading-relaxed text-cream/75">
                  {t.text}
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-rose/20 ring-2 ring-gold/20">
                    <span className="text-[0.8rem] font-bold text-rose">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-cream">{t.name}</div>
                    <div className="text-[0.78rem] text-cream/55">{t.role}</div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Real screenshots */}
        <div>
          <BlurFade inView>
            <div className="mb-8 text-center">
              <span className="mb-3 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold/80">
                Evidência direta
              </span>
              <h3 className="font-serif text-[clamp(1.4rem,2.6vw,1.9rem)] font-normal leading-tight tracking-tight text-cream">
                Mensagens recebidas de clientes AIOS
              </h3>
            </div>
          </BlurFade>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {screenshots.map((shot, i) => (
              <BlurFade key={shot.src} inView delay={0.08 * i}>
                <figure className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-black/30 shadow-xl shadow-black/30 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25">
                  <div className="relative aspect-[9/19.5] w-full">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </figure>
              </BlurFade>
            ))}
          </div>

          <BlurFade inView delay={0.4}>
            <p className="mt-6 text-center text-[0.78rem] text-cream/40">
              Capturas reais. Compartilhadas com autorização. Algumas informações pessoais foram preservadas pelo próprio cliente.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
