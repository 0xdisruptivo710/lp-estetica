import { BlurFade } from "@/components/ui/blur-fade";

const socials = [
  {
    label: "Instagram",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
  },
  {
    label: "Facebook",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  },
  {
    label: "LinkedIn",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  },
];

export function Footer() {
  return (
    <footer className="bg-wine-dark py-12 pb-7">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-5 px-7">
        <BlurFade inView>
          <div className="font-serif text-lg text-cream/50">
            <span className="text-rose">AIOS</span>&thinsp;CRM
          </div>
        </BlurFade>

        <div className="flex flex-wrap justify-center gap-7">
          {["Política de Privacidade", "Termos de Uso", "Contato"].map((l) => (
            <a key={l} href="#" className="text-[0.78rem] text-cream/25 transition-colors hover:text-cream">
              {l}
            </a>
          ))}
        </div>

        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-gold/10 text-cream/25 transition-all hover:-translate-y-0.5 hover:border-gold/25 hover:text-gold"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="text-[0.7rem] text-cream/10">
          &copy; 2025 AIOS CRM. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
