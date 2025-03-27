"use client";

import { Eye, EyeOff, Lock, Mail, User, Phone } from "lucide-react";
import { IoPersonCircle } from "react-icons/io5";
import { useRegister } from "@Lib/hooks/useRegister";
import CircularIndeterminate from "@Components/ui/ProgresSpin";

export default function RegisterForm({
  toggleForms,
}: {
  toggleForms: () => void;
}) {
  const {
    showPassword,
    togglePassword,
    user,
    setUser,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
    loading,
  } = useRegister();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl shadow-xl bg-white">
        <div className="p-8">
          {loading && ( // Muestra el spinner cuando loading es true
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
              <CircularIndeterminate />
            </div>
          )}
          <div className="flex justify-center">
            <IoPersonCircle className="text-gray-800 text-7xl" />
          </div>

          <h2 className="mb-6 text-center text-3xl pt-2 font-bold text-gray-800">
            Registrate
          </h2>
          <h3 className="mb-2 text-center text-md font-bold text-gray-600">
            Ingresa tus datos para crear tu cuenta
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div className="space-y-2">
              <label
                htmlFor="user"
                className="text-sm font-medium text-gray-800"
              >
                Nombre
              </label>
              <div className="relative">
                <input
                  id="user"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="current-name"
                  className="pl-10 w-full h-12 rounded-md text-gray-900"
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Correo */}
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
                  autoComplete="current-email"
                  className="pl-10 w-full h-12 rounded-md text-gray-900"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Celular */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-800"
              >
                Celular
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="text"
                  placeholder="Ingresa tu número de teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="current-phone"
                  className="pl-10 w-full h-12 rounded-md text-gray-900"
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Contraseña */}
            <div className="space-y-2 pt-3 pb-4">
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
                />

                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Errores */}
            {error && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}

            {/* Boton de registro */}
            <button
              type="submit"
              className="w-full h-10 rounded-md bg-blue-600 hover:bg-blue-700"
            >
              Crear Cuenta
            </button>
          </form>
          <div className="pt-8 px-8 py-4 text-center">
            <p className="text-sm text-gray-600 ">
              ¿Ya tienes cuenta?{" "}
              <button
                onClick={toggleForms}
                className="font-medium text-blue-600 hover:text-blue-500"
                disabled={loading} // Evita cambiar de formulario mientras carga
              >
                Iniciar Sesión
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
