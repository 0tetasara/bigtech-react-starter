import React from 'react';

interface TokenomicsProps {
  className?: string;
}

const Tokenomics: React.FC<TokenomicsProps> = ({ className = '' }) => {
  return (
    <section className={`tokenomics-area pt-130 pb-100 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Tokenomics</span>
              <h2 className="title">Token Distribution & Economics</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="tokenomics-chart">
              <div className="chart-wrapper">
                <canvas id="tokenomics-chart" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tokenomics-info">
              <div className="tokenomics-list">
                <div className="tokenomics-item">
                  <div className="token-color" style={{ backgroundColor: '#00C4F4' }}></div>
                  <div className="token-info">
                    <h5>Public Sale (40%)</h5>
                    <p>400,000,000 tokens allocated for public sale</p>
                  </div>
                </div>
                <div className="tokenomics-item">
                  <div className="token-color" style={{ backgroundColor: '#564DCA' }}></div>
                  <div className="token-info">
                    <h5>Team & Advisors (20%)</h5>
                    <p>200,000,000 tokens for team and advisors</p>
                  </div>
                </div>
                <div className="tokenomics-item">
                  <div className="token-color" style={{ backgroundColor: '#FF6B35' }}></div>
                  <div className="token-info">
                    <h5>Development (15%)</h5>
                    <p>150,000,000 tokens for platform development</p>
                  </div>
                </div>
                <div className="tokenomics-item">
                  <div className="token-color" style={{ backgroundColor: '#4ECDC4' }}></div>
                  <div className="token-info">
                    <h5>Marketing (10%)</h5>
                    <p>100,000,000 tokens for marketing activities</p>
                  </div>
                </div>
                <div className="tokenomics-item">
                  <div className="token-color" style={{ backgroundColor: '#45B7D1' }}></div>
                  <div className="token-info">
                    <h5>Reserve (10%)</h5>
                    <p>100,000,000 tokens held in reserve</p>
                  </div>
                </div>
                <div className="tokenomics-item">
                  <div className="token-color" style={{ backgroundColor: '#F39C12' }}></div>
                  <div className="token-info">
                    <h5>Ecosystem (5%)</h5>
                    <p>50,000,000 tokens for ecosystem growth</p>
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

export default Tokenomics;
