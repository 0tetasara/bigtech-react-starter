import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
