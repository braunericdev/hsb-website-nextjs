import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Grundstückspflege | BRAUN Hausmeisterservice",
  description: "Professionelle Grundstückspflege im Raum Koblenz und Mittelrhein. Freischneiden, Unkrautentfernung und Geländepflege. Jetzt unverbindlich anfragen!",
};

const serviceName = "Grundstückspflege";

const advantages = [
  "Professionelle Ausführung",
  "Faire Preise", 
  "Zuverlässige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function GrundstueckspflegePage() {
  return (
    <>
      <ServiceHero
        title="Grundstückspflege"
        subtitle="Professionelle Grundstückspflege"
        description="Umfassende Pflege Ihres gesamten Grundstücks. Von Freischneiden bis Geländepflege - wir halten Ihr Eigentum in perfektem Zustand."
        backgroundImage="/freischneiden_nachher2.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}