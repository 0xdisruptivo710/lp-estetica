import { BlurFade } from "@/components/ui/blur-fade";

const INSTAGRAM_URL = "https://www.instagram.com/aioscrm";

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
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do AIOS CRM"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-gold/10 text-cream/25 transition-all hover:-translate-y-0.5 hover:border-gold/25 hover:text-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className="text-[0.7rem] text-cream/10">
          &copy; 2025 AIOS CRM. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
