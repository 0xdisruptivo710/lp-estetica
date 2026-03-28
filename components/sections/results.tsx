"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Particles } from "@/components/ui/particles";

const stats = [
  { target: 55, prefix: "+", suffix: "%", label: "Retorno de pacientes" },
  { target: 3, prefix: "", suffix: "x", label: "Agendamentos reativados" },
  { target: 0, prefix: "", suffix: "", label: "Leads sem resposta", countDown: true, from: 412 },
];

const testimonials = [
  {
    text: "A IA responde nossas pacientes de forma discreta e acolhedora — muitas nem percebem que é automação. O retorno para segunda sessão subiu 60% em dois meses.",
    name: "Face Doctor",
    initials: "FD",
  },
  {
    text: "Recuperamos mais de 30 pacientes inativas em menos de 3 meses. As mensagens eram tão naturais que achavam que era a própria equipe falando.",
    name: "Estudio Mais",
    initials: "EM",
  },
  {
    text: "Antes perdíamos horas respondendo DMs e WhatsApp. Agora a IA cuida de tudo enquanto focamos nos atendimentos. Agenda sempre cheia.",
    name: "Botoclinic",
    initials: "BC",
  },
  {
    text: "O agendamento automático com confirmação e lembrete reduziu nossas faltas em mais de 40%. A organização mudou completamente.",
    name: "Elevar",
    initials: "EL",
  },
  {
    text: "Finalmente sabemos qual campanha traz cada paciente. O controle sobre o tráfego pago e os leads melhorou radicalmente.",
    name: "Smile Skin",
    initials: "SS",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-wine py-28 text-cream lg:py-32">
      {/* Background effects */}
      <BackgroundBeams />
      <Particles
        className="absolute inset-0"
        quantity={40}
        color="#C4A46B"
        size={0.3}
        staticity={60}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_50%_at_15%_40%,rgba(201,120,138,.1),transparent),radial-gradient(ellipse_40%_40%_at_85%_60%,rgba(196,164,107,.06),transparent)]" />

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
              Números que traduzem cuidado<br />em <em className="italic text-blush">resultado.</em>
            </h2>
          </BlurFade>
        </div>

        {/* Stats */}
        <div className="mb-16 grid gap-8 border-b border-gold/10 pb-16 md:grid-cols-3">
          {stats.map((s, i) => (
            <BlurFade key={i} inView delay={0.15 * i}>
              <div className="text-center">
                <div className="mb-2 font-serif text-[clamp(3rem,6vw,4.5rem)] font-normal leading-none tracking-tight text-blush">
                  <AnimatedCounter
                    target={s.target}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    countDown={s.countDown}
                    from={s.from}
                  />
                </div>
                <div className="text-[0.88rem] text-cream/40">{s.label}</div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={i} inView delay={0.1 * i}>
              <div className="group rounded-2xl border border-gold/10 bg-cream/[0.04] p-8 transition-all duration-400 hover:-translate-y-1 hover:bg-cream/[0.07] hover:shadow-2xl hover:shadow-black/15">
                <div className="mb-4 font-serif text-4xl leading-none text-gold/50">&ldquo;</div>
                <p className="mb-6 text-[0.92rem] font-light italic leading-relaxed text-cream/60">
                  {t.text}
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-rose/20 ring-2 ring-gold/20">
                    <span className="text-[0.8rem] font-bold text-rose">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-[0.85rem] font-semibold text-cream">{t.name}</div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
