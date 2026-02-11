import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <>
    <div className="container">
   <div style={{marginTop: '80px', padding: '20px'}}>
  <div className="section-title text-light mt-3">
          <h6 className='mb-3'>SKILLS</h6>
        </div>
   </div>

   <div className='skills-container ' >
    <div className='skill-category'>
        <h4>Languages</h4>
        <div className='skill-icons'>
        <img src="/assets/java.png" alt='java' />
        <img src="/assets/html.png" alt='html' />
        <img src="/assets/css.png" alt='css' />
        <img src="/assets/js.png" alt='javascript' />
        <img src="/assets/ts.png" alt='typescript' />
        </div>
    </div>

    <div className='skill-category'>
        <h4>Database</h4>
         <div className='skill-icons'>
        <img src="/assets/mongodb.png" alt='mongodb' />
        <img src="/assets/mysql.png" alt='mysql' />
        </div>
    </div>

      <div className='skill-category'>
        <h4>Framework</h4>
         <div className='skill-icons'>
        <img src="/assets/react.webp" alt='react' />
        <img src="/assets/bootstrap.jpg" alt='bootstrap' />
        <img src="/assets/nodejs.png" alt='nodejs' />
        <img src="/assets/expressjs.png" alt='expressjs' />
        </div>
    </div>

    <div className='skill-category' >
        <h4>Tools</h4>
         <div className='skill-icons'>
        <img src="/assets/vs.png" alt='vs_code' />
        <img src="/assets/github.png" alt='github' />
</div>
    </div>

   </div>
   </div>
    </>
  )
}

export default Skills