import React from 'react';

const About: React.FC = () => {
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
                <h2 className="title">About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-area-two pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img-two">
                <img src="/src/assets/img/others/about_img02.png" alt="about" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-two">
                <div className="section-title mb-30">
                  <span className="sub-title">About Bigtech</span>
                  <h2 className="title">We Are Leading The Future Of Digital Currency</h2>
                </div>
                <p>Bigtech is a pioneering cryptocurrency platform that has been at the forefront of digital currency innovation since our inception. We provide secure, reliable, and user-friendly solutions for cryptocurrency trading, storage, and investment.</p>
                <p>Our mission is to democratize access to digital currencies and blockchain technology, making it accessible to everyone regardless of their technical expertise or financial background.</p>
                <div className="about-list-two">
                  <ul>
                    <li><i className="fas fa-check"></i> Industry-leading security protocols</li>
                    <li><i className="fas fa-check"></i> 24/7 customer support</li>
                    <li><i className="fas fa-check"></i> Multi-currency wallet support</li>
                    <li><i className="fas fa-check"></i> Advanced trading tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-area pt-130 pb-100">
        <div className="team-shape-wrap">
          <img src="/src/assets/img/bg/team_shape01.png" alt="shape" className="shape-one" />
          <img src="/src/assets/img/bg/team_shape02.png" alt="shape" className="shape-two" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Our Team</span>
                <h2 className="title">Meet Our Expert Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/src/assets/img/team/team01.jpg" alt="team" />
                </div>
                <div className="team-content">
                  <h4>John Smith</h4>
                  <span>CEO & Founder</span>
                  <div className="team-social">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/src/assets/img/team/team02.jpg" alt="team" />
                </div>
                <div className="team-content">
                  <h4>Sarah Johnson</h4>
                  <span>CTO</span>
                  <div className="team-social">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/src/assets/img/team/team03.jpg" alt="team" />
                </div>
                <div className="team-content">
                  <h4>Michael Brown</h4>
                  <span>Head of Security</span>
                  <div className="team-social">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/src/assets/img/team/team04.jpg" alt="team" />
                </div>
                <div className="team-content">
                  <h4>Emily Davis</h4>
                  <span>Marketing Director</span>
                  <div className="team-social">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
