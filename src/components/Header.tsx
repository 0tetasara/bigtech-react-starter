import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crypto-dark/80 backdrop-blur-md border-b border-border-accent/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="BigTech Logo" 
              className="w-12 h-12 glow-cyan"
            />
            <span className="text-2xl font-bold text-text-primary">
              BIG<span className="text-accent-cyan">TECH</span>
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-text-secondary hover:text-accent-cyan transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-text-secondary hover:text-accent-cyan transition-colors duration-300">
              About
            </a>
            <a href="#tokenomics" className="text-text-secondary hover:text-accent-cyan transition-colors duration-300">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-text-secondary hover:text-accent-cyan transition-colors duration-300">
              Roadmap
            </a>
            <a href="#contact" className="text-text-secondary hover:text-accent-cyan transition-colors duration-300">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <button className="crypto-card px-6 py-2 text-accent-cyan hover:text-crypto-dark hover:bg-accent-cyan transition-all duration-300 font-semibold">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;