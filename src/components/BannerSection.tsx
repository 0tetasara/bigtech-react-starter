import React from 'react';
import CountdownTimer from './CountdownTimer';

interface BannerSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  countdownDate?: string;
  progressValue?: number;
  progressText?: string;
  shapes?: {
    shape01?: string;
    shape02?: string;
    shape03?: string;
  };
}

const BannerSection: React.FC<BannerSectionProps> = ({
  backgroundImage = "src/assets/img/banner/banner_bg.jpg",
  title = "Join Future Of Algorithmic <span>Crypto</span> Trading Strategies",
  subtitle = "",
  countdownDate = "2024/12/31",
  progressValue = 75,
  progressText = "65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>",
  shapes = {
    shape01: "src/assets/img/banner/banner_shape01.png",
    shape02: "src/assets/img/banner/banner_shape02.png",
    shape03: "src/assets/img/banner/banner_shape03.png"
  }
}) => {
  return (
    <section className="banner-area banner-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-shape-wrap">
        {shapes.shape01 && <img src={shapes.shape01} alt="" className="img-one" />}
        {shapes.shape02 && <img src={shapes.shape02} alt="" className="img-two" />}
        {shapes.shape03 && <img src={shapes.shape03} alt="" className="img-three" />}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src="/banner/fire.png" alt="" />
              <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
              {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
            
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  aria-valuenow={progressValue} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
              <h4 className="title" dangerouslySetInnerHTML={{ __html: progressText }} />
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>
              <CountdownTimer targetDate={countdownDate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
