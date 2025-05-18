import React from 'react';
import { Droplets, Leaf, TrendingUp } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-500" />,
      value: "70%",
      label: "Redução no consumo de água",
      description: "Comparado ao descarte tradicional"
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-500" />,
      value: "45.000 L",
      label: "Água economizada por tonelada",
      description: "Através do reaproveitamento de resíduos"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-amber-500" />,
      value: "15%",
      label: "Aumento na produção de leite",
      description: "Nas fazendas que utilizam o bagaço como ração"
    }
  ];

  return (
    <section 
      id="impact" 
      className="py-20 bg-cover bg-center text-white"
      style={{ 
        backgroundImage: `linear-gradient(rgba(26, 64, 26, 0.9), rgba(26, 64, 26, 0.9)), url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` 
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacto Ambiental</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Nossa solução transforma um problema em oportunidade, com benefícios mensuráveis para o meio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="inline-flex justify-center mb-4 bg-white/10 rounded-full p-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-200">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h3 className="text-2xl font-semibold mb-4 text-center">Sabia que...</h3>
          <p className="mb-4">
            Para cada 100 litros de cerveja produzidos, são gerados cerca de 20 kg de bagaço de malte úmido, que é altamente nutritivo e pode alimentar até 6 vacas por dia.
          </p>
          <p>
            A utilização do bagaço como ração animal reduz a necessidade de destinação em aterros sanitários e diminui a demanda por outras fontes de alimentação, contribuindo para a redução do desmatamento ligado à produção de ração.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;