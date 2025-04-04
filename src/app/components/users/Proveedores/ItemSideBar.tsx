import React from "react";
import { Plus } from "lucide-react";
import AgregarServicioModal from "@Components/users/Proveedores/CatalogoServicios/ServicioAgregarModal";
import { useSidebar } from "@Lib/hooks/useSideBarProveedor";

interface SidebarItemProps {
  href?: string;
  icon: React.ComponentType<{ size: number }>;
  text: string;
  isExpanded: boolean;
  hasSubmenu?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  text,
  isExpanded,
  hasSubmenu = false,
  isOpen = false,
  onClick,
}: SidebarItemProps) => {
  const { handleAgregarClick, open, handleClose } = useSidebar();

  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center text-[#ffff] gap-2 p-2 rounded-lg hover:bg-[#375534] hover:text-[#6B9035] ${
          isExpanded ? "w-full justify-start" : "w-12 justify-center "
        }`}
      >
        <Icon size={24} />
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0"
          }`}
        >
          <span className="whitespace-nowrap">{text}</span>
        </div>
      </button>

      {hasSubmenu && isOpen && isExpanded && (
        <ul className="ml-10 mt-2 space-y-2">
          <li>
            <button
              onClick={handleAgregarClick}
              className="flex items-center bg-green-600 w-50 h-8 text-[#ffff] text-center gap-2 p-2 rounded-lg hover:bg-[#375534] hover:text-[#6B9035]"
            >
              Agregar <Plus />
            </button>
            <AgregarServicioModal open={open} onClose={handleClose} />
          </li>
        </ul>
      )}
    </li>
  );
};
