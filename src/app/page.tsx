"use client";
import React, { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import HeroSectionBoda from "./components/HeroSectionBoda";
import TextHero from "./components/textHero";
import PricingCards from "./components/PricingCardsTemplate";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const packagesRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    const sectionRefs: Record<
      string,
      React.RefObject<HTMLDivElement | null>
    > = {
      about: aboutRef,
      packages: packagesRef,
      services: servicesRef,
    };

    const targetRef = sectionRefs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="w-full h-dvh">
        <div className="absolute inset-0 bg-[url('/Principaleventos.jpg')] bg-cover bg-center bg-no-repeat opacity-70">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10">
          <Header scrollToSection={scrollToSection} />
          <TextHero />
        </div>
      </div>

      <div
        ref={packagesRef}
        className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 "
      >
        <PricingCards />
      </div>

      <div
        ref={aboutRef}
        className="container mx-auto px-4 py-16 sm:py-24 lg:py-32"
      >
        <h2 className="text-3xl font-bold">Sobre Nosotros</h2>
        <p>Información sobre la empresa...</p>
      </div>

      <div
        ref={servicesRef}
        className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 "
      >
        <h2 className="text-3xl font-bold">Servicios</h2>
        <p>Detalles de nuestros servicios...</p>
        <HeroSectionBoda />
      </div>

      <Footer />
    </div>
  );
}
