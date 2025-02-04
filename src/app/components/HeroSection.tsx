import Carousel from "./Carousel";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-white">Empieza a crear</span>
              <span className="block text-green-200">
                Plataforma de Eventos
              </span>
            </h1>
            <p className="mt-3 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Crea el evento de tus sueños de manera fácil y sin estrés. Desde
              bodas hasta fiestas, te ayudamos a planificar cada detalle y hacer
              de tu celebración un momento inolvidable. ¡Comienza ahora y
              transforma tus ideas en recuerdos únicos!
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="lg:relative lg:h-full">
            <Carousel />
            {/* <Image
              className="w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-0 lg:h-full lg:w-full object-cover rounded-lg shadow-xl"
              src="/placeholder.svg?height=600&width=800"
              alt="Hero image"
              width={800}
              height={600}
              priority
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
