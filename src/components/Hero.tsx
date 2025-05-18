import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/5946001/pexels-photo-5946001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')` 
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Transformando Resíduos em <span className="text-green-400">Nutrição</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-4">
            Conectamos agroindústrias e pecuaristas para dar uma nova vida aos resíduos, 
            transformando-o em alimento nutritivo para gado em diferentes fases de desenvolvimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#process" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Como Funciona
            </a>
            <a 
              href="#register" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Quero Participar
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce">
        <a href="#process" className="text-white inline-block">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;