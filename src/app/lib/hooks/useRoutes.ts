interface Routes {
  ///RUTA PRINCIPAL///
  home: string;
  ///RUTAS USUARIOS ///
  usuarios: string;
  ///RUTA PROVEEDORES///
  proveedores: string;
  ///RUTA ADMINISTRADOR///
  admin: string;
  ///RUTA SIGNIN///
  login: string;
  ///RUTA CONFIGURACION///
  settings: string;
  ///RUTA CONFIGURACION PERFIL///
  myPerfil: string;
  ///RUTA FORMULARIO///
  crearEvento: string;
  ///RUTA BANDEJA CORREO ///
  bandejaCorreo: string;
  ///RUTA PAQUETES
  paquetesEventos: string;
  ///RUTA DE CATALOGOS SALONES
  catalogoSalones: string;
  ///RUTA DE SERVICIOS DE LOS EVENTOS///
  serviciosEventos: string;
}

// Exporta la función useRoutes que devuelve un objeto de tipo Routes
export const useRoutes = (): Routes => {
  return {
    home: "/",
    login: "/SignIn",
    admin: "/admin",
    proveedores: "/proveedores",
    usuarios: "/users",
    settings: "/settings",
    myPerfil: "/myPerfil",
    crearEvento: "/crear_evento",
    bandejaCorreo: "/bandeja_correo",
    paquetesEventos: "/paquetes_eventos",
    catalogoSalones: "/catalogo_salones",
    serviciosEventos: "/servicios_eventos",
  };
};
