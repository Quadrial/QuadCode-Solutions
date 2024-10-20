import React from 'react';

const AnimatedBackground = () => {
  const tools = [
    'html-5-svgrepo-com.svg',
    'nodejs-1-logo-svgrepo-com.svg',
    'mongodb-logo-svgrepo-com.svg',
    'nextjs-svgrepo-com.svg',
    'tailwind-svgrepo-com.svg',
    'react-svgrepo-com.svg',
    'javascript-svgrepo-com.svg'
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden"> {/* Full screen */}
      {tools.map((tool, index) => (
        <img
          key={index}
          src={`/images/${tool}`}
          alt={tool.split('-')[0]}  // A short name based on the file
          className="tool-icon"
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
