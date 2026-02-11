import React from 'react'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Metromindz Software, Bangalore",
      period: "July 2025 - Present",
      position: "Junior Developer",
      logo: '/assets/metromindz.png',
      responsibilities: [
        "Developing and maintaining full-stack features using React.js, TypeScript, Node.js, Express, and MongoDB",
        "Collaborating with UI/UX and backend teams to deliver scalable, production-ready web applications",
        "Implementing new modules and optimizing existing ones to improve performance and user experience",
        "Debugging and resolving application issues, resulting in better system stability and reliability"
      ],
      color: "#2F6FDB",
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
      hasCertificate: false,
      certificateLink: null
    },
    {
      id: 2,
      company: "Metromindz Software, Bangalore",
      period: "February 2025 – May 2025",
      position: "Web Development Intern",
      logo: '/assets/metromindz.png',
      responsibilities: [
        "Performed comprehensive website testing to ensure functionality, usability, performance, and cross-device responsiveness",
        "Identified, reported, and helped resolve UI and functional issues to improve user experience",
        "Designed and developed a Digital Exit Management System to digitize student exit approval workflows",
        "Implemented the application using React.js, Node.js, MongoDB, and CSS for efficient data management"
      ],
      color: "#2F6FDB",
      technologies: ['React.js', 'Node.js', 'MongoDB', 'CSS', 'JavaScript'],
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1exeQXP2cHifwsc_IVVsGfsR6ghzXT-xK/view?usp=sharing'
    },
    {
      id: 3,
      company: "Pulsecode Technology Private Limited, Mangalore",
      period: "October - November 2023",
      position: "User Experience Intern",
      logo: '/assets/pulsecode.jpg',
      responsibilities: [
        "Conducted user research through interviews and surveys to gather insights and guide design decisions",
        "Assisted in creating wireframes, prototypes, and high-fidelity UI designs using Figma",
        "Collaborated with team members to refine designs based on user feedback and usability principles",
        "Gained hands-on knowledge of MySQL fundamentals including queries, database structure, and data management"
      ],
      color: "#2F6FDB",
      technologies: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'MySQL'],
      hasCertificate: true,
      certificateLink: 'https://drive.google.com/file/d/1njphAc76MMBLTsvoTbkQtFGmRvOUeLOv/view?usp=sharing'
    }
  ]

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .experience-card-animate {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .experience-card-animate:nth-child(1) {
          animation-delay: 0.1s;
        }

        .experience-card-animate:nth-child(2) {
          animation-delay: 0.3s;
        }

        .experience-card-animate:nth-child(3) {
          animation-delay: 0.5s;
        }

        .experience-card {
          position: relative;
          overflow: hidden;
        }
        
        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, transparent 40%, rgba(47, 111, 219, 0.05) 100%);
          border-radius: 0 15px 0 0;
          pointer-events: none;
        }
        
        @media (max-width: 768px) {
          .card {
            padding: 20px !important;
          }
        }
      `}</style>

      <div className="container">
        <div style={{ marginTop: '80px', padding: '20px' }}>
          <div className="section-title mt-3 text-center">
            <h6 className="mb-3" style={{color:"#2F6FDB"}}>EXPERIENCE</h6>
          </div>
        </div>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-4 experience-card-animate">
              <div className="card experience-card p-3"
                   style={{
                     borderRadius: '16px',
                     border: '1px solid #E3ECFF',
                     borderLeft: `5px solid ${exp.color}`,
                     transition: 'all 0.3s ease',
                     background: '#FFFFFF',
                     boxShadow: '0 10px 30px rgba(47, 111, 219, 0.08)'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 15px 40px rgba(47, 111, 219, 0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(47, 111, 219, 0.08)';
                   }}>
                
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <div>
                    <div className="d-flex align-items-center mb-2" style={{gap:"5px"}}>
                      <div className="me-3" style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '5px',
                        
                      }}>
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={exp.company}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              borderRadius: '5px'
                            }}
                          />
                        ) : (
                          <FaBriefcase style={{ color: exp.color, fontSize: '1.5rem' }} />
                        )}
                      </div>
                      
                      <div>
                        <h5 className="fw-bold" style={{ color: '#0F2A44',marginBottom:"2px" }}>{exp.position}</h5>
                        <h6 className="mb-0" style={{ color: exp.color, fontSize: '1.1rem' }}>{exp.company}</h6>
                      </div>
                    </div>
                  </div>
                  
                <div className="mt-2 mt-md-0">
  <div className="d-flex align-items-center" style={{ gap: "3px" }}>
    <FaCalendarAlt className="me-2" style={{ color: "#6B7C93" }} />
    <span className="fw-medium" style={{ color: '#6B7C93' }}>
      {exp.period}
    </span>
  </div>

  {exp.hasCertificate && exp.certificateLink && (
    <div className="mt-2 d-flex justify-content-end">
      <a
        href={exp.certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <button className="d-flex align-items-center gap-2 text-white rounded px-3 py-2 border-0" 
                style={{
                  backgroundColor: '#2F6FDB',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1F5BC4';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2F6FDB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
          <span style={{paddingRight:"5px"}}>View Certificate</span>
          <FaExternalLinkAlt size={12}  />
        </button>
      </a>
    </div>
  )}
</div>

                </div>
                
                <div className="mt-2">
                  <h6 className="fw-bold mb-2" style={{ color: '#0F2A44' }}>
                    <FaBriefcase  style={{ color: exp.color,marginRight:"8px" }} />
                    Key Responsibilities
                  </h6>
                  <ul className="list-unstyled">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-start" style={{gap:"4px" }} >
                        <span className="me-1" style={{ color: exp.color, fontSize: '0.7rem',marginTop:"4px"}}>✔</span>
                        <span style={{ color: '#42526E', lineHeight: '1.6' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <h6 className="fw-bold mb-3" style={{ color: '#0F2A44' }}>
                    <FaLaptopCode className="me-2" style={{ color: exp.color,paddingRight:"5px",fontSize:"1.5rem" }} />
                    Technologies & Skills
                  </h6>
                  <div className="d-flex flex-wrap gap-2" style={{gap:"4px"}}>
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag"
                        style={{
                          background: '#EDF4FF',
                          color: '#42526E',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          border: `1px solid #D6E4FF`,
                          fontWeight: '500',
                          transition: 'all 0.3s ease',
                          cursor: 'default'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = exp.color;
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = `0 4px 12px rgba(47, 111, 219, 0.3)`;
                          e.currentTarget.style.borderColor = exp.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#EDF4FF';
                          e.currentTarget.style.color = '#42526E';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = '#D6E4FF';
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience;
