import React from 'react';
import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';
import ParticleBackground from './ParticleBackground';
import fireIcon from '../assets/fire-icon.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        
        {/* Fire Icon */}
        <div className="flex justify-center mb-8">
          <img 
            src={fireIcon} 
            alt="Fire Icon" 
            className="w-16 h-16 animate-pulse-glow"
          />
        </div>
        
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-text-primary">Join Future Of Algorithmic </span>
            <span className="text-gradient-primary text-glow">Crypto</span>
            <br />
            <span className="text-text-primary">Trading Strategies</span>
          </h1>
        </div>
        
        {/* Progress Section */}
        <div className="py-8">
          <ProgressBar />
        </div>
        
        {/* Countdown Timer */}
        <div className="py-8">
          <CountdownTimer />
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="crypto-card px-8 py-4 text-lg font-semibold text-accent-cyan hover:text-crypto-dark hover:bg-accent-cyan transition-all duration-300 glow-cyan">
            Buy Tokens Now
          </button>
          
          <button className="crypto-card px-8 py-4 text-lg font-semibold text-text-primary border-border-accent hover:border-accent-orange hover:text-accent-orange transition-all duration-300">
            Read Whitepaper
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent-cyan">$50M+</div>
            <div className="text-text-secondary text-sm">Total Raised</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent-green">25K+</div>
            <div className="text-text-secondary text-sm">Token Holders</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent-orange">12</div>
            <div className="text-text-secondary text-sm">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent-purple">98%</div>
            <div className="text-text-secondary text-sm">Success Rate</div>
          </div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-crypto-dark via-crypto-darker to-crypto-dark pointer-events-none"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;