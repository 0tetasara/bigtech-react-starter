import React, { useState, useEffect } from 'react';

interface ChooseItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ChooseSectionProps {
  title?: string;
  subtitle?: string;
  items?: ChooseItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  itemsPerSlide?: number;
}

const ChooseSection: React.FC<ChooseSectionProps> = ({
  title = "Why choose our bigtech <br /> <span>Token</span>",
  subtitle = "why Choose us",
  autoRotate = true,
  rotateInterval = 5000,
  itemsPerSlide = 4,
  items = [
    {
      id: 1,
      icon: "/icon/choose_icon01.svg",
      title: "Mobile payment make easy",
      description: "Add new trending and rare artwork to your collection."
    },
    {
      id: 2,
      icon: "/icon/choose_icon02.svg",
      title: "Lifetime free transaction",
      description: "Add new trending and rare artwork to your collection."
    },
    {
      id: 3,
      icon: "/icon/choose_icon03.svg",
      title: "Protect the identity",
      description: "Add new trending and rare artwork to your collection."
    },
    {
      id: 4,
      icon: "/icon/choose_icon04.svg",
      title: "Security & control over money",
      description: "Add new trending and rare artwork to your collection."
    },
    {
      id: 5,
      icon: "/icon/choose_icon02.svg",
      title: "Advanced Trading Tools",
      description: "Professional trading interface with advanced charting tools."
    },
    {
      id: 6,
      icon: "/icon/choose_icon01.svg",
      title: "24/7 Customer Support",
      description: "Round-the-clock support for all your trading needs."
    }
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  useEffect(() => {
    if (!autoRotate) return;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentSlide(current => (current + 1) % totalSlides);
          return 0;
        }
        return prev + (100 / (rotateInterval / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [autoRotate, rotateInterval, totalSlides]);

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return items.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="choose-area pt-130 pb-130" style={{ backgroundImage: 'url(/bg/choose_bg.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">{subtitle}</span>
              <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          </div>
        </div>
        <div className="row choose-active">
          {getCurrentItems().map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="choose-item">
                <div className="choose-icon">
                  <img className="light" src={item.icon} alt={item.title} />
                </div>
                <div className="choose-content">
                  <h2 className="title">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {autoRotate && totalSlides > 1 && (
          <div className="slide-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" 
               style={{ backgroundSize: `${progress}% 100%` }} aria-valuenow={progress}>
            <span className="slider__label sr-only">{Math.round(progress)}% completed</span>
          </div>
        )}
        
        {totalSlides > 1 && (
          <div className="choose-nav text-center mt-30">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setProgress(0);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ChooseSection;
