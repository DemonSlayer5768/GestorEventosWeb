import Sidebar from "@Components/users/Proveedores/sideBar";
import Header from "@Components/users/Proveedores/header";

import SalonCatalog from "@Components/users/Proveedores/CatalogoSalones/SalonCatalog";

export default function CatalogoSalones() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />
        <SalonCatalog />
      </div>
    </div>
  );
}
