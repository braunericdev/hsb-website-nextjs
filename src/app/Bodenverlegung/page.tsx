import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Bodenverlegung - Braun Hausmeisterservice",
  description: "Professionelle Bodenverlegung im Raum Koblenz und Mittelrhein. Wir verlegen Laminat, Vinyl und Teppichböden in höchster Qualität. Jetzt unverbindlich anfragen!",
};

const serviceName = "Bodenverlegung";

const advantages = [
  "Verschiedene Bodenbeläge (Laminat, Vinyl, Teppich)",
  "Saubere und präzise Arbeit",
  "Faire Preise",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function BodenverlegungPage() {
  return (
    <>
      <ServiceHero
        title="Bodenverlegung"
        subtitle="Professionelle Bodenverlegung"
        description="Verleien Sie Ihrem Zuhause neues Leben! Wir verlegen Laminat, Vinyl und Teppichböden sauber, präzise und zu fairen Preisen."
        backgroundImage="/laminat.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}