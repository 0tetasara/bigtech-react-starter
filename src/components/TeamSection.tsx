import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

interface TeamSectionProps {
  members?: TeamMember[];
  title?: string;
  subtitle?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  members,
  title = "The Leadership Team",
  subtitle = "Our team"
}) => {
  // Default team members if none provided - All 8 members like WordPress
  const defaultMembers: TeamMember[] = [
    {
      id: 1,
      name: "Cameron Williamson",
      position: "Founder & CO",
      image: "/team/team_img01.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Eleanor Pena",
      position: "Head of Design",
      image: "/team/team_img02.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      name: "Bessie Cooper",
      position: "VP People",
      image: "/team/team_img03.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      name: "Darlene Robertson",
      position: "Product Manager",
      image: "/team/team_img04.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 5,
      name: "Jacob Jones",
      position: "CTO",
      image: "/team/team_img05.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Jenny Wilson",
      position: "Marketing Director",
      image: "/team/team_img06.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 7,
      name: "Robert Fox",
      position: "Lead Developer",
      image: "/team/team_img07.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 8,
      name: "Kristin Watson",
      position: "UI/UX Designer",
      image: "/team/team_img08.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  const teamMembers = members || defaultMembers;

  return (
    <section id="team" className="team-area team-bg pt-130 pb-130" style={{ backgroundImage: 'url(/bg/team_bg.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">{subtitle}</span>
              <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-item wow fadeInUp" data-wow-delay={`.${member.id * 2}s`}>
                <div className="team-thumb">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h2 className="title">{member.name}</h2>
                  <span className="designation">{member.position}</span>
                  {member.social && (
                    <div className="team-social">
                      {member.social.facebook && (
                        <a href={member.social.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      )}
                      {member.social.youtube && (
                        <a href={member.social.youtube}>
                          <i className="fab fa-youtube"></i>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
