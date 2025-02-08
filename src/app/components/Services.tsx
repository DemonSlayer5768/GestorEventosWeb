"use client";
import HeroSectionBoda from "./HeroSectionBoda";

import { useState, useEffect } from "react";

export default function ViewServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover Our Range of Services
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore our comprehensive suite of professional services designed
              to meet your unique needs and drive your success.
            </p>
          </div>
          <div
            className={`transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-2xl font-semibold text-primary">
              Upcoming Events: Workshops, Webinars, and More!
            </p>
            <HeroSectionBoda />
          </div>
        </div>
      </div>
    </section>
  );
}
