import React from "react";
// import { Code, BarChart, Layers, Users, Shield, Zap } from "lucide-react";
// import { ServiceCard } from "./components/ServiceCard";
export function App() {
  return (
    <main className="w-full min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions tailored to meet your business
            needs and drive growth
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* <ServiceCard
            Icon={Code}
            title="Custom Development"
            description="Build scalable and robust applications tailored to your specific business requirements using cutting-edge technologies."
          />
          <ServiceCard
            Icon={BarChart}
            title="Analytics Solutions"
            description="Transform your data into actionable insights with our advanced analytics and reporting solutions."
          />
          <ServiceCard
            Icon={Layers}
            title="Cloud Integration"
            description="Seamlessly integrate and deploy your applications in the cloud for maximum scalability and reliability."
          />
          <ServiceCard
            Icon={Users}
            title="Consulting"
            description="Expert guidance and strategic consulting to help you make informed decisions and achieve your business goals."
          />
          <ServiceCard
            Icon={Shield}
            title="Security Services"
            description="Protect your digital assets with our comprehensive security solutions and best practices implementation."
          />
          <ServiceCard
            Icon={Zap}
            title="Performance Optimization"
            description="Enhance your application's performance and user experience through advanced optimization techniques." */}
          {/* /> */}
        </div>
      </div>
    </main>
  );
}
