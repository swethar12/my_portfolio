import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import gmail from '../assets/gmail.png';
const Footer = () => {
  const handleIconClick = (link) => {
    // Redirect to the specified link when an icon is clicked
    window.open(link, '_blank');
  };

  return (
    <div className="w-full h-[50px] bg-cyan-600 bg-opacity-80 mt-12 flex items-center justify-center">
      {/* Example icons (replace with your locally hosted icons) */}
      <img
        src={github}  // Replace with the actual path to your GitHub icon
        alt="GitHub"
        className="cursor-pointer mx-4"
        onClick={() => handleIconClick('https://github.com/swethar12')}
      />
      <img
        src={instagram}  // Replace with the actual path to your Instagram icon
        alt="Instagram"
        className="cursor-pointer mx-4"
        onClick={() => handleIconClick('https://www.instagram.com/__swetha._.12/')}
      />
      <img
        src={linkedin}  // Replace with the actual path to your LinkedIn icon
        alt="LinkedIn"
        className="cursor-pointer mx-4"
        onClick={() => handleIconClick('https://www.linkedin.com/in/swetha-r-a4b732253/')}
      />
      <img
        src={gmail}  // Replace with the actual path to your LinkedIn icon
        alt="gmail"
        className="cursor-pointer mx-4"
        onClick={() => handleIconClick('https://www.linkedin.com/in/swetha-r-a4b732253/')}
      />
      {/* Add other icons as needed */}
    </div>
  );
};

export default Footer;
