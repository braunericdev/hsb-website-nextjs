import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Carport-, Terrassen- & Wintergartenreinigung - Braun Hausmeisterservice",
  description: "Professionelle Reinigung von Carports, Terrassen und WintergÃ¤rten im Raum Koblenz und Mittelrhein. GrÃ¼ndliche Entfernung von Schmutz, Moos und Algen fÃ¼r dauerhaften Werterhalt. Jetzt anfragen!",
};

const serviceName = "Außenanlagenreinigung";

const advantages = [
  "Gründliche Reinigung aller Außenbereiche",
  "Schonende Entfernung von Schmutz, Moos und Algen",
  "Faire Preise", 
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function CarportreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Carport-, Terrassen- & Wintergartenreinigung"
        subtitle="Professionelle Außenbereichsreinigung"
        description="Lassen Sie Ihre Außenbereiche wieder strahlen! Wir reinigen Carports, Terrassen und Wintergärten gründlich von Schmutz, Moos und Algen – für ein gepflegtes Erscheinungsbild und langanhaltende Freude."
        backgroundImage="/terassendach.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}