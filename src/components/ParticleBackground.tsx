import React from 'react';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 15,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-purple/20 rounded-full animate-float" 
           style={{ animationDelay: '0s' }} />
      
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 rounded-lg animate-float" 
           style={{ animationDelay: '2s' }} />
      
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-orange/20 rounded-full animate-float" 
           style={{ animationDelay: '4s' }} />
      
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-green/20 rounded-lg animate-float" 
           style={{ animationDelay: '1s' }} />
      
      {/* Network Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent-cyan))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent-purple))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <line x1="10%" y1="20%" x2="90%" y2="60%" 
              stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="20%" y1="80%" x2="80%" y2="20%" 
              stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="5%" y1="50%" x2="95%" y2="40%" 
              stroke="url(#lineGradient)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default ParticleBackground;