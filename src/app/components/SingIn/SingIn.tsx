"use client";

import type React from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { IoPersonCircle } from "react-icons/io5";
import { useLogin } from "@Hooks/useLogin";
import CircularIndeterminate from "@Components/ui/ProgresSpin";

export default function LoginForm({
  toggleForms,
}: {
  toggleForms: () => void;
}) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    showPassword,
    togglePassword,
    handleSubmit,
    loading,
  } = useLogin();

  return (
    <div className="h-full w-full">
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl bg-white">
          {loading && ( // Muestra el spinner cuando loading es true
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
              <CircularIndeterminate />
            </div>
          )}

          <div className={`p-8 ${loading ? "opacity-50" : "opacity-100"}`}>
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
                    autoComplete="email"
                    className="pl-10 w-full h-12 rounded-md text-gray-900"
                    disabled={loading} // Desactiva los inputs cuando loading es true
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
                    autoComplete="current-password"
                    className="pl-10 w-full h-12 rounded-md text-gray-900"
                    disabled={loading} // También desactiva este input
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-2.5 text-gray-400"
                    disabled={loading} // Evita cambiar la visibilidad mientras carga
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-center text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                className="w-full h-10 rounded-md bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
                disabled={loading} // Desactiva el botón mientras carga
              >
                Iniciar Sesión
              </button>
            </form>
          </div>

          <div className="pt-4 px-8 py-4 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <button
                onClick={toggleForms}
                className="font-medium text-blue-600 hover:text-blue-500"
                disabled={loading} // Evita cambiar de formulario mientras carga
              >
                Registrarse
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
