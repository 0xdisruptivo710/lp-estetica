"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  {
    num: "01",
    title: "IA de Atendimento",
    desc: "Agente humanizado que acolhe a paciente, apresenta procedimentos e qualifica o lead com discrição e empatia — 24h por dia, 7 dias por semana.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

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
                  {/* Card image */}
                  <div className="relative h-44 overflow-hidden rounded-t-2xl">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg shadow-wine/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      {f.icon}
                    </div>

                    {/* Number badge */}
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <span className="text-[0.65rem] font-semibold text-white">{f.num}</span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 pt-4">
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
