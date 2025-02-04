import Carousel from "./Carousel";
// import Link from "next/link";

export default function HeroSectionBoda() {
  return (
    <section className="bg-background py-5 ">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {/* <span className="block text-white">Empieza a crear</span> */}
              <span className="block text-blue-400">Empieza a Crear</span>
            </h1>
            <p className="mt-3 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Crea el evento de tus sueños de manera fácil y sin estrés. Desde
              bodas hasta fiestas, te ayudamos a planificar cada detalle y hacer
              de tu celebración un momento inolvidable. ¡Comienza ahora y
              transforma tus ideas en recuerdos únicos!
            </p>
          </div>
          <div className="lg:relative lg:h-full">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}
