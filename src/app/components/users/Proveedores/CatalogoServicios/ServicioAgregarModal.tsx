import * as React from "react";
import FormularioServicio from "./FormularioServicio";

interface AgregarServicioModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AgregarServicioModal({
  open,
  onClose,
}: AgregarServicioModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal content - Contenedor principal del modal */}
      <div
        className={`relative w-full max-w-2xl mx-4 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        {/* Contenedor del formulario con altura máxima y scroll */}
        <div className="relative flex flex-col bg-[#ffff] rounded-lg shadow-xl transition-all duration-500 max-h-[90vh] overflow-hidden">
          {/* Contenido scrollable */}
          <div className="overflow-y-auto p-0">
            <FormularioServicio onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
