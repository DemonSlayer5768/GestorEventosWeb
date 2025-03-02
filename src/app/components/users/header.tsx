"use client";

import { useState } from "react";
import { Search, Bell, User, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-gray-900 text-white p-4 w-full">
      {/* Buscador */}
      <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md w-1/3">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar eventos..."
          className="bg-transparent outline-none w-full text-white placeholder-gray-400"
        />
      </div>

      {/* Date Picker */}
      <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md">
        <Calendar size={20} className="text-gray-400" />
        <input type="date" className="bg-transparent outline-none text-white" />
      </div>

      {/* Iconos Derecha */}
      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <button className="p-2 rounded-full hover:bg-gray-800">
          <Bell size={24} />
        </button>

        {/* Menú Usuario */}
        <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <User size={24} />
          </button>

          {/* Menú Desplegable */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md py-2">
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-700">
                Mi Perfil
              </button>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-700">
                Configuración
              </button>
              <button className="block px-4 py-2 w-full text-left text-red-400 hover:bg-gray-700">
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
