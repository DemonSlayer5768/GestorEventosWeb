import Sidebar from "@Components/users/Proveedores/sideBar";
import Header from "@Components/users/Proveedores/header";
import DataTable from "@Components/users/Proveedores/DataTable/DataTable";

export default function page() {
  return (
    <div className="flex ">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className=" flex flex-col w-full overflow-hidden">
        <Header />
        <DataTable />
      </div>
    </div>
  );
}
