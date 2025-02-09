import React from "react";

const tiers = [
  {
    name: "Básico",
    id: "tier-basic",
    priceMonthly: "$1,500.00",
    description: "Paquete ideal para eventos pequeños y sociales.",
    features: [
      "3 servicios básicos incluidos",
      "Soporte estándar (horario de oficina)",
      "Asesoría en la planificación",
      "Acceso a proveedores recomendados",
    ],
    color: "#7da0ca",
  },
  {
    name: "Profesional",
    id: "tier-pro",
    priceMonthly: "$3,000.00",
    description: "Perfecto para eventos medianos y corporativos.",
    features: [
      "6 servicios avanzados incluidos",
      "Soporte extendido (12/7)",
      "Coordinador de eventos dedicado",
      "Asesoría personalizada",
    ],
    color: "#5483b3",
  },
  {
    name: "Premium",
    id: "tier-premium",
    priceMonthly: "$5,500.00",
    description: "Experiencia completa para eventos de alto nivel.",
    features: [
      "10 servicios premium incluidos",
      "Soporte prioritario 24/7",
      "Gestor personal de eventos",
      "Acceso VIP a proveedores exclusivos",
    ],
    color: "#052659",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen py-52 px-4 sm:px-6 lg:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          PAQUETES DISPONIBLES
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300 sm:text-xl">
          Paquetes de eventos predefinidos con sus servicios incluidos para
          facilitar tu organización.
        </p>
      </div>

      <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3 p-6 sm:p-10 mt-10 z-20 ">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="rounded-2xl shadow-lg p-6 sm:w-[90%] md:w-full mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: tier.color,
              color: "#ffffff",
              zIndex: 20,
            }}
          >
            <h2 className="text-2xl font-semibold mb-2">{tier.name}</h2>
            <p className="text-lg mb-4">{tier.description}</p>
            <p className="text-3xl font-bold mb-4">{tier.priceMonthly}</p>
            <ul className="list-disc list-inside space-y-2">
              {tier.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-white text-[#052659] py-2 px-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
              Seleccionar Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
