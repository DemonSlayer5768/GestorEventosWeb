import Sidebar from "@Components/users/sideBar";
import Header from "@Components/users/header";
import DataTable from "@Components/users/DataTable/DataTable";

export default function Usuarios() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />
        <DataTable />
      </div>
    </div>
  );
}
