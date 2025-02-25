"use client";
import React, { useRef } from "react";
import Header from "@Components/Home/Header";
import Footer from "@Components/Home/footer";
import TextHero from "@Components/Home/textHero";
import Pricing from "@Components/Home/PricingCardsTemplate";
import AboutUs from "@Components/Home/AboutUs";
import Services from "@Components/Home/Services";

export default function HomeMain() {
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

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={packagesRef}>
        <Pricing />
      </div>

      <Footer />
    </div>
  );
}
