import React, { useEffect } from 'react';
import { initializeAnimations } from '../utils/animations';
import BannerSection from '../components/BannerSection';
import AboutSection from '../components/AboutSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import PartnersSection from '../components/PartnersSection';
import ChooseSection from '../components/ChooseSection';
import ChartSection from '../components/ChartSection';
import DocumentSection from '../components/DocumentSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <>
      {/* Hero/Banner Section - WordPress Style */}
      <BannerSection 
        backgroundImage="/full-image-from-wordpress/banner_bg.jpg"
        title="Join Future Of Algorithmic <span>Crypto</span> Trading Strategies"
        countdownDate="2024/12/31"
        progressValue={75}
        progressText="65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>"
        shapes={{
          shape01: "/full-image-from-wordpress/banner_shape01.png",
          shape02: "/full-image-from-wordpress/banner_shape02.png",
          shape03: "/full-image-from-wordpress/banner_shape03.png"
        }}
      />

      {/* About Section - WordPress Style with both images */}
      <AboutSection 
        title="The World's 1st ICO Platform That Offers Rewards"
        subtitle="Who we are"
        description="The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens"
        buttonText="Purchase Tokens"
        buttonUrl="#"
      />

      {/* Partner Section - WordPress Style with hover effects */}
      <PartnersSection 
        title="Our top partner"
        subtitle=""
      />

      {/* Choose/Features Section with auto-rotating slides */}
      <ChooseSection 
        title="Why choose our bigtech <br /> <span>Token</span>"
        subtitle="why Choose us"
        autoRotate={true}
        rotateInterval={5000}
        itemsPerSlide={4}
      />

      {/* Chart/Buy Section - WordPress Style with chart.png */}
      <ChartSection 
        backgroundImage="/full-image-from-wordpress/chart_bg.jpg"
        chartImage="/chart/chart.png"
      />

      {/* Roadmap Section */}
      <section id="roadmap" className="roadmap-area">
        <div className="container custom-container-two">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">OUr Roadmap</span>
                <h2 className="title">Bigtech Strategy and <br /> Project <span>Plan</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bt-roadmap_x">
                <div className="bt-roadmap-wrap">
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of Q4 2021</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">Concept</h4>
                      <span>EVM support for parthians</span>
                      <span>SubQuery Academy</span>
                      <span>Proof of indexing</span>
                    </div>
                  </div>
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of Q5 2022</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">Research</h4>
                      <span>SubQuery Builders/Grants Program</span>
                      <span>SQT Network contract internal MVP</span>
                      <span>Coordinator and client SDK</span>
                    </div>
                  </div>
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of Q6 2023</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">App beta test</h4>
                      <span>Public testnet launch</span>
                      <span>SubQuery Network Explorer and dApp</span>
                      <span>Point-in-time indexing</span>
                    </div>
                  </div>
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of Q7 2024</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">Token Test</h4>
                      <span>SQT token generation event</span>
                      <span>Public incentivize testnet launch</span>
                      <span>Data traffic insights and reporting</span>
                    </div>
                  </div>
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of Q8 2024</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">Alpha Test</h4>
                      <span>Launch of the SubQuery Foundation</span>
                      <span>Finalise research for other Layer-1 chains</span>
                      <span>Liquidity mining program</span>
                    </div>
                  </div>
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of Q9 2024</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">Benefits</h4>
                      <span>Mainnet launch</span>
                      <span>Centralized exchange launch</span>
                      <span>Public incentivize testnet</span>
                    </div>
                  </div>
                  <div className="bt-roadmap-item">
                    <span className="roadmap-title">Mid of 10 2024</span>
                    <div className="roadmap-content">
                      <span className="dot"></span>
                      <h4 className="title">Operational</h4>
                      <span>SubQuery launches its <br /> own parthian</span>
                      <span>SubQuery Foundation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document/Whitepaper Section - WordPress Style with document_img.png */}
      <DocumentSection 
        title="Read Bigtech <span>Documents</span>"
        subtitle="Whitepaper"
        image="/document/document_img.png"
        documents={[
          "White Paper",
          "Privacy & Policy", 
          "Terms Of Coin Sale",
          "One Pager"
        ]}
        buttonText="Download Doc"
        buttonUrl="#"
      />

      {/* Team Section - WordPress Style with proper background */}
      <TeamSection 
        title="The Leadership <br /> <span>Team</span>"
        subtitle="Our team"
      />

      {/* Contact Section - WordPress Style */}
      <ContactSection 
        backgroundImage="/full-image-from-wordpress/contact_bg.png"
        title="ICO Crypto"
        subtitle="Contact"
      />
    </>
  );
};

export default Home;
