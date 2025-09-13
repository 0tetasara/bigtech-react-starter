import React from 'react';

interface WhoWeAreSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  image?: string;
}

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  title = "The World's 1st ICO Platform That Offers Rewards",
  subtitle = "Who we are",
  description = "The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens",
  buttonText = "Purchase Tokens",
  buttonUrl = "#",
  image = "/about/about_img01.png"
}) => {
  return (
    <section id="who-we-are" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={image} alt="Who we are" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">{subtitle}</span>
                <h2 className="title">{title}</h2>
              </div>
              <p>{description}</p>
              <a href={buttonUrl} className="btn">{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
