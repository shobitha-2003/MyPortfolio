import React, { useState } from 'react'
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import "./Project.css"
import { Link } from "react-router-dom";

function Project() {
  const projects = [
    {
      title: "Grocery Shopping",
      image: "/assets/upcoming.png",
      tech: "ReactJs, Bootstrap, NodeJs,MongoDB",
      github: "https://github.com/yourrepo",
      description: [
        "Online grocery shopping application.",
        "User-friendly UI with cart and checkout.",
        "Admin panel for product management."
      ],
      modalContent: {
        intro: "This full-stack application allows users to shop groceries online with a seamless experience.",
        role: "I developed the frontend using React, designed the database schema, and implemented the admin panel for product management."
      }
    },
    {
      title: "Student Exit Management",
      image: "/assets/Student.png",
      tech: "React.js, Node.js,Express.js, MongoDB",
      github: "https://github.com/yourrepo",
      description: [
        "Online student exit request submission from the campus gate.",
        "Role-based access for Admin, HOD, and Security",
        "HOD approval or rejection via dashboard",
        "Automatic email notifications for approved requests",
        "Security verification using student ID before exit",
        "Fully digitized workflow to improve campus security"
      ],
      modalContent: {
        intro: "Developed a Digital Student Exit Management System to replace the manual gate-pass process with a secure and efficient online workflow. The system streamlines student exit requests, approvals, and verification through role-based dashboards, ensuring better campus control and transparency.",
        role: "I built the complete application including user authentication, role-based access control, and real-time notification system."
      }
    },
    {
      title: "Secure Vision Cloud AI",
      image: "/assets/secure.png",
      tech: "ReactJs,NodeJs,MongoDB",
      github: "https://github.com/yourrepo",
      description: [
        "System Health Monitoring: Real-time CPU, memory, and storage tracking",
        "Security Threat Detection: Identifies and maps active threats with alerts",
        "AI-Driven Insights: Predictive analytics for performance and security risks",
        "Cloud Resource Management: Optimizes resource usage and ensures high availability"
      ],
      modalContent: {
        intro: "Secure Vision Cloud AI is an AI-driven cloud security and system monitoring platform designed to track system health, detect security threats, and provide predictive insights for performance and security optimization.",
        role: "I developed the AI algorithms for threat detection, implemented cloud infrastructure, and designed the analytics dashboard."
      }
    },
    // {
    //   title: "Online Job Portal",
    //   image: "/assets/online.png",
    //   tech: "React, Spring Boot",
    //   github: "https://github.com/yourrepo",
    //   description: [
    //     "Job search and application platform.",
    //     "Employer and candidate dashboards.",
    //     "Resume upload and tracking."
    //   ],
    //   modalContent: {
    //     intro: "A comprehensive job portal connecting employers with potential candidates through an intuitive platform.",
    //     role: "I created both employer and candidate dashboards, implemented resume parsing, and developed the application tracking system."
    //   }
    // }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="container portfolio">
        <div style={{ marginTop: '80px', padding: '20px' }}>
          <div className="section-title text-light">
            <h6>PROJECTS</h6>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 project-box">
            <center><h5 className="mb-3" style={{color: '#020617'}}>Grocery Shopping</h5></center>
            <div 
              className="portfolio-wrap"
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
              onClick={() => setActiveIndex(0)}  
              style={{ height: "190px", backgroundColor: "#F4EA80", cursor: "pointer" }}
            >
              <img 
                src="/assets/upcoming.png" 
                alt="project"  
                style={{ height: "180px", objectFit: "fill" }}
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                 <Link>

  <i className="bx bx-info-circle"></i>
</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 project-box">
            <center><h5 className="mb-3" style={{color: '#020617'}}>Student Exit Management</h5></center>
            <div 
              className="portfolio-wrap"
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
              onClick={() => setActiveIndex(1)}  
              style={{ height: "190px", backgroundColor: "#e6cbf7", cursor: "pointer" }}
            >
              <img 
                src="/assets/Student.png" 
                alt="project"  
                style={{ height: "180px", objectFit: "fill" }}
              />
              <div className="portfolio-info">
                <div className="portfolio-links">

                    <Link>
  <i className="bx bx-info-circle"></i>
</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 project-box">
            <center><h5 className="mb-3" style={{color: '#020617'}}>Secure Vision Cloud AI</h5></center>
            <div 
              className="portfolio-wrap"
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
              onClick={() => setActiveIndex(2)}  
              style={{ height: "190px", backgroundColor: "#b3e1f8", cursor: "pointer" }}
            >
              <img 
                src="/assets/secure.png" 
                alt="project"  
                style={{ height: "180px", objectFit: "fill" }}
              />
              <div className="portfolio-info">
                <div className="portfolio-links">

                     <Link>
  <i className="bx bx-info-circle"></i>
</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <center><h5 className="mb-3" style={{color: '#020617'}}>Online Job Portal</h5></center>
            <div 
              className="portfolio-wrap"
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
              onClick={() => setActiveIndex(3)}  
              style={{ height: "190px", backgroundColor: "#DEF6FF", cursor: "pointer" }}
            >
              <img 
                src="/assets/online.png" 
                alt="project"  
                style={{ height: "180px", objectFit: "fill" }}
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a href="#">
                    <i className="bx bx-info-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div 
        className="modal fade" 
        id="projectModal" 
        tabIndex="-1" 
        aria-labelledby="projectModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-contents" style={{borderRadius:"10px"}}>
          
            <div className="modal-body">
              <h3 style={{color: '#020617'}}>{projects[activeIndex]?.title}</h3>
              
              <p style={{color: '#475569'}}>
                {projects[activeIndex]?.modalContent?.intro}
              </p>
              
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#020617' }}>
                <VscTools style={{ color: '#2563EB' }} />
                Technologies Used:
              </h4>
              <ul style={{color: '#475569'}}>
                {projects[activeIndex]?.tech.split(', ').map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#020617' }}>
                <MdOutlineFeaturedPlayList style={{ color: '#2563EB' }} />
                Key Features:
              </h4>
              <ul style={{color: '#475569'}}>
                {projects[activeIndex]?.description.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default Project;

