import React, { useState } from 'react';

type ProfileType = 'brewery' | 'farmer' | '';

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  profile: ProfileType;
  location: string;
  production?: string;
  cattle?: string;
  message: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    profile: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          profile: '',
          location: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="register" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Participe do Projeto</h2>
            <p className="text-lg text-gray-600">
              Seja você uma cervejaria ou um pecuarista, preencha o formulário abaixo e nossa equipe entrará em contato para iniciar essa parceria sustentável.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Formulário Enviado!</h3>
              <p className="text-green-600">
                Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve para discutir os próximos passos.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="bg-white shadow-lg rounded-lg p-8 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="profile" className="block text-sm font-medium text-gray-700 mb-1">
                  Perfil *
                </label>
                <select
                  id="profile"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange as any}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="brewery">Agroindústria</option>
                  <option value="farmer">Pecuarista</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Localização (Cidade/Estado) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {formData.profile === 'brewery' && (
                <div className="mb-6">
                  <label htmlFor="production" className="block text-sm font-medium text-gray-700 mb-1">
                    Produção Mensal (litros) *
                  </label>
                  <input
                    type="text"
                    id="production"
                    name="production"
                    value={formData.production || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              )}

              {formData.profile === 'farmer' && (
                <div className="mb-6">
                  <label htmlFor="cattle" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Cabeças de Gado *
                  </label>
                  <input
                    type="text"
                    id="cattle"
                    name="cattle"
                    value={formData.cattle || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-green-600 text-white py-3 px-6 rounded-md font-medium transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;