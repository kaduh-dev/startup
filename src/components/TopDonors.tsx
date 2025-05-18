import React from 'react';
import { Trophy, Medal } from 'lucide-react';

const TopDonors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ranking de Doadores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reconhecemos as empresas que mais contribuem para nossa economia circular.
            Faça parte deste seleto grupo de organizações comprometidas com a sustentabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Medalha de Prata */}
          <div className="relative transform transition-all hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Medal className="h-12 w-12 text-gray-400" />
            </div>
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-8 pt-12 text-center shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Prata</h3>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-gray-300">
                <span className="text-gray-400 font-semibold">Sua<br />Empresa</span>
              </div>
              <p className="text-gray-600 mb-4">2º Lugar</p>
              <div className="text-sm text-gray-500">
                <p>+1000 ton/ano</p>
                <p>de resíduos doados</p>
              </div>
            </div>
          </div>

          {/* Medalha de Ouro */}
          <div className="relative transform transition-all hover:-translate-y-2 md:-mt-8">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Medal className="h-12 w-12 text-amber-400" />
            </div>
            <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl p-8 pt-12 text-center shadow-lg border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-2">Ouro</h3>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-amber-300">
                <span className="text-amber-600 font-semibold">Sua<br />Empresa</span>
              </div>
              <p className="text-amber-700 mb-4">1º Lugar</p>
              <div className="text-sm text-amber-600">
                <p>+2000 ton/ano</p>
                <p>de resíduos doados</p>
              </div>
            </div>
          </div>

          {/* Medalha de Bronze */}
          <div className="relative transform transition-all hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Medal className="h-12 w-12 text-amber-700" />
            </div>
            <div className="bg-gradient-to-b from-amber-100/50 to-amber-200/50 rounded-xl p-8 pt-12 text-center shadow-lg border border-amber-200/50">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Bronze</h3>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-amber-700">
                <span className="text-amber-800 font-semibold">Sua<br />Empresa</span>
              </div>
              <p className="text-amber-800 mb-4">3º Lugar</p>
              <div className="text-sm text-amber-700">
                <p>+500 ton/ano</p>
                <p>de resíduos doados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDonors;