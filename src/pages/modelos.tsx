import React from 'react';

const modelos = [
  { nombre: 'Lauuritaul', img: '/lovable-uploads/1.PNG' },
  { nombre: 'Catawase', img: '/lovable-uploads/2.PNG' },
  { nombre: 'Carismail', img: '/lovable-uploads/3.PNG' },
  { nombre: 'Nicolfinny', img: '/lovable-uploads/4.PNG' },
  { nombre: 'Elipeth', img: '/lovable-uploads/5.PNG' },
  { nombre: 'Jademoon', img: '/lovable-uploads/6.PNG' },
  { nombre: 'Lugmail', img: '/lovable-uploads/7.PNG' },
  { nombre: 'Tinysilv', img: '/lovable-uploads/8.PNG' },
  { nombre: 'Valerytaylor', img: '/lovable-uploads/9.PNG' },
  { nombre: 'Antodoll', img: '/lovable-uploads/10.PNG' },
  { nombre: 'Kellykute', img: '/lovable-uploads/11.PNG' },
  { nombre: 'Galvygrey', img: '/lovable-uploads/12.PNG' },
  { nombre: 'Angelteen', img: '/lovable-uploads/13.PNG' },
  { nombre: 'Hellidoll', img: '/lovable-uploads/14.PNG' },
  { nombre: 'Sensualangel', img: '/lovable-uploads/15.PNG' },
  { nombre: 'Angelazoli', img: '/lovable-uploads/16.PNG' },
  { nombre: 'Cutetefi', img: '/lovable-uploads/17.PNG' },
  { nombre: 'Prinsexx', img: '/lovable-uploads/18.PNG' },
  { nombre: 'Alanaqueen', img: '/lovable-uploads/19.PNG' },
  { nombre: 'Modelo 20', img: '/lovable-uploads/20.PNG' },
];

const arrow = '/lovable-uploads/arrow-down.png';
const ofLogo = '/lovable-uploads/of-logo.png';
const ofGif = '/lovable-uploads/of-gif.gif';

const ModelosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 w-full">
      {/* Encabezado */}
      <div className="flex flex-col items-center mb-6">
        <p className="text-white text-center text-lg font-semibold mb-2 tracking-wide uppercase">
          Accede a todos los perfiles de modelos<br />con una suscripción completamente gratis
        </p>
        <img src={arrow} alt="" className="w-10 animate-bounce mb-4" />
      </div>

      {/* Lista de modelos */}
      <div className="flex flex-col gap-10 w-full max-w-5xl px-2">
        {modelos.map((modelo, idx) => (
          <div key={idx} className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-800 flex flex-col items-center">
            {/* Logo y gif absolutamente centrados uno encima del otro, gif un poco a la izquierda */}
            <img src={ofLogo} alt="OF Logo" className="w-48 h-48" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, pointerEvents: 'none' }} />
            <img src={ofGif} alt="OF GIF" className="w-48 h-48" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-60%, -50%)', zIndex: 3, pointerEvents: 'none' }} />
            <img src={modelo.img} alt="Modelo" className="w-full object-cover" style={{ height: 400, maxHeight: '60vw', minHeight: 220, filter: 'brightness(0.92)' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelosPage; 