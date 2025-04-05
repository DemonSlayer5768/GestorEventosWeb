interface Routes {
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
    login: "/SignIn",
    admin: "/admin",
    proveedores: "/proveedores",
    cliente: "/users",
    help: "/help",
    settings: "/settings",
    myPerfil: "/myPerfil",
    crearEvento: "/crear_evento",
    bandejaCorreo: "/bandeja_correo",
    paquetesEventos: "/paquetes_eventos",
    catalogoSalonesProveedor: "/catalogo_salones_proveedor",
    serviciosEventosProveedor: "/servicios_eventos_proveedor",
    catalogoSalonesCliente: "/catalogo_salones_cliente",
    serviciosEventosCliente: "/servicios_eventos_cliente",
  };
};
