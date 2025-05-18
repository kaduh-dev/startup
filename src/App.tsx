import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Impact from './components/Impact';
import TopDonors from './components/TopDonors';
import FeedCalculator from './components/FeedCalculator';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Process />
        <Benefits />
        <Impact />
        <TopDonors />
        <FeedCalculator />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;