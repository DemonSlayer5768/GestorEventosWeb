"use client";
import * as React from "react";
import {
  PanelLeft,
  PanelLeftClose,
  ClipboardList,
  Mail,
  MapPinHouse,
  TableProperties,
  Settings,
  HelpCircle,
} from "lucide-react";
import { SidebarItem } from "@Components/users/Proveedores/ItemSideBar";
import { useSidebar } from "@Lib/hooks/useSideBarProveedor";
import { Separator } from "@Components/ui/separator";

const Sidebar = () => {
  const { isExpanded, setIsExpanded, openMenu, router, routes } = useSidebar();

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`bg-[#0F2A1D]  h-full flex flex-col transition-all duration-300 ease-in-out ${
          isExpanded ? "w-52 pt-5" : "w-10 pt-5"
        }`}
      >
        {/* Toggle Button */}

        <div className="text-end  pt-1 pb-6">
          <button
            className="rounded-lg transition pr-2  "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded && <PanelLeft size={24} />}{" "}
            {/* Ocultar si está expandido */}
            {isExpanded && <PanelLeftClose size={24} />}{" "}
          </button>
          <Separator />
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
          <Separator />
          <ul className="space-y-4">
            <SidebarItem
              href={routes.settings}
              icon={Settings}
              text="Settings"
              isExpanded={isExpanded}
              onClick={() => router.push("/settings")}
            />
            <SidebarItem
              href={routes.help}
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
