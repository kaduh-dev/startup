import React from 'react';
import { Factory, Truck, Wheat, Milk } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Factory className="h-10 w-10 text-amber-600" />,
      title: "Produção Agroindustrial",
      description: "As agroindústrias processam cevada e geram resíduos como subproduto, que normalmente seriam descartados."
    },
    {
      icon: <Truck className="h-10 w-10 text-green-600" />,
      title: "Logística",
      description: "A Nutri-Ruc coleta os resíduos das indústrias e o transporta para as fazendas de forma eficiente e sustentável."
    },
    {
      icon: <Wheat className="h-10 w-10 text-amber-800" />,
      title: "Conversão em Ração",
      description: "Os resíduos são processado e transformado em ração altamente nutritiva para o gado em diferentes fases."
    },
    {
      icon: <Milk className="h-10 w-10 text-blue-600" />,
      title: "Produção de Leite",
      description: "O gado alimentado com esta ração produz leite de qualidade, fechando o ciclo de economia circular."
    }
  ];

  return (
    <section id="process" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conectamos indústrias e pecuaristas em um ciclo sustentável que beneficia a todos, incluindo o meio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative z-10"
            >
              <div className="bg-stone-50 inline-flex rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
          
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-600 transform -translate-y-1/2 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Process;