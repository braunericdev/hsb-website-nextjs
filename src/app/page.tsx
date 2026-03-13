import { Metadata } from "next";
import Hero from "@/components/hero"
import Card from "@/components/card"
import Refs from "@/components/refs"
import Kontakt from "@/components/kontakt"
import Banner from "@/components/banner"

export const metadata: Metadata = {
  title: "Braun Hausmeisterservice - Rund-um-Immobilienpflege aus einer Hand im Kreis Koblenz und Neuwied",
  description: "Gebäudereinigung, Grundstückspflege, Gärtnerarbeiten und vieles Mehr. Professionell, zuverlässig und preiswert!"
};


export default function Home() {
  return (
    <>
    <Hero/>
    <Card/>
    <Banner/>
    <Refs/>
    <Kontakt/>
    </>
  );
}
