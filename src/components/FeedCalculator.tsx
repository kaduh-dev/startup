import React, { useState } from 'react';
import { Calculator, Cog as Cow, Wheat } from 'lucide-react';

interface FeedFormula {
  spentGrain: number;
  riceHusk: number;
  sugarcaneBagasse: number;
  ddg: number;
  soybeanHull: number;
  proteinContent: number;
}

interface AnimalFeedRequirement {
  type: string;
  dailyFeed: number;
  label: string;
}

const ANIMAL_TYPES: AnimalFeedRequirement[] = [
  { type: 'cattle', dailyFeed: 15, label: 'Bovino de Corte' },
  { type: 'dairy', dailyFeed: 20, label: 'Bovino de Leite' },
  { type: 'calf', dailyFeed: 3, label: 'Bezerro' },
  { type: 'goat', dailyFeed: 1.5, label: 'Caprino' }
];

const FEED_FORMULAS: FeedFormula[] = [
  {
    spentGrain: 40,
    riceHusk: 5,
    sugarcaneBagasse: 5,
    ddg: 25,
    soybeanHull: 25,
    proteinContent: 18.75
  }
];

const FeedCalculator = () => {
  const [animalCount, setAnimalCount] = useState<number>(0);
  const [selectedAnimal, setSelectedAnimal] = useState<string>('cattle');
  const [requiredProtein, setRequiredProtein] = useState<number>(18);

  const getDailyFeed = () => {
    const animal = ANIMAL_TYPES.find(animal => animal.type === selectedAnimal);
    return animal ? animal.dailyFeed : 15; // Default to cattle if not found
  };

  const calculateMonthlyFeed = () => {
    const dailyFeed = getDailyFeed();
    const dailyTotal = animalCount * dailyFeed;
    const monthlyTotal = dailyTotal * 30;
    return monthlyTotal;
  };

  const getBestFormula = () => {
    return FEED_FORMULAS.reduce((prev, curr) => {
      return Math.abs(curr.proteinContent - requiredProtein) < Math.abs(prev.proteinContent - requiredProtein)
        ? curr
        : prev;
    });
  };

  const calculateComposition = () => {
    const monthlyTotal = calculateMonthlyFeed();
    const formula = getBestFormula();

    return {
      spentGrain: (monthlyTotal * formula.spentGrain) / 100,
      riceHusk: (monthlyTotal * formula.riceHusk) / 100,
      sugarcaneBagasse: (monthlyTotal * formula.sugarcaneBagasse) / 100,
      ddg: (monthlyTotal * formula.ddg) / 100,
      soybeanHull: (monthlyTotal * formula.soybeanHull) / 100,
      total: monthlyTotal,
      proteinContent: formula.proteinContent
    };
  };

  const composition = calculateComposition();

  const handleAnimalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value);
    if (value === '') {
      setAnimalCount(0);
    } else if (!isNaN(numValue) && numValue >= 0) {
      setAnimalCount(numValue);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Calculator className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Calculadora de Ração
            </h2>
            <p className="text-lg text-gray-600">
              Calcule a quantidade ideal de cada componente para a sua formulação
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  Número de Animais
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Cow className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={animalCount || ''}
                    onChange={handleAnimalInputChange}
                    placeholder="Digite a quantidade"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg transition-all"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Insira o número total de animais
                </p>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Tipo de Animal</label>
                <div className="relative">
                  <select
                    value={selectedAnimal}
                    onChange={(e) => setSelectedAnimal(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg appearance-none transition-all"
                  >
                    {ANIMAL_TYPES.map((animal) => (
                      <option key={animal.type} value={animal.type}>
                        {animal.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mt-2 text-sm text-gray-500">Selecione o tipo de animal.</p>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  Proteína Necessária
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Wheat className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    value={requiredProtein}
                    onChange={(e) => setRequiredProtein(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg appearance-none transition-all"
                  >
                    <option value="15">15% - Baixa Proteína</option>
                    <option value="18">18% - Média Proteína</option>
                    <option value="22">22% - Alta Proteína</option>
                  </select>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Selecione o nível de proteína desejado na ração
                </p>
              </div>
            </div>
          </div>

          {animalCount > 0 && (
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Composição Mensal Recomendada
              </h3>

              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-stone-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Componente</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">Quantidade (kg)</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">Porcentagem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">Bagaço de Malte</td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {composition.spentGrain.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {getBestFormula().spentGrain}%
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">Casca de Arroz</td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {composition.riceHusk.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {getBestFormula().riceHusk}%
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">Bagaço de Cana</td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {composition.sugarcaneBagasse.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {getBestFormula().sugarcaneBagasse}%
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">DDG</td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {composition.ddg.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {getBestFormula().ddg}%
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">Casca de Soja</td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {composition.soybeanHull.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-700">
                        {getBestFormula().soybeanHull}%
                      </td>
                    </tr>
                    <tr className="bg-green-50 font-semibold">
                      <td className="px-6 py-4 text-sm text-green-800">Total Mensal</td>
                      <td className="px-6 py-4 text-right text-sm text-green-800">
                        {composition.total.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-green-800">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Informações da Formulação</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Teor de proteína: {getBestFormula().proteinContent}%</li>
                  <li>• Consumo diário por animal: {getDailyFeed()}kg</li>
                  <li>• Consumo mensal total: {composition.total.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}kg</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedCalculator;