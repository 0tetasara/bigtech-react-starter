import React from 'react';
import HeroSection from '../components/HeroSection';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <HeroSection />
    </main>
  );
};

export default Home;