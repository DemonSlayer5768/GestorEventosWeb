"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { IoPersonCircle } from "react-icons/io5";
import { useRoutes } from "@Hooks/useRoutes";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const routes = useRoutes();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Porfavor llena todos los datos");
      return;
    }

    // Here you would typically handle the login logic
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl  bg-white">
        <div className="p-8">
          <div className="flex justify-center">
            <IoPersonCircle className="text-gray-800 text-7xl" />
          </div>

          <h2 className="mb-6 text-center text-3xl p-4 font-bold text-gray-800">
            Iniciar Sesión
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-800"
              >
                Correo
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full h-12 rounded-md cursor-pointer text-gray-900 "
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2 pt-3">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-800"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full h-12 rounded-md  cursor-pointer text-gray-900 "
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 cursor-pointer"
                >
                  Recuerdame
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            {error && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}
            <button
              type="submit"
              className="w-full h-10 rounded-md  bg-blue-600 hover:bg-blue-700 "
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="pt-4  px-8 py-4 text-center">
          <p className="text-sm text-gray-600">
            No tienes cuenta?{" "}
            <Link
              href={routes.register}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
