import React from 'react';
import { Recycle, DollarSign, ThumbsUp, Factory, Tractor } from 'lucide-react';

const Benefits = () => {
  const commonBenefits = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Sustentabilidade",
      description: "Reduza o impacto ambiental através de uma solução de economia circular."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Economia",
      description: "Reduza custos de descarte e alimentação, criando valor em toda a cadeia."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-green-600" />,
      title: "Responsabilidade Social",
      description: "Associe sua marca a práticas sustentáveis e valorize seu produto no mercado."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Benefícios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa solução oferece vantagens claras para ambas as partes, criando uma parceria benéfica para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cervejarias */}
          <div className="bg-amber-50 rounded-xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-amber-800">Para Cervejarias</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-amber-700 font-bold">✓</span>
                <span>Redução de custos com descarte de resíduos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 font-bold">✓</span>
                <span>Diminuição da pegada ambiental da operação</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 font-bold">✓</span>
                <span>Marketing verde e fortalecimento da marca</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 font-bold">✓</span>
                <span>Possível geração de receita adicional</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 font-bold">✓</span>
                <span>Conformidade com regulamentações ambientais</span>
              </li>
            </ul>
          </div>

          {/* Pecuaristas */}
          <div className="bg-green-50 rounded-xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Tractor className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Para Pecuaristas</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                <span>Redução de custos com alimentação animal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                <span>Acesso a ração de alta qualidade nutritiva</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                <span>Potencial aumento na produção de leite</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                <span>Valorização do produto final no mercado</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                <span>Diferenciação como produtor sustentável</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Common Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {commonBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;