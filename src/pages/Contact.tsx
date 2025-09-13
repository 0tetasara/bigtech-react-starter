import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Get in touch with our team for any inquiries.
        </p>
      </div>
    </div>
  );
};

export default Contact;