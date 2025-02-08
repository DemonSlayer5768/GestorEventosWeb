"use client";
import React, { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import TextHero from "./components/textHero";
import Pricing from "./components/PricingCardsTemplate";
import AboutUs from "./components/AboutUs";
import ViewServicesHero from "./components/Services";

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

        <Header scrollToSection={scrollToSection} />
        <div className="relative z-10 p-40">
          <TextHero />
        </div>
      </div>

      <div ref={aboutRef}>
        <AboutUs />
      </div>

      <div ref={servicesRef}>
        <ViewServicesHero />
      </div>

      <div ref={packagesRef}>
        <Pricing />
      </div>

      <Footer />
    </div>
  );
}
