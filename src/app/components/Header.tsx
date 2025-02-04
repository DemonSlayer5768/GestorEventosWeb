"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Image from "next/image";

const Header = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10 h-20">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logoEventify.svg"
                alt="Eventify Logo"
                width={320}
                height={160}
                className="w-80 h-40"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button onClick={toggleMenu}>
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Menú de navegación */}
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection("packages")}
              className="text-base font-medium text-white hover:text-blue-400"
            >
              Paquetes
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium text-white hover:text-blue-400"
            >
              Sobre Nosotros
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-medium text-white hover:text-blue-400"
            >
              Servicios
            </button>
          </nav>

          {/* Enlace para Sign In */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signin">
              <IoPersonCircleOutline className="w-20 h-7 hover:text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
