import React from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  url?: string;
}

interface PartnersSectionProps {
  partners?: Partner[];
  title?: string;
  subtitle?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ 
  partners,
  title = "Our top partner",
  subtitle = ""
}) => {
  // Default partners if none provided
  const defaultPartners: Partner[] = [
    { id: 1, name: "Partner 1", logo: "/partner/partner_img01.png" },
    { id: 2, name: "Partner 2", logo: "/partner/partner_img02.png" },
    { id: 3, name: "Partner 3", logo: "/partner/partner_img03.png" },
    { id: 4, name: "Partner 4", logo: "/partner/partner_img04.png" },
    { id: 5, name: "Partner 5", logo: "/partner/partner_img05.png" },
    { id: 6, name: "Partner 6", logo: "/partner/partner_img06.png" },
    { id: 7, name: "Partner 7", logo: "/partner/partner_img07.png" },
    { id: 8, name: "Partner 8", logo: "/partner/partner_img08.png" },
    { id: 9, name: "Partner 9", logo: "/partner/partner_img09.png" },
    { id: 10, name: "Partner 10", logo: "/partner/partner_img10.png" }
  ];

  const partnerList = partners || defaultPartners;

  return (
    <div className="partner-area pt-130 pb-130">
      <div className="container">
        {(title || subtitle) && (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                {subtitle && <span className="sub-title">{subtitle}</span>}
                {title && <h2 className="title">{title}</h2>}
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partnerList.map((partner) => (
                  <li key={partner.id} className="partner-item">
                    {partner.url ? (
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        <img src={partner.logo} alt={partner.name} className="partner-logo" />
                      </a>
                    ) : (
                      <img src={partner.logo} alt={partner.name} className="partner-logo" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
