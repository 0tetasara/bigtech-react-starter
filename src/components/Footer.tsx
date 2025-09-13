import React, { useState } from 'react';

interface FooterProps {
  bgColor?: string;
  bgImage?: string;
  showCopyrightMenu?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  bgColor = '#030B15',
  bgImage = '/bg/footer_bg.jpg',
  showCopyrightMenu = true
}) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const copyrightMenuItems = [
    { text: 'Terms and conditions', url: '#' },
    { text: 'Privacy policy', url: '#' }
  ];

  return (
    <>
      {/* footer-area */}
      <footer>
        <div 
          className="footer-area-three footer-bg" 
          style={{ 
            backgroundColor: bgColor,
            backgroundImage: bgImage ? `url(${bgImage})` : 'none'
          }}
        >
          {/* Footer Top */}
          <div className="footer-top-wrap">
            <div className="container">
              <div className="row">
                {/* Footer Widget 1 - Logo & About */}
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <div className="footer-logo mb-35">
                      <a href="/">
                        <img src="/logo/logo.png" alt="Bigtech" />
                      </a>
                    </div>
                    <div className="footer-content">
                      <p>The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</p>
                      <div className="footer-social">
                        <ul>
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Widget 2 - Quick Links */}
                <div className="col-xl-2 col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h3>Quick Links</h3>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/faq">FAQ</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Widget 3 - Services */}
                <div className="col-xl-2 col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h3>Services</h3>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li><a href="#">ICO Launch</a></li>
                        <li><a href="#">Token Sale</a></li>
                        <li><a href="#">Crypto Trading</a></li>
                        <li><a href="#">Blockchain</a></li>
                        <li><a href="#">Smart Contract</a></li>
                        <li><a href="#">Wallet</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Widget 4 - Newsletter */}
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h3>Newsletter</h3>
                    </div>
                    <div className="footer-newsletter">
                      <p>Subscribe to our newsletter to get the latest updates about ICO and cryptocurrency news.</p>
                      <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                        <input 
                          type="email" 
                          placeholder="Enter your email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button type="submit">
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </form>
                      <div className="footer-newsletter-text">
                        <p><i className="fas fa-check"></i> No spam, only notifications about new products and updates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className={showCopyrightMenu ? "col-lg-6" : "col-lg-12 text-center"}>
                  <div className="copyright-text">
                    <p>&copy; 2024 Bigtech ICO. All rights reserved. Designed by <a href="#" className="text-primary">Bigtech Team</a></p>
                  </div>
                </div>

                {showCopyrightMenu && (
                  <div className="col-lg-6">
                    <div className="footer-menu">
                      <ul>
                        {copyrightMenuItems.map((item, index) => (
                          <li key={index}>
                            <a href={item.url}>{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-area-end */}
    </>
  );
};

export default Footer;
