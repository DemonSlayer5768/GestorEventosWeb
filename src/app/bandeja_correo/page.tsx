import Sidebar from "@Components/users/sideBar";
import Header from "@Components/users/header";

export default function bandejaCorreo() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />
      </div>
    </div>
  );
}
