import React from "react";
import { Plus } from "lucide-react";

interface SidebarItemProps {
  href?: string;
  icon: React.ComponentType<{ size: number }>;
  text: string;
  isExpanded: boolean;
  hasSubmenu?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  onAgregarClick?: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  text,
  isExpanded,
  hasSubmenu = false,
  isOpen = false,
  onClick,
  onAgregarClick,
}: SidebarItemProps) => {
  // Si isExpanded es false, también se debe desactivar hasSubmenu
  const effectiveHasSubmenu = isExpanded ? hasSubmenu : false;

  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center text-[#ffff] gap-2 p-2 rounded-lg hover:bg-[#375534] hover:text-[#6B9035] ${
          isExpanded ? "w-full justify-start" : "w-12 justify-center"
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

      {effectiveHasSubmenu && isOpen && (
        <ul className="ml-6 mt-2 space-y-2">
          <li>
            <button
              onClick={onAgregarClick}
              className="flex items-center bg-green-600 w-full text-[#ffff] text-center gap-2 p-2 rounded-lg hover:bg-[#375534] hover:text-[#6B9035]"
            >
              Agregar <Plus />
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};
