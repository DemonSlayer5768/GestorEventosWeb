export default function TextHero() {
  return (
    <div className="relative w-full py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          {/* Título principal */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Bienvenido a Eventify
          </h1>
          {/* Subtítulo */}
          <h2 className="mt-3 text-xl font-bold text-blue-400 sm:text-2xl md:text-3xl">
            Donde Cada Evento Toma Vida
          </h2>
          {/* Descripción */}
          <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            Organiza tu evento soñado de la manera más sencilla, personalizando
            cada detalle para que sea exactamente como lo imaginaste.
          </p>
          {/* Botones */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="w-full sm:w-auto rounded-md bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
            >
              Crea tu evento
            </a>
            <a
              href="#"
              className="w-full sm:w-auto text-sm font-semibold leading-6 text-white hover:text-blue-400"
            >
              Saber más <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
