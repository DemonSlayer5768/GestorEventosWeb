"use client";
import React, { useEffect, useState } from "react";
// import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Image from "next/image";

const Header = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Si el scroll está en la parte superior, será false
    };

    const handleScrollMobile = () => {
      setIsMobile(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrollMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScrollMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition duration-300 ${
        isScrolled ? "shadow-md bg-none" : "bg-transparent"
      } ${isMobile ? "bg-[#021024] text-white" : " bg-transparent"}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10 h-20">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logoEventify.svg"
                alt="Eventify Logo"
                width={220}
                height={0}
                quality={100}
              />
            </Link>
          </div>
          <div className="-mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md hover:bg-[#5483b3] transition duration-300${
                isScrolled ? "bg-blue-400 text-white" : ""
              }`}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <nav
            className={`hidden md:flex space-x-10 ${
              isScrolled ? "  px-2 py-2 rounded-xl text-white  " : ""
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600 transition duration-300"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-600 transition duration-300"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="hover:text-blue-600 transition duration-300"
            >
              Paquetes
            </button>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signin">
              <IoPersonCircleOutline className="w-8 h-8 hover:text-[#c1e8ff] transition duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden w-64  bg-[#021024] text-white shadow-md fixed top-20 right-0 z-50">
          <div className=" px-4 pt-4 pb-2 space-y-3 ">
            <Link
              href="/signin"
              onClick={toggleMenu}
              className="flex items-center gap-2 py-2 hover:bg-[#7da0ca] rounded-md transition"
            >
              <IoPersonCircleOutline className="w-6 h-6" /> Iniciar Sesión
            </Link>
            <button
              onClick={() => {
                scrollToSection("about");
                toggleMenu();
              }}
              className="block w-full text-left py-2 hover:bg-[#7da0ca] rounded-md transition"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => {
                scrollToSection("services");
                toggleMenu();
              }}
              className="block w-full text-left py-2 hover:bg-[#7da0ca] rounded-md transition"
            >
              Servicios
            </button>
            <button
              onClick={() => {
                scrollToSection("packages");
                toggleMenu();
              }}
              className="block w-full text-left py-2 hover:bg-[#7da0ca] rounded-md transition"
            >
              Paquetes
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
