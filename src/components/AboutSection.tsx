import React from 'react';

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  images?: {
    main?: string;
    secondary?: string;
  };
}

// Define default paths for the images here
const defaultImages = {
  main: "/about/about_img01.png",
  secondary: "/about/about_img02.png"
};

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "The World's 1st ICO Platform That Offers Rewards",
  subtitle = "Who we are",
  description = "The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens",
  buttonText = "Purchase Tokens",
  buttonUrl = "#",
  images = {} // Default to an empty object if the images prop isn't passed
}) => {
  // Merge the passed images with the defaults.
  // This ensures that even if a parent component only passes 'main', 'secondary' will still be available.
  const finalImages = { ...defaultImages, ...images };

  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={finalImages.main} alt="" />
              <img src={finalImages.secondary} alt="" className="img-two" />
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

export default AboutSection;

