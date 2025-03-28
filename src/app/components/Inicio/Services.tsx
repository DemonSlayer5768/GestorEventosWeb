import React from "react";
import { Code, BarChart, Layers, Users, Shield, Zap } from "lucide-react";

interface ServiceProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceProps) {
  return (
    <div className="bg-white/10 p-6 shadow-lg rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <div className="p-4 bg-gray-100 rounded-full">
        <Icon className="w-10 h-10 text-gray-700" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-300">{title}</h3>
      <p className="mt-2 text-gray-100">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      Icon: Code,
      title: "Custom Development",
      description:
        "Build scalable and robust applications tailored to your specific business requirements using cutting-edge technologies.",
    },
    {
      Icon: BarChart,
      title: "Analytics Solutions",
      description:
        "Transform your data into actionable insights with our advanced analytics and reporting solutions.",
    },
    {
      Icon: Layers,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate and deploy your applications in the cloud for maximum scalability and reliability.",
    },
    {
      Icon: Users,
      title: "Consulting",
      description:
        "Expert guidance and strategic consulting to help you make informed decisions and achieve your business goals.",
    },
    {
      Icon: Shield,
      title: "Security Services",
      description:
        "Protect your digital assets with our comprehensive security solutions and best practices implementation.",
    },
    {
      Icon: Zap,
      title: "Performance Optimization",
      description:
        "Enhance your application's performance and user experience through advanced optimization techniques.",
    },
  ];

  return (
    <main className="w-full min-h-screen pt-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            ofrecemos difrentes tipos de servicios para que puedas elegir el que
            mas se adapte a tus necesidades para tu evento.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
}
