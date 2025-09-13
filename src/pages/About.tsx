import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About BigTech</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Learn more about our innovative crypto solutions and blockchain technology.
        </p>
      </div>
    </div>
  );
};

export default About;