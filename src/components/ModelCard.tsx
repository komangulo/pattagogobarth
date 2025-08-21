
import React from 'react';

interface ModelCardProps {
  imageSrc: string;
  name: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ imageSrc, name }) => {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6">
      <div className="overflow-hidden rounded transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <img 
          src={imageSrc} 
          alt={`Modelo ${name}`} 
          className="w-full aspect-[3/4] object-cover"
        />
        <div className="bg-black bg-opacity-70 p-2 text-center">
          <h3 className="text-white text-lg font-bold">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
