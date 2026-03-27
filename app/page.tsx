import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Problems } from "@/components/sections/problems";
import { Solution } from "@/components/sections/solution";
import { Services } from "@/components/sections/services";
import { Features } from "@/components/sections/features";
import { Trust } from "@/components/sections/trust";
import { Results } from "@/components/sections/results";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Problems />
      <Solution />
      <Services />
      <Features />
      <Trust />
      <Results />
      <HowItWorks />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
