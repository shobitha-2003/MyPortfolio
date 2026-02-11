import React from 'react'
import { BsLink45Deg } from "react-icons/bs";
import "./Education.css";

function Education() {
  const certifications = [
    {
      id: 1,
      title: "Programming in Java",
      image: "/assets/nptel.png",
      link: "https://drive.google.com/file/d/1q5mmh3FTWZM0006vXeCVwpDDSzGJikOn/view?usp=sharing",
      category: "filter-app"
    },
    {
      id: 2,
      title: "Problem Solving through C Programming",
      image: "/assets/nptel.png",
      link: "https://drive.google.com/file/d/1xRDtwPzCLpzVcvbK-UXU5igyuB6WOqwi/view?usp=sharing",
      category: "filter-app"
    },
    {
      id: 3,
      title: "UiPath Certification",
      image: "/assets/UiPath.png",
      link: "https://drive.google.com/file/d/1QoGkYmPsaizVNLwTNCK2F8jvig4_S1pH/view?usp=drive_link",
      category: "filter-app"
    },
    {
      id: 4,
      title: "Salesforce Certification",
      image: "/assets/salesforce.png",
      link: "https://www.salesforce.com/trailblazer/shobithanv",
      category: "filter-project"
    }
  ];

  return (
    <>
      <div className="container">
        <div style={{marginTop: '80px', padding: '20px'}}>
          <div className="section-title text-light mt-3">
            <h6>EDUCATION</h6>
          </div>
        </div>

        <div className="contents" id="content">
          <div className="box box-animate">
            <h5>2021-2025</h5>
            <h5>MANGALORE INSTITUTE OF TECHNOLOGY & ENGINEERING</h5>
            <p>Completed Bachelor of Engineering in Information Science and Engineering with CGPA 9.2, MITE Moodbodri, Karnataka.</p>
          </div>

          <div className="box box-animate">
            <h5>2020-2021</h5>
            <h5>NARENDRA PU COLLEGE THENKILA PUTTUR</h5>
            <p>Completed my pre-university education from Narendra PU COLLEGE with 95 percentage.</p>
          </div>

          <div className="box box-animate">
            <h5>2018-2019</h5>
            <h5>PRAGATHI ENGLISH MEDIUM SCHOOL KANIYOOR PUTTUR</h5>
            <p>Completed SSLC from PEMS Kaniyoor, with 91 percentage</p>
          </div>
        </div>
      </div>
      
      <div className="portfolio">
        <div className="container">
          <div className="section-title text-light">
            <h6>ONLINE CERTIFICATIONS</h6>
          </div>

          <div className="row portfolio-container">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className={`col-lg-3 col-md-6 portfolio-item ${cert.category}`}
              >
                <div className="portfolio-wrap">
                  <img 
                    src={cert.image} 
                    className="img-fluid certification-img" 
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'contain',
                      backgroundColor: '#FFFFFF',
                      padding: '10px'
                    }}
                  />
                  <div className="portfolio-info">
                    <h4>{cert.title}</h4>
                    <div className="portfolio-links">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Certificate"
                      >
                        <BsLink45Deg />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Education