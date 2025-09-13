// Animation utilities for the React app - matching WordPress main.js functionality
export const initializeAnimations = () => {
  if (typeof window !== 'undefined') {
    // Initialize WOW.js animations
    const initWOW = () => {
      // @ts-ignore
      if (window.WOW) {
        // @ts-ignore
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: false,
          live: true
        });
        wow.init();
      }
    };

    // Initialize data-background functionality
    const initDataBackground = () => {
      const elements = document.querySelectorAll('[data-background]');
      elements.forEach((element) => {
        const bgImage = element.getAttribute('data-background');
        if (bgImage) {
          (element as HTMLElement).style.backgroundImage = `url(${bgImage})`;
        }
      });
    };

    // Initialize data-bg-color functionality
    const initDataBgColor = () => {
      const elements = document.querySelectorAll('[data-bg-color]');
      elements.forEach((element) => {
        const bgColor = element.getAttribute('data-bg-color');
        if (bgColor) {
          (element as HTMLElement).style.backgroundColor = bgColor;
        }
      });
    };

    // Initialize Odometer counters
    const initializeOdometer = () => {
      const counters = document.querySelectorAll('.counter-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const odometer = entry.target.querySelector('.odometer');
            if (odometer) {
              const countValue = odometer.getAttribute('data-count');
              if (countValue) {
                setTimeout(() => {
                  odometer.innerHTML = countValue;
                }, 100);
              }
            }
          }
        });
      });

      counters.forEach((counter) => observer.observe(counter));
    };

    // Initialize smooth scrolling for anchor links
    const initSmoothScroll = () => {
      const links = document.querySelectorAll('.navigation a[href*="#"]:not([href="#"])');
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.includes('#')) {
            const target = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : href);
            if (target) {
              e.preventDefault();
              const offsetTop = (target as HTMLElement).offsetTop;
              const isMobile = window.innerWidth < 768;
              const scrollOffset = isMobile ? 70 : 80;
              
              window.scrollTo({
                top: offsetTop - scrollOffset,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };

    // Run all initializations
    setTimeout(() => {
      initWOW();
      initDataBackground();
      initDataBgColor();
      initializeOdometer();
      initSmoothScroll();
    }, 100);
  }
};

// Sticky header functionality
export const initializeStickyHeader = () => {
  if (typeof window !== 'undefined') {
    const header = document.getElementById('sticky-header');
    if (header) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          header.classList.add('sticky-menu');
        } else {
          header.classList.remove('sticky-menu');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }
};

// Smooth scrolling for anchor links
export const initializeSmoothScroll = () => {
  if (typeof window !== 'undefined') {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
};

// Preloader functionality
export const hidePreloader = () => {
  if (typeof window !== 'undefined') {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 300);
      }, 1000);
    }
  }
};
