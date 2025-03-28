import React from "react";
export default function AboutUs() {
  return (
    <div className="w-full h-auto md:p-20 lg:p-40 min-h-screen md:py-24 px-4 ">
      {/* Sección principal */}
      <section className="items-center justify-center md: mb-24 py-20">
        <div className="text-center max-w-4xl mx-auto px-4 md:md:py-24 lg:py-5 pt-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            En <strong className="text-blue-400">Eventyfy</strong> te ayudaremos
            a organizar tu evento soñado
          </h1>
          <p className="py-4 text-lg md:text-xl lg:text-2xl max-w-7xl mx-auto leading-relaxed">
            Ponemos el control en tus manos. Desde la elección del lugar hasta
            los detalles más pequeños, tú decides cada aspecto para que tu
            evento sea exactamente como lo imaginas. Con una plataforma
            intuitiva y sin complicaciones, organizamos lo que necesitas en
            segundos.
          </p>
        </div>
      </section>
      {/* Sección de valores */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl  md:text-3xl lg:text-4xl font-light mb-4 tracking-tight">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Valor 1: Innovación */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovación</h3>
              <p className="text-gray-300">
                Siempre mejoramos nuestra plataforma para ofrecerte la mejor
                experiencia.
              </p>
            </div>

            {/* Valor 2: Personalización */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Personalización</h3>
              <p className="text-gray-300">
                Cada evento es único, y tú decides cada detalle para que sea
                perfecto.
              </p>
            </div>

            {/* Valor 3: Pasión */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Pasión</h3>
              <p className="text-gray-300">
                Amamos los eventos tanto como tú, y lo reflejamos en cada
                detalle de nuestra plataforma.
              </p>
            </div>
            {/* Valor 5: confianza */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Confianza</h3>
              <p className="text-gray-300">
                Tu satisfacción es nuestra prioridad, brindamos seguridad y
                transparencia en cada paso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
