import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(135deg, #2F6FDB 0%, #1F5BC4 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{
          position: 'relative',
          width: '120px',
          height: '120px'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '4px solid transparent',
            borderTop: '4px solid #FFFFFF',
            borderRight: '4px solid #FFFFFF',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '90%',
            height: '90%',
            top: '5%',
            left: '5%',
            border: '4px solid transparent',
            borderBottom: '4px solid #A7C7FF',
            borderLeft: '4px solid #A7C7FF',
            borderRadius: '50%',
            animation: 'spin-reverse 2s linear infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70px',
            height: '70px',
            background: '#FFFFFF',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#2F6FDB',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            animation: 'pulse 2s ease-in-out infinite'
          }}>SN</div>
        </div>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            background: '#FFFFFF',
            borderRadius: '50%',
            animation: 'bounce 1.4s ease-in-out 0s infinite'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            background: '#FFFFFF',
            borderRadius: '50%',
            animation: 'bounce 1.4s ease-in-out 0.2s infinite'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            background: '#FFFFFF',
            borderRadius: '50%',
            animation: 'bounce 1.4s ease-in-out 0.4s infinite'
          }}></div>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
          }
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-15px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {/* Mobile/Tablet Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm py-2 py-lg-3 d-lg-none" style={{backgroundColor: '#2F6FDB'}}>
        <div className="container">
          <div className="navbar-brand d-flex align-items-center me-auto">
            <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                 style={{ width: '45px', height: '45px', backgroundColor: '#1F5BC4' }}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="fw-bold fs-5">SN</span>
              </a>
            </div>
          </div>

          <button
            className="navbar-toggler border-0 shadow-none p-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="fs-4 text-white" /> : <FaBars className="fs-4 text-white" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="w-100" style={{backgroundColor: '#2F6FDB'}}>
            <ul className="navbar-nav text-center py-2">
              <li className="nav-item py-1"><a href="/" className="nav-link text-white">Home</a></li>
              <li className="nav-item py-1"><a href="/about" className="nav-link text-white">About</a></li>
              <li className="nav-item py-1"><a href="/education" className="nav-link text-white">Education</a></li>
              <li className="nav-item py-1"><a href="/experience" className="nav-link text-white">Experience</a></li>
              <li className="nav-item py-1"><a href="/projects" className="nav-link text-white">Projects</a></li>
              <li className="nav-item py-1"><a href="https://drive.google.com/file/d/1S6s5kfDNBRbXsR1I6Et6jyi5jYTQNNXH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="nav-link text-white">Resume</a></li>
              <li className="nav-item py-1"><a href="/skills" className="nav-link text-white">Skills</a></li>
              <li className="nav-item py-1"><a href="/contact" className="nav-link text-white">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content - Centered */}
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="text-center">
          {/* Name */}
          <div>
            <h3 className="fw-bold ">Shobitha N V</h3>
          </div>

          {/* Title */}
          <div className="my-3">
            <h4>Full-Stack Developer</h4>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="d-none d-lg-block">
            <ul className="list-inline mt-4">
              <li className="list-inline-item mx-3"><a href="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</a></li>
              <li className="list-inline-item mx-3"><a href="/about" style={{textDecoration: 'none', color: 'inherit'}}>About</a></li>
              <li className="list-inline-item mx-3"><a href="/education" style={{textDecoration: 'none', color: 'inherit'}}>Education</a></li>
              <li className="list-inline-item mx-3"><a href="/experience" style={{textDecoration: 'none', color: 'inherit'}}>Experience</a></li>
              <li className="list-inline-item mx-3"><a href="/projects" style={{textDecoration: 'none', color: 'inherit'}}>Projects</a></li>
              <li className="list-inline-item mx-3"><a href="https://drive.google.com/file/d/1S6s5kfDNBRbXsR1I6Et6jyi5jYTQNNXH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>Resume</a></li>
              <li className="list-inline-item mx-3"><a href="/skills" style={{textDecoration: 'none', color: 'inherit'}}>Skills</a></li>
              <li className="list-inline-item mx-3"><a href="/contact" style={{textDecoration: 'none', color: 'inherit'}}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;