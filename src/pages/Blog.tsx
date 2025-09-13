import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest crypto and blockchain news.
        </p>
      </div>
    </div>
  );
};

export default Blog;