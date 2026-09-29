import { Calculator } from "@/components/mudando/Calculator";
import { Checklist } from "@/components/mudando/Checklist";
import { Comparison } from "@/components/mudando/Comparison";
import { DayComparison } from "@/components/mudando/DayComparison";
import { FAQ } from "@/components/mudando/FAQ";
import { FinalCTA, SiteFooter } from "@/components/mudando/FooterCta";
import { Guarantees } from "@/components/mudando/Guarantees";
import { Hero } from "@/components/mudando/Hero";
import { HowItWorks } from "@/components/mudando/HowItWorks";
import { Packs } from "@/components/mudando/Packs";
import { SiteHeader } from "@/components/mudando/SiteHeader";
import { SpeedComparison } from "@/components/mudando/SpeedComparison";
import { StatsBand } from "@/components/mudando/StatsBand";
import { Testimonials } from "@/components/mudando/Testimonials";
import { WhatsAppButton } from "@/components/mudando/WhatsAppButton";

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <HowItWorks />
        <Guarantees />
        <Comparison />
        <SpeedComparison />
        <DayComparison />
        <Packs />
        <Calculator />
        <Checklist />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
