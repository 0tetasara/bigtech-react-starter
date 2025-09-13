import { useEffect } from 'react';

// Hook to load external scripts dynamically
export const useScripts = () => {
  useEffect(() => {
    const loadScript = (src: string, id: string) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve(true);
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.onload = () => resolve(true);
        script.onerror = () => reject(false);
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        // Load jQuery first
        await loadScript('/src/assets/js/jquery-3.6.0.min.js', 'jquery');
        
        // Load other scripts in order
        await loadScript('/src/assets/js/bootstrap.min.js', 'bootstrap');
        await loadScript('/src/assets/js/jquery.odometer.min.js', 'odometer');
        await loadScript('/src/assets/js/jquery.countdown.min.js', 'countdown');
        await loadScript('/src/assets/js/jquery.knob.min.js', 'knob');
        await loadScript('/src/assets/js/jquery-countdowngampang.min.js', 'countdowngampang');
        await loadScript('/src/assets/js/jquery.ba-throttle-debounce.min.js', 'throttle');
        await loadScript('/src/assets/js/jquery.mCustomScrollbar.min.js', 'scrollbar');
        await loadScript('/src/assets/js/jarallax.min.js', 'jarallax');
        await loadScript('/src/assets/js/jquery.appear.js', 'appear');
        await loadScript('/src/assets/js/jquery.easing.js', 'easing');
        await loadScript('/src/assets/js/slick.min.js', 'slick');
        await loadScript('/src/assets/js/wow.min.js', 'wow');
        await loadScript('/src/assets/js/main.js', 'main');
        
        console.log('All scripts loaded successfully');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);
};
