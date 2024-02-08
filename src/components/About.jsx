// About.jsx
import React from 'react';
import school from '../assets/school.png'; // Adjust the path based on your project structure

const About = () => {
  return (
    <div className="mt-6 mb-8">
      {/* Add space before the "About Me" heading */}
      <h2 className="text-3xl font-bold mb-4 text-center">ABOUT ME</h2>

      <div className="about-container flex items-center justify-center">
        {/* Add space between image and content */}
        <div className="me mr-16 ml-24">
          <img
            src={school}
            alt="About Me"
            className="rounded-md"
            style={{
              width: '400px',
              height: '300px',
            }}
          />
        </div>

        <div className="about-content">
          <h1 className='font-bold text-red-700'>R.M.K ENGINEERING COLLEGE</h1>
          <p className='font-semibold'>Btech IT</p>
          <p>cgpa - 9.05</p>
          <br />
          <h1 className='font-bold text-red-700'>EVERWIN MATRICULATION HIGHER SECONDARY SCHOOL</h1>
          <p><span className='font-semibold'>HSC</span> - 95.8%</p>
          <p><span className='font-semibold'>SSLC</span> - 95.6%</p>
          <br></br>
          <div className='italic'>
          <p>"Driven by a love for turning ideas into reality,I am committed to delivering </p> 
          <p>high-quality solutions. My passion for web development goes beyond writing</p>
          <p> code; it's about creating meaningful and impactful digital experiences for users."</p> 
          </div>
        </div>
      </div>

      {/* Add space after the content */}
      <div className="mt-18"></div>
    </div>
  );
};

export default About;
