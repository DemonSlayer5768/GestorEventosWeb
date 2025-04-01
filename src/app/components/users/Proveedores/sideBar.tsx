"use client";
import * as React from "react";
import {
  MenuIcon,
  ClipboardList,
  Mail,
  MapPinHouse,
  TableProperties,
  Settings,
  HelpCircle,
} from "lucide-react";
import { SidebarItem } from "@Components/users/Proveedores/ItemSideBar";
import { useSidebar } from "@Lib/hooks/useSideBarProveedor";

const Sidebar = () => {
  const { isExpanded, setIsExpanded, openMenu, router, routes } = useSidebar();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[#0F2A1D] min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isExpanded ? "w-64 p-5" : "w-14 p-2"
        }`}
      >
        {/* Toggle Button */}
        <div className="mt-4 pb-6">
          <button
            className="p-2 rounded-lg transition"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          <ul className="space-y-6">
            <SidebarItem
              href={routes.proveedores}
              icon={TableProperties}
              text="Eventos"
              isExpanded={isExpanded}
              onClick={() => router.push(routes.proveedores)}
            />
            <SidebarItem
              icon={ClipboardList}
              text="Mis Servicios"
              isExpanded={isExpanded}
              hasSubmenu
              isOpen={openMenu === "misServicios"}
              onClick={() => router.push(routes.serviciosEventosProveedor)}
            />
            <SidebarItem
              icon={MapPinHouse}
              text="Mis Salones"
              isExpanded={isExpanded}
              hasSubmenu
              isOpen={openMenu === "misSalones"}
              onClick={() => router.push(routes.catalogoSalonesProveedor)}
            />
            <SidebarItem
              href={routes.bandejaCorreo}
              icon={Mail}
              text="Mensajes"
              isExpanded={isExpanded}
              onClick={() => router.push(routes.bandejaCorreo)}
            />
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto">
          <hr className="my-4 mx-2" />
          <ul className="space-y-4">
            <SidebarItem
              href="/settings"
              icon={Settings}
              text="Settings"
              isExpanded={isExpanded}
              onClick={() => router.push("/settings")}
            />
            <SidebarItem
              href="/help"
              icon={HelpCircle}
              text="Help"
              isExpanded={isExpanded}
              onClick={() => router.push("/help")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
