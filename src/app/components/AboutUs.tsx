import Aurora from "./Aurora";
import CircularGallery from "./CircularGallery";

export default function AboutUs() {
  return (
    <div className="relative z-10 overflow-hidden w-full p-20">
      {/* Contenedor para Aurora */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Aurora colorStops={["#052659", "#021024", "#5483b3"]} speed={0.5} />
      </div>

      {/* Contenido encima */}
      <div className="relative  mx-auto max-w-4xl text-center p-4">
        <p className="mt-2 text-5xl font-semibold font-sans tracking-tight text-balance text-white sm:text-6xl">
          Sobre Nosotros
        </p>
      </div>
      <div className="relative mx-auto max-w-6xl text-center">
        <p className=" text-white font-sans leading-relaxed text-2xl mt-5">
          En Eventify, nos dedicamos a transformar ideas en experiencias
          inolvidables. Nos especializamos en la gestión de eventos
          personalizados, asegurando que cada ocasión sea única y exitosa como
          tambien nos ponemos .
        </p>
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={8} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
}
