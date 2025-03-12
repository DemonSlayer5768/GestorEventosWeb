"use client";
import { useState } from "react";
import {
  Menu,
  Calendar,
  Package,
  Mail,
  Ban,
  Clock,
  Settings,
  HelpCircle,
  Plus,
} from "lucide-react";
import Link from "next/link";

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

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out
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
            <div className="bg-green-500 rounded-lg hover:bg-green-600 transition">
              <SidebarItem
                href="/crear-evento"
                icon={Plus}
                text="Crear Evento"
                isExpanded={isExpanded}
              />
            </div>
            <SidebarItem
              href="/mis-eventos"
              icon={Calendar}
              text="Mis Eventos"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href="/bandeja"
              icon={Mail}
              text="Bandeja"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href="/paquetes"
              icon={Package}
              text="Paquetes"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href="/cancelados"
              icon={Ban}
              text="Cancelados"
              isExpanded={isExpanded}
            />
            <SidebarItem
              href="/proximos"
              icon={Clock}
              text="Próximos"
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
