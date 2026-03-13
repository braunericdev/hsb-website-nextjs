import { Metadata } from "next";
import ServiceHero from "@/components/serviceHero";
import ServiceAdvantages from "@/components/serviceAdvantages";
import ServiceCTA from "@/components/serviceCTA";
import ServiceDetails from "@/components/serviceDetailsTemp";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Winterdienst | BRAUN Hausmeisterservice",
  description: "Zuverlässiger Winterdienst im Raum Koblenz; Neuwied und Mittelrhein. Schneeräumung, Streudienst, Dachrinnenreinigung und 24h-Bereitschaft. Sicher durch den Winter!",
};

const serviceName = "Winterdienst";

const advantages = [
  "Professionelle Ausführung",
  "Faire Preise", 
  "Zuverlässige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

export default function WinterdienstPage() {
  return (
    <>
      <ServiceHero
        title="Winterdienst"
        subtitle="Zuverlässiger Winterdienst"
        description="Sicher durch den Winter! Professionelle Schneeräumung und Streudienst für Ihre Wege, Einfahrten und Parkplätze."
        backgroundImage="/hero_winterdienst2.webp"
      />
      <ServiceDetails serviceName={serviceName} />
      <ServiceAdvantages serviceName={serviceName} advantages={advantages} />
      <ServiceCTA serviceName={serviceName} />
    </>
  );
}