import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Gebäude- & Büroreinigung | BRAUN Hausmeisterservice",
  description: "Professionelle Gebäude- & Büroreinigung im Raum Koblenz und Mittelrhein. Büros, Fenster, Treppenhäuser, Sanitärbereiche und mehr. Für saubere Arbeits- und Wohnumgebungen. Jetzt anfragen!",
};

const serviceName = "Gebäudereinigung";

const advantages = [
  "Sorgfältige und zuverlässige Durchführung",
  "Flexible Termine (auch außerhalb der Bürozeiten)", 
  "Faire Preise",
  "Regional im Raum Koblenz, Neuwied und Mittelrhein"
];

export default function GebaeudeBueroreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Gebäude- & Büroreinigung"
        subtitle="Professionelle Gebäude- & Büroreinigung"
        description="Ihre Immobilie und Ihre Büroräume verdienen den besten Eindruck. Unsere professionelle Reinigung umfasst Büros, Fenster, Treppenhäuser, Sanitärbereiche und vieles mehr – für ein sauberes, repräsentatives Arbeits- und Wohnumfeld."
        backgroundImage="/treppenhaus.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}