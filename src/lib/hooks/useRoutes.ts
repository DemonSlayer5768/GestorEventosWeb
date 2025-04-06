export interface Routes {
  ///RUTA PRINCIPAL///
  home: string;
  ///RUTAS USUARIOS ///
  cliente: string;
  ///RUTA PROVEEDORES///
  proveedores: string;
  ///RUTA ADMINISTRADOR///
  admin: string;
  ///RUTA SIGNIN///
  login: string;
  ///RUTA CONFIGURACION///
  settings: string;
  ///RUTA AYUDA///
  help: string;
  ///RUTA PERFIL///
  myPerfil: string;
  ///RUTA FORMULARIO///
  crearEvento: string;
  ///RUTA BANDEJA CORREO ///
  bandejaCorreo: string;
  ///RUTA PAQUETES
  paquetesEventos: string;
  ///RUTA DE CATALOGOS SALONES
  catalogoSalonesProveedor: string;
  ///RUTA DE SERVICIOS DE LOS EVENTOS///
  serviciosEventosProveedor: string;
  ///RUTA DE CATALOGOS SALONES
  catalogoSalonesCliente: string;
  ///RUTA DE SERVICIOS DE LOS EVENTOS///
  serviciosEventosCliente: string;
}

// Exporta la función useRoutes que devuelve un objeto de tipo Routes
export const useRoutes = (): Routes => {
  return {
    home: "/",
    login: "/Login",
    admin: "/Administradores",
    proveedores: "/Proveedores",
    cliente: "/Clientes",
    help: "/help", // cambiar por un modal
    settings: "/settings", // cambiar por un modal
    myPerfil: "/myPerfil", // cambiar por un modal
    crearEvento: "/CrearEventoCliente",
    bandejaCorreo: "/BandejaCorreos",
    paquetesEventos: "/PaquetesEventos",
    catalogoSalonesProveedor: "/CatalogoSalonesProveedores",
    serviciosEventosProveedor: "/ServiciosEventosProveedores",
    catalogoSalonesCliente: "/CatalogoSalonesClientes",
    serviciosEventosCliente: "/ServiciosEventosClientes",
  };
};
