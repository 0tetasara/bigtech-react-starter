import React, { useState } from 'react';

interface ChartSectionProps {
  backgroundImage?: string;
  chartImage?: string;
  chartData?: {
    funding: {
      title: string;
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
    token: {
      title: string;
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
  };
  chartStats?: string[];
}

const ChartSection: React.FC<ChartSectionProps> = ({
  backgroundImage = "src/assets/img/bg/chart_bg.jpg",
  chartImage = "/chart/chart.png",
  chartData = {
    funding: {
      title: "1 CNL = 0.0863 BTC",
      description: "The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens",
      buttonText: "Buy Now",
      buttonUrl: "#"
    },
    token: {
      title: "2 CNL = 0.0863 BTC",
      description: "The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens",
      buttonText: "Buy Now",
      buttonUrl: "#"
    }
  },
  chartStats = [
    "Contingency: 70%",
    "Business Development: 10%",
    "Investor: 30%",
    "Poland: 8%",
    "Legal & Regulation: 10%",
    "Czech Republic: 15%"
  ]
}) => {
  const [activeTab, setActiveTab] = useState<'funding' | 'token'>('funding');

  return (
    <section id="sales" className="chart-area chart-bg jarallax pt-130 pb-130" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Token Distribution</span>
              <h2 className="title">Token Sale & <span>Distribution</span></h2>
            </div>
          </div>
        </div>
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={chartImage} alt="Chart" />
                <ul>
                  {chartStats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="chart-content wow fadeInLeft" data-wow-delay=".2s">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${activeTab === 'funding' ? 'active' : ''}`}
                      id="tab-funding" 
                      onClick={() => setActiveTab('funding')}
                      type="button" 
                      role="tab"
                    >
                      Funding Allocation
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${activeTab === 'token' ? 'active' : ''}`}
                      id="tab-token" 
                      onClick={() => setActiveTab('token')}
                      type="button" 
                      role="tab"
                    >
                      Token Allocation
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className={`tab-pane fade ${activeTab === 'funding' ? 'show active' : ''}`} id="funding" role="tabpanel">
                    <div className="chart-content-inner">
                      <h2 className="title">{chartData.funding.title}</h2>
                      <p>{chartData.funding.description}</p>
                      <a href={chartData.funding.buttonUrl} className="btn">{chartData.funding.buttonText}</a>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'token' ? 'show active' : ''}`} id="token" role="tabpanel">
                    <div className="chart-content-inner">
                      <h2 className="title">{chartData.token.title}</h2>
                      <p>{chartData.token.description}</p>
                      <a href={chartData.token.buttonUrl} className="btn">{chartData.token.buttonText}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
