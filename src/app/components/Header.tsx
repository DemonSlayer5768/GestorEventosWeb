"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Laptop } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Laptop className="h-8 w-auto sm:h-10 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">
                Eventify
              </span>
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
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/features"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button>
              <Link href="/signin">Sign in</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Laptop className="h-8 w-auto text-primary" />
                </div>
                <div className="-mr-2">
                  <button onClick={toggleMenu}>
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/features"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <button className="w-full">
                <Link href="/signin">Sign in</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
