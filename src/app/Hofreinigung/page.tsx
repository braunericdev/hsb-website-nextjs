import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Hofreinigung | BRAUN Hausmeisterservice",
  description: "Professionelle Hofreinigung im Raum Koblenz und Mittelrhein. Hochdruckreinigung, Imprägnierung, Unkrautentfernung und Schutzbehandlung. Jetzt unverbindlich anfragen!",
};

const serviceName = "Hofreinigung";

const advantages = [
  "Professionelle Ausführung",
  "Faire Preise", 
  "Zuverlässige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function HofreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Hofreinigung"
        subtitle="Professionelle Hofreinigung"
        description="Saubere Höfe, die beeindrucken! Mit Hochdruckreinigung, Imprägnierung und Unkrautentfernung bleibt Ihr Hof nicht nur sauber, sondern auch langfristig geschützt."
        backgroundImage="/hero_hofreinigung.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}