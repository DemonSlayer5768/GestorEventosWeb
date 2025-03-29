//sidebard de proveedores
"use client";
import { useState } from "react";
import {
  Menu,
  Calendar,
  Package,
  Mail,
  MapPinHouse,
  TableProperties,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { useRoutes } from "@Lib/hooks/useRoutes";

interface SidebarItemProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  text: string;
  isExpanded: boolean;
}

const SidebarItem = ({
  href,
  icon: Icon,
  text,
  isExpanded,
}: SidebarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center  gap-2 p-2 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out
    ${isExpanded ? "w-full justify-start" : "w-12 justify-center"}`}
      >
        <Icon size={24} />
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0"
          }`}
        >
          <span className="whitespace-nowrap">{text}</span>
        </div>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const routes = useRoutes();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-orange-500 text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out
        ${isExpanded ? "w-64 p-5" : "w-14 p-2"}`}
      >
        {/* Toggle Button */}
        <div className="mt-4 pb-6">
          <button
            className="p-2 rounded-lg hover:bg-gray-700 transition"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          <ul className="space-y-6">
            <SidebarItem
              href={routes.cliente}
              icon={Calendar}
              text="Mis Eventos"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href={routes.bandejaCorreo}
              icon={Mail}
              text="Bandeja"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href={routes.paquetesEventos}
              icon={Package}
              text="Paquetes"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href={routes.catalogoSalones}
              icon={MapPinHouse}
              text="Catalogo Salones"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href={routes.serviciosEventos}
              icon={TableProperties}
              text="Servicios"
              isExpanded={isExpanded}
            />
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto">
          <hr className="border-gray-700 my-4 mx-2" />
          <ul className="space-y-4">
            <SidebarItem
              href="/settings"
              icon={Settings}
              text="Settings"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href="/help"
              icon={HelpCircle}
              text="Help"
              isExpanded={isExpanded}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
