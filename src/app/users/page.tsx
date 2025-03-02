import Sidebar from "@Components/users/sideBar";
import Header from "@Components/users/header";

export default function Usuarios() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-4">
          {/* Aquí va el contenido de la página */}
          <h1 className="text-2xl">Contenido principal</h1>
        </div>
      </div>
    </div>
  );
}
