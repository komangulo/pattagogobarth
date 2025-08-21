
import React from 'react';

interface SocialIconProps {
  icon: string;
  link: string;
  alt: string;
  bgColor?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link, alt, bgColor = 'bg-white' }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mx-2 transition-transform duration-300 hover:scale-110"
    >
      <div className={`${bgColor} rounded-full p-2 w-12 h-12 flex items-center justify-center`}>
        <img src={icon} alt={alt} className="w-6 h-6" />
      </div>
    </a>
  );
};

export default SocialIcon;
