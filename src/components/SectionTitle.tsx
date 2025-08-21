
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-6 text-white text-center ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
