import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Aufbauservice - Braun Hausmeisterservice",
  description: "Professioneller Aufbauservice im Raum Koblenz und Mittelrhein. GartenmÃ¶bel, KÃ¼chen, SpielgerÃ¤te, GewÃ¤chshÃ¤user und mehr fachgerecht montiert. Jetzt unverbindlich anfragen!",
};

const serviceName = "Aufbauservice";

const advantages = [
  "Professionelle AusfÃ¼hrung",
  "Faire Preise", 
  "ZuverlÃ¤ssige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function AufbauservicePage() {
  return (
    <>
      <ServiceHero
        title="Aufbauservice"
        subtitle="Professioneller Aufbauservice"
        description="Möbel, Küchen und andere Einrichtungsgegenstände fachgerecht montiert. Sparen Sie Zeit und Nerven - wir übernehmen den Aufbau für Sie."
        backgroundImage="/Küchenaufbau.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}