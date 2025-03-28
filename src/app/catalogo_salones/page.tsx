import Sidebar from "@Components/users/sideBar";
import Header from "@Components/users/header";
import SalonCatalog from "@Components/users/catalogo/salonCatalog";

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
