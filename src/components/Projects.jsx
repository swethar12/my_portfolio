// Projects.jsx
import React from 'react';
import art from '../assets/art.png';
import memory from '../assets/memory.png';
import food from '../assets/food.avif';
import cyber from '../assets/cyber.jpeg';


const Projects = () => {
  const images = [art, memory, food,cyber ];
  const imageTexts = [
    'DALL-E clone (MERN)',
    'Memory Game (JS)',
    'TasteBudz (React)',
    'Cybernautix(React and Firebase)',
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const openDemoLink = (link) => {
    window.open(link, '_blank');
  };

  const demoLinks = [
    'https://github.com/swethar12/Dall-E_clone',
    'https://simplypair.netlify.app/',
    'https://tastebudzapp.netlify.app/',
     'https://cybernautix.web.app/',
  ];

  return (
    <>
      <h1 className="font-bold text-3xl mb-8 text-center py-6 mt-16">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-16 mr-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-md max-w-xs mr-1 ml-20"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              className="h-auto max-w-full rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-40"
              src={image}
              alt={`Project ${index + 1}`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 hover:shadow-[0_35px_55px_-15px_#fcd34d]">
                <p className="text-black font-bold mb-2">{imageTexts[index]}</p>
                <button
                  className="bg-slate-600 text-white py-1 px-2 rounded-md hover:bg-slate-400 focus:outline-none focus:shadow-outline-green"
                  onClick={() => openDemoLink(demoLinks[index])}
                >
                  Demo
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
