"use client";
import { useState } from "react";
import { Plus, MoreVertical } from "lucide-react";

const EventActions = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative p-5">
      {/* Grid con Botón de Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4 flex justify-between items-center relative">
          <h3 className="text-lg font-semibold">Evento 1</h3>
          {/* Botón de 3 Puntos */}
          <div className="relative">
            <button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MoreVertical size={20} />
            </button>

            {/* Menú de Opciones */}
            {menuOpen && (
              <div className="absolute right-0 top-8 bg-white shadow-md rounded-md p-2 w-32">
                <button className="block w-full text-left p-2 hover:bg-gray-100">
                  Modificar
                </button>
                <button className="block w-full text-left p-2 hover:bg-gray-100 text-red-500">
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Línea Separadora */}
      <hr className="border-gray-300 my-4" />

      {/* Botón Crear Evento */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-600 text-white p-4 rounded-full flex items-center gap-2 shadow-lg hover:bg-green-700 transition">
          <Plus size={20} /> Crear Evento
        </button>
      </div>
    </div>
  );
};

export default EventActions;
