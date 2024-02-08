import React from 'react';
import tech from '../assets/tech.png';
 // Adjust the path based on your project structure

const Skills = () => {
  const skillsData = [
    { skill: 'Python', proficiency: 80 },
    { skill: 'MERN', proficiency: 70 },
    { skill: 'HTML', proficiency: 90 },
    { skill: 'CSS', proficiency: 75 },
    { skill: 'JS', proficiency: 70 },
    { skill: 'OOPS', proficiency: 60 },
    // Add more skills as needed
  ];

  return (
  <div>
    <h2 className="text-3xl font-bold mb-8 text-center">SKILLS</h2>
    <div className="flex items-center justify-center">
      {/* Left container with skills */}
      <div className="skills-container max-w-2xl flex-1 pr-8 mr-12">
        
        {skillsData.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="text-gray-700 text-semibold">{item.skill}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-teal-50">
                    {item.proficiency}%
                  </span>
                </div>
              </div>
              <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
                <div
                  style={{ width: `${item.proficiency}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-600"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right container with image */}
      <div>
        <img
          src={tech}
          alt="Skills Image"
          className="rounded-md"
          style={{ width: '300px', height: '300px' }} // Adjust width and height as needed
        />
      </div>
    </div>
    </div>
  );
};

export default Skills;
