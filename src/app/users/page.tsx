import Sidebar from "@Components/users/Cliente/sideBar";
import Header from "@Components/users/Cliente/header";
import DataTable from "<webPage>/app/components/users/Cliente/DataTable/DataTable";

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
