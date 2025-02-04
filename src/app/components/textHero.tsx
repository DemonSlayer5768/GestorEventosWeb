export default function TextHero() {
  return (
    <div>
      <div className="mx-auto px-6 lg:px-8 py-16 sm:py-24 lg:py-56">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Bienvenido a Eventify
          </h1>
          <h2 className="mt-3 text-2xl font-bold text-blue-400 sm:text-3xl">
            Donde Cada Evento Toma Vida
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Organiza tu evento soñado de la manera más sencilla, personalizando
            cada detalle para que sea exactamente como lo imaginaste.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
            >
              Crea tu evento
            </a>
            <a
              href="#"
              className=" text-sm font-semibold leading-6 text-white hover:text-blue-400"
            >
              Saber mas <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
