import React, { useState } from 'react';

interface ContactInfo {
  icon: string;
  title?: string;
  description: string;
}

interface ContactSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo[];
}

const ContactSection: React.FC<ContactSectionProps> = ({
  backgroundImage = "/full-image-from-wordpress/contact_bg.png",
  title = "ICO Crypto",
  subtitle = "Contact",
  contactInfo = [
    {
      icon: "fas fa-envelope",
      description: "company@gmail.com <br /> infoweb@gmail.com"
    },
    {
      icon: "fas fa-phone", 
      description: "+84 0977425031<br /> +998 765 775 34"
    },
    {
      icon: "fas fa-map-marker-alt",
      description: "State/province/area: <br />Georgia 198"
    }
  ]
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">{subtitle}</span>
              <h2 className="title">{title}</h2>
            </div>
          </div>
        </div>
        
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div className="contact-info-item">
                  <div className="icon">
                    <span className="icon-background"></span>
                    <i className={info.icon}></i>
                  </div>
                  <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: info.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="contact-form-wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-grp">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-grp">
              <textarea 
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="submit-btn text-center">
              <input className="btn" type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
