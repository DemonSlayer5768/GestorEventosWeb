"use client";

import { useState } from "react";
import { Bell, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center bg-gray-900 text-white p-4 w-full z-10">
      {/* Empujar Iconos a la Derecha */}
      <div className="ml-auto flex items-center gap-4">
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
