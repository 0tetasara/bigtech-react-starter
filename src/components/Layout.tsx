import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { initializeAnimations, initializeStickyHeader, hidePreloader } from '../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
  showPreloader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showPreloader = false }) => {
  useEffect(() => {
    // Initialize all animations and interactive features
    initializeAnimations();
    initializeStickyHeader();
    
    if (showPreloader) {
      hidePreloader();
    }

    // Load external scripts
    const loadScript = (src: string, id: string) => {
      if (document.getElementById(id)) return;
      
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.async = true;
      document.head.appendChild(script);
    };

    // Load WOW.js for animations
    loadScript('src/assets/js/wow.min.js', 'wow-js');
    loadScript('src/assets/js/jquery.odometer.min.js', 'odometer-js');
    loadScript('src/assets/js/main.js', 'main-js');
  }, [showPreloader]);

  return (
    <>
      {/* Preloader */}
      {showPreloader && (
        <div id="preloader">
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )}

      {/* Header */}
      <Header 
        showHeaderRight={true}
        showHeaderBtn={true}
        headerBtnText="Buy Now"
        headerBtnUrl="#"
      />

      {/* Main Content Area */}
      <main className="main-area">
        {children}
      </main>

      {/* Footer */}
      <Footer 
        showCopyrightMenu={true}
      />
    </>
  );
};

export default Layout;
