"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problemas", label: "Desafios" },
  { href: "#solucao", label: "Solução" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#resultados", label: "Resultados" },
];

export function Navbar() {
  const [pinned, setPinned] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setPinned(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.body.style.overflow = "";
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 z-50 w-full py-5 transition-all duration-500",
          pinned && "bg-cream/90 py-3.5 shadow-[0_1px_0_rgba(196,164,107,.2)] backdrop-blur-2xl backdrop-saturate-150"
        )}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-7">
          <a href="#" className="font-serif text-xl font-medium tracking-tight text-wine">
            <span className="text-rose">AIOS</span>&thinsp;CRM
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[0.8rem] font-medium tracking-wide text-wine/50 transition-colors hover:text-wine"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contato")}
              className="rounded-full bg-wine px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-wine/20"
            >
              Demonstração
            </button>
          </div>

          <button
            className="flex flex-col gap-[5px] p-1 lg:hidden"
            onClick={() => { setMobileOpen(!mobileOpen); document.body.style.overflow = !mobileOpen ? "hidden" : ""; }}
            aria-label="Menu"
          >
            <span className={cn("h-[1.5px] w-5 rounded bg-wine transition-all", mobileOpen && "translate-y-[6.5px] rotate-45")} />
            <span className={cn("h-[1.5px] w-5 rounded bg-wine transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("h-[1.5px] w-5 rounded bg-wine transition-all", mobileOpen && "-translate-y-[6.5px] -rotate-45")} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-cream/[.97] backdrop-blur-[40px]"
          >
            {[...links, { href: "#contato", label: "Demonstração" }].map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-serif text-2xl text-wine transition-colors hover:text-rose"
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
