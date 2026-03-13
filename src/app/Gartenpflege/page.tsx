import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Gartenpflege | BRAUN Hausmeisterservice",
  description: "Professionelle Gartenpflege im Raum Koblenz und Mittelrhein. Rasenpflege, Baumpflege, Beetpflege, BewÃ¤sserung und Gartengestaltung. Jetzt unverbindlich anfragen!",
};

const serviceName = "Gartenpflege";

const advantages = [
  "Professionelle Ausführung",
  "Faire Preise", 
  "Zuverlässige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function GartenpflegePage() {
  return (
    <>
      <ServiceHero
        title="Gartenpflege - Heckenschnitt & mehr"
        subtitle="Professionelle Gartenpflege"
        description="Halten Sie Ihren Garten das ganze Jahr über in perfektem Zustand. Von Rasenmähen bis Heckenschnitt - wir kümmern uns um alles."
        backgroundImage="/sexy_rasen1.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}