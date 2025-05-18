import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, Brain as Grain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Grain className="h-8 w-8 text-green-500" />
              <span className="font-bold text-xl">Nutri-Ruc</span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando cervejarias e pecuaristas em uma solução sustentável para o reaproveitamento do bagaço de malte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impacto Ambiental</a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-white transition-colors">Cadastro</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Av. Sustentável, 123<br />Belo Horizonte/MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">(31) 9876-5432</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">contato@nutri-ruc.com.br</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Fique por dentro das novidades e receba informações sobre sustentabilidade e reaproveitamento.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nutri-Ruc. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;