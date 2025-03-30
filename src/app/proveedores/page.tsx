import Sidebar from "@Components/users/Proveedores/sideBar";
import Header from "@Components/users/Proveedores/header";
import DataTable from "@Components/users/Proveedores/DataTable/DataTable";

export default function page() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className=" flex flex-col w-full h-screen overflow-hidden">
        <Header />
        <DataTable />
      </div>
    </div>
  );
}
