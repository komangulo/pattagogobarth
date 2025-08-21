
import React from 'react';

interface CallToActionProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ link, children, className = '' }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-block px-6 py-2 bg-blowketing-pink text-white rounded 
      font-bold uppercase tracking-wider transition-all duration-300
      hover:bg-white hover:text-blowketing-pink hover:neon-box ${className}`}
    >
      {children}
    </a>
  );
};

export default CallToAction;
