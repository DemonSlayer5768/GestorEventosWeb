import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <HeroSection />
    </div>
  );
}
