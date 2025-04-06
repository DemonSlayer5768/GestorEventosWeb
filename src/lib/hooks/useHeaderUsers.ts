import { useRoutes } from "@Lib/hooks/useRoutes";
import { useRouter } from "next/navigation";
import { useAuth } from "@Lib/hooks/useAuth"; // 🔹 Importamos useAuth para cerrar sesión

export function useHeader() {
  const routes = useRoutes();
  const router = useRouter();
  const { logout } = useAuth(); // 🔹 Obtenemos la función de cerrar sesión

  function myPerfil() {
    console.log("Entró en Mi Perfil");
    router.push(routes.myPerfil); // 🔹 Redirige a la página de perfil
  }

  function Settings() {
    console.log("Entró en Configuración");
    router.push(routes.settings); // 🔹 Redirige a configuración
  }

  function Close() {
    console.log("Cerrando sesión...");
    logout(); // 🔹 Borra el usuario de localStorage y del estado
    router.push(routes.home); // 🔹 Redirige a la pantalla de inicio
  }

  return { myPerfil, Settings, Close };
}
