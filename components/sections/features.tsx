"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  {
    num: "01",
    title: "IA de Atendimento",
    desc: "Agente humanizado que acolhe a paciente, apresenta procedimentos e qualifica o lead com discrição e empatia — 24h por dia, 7 dias por semana.",
    gradient: "linear-gradient(135deg, rgba(201,120,138,0.22) 0%, rgba(74,21,48,0.08) 100%)",
    shape: "circle",
    span: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "CRM Kanban Visual",
    desc: "Visualize toda a jornada da paciente em tempo real — da primeira consulta ao protocolo concluído.",
    gradient: "radial-gradient(circle at 30% 40%, rgba(196,164,107,0.28) 0%, rgba(250,247,245,0.5) 70%, rgba(255,255,255,1) 100%)",
    shape: "diamond",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Disparos Segmentados",
    desc: "Comunicações personalizadas por procedimento e perfil via API oficial do WhatsApp Business.",
    gradient: "linear-gradient(160deg, rgba(74,21,48,0.16) 0%, rgba(201,120,138,0.08) 50%, rgba(255,255,255,1) 100%)",
    shape: "lines",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Reativação Inteligente",
    desc: "Identifique pacientes que sumiram após a primeira sessão e reconquiste-as com mensagens acolhedoras e automáticas, no momento certo.",
    gradient: "linear-gradient(120deg, rgba(242,196,206,0.3) 0%, rgba(196,164,107,0.08) 60%, rgba(255,255,255,1) 100%)",
    shape: "rings",
    span: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Gestão de Agenda",
    desc: "Agendamentos, confirmações e lembretes automáticos para sessões, retornos e protocolos.",
    gradient: "radial-gradient(circle at 70% 30%, rgba(196,164,107,0.24) 0%, rgba(74,21,48,0.04) 60%, rgba(255,255,255,1) 100%)",
    shape: "dots",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Painel da Equipe",
    desc: "Controle profissionais, conversas e números em um único painel centralizado com permissões.",
    gradient: "linear-gradient(145deg, rgba(74,21,48,0.14) 0%, rgba(242,196,206,0.12) 50%, rgba(255,255,255,1) 100%)",
    shape: "square",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Relatórios de Tráfego",
    desc: "Rastreamento completo das campanhas — saiba qual anúncio trouxe cada paciente e o ROI real.",
    gradient: "linear-gradient(135deg, rgba(196,164,107,0.3) 0%, rgba(74,21,48,0.06) 100%)",
    shape: "bars",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3" />
        <path d="m7 14 4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Recuperação de Pacientes",
    desc: "Reative pacientes inativas com comunicações personalizadas no momento ideal do ciclo de tratamento.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(201,120,138,0.22) 0%, rgba(242,196,206,0.06) 60%, rgba(255,255,255,1) 100%)",
    shape: "circle",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

function ShapeDecoration({ shape, span }: { shape: string; span?: boolean }) {
  switch (shape) {
    case "circle":
      return (
        <>
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-rose/[0.12] transition-transform duration-700 group-hover:scale-125" />
          <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-gold/[0.1] transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute right-[20%] top-[28%] h-3 w-3 rounded-full bg-rose/15 transition-all duration-500 group-hover:scale-150" />
          {span && <div className="absolute left-[60%] top-[35%] h-2 w-2 rounded-full bg-gold/15" />}
        </>
      );
    case "diamond":
      return (
        <>
          <div className="absolute -right-4 top-4 h-20 w-20 rotate-45 border border-gold/[0.12] transition-transform duration-700 group-hover:rotate-[60deg]" />
          <div className="absolute -bottom-3 left-8 h-14 w-14 rotate-45 border border-rose/[0.08] transition-transform duration-700 group-hover:rotate-[30deg]" />
          <div className="absolute left-[35%] top-[25%] h-2 w-2 rotate-45 bg-gold/20" />
        </>
      );
    case "lines":
      return (
        <>
          <div className="absolute right-6 top-4 h-px w-16 bg-wine/[0.08] transition-all duration-500 group-hover:w-24" />
          <div className="absolute right-10 top-8 h-px w-10 bg-rose/[0.1] transition-all duration-500 group-hover:w-16" />
          <div className="absolute left-6 bottom-6 h-px w-12 bg-gold/[0.1] transition-all duration-500 group-hover:w-20" />
          <div className="absolute left-10 bottom-10 h-px w-8 bg-wine/[0.06]" />
        </>
      );
    case "rings":
      return (
        <>
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border-2 border-dashed border-rose/[0.08] transition-transform duration-1000 group-hover:rotate-45" />
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border-2 border-dashed border-gold/[0.08] transition-transform duration-1000 group-hover:-rotate-45" />
          <div className="absolute right-[30%] bottom-[30%] h-2 w-2 rounded-full bg-rose/20" />
          {span && <div className="absolute left-[55%] top-[40%] h-1.5 w-1.5 rounded-full bg-gold/20" />}
        </>
      );
    case "dots":
      return (
        <>
          <div className="absolute right-5 top-5 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, j) => (
              <div key={j} className="h-1.5 w-1.5 rounded-full bg-gold/[0.12] transition-all duration-300 group-hover:bg-gold/25" />
            ))}
          </div>
          <div className="absolute bottom-5 left-5 grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="h-1.5 w-1.5 rounded-full bg-rose/[0.1]" />
            ))}
          </div>
        </>
      );
    case "square":
      return (
        <>
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl border border-wine/[0.08] transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-lg border border-rose/[0.08] transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute right-[28%] top-[35%] h-2 w-2 rounded-sm bg-wine/10" />
        </>
      );
    case "bars":
      return (
        <>
          <div className="absolute bottom-4 right-6 flex items-end gap-1.5">
            <div className="h-6 w-2 rounded-t-sm bg-gold/[0.12] transition-all duration-300 group-hover:h-8" />
            <div className="h-10 w-2 rounded-t-sm bg-gold/[0.16] transition-all duration-300 group-hover:h-12" />
            <div className="h-8 w-2 rounded-t-sm bg-gold/[0.1] transition-all duration-300 group-hover:h-10" />
            <div className="h-14 w-2 rounded-t-sm bg-gold/[0.18] transition-all duration-300 group-hover:h-16" />
          </div>
          <div className="absolute left-6 top-5 h-px w-10 bg-rose/[0.1]" />
          <div className="absolute left-6 top-8 h-px w-6 bg-rose/[0.08]" />
        </>
      );
    default:
      return null;
  }
}

export function Features() {
  return (
    <section id="funcionalidades" className="relative bg-white py-28 lg:py-32">
      {/* Top decorative line */}
      <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-[1100px] px-7">
        <div className="mb-16 text-center">
          <BlurFade inView>
            <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose">
              Funcionalidades
            </span>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-wine">
              Tudo que sua clínica precisa.<br />
              <em className="italic">Com a delicadeza que ela merece.</em>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <p className="mx-auto mt-4 max-w-[520px] text-[1.05rem] font-light leading-relaxed text-wine/50">
              Cada funcionalidade pensada para quem cuida de mulheres com sensibilidade.
            </p>
          </BlurFade>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <BlurFade key={i} inView delay={0.06 * i}>
              <MagicCard
                className={`h-full ${f.span ? "lg:col-span-2" : ""}`}
                gradientColor="rgba(201,120,138,0.08)"
              >
                <div className="relative overflow-hidden p-0">
                  {/* Gradient header */}
                  <div
                    className="relative h-44 overflow-hidden rounded-t-2xl"
                    style={{ background: f.gradient }}
                  >
                    {/* Unique decorative shapes per card */}
                    <ShapeDecoration shape={f.shape} span={f.span} />

                    {/* Centered icon */}
                    <div className="flex h-full items-center justify-center">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-white/80 shadow-lg shadow-wine/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-rose/10">
                        <div className="scale-[1.35]">{f.icon}</div>
                      </div>
                    </div>

                    {/* Number badge */}
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-wine/[0.06] backdrop-blur-sm">
                      <span className="text-[0.65rem] font-semibold text-wine/40">{f.num}</span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 pt-5">
                    <h3 className="mb-2 font-serif text-lg font-medium text-wine">{f.title}</h3>
                    <p className="text-[0.88rem] font-light leading-relaxed text-wine/50">{f.desc}</p>
                  </div>

                  {/* Hover gold line */}
                  <div className="absolute left-6 right-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-rose to-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
