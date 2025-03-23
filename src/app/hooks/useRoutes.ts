// Define la interfaz Routes
interface Routes {
  home: string;
  login: string;
  admin: string;
  proveedores: string;
  usuarios: string;
  settings: string;
  myPerfil: string;
}

// Exporta la función useRoutes que devuelve un objeto de tipo Routes
export const useRoutes = (): Routes => {
  return {
    home: "/",
    login: "/signin",
    admin: "/admin",
    proveedores: "/proveedores",
    usuarios: "/users",
    settings: "/settings",
    myPerfil: "/myPerfil",
  };
};
