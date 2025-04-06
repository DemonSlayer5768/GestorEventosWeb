import Sidebar from "@Components/users/Cliente/sideBar";
import Header from "@Components/users/Cliente/header";
// import ServiceCatalog from "@Components/users/Cliente/CatalogoServicios/CatalogoServicios";

export default function serviciosEventos() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />
        {/* <ServiceCatalog /> */}
      </div>
    </div>
  );
}
