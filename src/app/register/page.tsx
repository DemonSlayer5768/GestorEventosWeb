"use client";
import type React from "react";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Phone } from "lucide-react";
import { IoPersonCircle } from "react-icons/io5";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !user || !phone) {
      setError("Porfavor llena todos los datos");
      return;
    }

    // Here you would typically handle the login logic
    console.log("Register attempt with:", { email, password, user, phone });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl shadow-xl  bg-white">
        <div className="p-8">
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
                  className="pl-10 w-full h-12 rounded-md cursor-pointer text-gray-900 "
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
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
                  placeholder="Ingresa tu numero de telefono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 w-full h-12 rounded-md cursor-pointer text-gray-900 "
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
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

            {error && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}
            <button
              type="submit"
              className=" w-full h-10 rounded-md  bg-blue-600 hover:bg-blue-700 "
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
