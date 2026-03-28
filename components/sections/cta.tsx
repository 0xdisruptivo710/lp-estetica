"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "5511999999999";
const WA_MSG = "Olá! Gostaria de saber mais sobre o AIOS CRM para minha clínica de estética facial e corporal.";

function formatPhone(val: string) {
  let v = val.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 7) return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  if (v.length > 2) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  if (v.length) return `(${v}`;
  return v;
}

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nome: "", whatsapp: "", cidade: "", clinica: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!form.nome.trim()) errs.nome = true;
    if (form.whatsapp.replace(/\D/g, "").length < 10) errs.whatsapp = true;
    if (!form.cidade.trim()) errs.cidade = true;
    if (!form.clinica.trim()) errs.clinica = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      fetch("https://aios-n8n-webhook.yspmhc.easypanel.host/webhook/lp-estetica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => {});
      setSubmitted(true);
    }
  };

  const inputCls = (field: string) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3.5 text-[0.92rem] text-cream placeholder:text-cream/20 transition-all focus:border-rose focus:shadow-[0_0_0_3px_rgba(201,120,138,.12)] outline-none ${
      errors[field] ? "border-red-400 shadow-[0_0_0_3px_rgba(229,115,115,.12)]" : "border-gold/10"
    }`;

  return (
    <section id="contato" className="relative overflow-hidden bg-wine py-28 text-cream lg:py-32">
      {/* Background */}
      <Particles className="absolute inset-0" quantity={35} color="#C4A46B" size={0.3} staticity={70} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_50%,rgba(201,120,138,.08),transparent),radial-gradient(ellipse_40%_40%_at_85%_30%,rgba(196,164,107,.05),transparent)]" />

      {/* Decorative side image */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 opacity-[0.03]">
        <Image
          src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=600&q=80"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-7">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="text-center lg:text-left">
            <BlurFade inView>
              <span className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
                Comece agora
              </span>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-cream">
                Comece hoje.<br /><em className="italic text-blush">Sua clínica merece.</em>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="my-5 text-base font-light leading-relaxed text-cream/45">
                Preencha o formulário e receba um diagnóstico gratuito. Sem compromisso.
                Vamos mostrar o que o AIOS CRM pode fazer pela sua clínica.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="flex items-center gap-3 rounded-2xl border border-rose/10 bg-rose/[0.08] px-4 py-3.5 text-[0.88rem] text-cream/45 lg:justify-start justify-center">
                <span className="shrink-0">&#10047;</span>
                <span>Cada paciente sem retorno é uma oportunidade de cuidado — e de faturamento — que não volta.</span>
              </div>
            </BlurFade>
          </div>

          {/* Form card */}
          <BlurFade inView delay={0.2} direction="right">
            <div className="relative rounded-[22px] border border-gold/10 bg-white/[0.04] p-8 backdrop-blur-2xl sm:p-10">
              {/* Gradient border effect */}
              <div className="pointer-events-none absolute inset-[-1px] rounded-[22px] p-px [background:linear-gradient(160deg,rgba(196,164,107,.25),transparent_40%,rgba(201,120,138,.15))] [mask-composite:exclude] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-7 text-center font-serif text-xl text-cream">
                      Solicite sua demonstração
                    </div>

                    <div className="mb-4">
                      <label className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream/30">Seu nome</label>
                      <input
                        className={inputCls("nome")}
                        placeholder="Como podemos te chamar?"
                        value={form.nome}
                        onChange={(e) => { setForm({ ...form, nome: e.target.value }); setErrors({ ...errors, nome: false }); }}
                      />
                    </div>

                    <div className="mb-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream/30">WhatsApp</label>
                        <input
                          className={inputCls("whatsapp")}
                          placeholder="(11) 99999-9999"
                          value={form.whatsapp}
                          onChange={(e) => { setForm({ ...form, whatsapp: formatPhone(e.target.value) }); setErrors({ ...errors, whatsapp: false }); }}
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream/30">Cidade</label>
                        <input
                          className={inputCls("cidade")}
                          placeholder="Sua cidade"
                          value={form.cidade}
                          onChange={(e) => { setForm({ ...form, cidade: e.target.value }); setErrors({ ...errors, cidade: false }); }}
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream/30">Nome da clínica</label>
                      <input
                        className={inputCls("clinica")}
                        placeholder="Nome da sua clínica ou studio"
                        value={form.clinica}
                        onChange={(e) => { setForm({ ...form, clinica: e.target.value }); setErrors({ ...errors, clinica: false }); }}
                      />
                    </div>

                    <ShimmerButton
                      type="submit"
                      className="w-full text-[0.8rem] font-semibold uppercase tracking-widest"
                      background="rgba(201,120,138,1)"
                    >
                      Quero o AIOS na minha clínica
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-3.5 w-3.5">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </ShimmerButton>

                    <div className="mt-5 text-center text-[0.8rem] text-cream/25">
                      Prefere conversar agora?{" "}
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-green-400 transition-colors hover:text-green-300"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        WhatsApp
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-400 text-xl text-green-400"
                    >
                      &#10003;
                    </motion.div>
                    <h3 className="mb-2 font-serif text-xl text-cream">Recebemos seu contato!</h3>
                    <p className="text-[0.9rem] font-light text-cream/45">
                      Em breve, uma especialista AIOS vai falar com você pelo WhatsApp.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
