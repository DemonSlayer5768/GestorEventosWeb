"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { IoPersonCircle } from "react-icons/io5";
import { useRoutes } from "@Hooks/useRoutes";
import { useAuth } from "@Hooks/useAuth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const routes = useRoutes();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, llena todos los datos");
      return;
    }

    try {
      await login(email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Error al iniciar sesión");
      } else {
        setError("Error al iniciar sesión");
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#021024] via-[#052659] to-[#052659] h-full w-full">
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
              {/* <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm font-medium bg-white">
                O continúa con
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <svg
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                <span className="sr-only">Login with Apple</span>
              </button>

              <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <svg
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.48 10.92v3.28h7.84c..." />
                </svg>
                <span className="sr-only">Login with Google</span>
              </button>

              <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <svg
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.915 4.03c-1.968 0-..." />
                </svg>
                <span className="sr-only">Login with Facebook</span>
              </button>
            </div> */}

              <div className="flex items-center justify-between pt-4">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium  text-blue-600 hover:text-blue-500"
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
    </div>
  );
}
