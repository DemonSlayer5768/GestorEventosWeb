"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@Components/login/SingIn";
import RegisterForm from "@Components/login/Register";

export default function LoginRegisterPage() {
  const [isSwapped, setIsSwapped] = useState(false);

  const toggleForms = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl bg-gradient-to-r from-[#021024] via-[#052659] to-[#052659]">
        {/* Sección Izquierda */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSwapped ? (
              <motion.div
                key="image1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <Image
                  src="/ImgsCarousel/ImgBoda6.jpg"
                  alt="Eventos principales"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-r-full"
                />
                <div className="absolute inset-0  rounded-l-2xl"></div>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <RegisterForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sección Derecha */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {isSwapped ? (
              <motion.div
                key="image2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <Image
                  src="/Copas.jpg"
                  alt="Centro de mesa"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-full"
                />
                <div className="absolute inset-0 rounded-r-2xl"></div>
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <LoginForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botón de Intercambio */}
        <button
          onClick={toggleForms}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          {isSwapped ? "Mostrar Login" : "Mostrar Registro"}
        </button>
      </div>
    </div>
  );
}
