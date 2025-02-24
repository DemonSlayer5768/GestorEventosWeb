// Define la interfaz Routes
interface Routes {
  home: string;
  login: string;
  register: string;
  admin: string;
  proveedores: string;
  usuarios: string;
}

// Exporta la función useRoutes que devuelve un objeto de tipo Routes
export const useRoutes = (): Routes => {
  return {
    home: "/",
    login: "/signin",
    register: "@Pages/register",
    admin: "@Pages/admin",
    proveedores: "@Pages/proveedores",
    usuarios: "@Pages/users",
  };
};
