import React from 'react';

const Services: React.FC = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumb-area breadcrumb-bg" data-background="/src/assets/img/bg/breadcrumb-bg.jpg">
        <div className="breadcrumb-shape-wrap">
          <img src="/src/assets/img/bg/breadcrumb_shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Our Services</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-area-two pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">What We Offer</span>
                <h2 className="title">Comprehensive Cryptocurrency Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="services-content-two">
                  <h4>Cryptocurrency Trading</h4>
                  <p>Trade over 50 cryptocurrencies with advanced charting tools, real-time market data, and professional trading features.</p>
                  <ul>
                    <li>Advanced order types</li>
                    <li>Real-time charts</li>
                    <li>Market analysis tools</li>
                    <li>Mobile trading app</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <i className="fas fa-wallet"></i>
                </div>
                <div className="services-content-two">
                  <h4>Secure Digital Wallet</h4>
                  <p>Store your digital assets safely with our multi-signature cold storage wallets and advanced security protocols.</p>
                  <ul>
                    <li>Multi-signature security</li>
                    <li>Cold storage protection</li>
                    <li>Insurance coverage</li>
                    <li>Multi-currency support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="services-content-two">
                  <h4>ICO Launch Platform</h4>
                  <p>Launch your own cryptocurrency project with our comprehensive ICO platform and fundraising solutions.</p>
                  <ul>
                    <li>Token creation</li>
                    <li>Smart contracts</li>
                    <li>Marketing support</li>
                    <li>Legal compliance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="services-content-two">
                  <h4>Security Auditing</h4>
                  <p>Comprehensive security audits for blockchain projects and smart contracts to ensure maximum protection.</p>
                  <ul>
                    <li>Smart contract audits</li>
                    <li>Vulnerability assessment</li>
                    <li>Security consulting</li>
                    <li>Compliance review</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="services-content-two">
                  <h4>Blockchain Development</h4>
                  <p>Custom blockchain development services for enterprises looking to implement distributed ledger technology.</p>
                  <ul>
                    <li>Custom blockchain</li>
                    <li>DApp development</li>
                    <li>Integration services</li>
                    <li>Maintenance support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="services-content-two">
                  <h4>Education & Training</h4>
                  <p>Comprehensive educational resources and training programs to help you understand cryptocurrency and blockchain.</p>
                  <ul>
                    <li>Online courses</li>
                    <li>Webinar series</li>
                    <li>Trading tutorials</li>
                    <li>Market analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area-two pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="cta-content-two text-center">
                <h2 className="title">Ready to Get Started?</h2>
                <p>Contact us today to learn more about our services and how we can help you succeed in the cryptocurrency market.</p>
                <div className="cta-btn-two">
                  <a href="/contact" className="btn">Contact Us</a>
                  <a href="#" className="btn btn-two">View Pricing</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
