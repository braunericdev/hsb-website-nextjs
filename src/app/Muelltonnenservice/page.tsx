import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Mülltonnenservice | BRAUN Hausmeisterservice",
  description: "Professioneller Rollrasen-Service im Raum Koblenz und Mittelrhein. Rollrasen verlegen, Bodenvorbereitung, Anwachspflege und Garantie. Jetzt unverbindlich anfragen!",
};

const serviceName = "Mülltonnenservice";

const advantages = [
  "Professionelle Ausführung",
  "Faire Preise", 
  "Zuverlässige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function MülltonnenservicePage() {
  return (
    <>
      <ServiceHero
        title="Mülltonnenservice"
        subtitle="Zuverlässiger Mülltonnenservice"
        description="Vergessen Sie nie wieder die Mülltonnen! Wir übernehmen das Rausstellen und Reinholen Ihrer Mülltonnen zuverlässig und pünktlich."
        backgroundImage="/mülltonnen.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}