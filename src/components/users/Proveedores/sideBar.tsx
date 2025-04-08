// Sidebar.tsx
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
import { motion } from "framer-motion";

const Sidebar = () => {
  const { isExpanded, setIsExpanded, openMenu, router, routes } = useSidebar();

  return (
    <motion.div
      animate={{ width: isExpanded ? 208 : 40 }} // 208px = w-52, 40px = w-10
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-[#0F2A1D] h-min-full flex flex-col pt-5 overflow-hidden"
    >
      {/* Toggle Button */}
      <div className="text-end pt-1 pb-6 pr-2">
        <button
          className="rounded-lg transition"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <PanelLeftClose size={24} /> : <PanelLeft size={24} />}
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
    </motion.div>
  );
};

export default Sidebar;
