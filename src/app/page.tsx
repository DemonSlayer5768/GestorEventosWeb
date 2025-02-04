import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import HeroSectionBoda from "./components/HeroSectionBoda";
import TextHero from "./components/textHero";

export default function Home() {
  return (
    // <div className="w-full h-full relative">
    <div>
      <div className="w-full h-dvh">
        <div className="absolute inset-0 bg-[url('/Principaleventos.jpg')] bg-cover bg-center bg-no-repeat opacity-70">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10">
          <Header />
          <TextHero />
        </div>
      </div>
      <div className="">
        <HeroSectionBoda />
      </div>
      <Footer />
    </div>
  );
}
