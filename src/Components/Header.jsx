import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm py-2 py-lg-3" style={{backgroundColor:"#2F6FDB"}}>
      <div className="container" >
        <div 
          className="navbar-brand d-flex align-items-center me-auto"
          style={{ cursor: 'pointer' }}
          onClick={() => scrollToSection('home')}
        >
          <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-2"
               style={{ width: '45px', height: '45px', backgroundColor: '#1F5BC4' }}>
         <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
  <span className="fw-bold fs-5">SN</span>
</Link>
          </div>
        </div>

        <button
          className="navbar-toggler border-0 shadow-none p-0"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <FaTimes className="fs-4 text-white" />
          ) : (
            <FaBars className="fs-4 text-white" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-lg-auto align-items-lg-center mt-3 mt-lg-0">
            
            <div className="nav-item position-relative mx-2">
              <a
                href='/about'
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                About
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
            
            <div className="nav-item position-relative mx-2">
              <a
                href='/education'
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Education
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
            
            <div className="nav-item position-relative mx-2">
              <a
                href='/experience'
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Experience
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
            
            <div className="nav-item position-relative mx-2">
              <a
                href="/projects"
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Projects
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
            
            <div className="nav-item position-relative mx-2">
              <a
                href="/skills"
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Skills
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
            
            <div className="nav-item position-relative mx-2">
              <a
                href='https://drive.google.com/file/d/1S6s5kfDNBRbXsR1I6Et6jyi5jYTQNNXH/view?usp=drive_link'
                target='_blank'
                rel="noopener noreferrer"
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Resume
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
            
            {/* <div className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href='/contact'
                className="btn text-white px-4 py-2 rounded-pill fw-medium"
                style={{
                  backgroundColor: "#1F5BC4",
                  border: "none",
                  transition: "all 0.3s ease",
                  transform: "translateY(0)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(47, 111, 219, 0.3)";
                  e.currentTarget.style.backgroundColor = "#1a4da8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backgroundColor = "#1F5BC4";
                }}
              >
                Contact
              </a>
            </div> */}
                  <div className="nav-item position-relative mx-2">
              <a
                href="/contact"
                className="nav-link fw-medium px-3 border-0 bg-transparent"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  position: "relative",
                  fontSize: "1.1rem"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A7C7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
             Contact
              </a>
              <span className="nav-underline" 
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#A7C7FF",
                      transition: "width 0.3s ease",
                      opacity: 0
                    }}></span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .nav-item:hover .nav-underline {
          width: 80% !important;
          opacity: 1 !important;
        }
        
        @media (max-width: 991px) {
          .nav-item {
            text-align: center;
            padding: 5px 0 !important;
          }
          
          .nav-item:hover .nav-underline {
            width: 50% !important;
          }
          
          .nav-link {
            padding: 8px 0 !important;
            display: inline-block !important;
          }
          
          .nav-underline {
            bottom: 6px !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Header;
