import React from 'react';

interface DocumentSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  documents?: string[];
  buttonText?: string;
  buttonUrl?: string;
}

const DocumentSection: React.FC<DocumentSectionProps> = ({
  title = "Read Bigtech <span>Documents</span>",
  subtitle = "Whitepaper",
  image = "/document/document_img.png",
  documents = [
    "White Paper",
    "Privacy & Policy", 
    "Terms Of Coin Sale",
    "One Pager"
  ],
  buttonText = "Download Doc",
  buttonUrl = "#"
}) => {
  return (
    <section className="document-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="document-img text-center wow fadeInLeft" data-wow-delay=".2s">
              <img src={image} alt="Document" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="document-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-35">
                <span className="sub-title">{subtitle}</span>
                <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
              </div>
              <ul className="document-list">
                {documents.map((doc, index) => (
                  <li key={index}>
                    <i className="fas fa-file-pdf"></i>
                    {doc}
                  </li>
                ))}
              </ul>
              <a href={buttonUrl} className="btn">{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
