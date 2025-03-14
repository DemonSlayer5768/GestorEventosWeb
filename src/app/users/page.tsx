import Sidebar from "@Components/users/sideBar";
import Header from "@Components/users/header";
// import DataTable from "@Components/users/TableGrid";
import TableButtons from "@Components/users/TableButtons";

export default function Usuarios() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />

        {/* Contenedor scrollable */}
        <div className="flex-1 overflow-auto h-full">
          {/* <DataTable /> */}
          <TableButtons />
        </div>
      </div>
    </div>
  );
}
