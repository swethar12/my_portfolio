import React from 'react';
import me from '../assets/me.jpeg';

const Landing = () => {
  return (
    <div className="flex items-center space-x-24 justify-center h-screen">
      <div className="text-center">
        <p className="text-4xl font-semibold mb-4">Hello,</p>
        <p className="text-4xl font-bold mb-4">I'm Swetha</p>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-2">
            I am a passionate <span className="font-bold italic text-red-700">full-stack developer</span> with expertise
          </p>
          <p className="text-lg text-gray-700 mb-4">
            in creating interactive and user-friendly web applications.
          </p>
          <button className="bg-cyan-600 hover:bg-gray-400 text-white py-2 px-4 rounded">
            <a href="swetha_resume.pdf" download="resume">Download CV</a>
          </button>
        </div>
      </div>
      <div className="ml-4">
        <img
          src={me}
          alt="Landing Image"
          className="rounded-full shadow-md"
          style={{ width: '200px', height: '250px' }} // Adjust width and height as needed
        />
      </div>
      <div className="border-b border-gray-500 h-4 my-4"></div>
    </div>
  );
};

export default Landing;
