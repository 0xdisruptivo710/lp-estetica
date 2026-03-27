"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
    alt: "Profissional de estética",
    className: "absolute -left-4 top-1/4 hidden h-20 w-20 rounded-2xl lg:block",
    delay: 1.0,
    float: "animate-float-slow",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=300&q=80",
    alt: "Tratamento estético",
    className: "absolute -right-4 top-1/3 hidden h-24 w-24 rounded-2xl lg:block",
    delay: 1.2,
    float: "animate-float-medium",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80",
    alt: "Ambiente de spa",
    className: "absolute -left-8 bottom-1/4 hidden h-16 w-16 rounded-xl lg:block",
    delay: 1.4,
    float: "animate-float-fast",
  },
];

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
          alt="Clínica de estética moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine/85 via-wine/70 to-wine/90" />
      </div>

      {/* Particles overlay */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={80}
        color="#C9788A"
        size={0.6}
        staticity={40}
        ease={60}
      />

      {/* Radial washes */}
      <div className="pointer-events-none absolute -right-[10%] -top-[20%] z-[5] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(242,196,206,.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-[5%] bottom-[10%] z-[5] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(196,164,107,.08),transparent_70%)]" />

      {/* Content */}
      <div className="container relative z-20 mx-auto max-w-[1100px] px-7 pb-20 pt-36 text-center">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-9 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.04] px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-[0.72rem] font-medium tracking-wider text-cream/70">
              Mais de 120 clínicas de estética íntima automatizadas
            </span>
          </div>
        </BlurFade>

        {/* Floating images */}
        <div className="relative mx-auto max-w-[780px]">
          {floatingImages.map((img, i) => (
            <BlurFade key={i} delay={img.delay} inView>
              <div className={`${img.className} ${img.float} overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/20`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            </BlurFade>
          ))}

          <div className="mb-7">
            <TextGenerateEffect
              words="Sua clínica. Mais organizada. Suas pacientes. Mais fiéis."
              className="font-serif text-[clamp(2.8rem,6.5vw,5.2rem)] font-normal leading-[1.02] tracking-tight text-cream"
            />
          </div>
        </div>

        <BlurFade delay={0.6} inView>
          <p className="mx-auto mb-11 max-w-[540px] text-[1.08rem] font-light leading-relaxed text-cream/60">
            O AIOS CRM automatiza o atendimento da sua clínica de estética íntima, reativa pacientes
            que somem após o primeiro procedimento e organiza toda a sua equipe — com inteligência
            artificial discreta e no tom certo.
          </p>
        </BlurFade>

        <BlurFade delay={0.8} inView>
          <div className="flex flex-wrap justify-center gap-4">
            <ShimmerButton
              onClick={() => scrollTo("#contato")}
              shimmerColor="#ffffff"
              background="rgba(201,120,138,1)"
              className="text-[0.82rem] font-semibold uppercase tracking-wider"
            >
              Quero uma demonstração
              <ArrowIcon />
            </ShimmerButton>

            <button
              onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o AIOS CRM para minha clínica de estética íntima.")}`, "_blank")}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-green-500/30 bg-green-500/[0.06] px-7 py-4 text-[0.82rem] font-semibold tracking-wide text-green-400 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/15"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </button>
          </div>
        </BlurFade>

        {/* Scroll indicator */}
        <BlurFade delay={1.2} inView>
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream/30">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-[1px] bg-gradient-to-b from-cream/30 to-transparent"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
