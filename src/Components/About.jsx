import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../App.css"

function About() {
   const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1S6s5kfDNBRbXsR1I6Et6jyi5jYTQNNXH/view?usp=drive_link', '_blank');
  };

    const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/shobitha-n-v-448941249/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/shobitha-2003',
      label: 'GitHub'
    },
    {
      icon: <HiOutlineMail />,
      url: 'mailto:shobithanaliyar@gmail.com',
      label: 'Email'
    }
  ];
  
  return (
   <>
    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-left {
        animation: fadeInLeft 0.8s ease-out;
      }

      .animate-right {
        animation: fadeInRight 0.8s ease-out;
      }

      .animate-up {
        animation: fadeInUp 0.6s ease-out;
      }

      .animate-delay-1 {
        animation-delay: 0.2s;
        opacity: 0;
        animation-fill-mode: forwards;
      }

      .animate-delay-2 {
        animation-delay: 0.4s;
        opacity: 0;
        animation-fill-mode: forwards;
      }

      .animate-delay-3 {
        animation-delay: 0.6s;
        opacity: 0;
        animation-fill-mode: forwards;
      }
    `}</style>

    <div className="container" style={{paddingBottom: '40px'}}>
   <div style={{marginTop: '80px', padding: '20px'}}>
  <div className="section-title mt-3">
          <h6>ABOUT</h6>
         
        </div>
   </div>
    <div className="row align-items-start">
          <div className="col-lg-4 col-md-5 mb-4 mb-md-0 animate-left">
            <div className="text-center">
              <img 
                src='/assets/p2.jpg' 
                alt="profile_img"
                className="img-fluid shadow-lg"
                
                style={{
                  width: '300px',
                  height: '360px',
                  objectFit: 'cover',
                  borderRadius:'16px',
                  border: '4px solid #DCE9FF',
                  boxShadow: '0 10px 30px rgba(47, 111, 219, 0.15)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              
              <div className="mt-3">
                <button 
                  className="btn btn-primary px-4 py-3 rounded-pill fw-medium"
                  onClick={handleDownloadResume}
                  style={{
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#2F6FDB',
                    border: 'none',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 15px rgba(47, 111, 219, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(47, 111, 219, 0.4)';
                    e.currentTarget.style.backgroundColor = '#1F5BC4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(47, 111, 219, 0.3)';
                    e.currentTarget.style.backgroundColor = '#2F6FDB';
                  }}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8 col-md-7 animate-right">
            <div className="ps-lg-4">
              <h3 className="fw-bold mb-3" style={{color: '#0F2A44'}}>
                Full Stack Developer
              </h3>
              
              <p className="mb-3 animate-up animate-delay-1" style={{color: '#42526E', fontSize: '1rem'}}>
                Results-oriented Information Science Engineering graduate currently working as a Junior MERN Stack Developer at Metromindz Software, Bangalore. Passionate about building scalable, user-friendly web applications and solving real-world problems through technology.
              </p>
              
              <p className="mb-3 animate-up animate-delay-2" style={{color: '#42526E', fontSize: '1rem'}}>
                Proficient in MongoDB, Express.js, React.js, and Node.js, with practical experience in frontend development, backend integration, and database management. Strong analytical and problem-solving skills, with a keen eye for detail and clean code practices.
              </p>
              
              <p className="mb-3 animate-up animate-delay-3" style={{color: '#42526E', fontSize: '1rem'}}>
                Actively contributing to live projects, collaborating with cross-functional teams, and continuously learning modern web technologies to deliver efficient and impactful solutions.
              </p>
              
              <div className="row mt-3">
                <div className="col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <span className="fs-5 fw-bold" style={{color:"#2F6FDB"}}>&#8618;</span>
                    <div>
                      <p className="mb-0 p-1" style={{color: '#4A5D73', fontSize: '1rem'}}>Email: shobithanaliyar@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <span className="fs-5 fw-bold" style={{color:"#2F6FDB"}}>&#8618;</span>
                    <div>
                      <p className="mb-0 p-1" style={{color: '#4A5D73', fontSize: '1rem'}}>Current Location: Bangalore</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <span className="fs-5 fw-bold" style={{color:"#2F6FDB"}}>&#8618;</span>
                    <div>
                      <p className="mb-0 p-1" style={{color: '#4A5D73', fontSize: '1rem'}}>Experience: 3+ Months</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <span className="fs-5 fw-bold" style={{color:"#2F6FDB"}}>&#8618;</span>
                    <div>
                      <p className="mb-0 p-1" style={{color: '#4A5D73', fontSize: '1rem'}}>Graduation: B.E in ISE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-3 justify-content-center justify-content-md-start" style={{gap:"10px"}}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#E6F0FF',
                      border: '2px solid #2F6FDB',
                      color: '#2F6FDB',
                      fontSize: '1.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2F6FDB';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateY(-3px) rotate(5deg)';
                      e.currentTarget.style.boxShadow = '0 6px 15px rgba(47, 111, 219, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E6F0FF';
                      e.currentTarget.style.color = '#2F6FDB';
                      e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
   </div>
   </div></div></div>
   </>
  )
}

export default About;
