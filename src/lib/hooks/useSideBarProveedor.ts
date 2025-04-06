import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useRoutes } from "@Lib/hooks/useRoutes";
import { useModal } from "@Lib/hooks/useSalonAgregarModal";

export const useSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { open, handleOpenServicios, handleClose } = useModal(); // Usa el modal
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
      handleOpenServicios();
      // Aquí puedes redirigir o abrir un modal
    } else if (openMenu === "misSalones") {
      console.log("Si entro en agregar salones");
      // Aquí puedes redirigir o abrir un modal
      // handleOpenSalones();
    }
  };

  return {
    isExpanded,
    setIsExpanded,
    openMenu,
    setOpenMenu,
    handleAgregarClick,
    open, // Devuelve el estado del modal
    handleOpenServicios, // Devuelve las funciones del modal
    handleClose,
    router,
    routes,
  };
};
