import React, { useState } from 'react'; // Importa React y el hook useState
import { FaYoutube, FaTiktok, FaInstagram, FaGithub } from 'react-icons/fa'; // Importa los iconos de redes sociales

const LinkTree = ({ links, profileImage }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Estado para almacenar el índice del enlace activo

  // Mapa de iconos para cada red social
  const icons = {
    YouTube: <FaYoutube className="text-xl" />,
    TikTok: <FaTiktok className="text-xl" />,
    Instagram: <FaInstagram className="text-xl" />,
    GitHub: <FaGithub className="text-xl" />
  };

  // Clases de colores para los efectos de hover de los enlaces
  const colors = {
    YouTube: 'hover:bg-white hover:text-black',
    TikTok: 'hover:bg-white hover:text-black',
    Instagram: 'hover:bg-white hover:text-black',
    GitHub: 'hover:bg-white hover:text-black'
  };

  return (
    <div className="relative w-[400px] p-8"> {/* Contenedor principal con ancho fijo y padding */}
      {/* Fondo con efecto de vidrio esmerilado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#046281]/20 to-[#046281]/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl" />
      
      {/* Contenedor de contenido */}
      <div className="relative flex flex-col items-center">
        {/* Contenedor de la imagen de perfil con efecto de borde rotatorio */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#046281] via-[#046281]/80 to-[#046281]/60 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt" />
          <div className="relative">
            <img
              src={profileImage} // Imagen de perfil
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-white/50 shadow-lg transform transition duration-500 hover:scale-105" // Estilos para la imagen
            />
          </div>
        </div>

        {/* Nombre de usuario con texto de degradado */}
        <h1 className="mt-4 mb-8 text-2xl font-bold text-white bg-clip-text text-transparent">
          @MarkTech32
        </h1>

        {/* Contenedor de enlaces */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <a
              key={index} // Clave única para cada enlace
              href={link.url} // URL del enlace
              target="_blank" // Abre en una nueva pestaña
              rel="noopener noreferrer" // Mejora de seguridad al abrir enlaces externos
              className={`
                group relative flex items-center justify-center p-4 
                bg-white/10 backdrop-blur-sm rounded-xl text-white
                transform transition-all duration-300
                ${colors[link.name]} // Clase de color basada en el nombre del enlace
                ${activeIndex === index ? 'scale-105' : 'hover:scale-105'} // Efecto de escalado en hover
                border border-[#046281]/20 hover:border-[#046281]/50
                shadow-lg hover:shadow-[#046281]/20
              `}
              onMouseEnter={() => setActiveIndex(index)} // Establece el índice activo al pasar el mouse
              onMouseLeave={() => setActiveIndex(null)} // Restablece el índice activo al dejar de pasar el mouse
            >
              {/* Contenedor de icono y texto */}
              <div className="flex items-center space-x-3">
                <span className="transform transition-transform duration-300 group-hover:scale-110">
                  {icons[link.name]} {/* Icono correspondiente al enlace */}
                </span>
                <span className="font-medium">{link.name}</span> {/* Nombre del enlace */}
              </div>

              {/* Superposición de efecto hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Texto de pie de página */}
        <p className="mt-8 text-sm text-white/60">
          "The world is yours. Don't forget it"
        </p>
      </div>
    </div>
  );
};

export default LinkTree; // Exporta el componente para su uso en otras partes de la aplicación
