"use client";
import React, { useRef } from "react";
import Header from "./components/Principal/Header";
import Footer from "./components/Principal/footer";
import TextHero from "./components/Principal/textHero";
import Pricing from "./components/Principal/PricingCardsTemplate";
import AboutUs from "./components/Principal/AboutUs";
// import ViewServicesHero from "./components/Principal/viewServicesHero";

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
        <div className="absolute inset-0 bg-[url('/Principaleventos.jpg')] bg-cover md:bg-fixed bg-center bg-no-repeat opacity-70">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </div>

        <div className="relative">
          <Header scrollToSection={scrollToSection} />
          <TextHero />
        </div>
      </div>

      <div ref={aboutRef}>
        <AboutUs />
      </div>

      <div ref={servicesRef}>{/* <ViewServicesHero /> */}</div>

      <div ref={packagesRef} className="z-10">
        <Pricing />
      </div>

      <Footer />
    </div>
  );
}
