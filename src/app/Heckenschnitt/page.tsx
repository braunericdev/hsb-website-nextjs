import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Heckenschnitt | BRAUN Hausmeisterservice",
  description: "Professioneller Heckenschnitt im Raum Koblenz und Mittelrhein. Formschnitt, RÃ¼ckschnitt, Verjüngungsschnitt mit GrÃ¼nschnitt-Entsorgung. Jetzt unverbindlich anfragen!",
};

const serviceName = "Heckenschnitt";

const advantages = [
  "Professionelle Schnitttechniken für gesunde Hecken",
  "Grünschnitt-Entsorgung inklusive",
  "Termingerechte Ausführung",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function HeckenschnittPage() {
  return (
    <>
      <ServiceHero
        title="Professioneller Heckenschnitt"
        subtitle="Saubere Schnitte für gesunde Pflanzen"
        description="Gepflegte Hecken das ganze Jahr über! Vom Formschnitt bis zum Verjüngungsschnitt - wir sorgen für gesunde und schöne Hecken. Grünschnitt-Entsorgung inklusive!"
        backgroundImage="/hecke_nachher.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}
