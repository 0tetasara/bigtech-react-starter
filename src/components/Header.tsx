import React, { useState, useEffect } from 'react';

interface HeaderProps {
  showHeaderRight?: boolean;
  showHeaderLang?: boolean;
  showHeaderBtn?: boolean;
  headerBtnText?: string;
  headerBtnUrl?: string;
  showMobileSocial?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showHeaderRight = false,
  showHeaderLang = false,
  showHeaderBtn = true,
  headerBtnText = "Buy Now",
  headerBtnUrl = "#",
  showMobileSocial = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < 520) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* header-area */}
      <header id="header">
        <div 
          id="sticky-header" 
          className={`menu-area menu-style-two transparent-header ${isSticky ? 'sticky-menu' : ''}`}
        >
          <div className="container custom-container-three">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <a href="/">
                        <img src="src/assets/img/logo/logo.png" alt="Bigtech" />
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="menu-item-has-children">
                          <a href="/">Home</a>
                        </li>
                        <li><a href="/about">About</a></li>
                        <li className="menu-item-has-children">
                          <a href="/services">Services</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/pages">Pages</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/blog">Blog</a>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </div>

                    {showHeaderRight && (
                      <div className="header-action d-none d-md-block">
                        <ul>
                          {showHeaderLang && (
                            <li className="header-lang">
                              <span className="selected-lang">ENG</span>
                              <ul className="lang-list">
                                <li><a href="#">English</a></li>
                                <li><a href="#">Spanish</a></li>
                                <li><a href="#">French</a></li>
                              </ul>
                            </li>
                          )}

                          {showHeaderBtn && (
                            <li className="header-btn">
                              <a href={headerBtnUrl} className="btn">
                                {headerBtnText}
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </nav>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'menu-open' : ''}`}>
                  <nav className="menu-box">
                    <div className="close-btn" onClick={toggleMobileMenu}>
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                      <a href="/">
                        <img src="src/assets/img/logo/logo.png" alt="Bigtech" />
                      </a>
                    </div>
                    <div className="menu-outer">
                      <ul className="navigation">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/pages">Pages</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </div>

                    {showMobileSocial && (
                      <div className="social-links">
                        <ul>
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    )}
                  </nav>
                </div>
                <div 
                  className={`menu-backdrop ${isMobileMenuOpen ? 'backdrop-open' : ''}`}
                  onClick={toggleMobileMenu}
                ></div>
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}
    </>
  );
};

export default Header;
