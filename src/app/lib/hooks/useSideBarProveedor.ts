import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useRoutes } from "@Lib/hooks/useRoutes";

export const useSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const routes = useRoutes();

  // Determina qué menú debe estar abierto basado en la ruta actual
  useEffect(() => {
    if (pathname.startsWith(routes.serviciosEventosProveedor)) {
      setOpenMenu("misServicios");
    } else if (pathname.startsWith(routes.catalogoSalonesProveedor)) {
      setOpenMenu("misSalones");
    } else {
      setOpenMenu(null);
    }
  }, [pathname, routes]);

  // Lógica para el botón "Agregar"
  const handleAgregarClick = () => {
    if (openMenu === "misServicios") {
      console.log("Si entro en agregar servicios");
      // Aquí puedes redirigir o abrir un modal
    } else if (openMenu === "misSalones") {
      console.log("Si entro en agregar salones");
      // Aquí puedes redirigir o abrir un modal
    }
  };

  return {
    isExpanded,
    setIsExpanded,
    openMenu,
    setOpenMenu,
    handleAgregarClick,
    router,
    routes,
  };
};
