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
    <div className="min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          PAQUETES DISPONIBLES
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
        Paquetes de eventos predefinidos con sus servicios para solicitar en la
        brevedad y sin hacer nada mas.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl`}
            style={{ backgroundColor: tier.color, color: "#ffffff" }}
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
