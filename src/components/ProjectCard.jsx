import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);

  if (!project) return null;

  // --- MAPEO DE IMÁGENES LOCALES (Carpeta public/assets/images/) ---
  const projectImages = {
    "Simulador-LoRaWAN": "/assets/images/lorawan.jpeg",
    "simulador": "/assets/images/lorawan.jpeg", // Agregado para el repo 'simulador'
    "Mendoza-Reserve-Boutique-Wine-Selections": "/assets/images/mendozareser.png",
    "iot-scada-bridge-cpp": "/assets/images/sensor.jpeg",
    "f1-telemetry-system": "/assets/images/f1.jpeg",
    "industrial-saas-platform": "/assets/images/telemte.png"
  };

  // 1. Buscamos si el repo actual tiene una imagen manual asignada
  const localImage = projectImages[project.name];

  // 2. Si no está en la lista, usamos el Social Preview dinámico de GitHub
  const githubSocialUrl = `https://opengraph.githubassets.com/1/${project.full_name}`;
  
  // 3. Respaldo final (Unsplash)
  const fallbackImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop";

  // Decidimos la URL a intentar primero
  const finalImageUrl = localImage || githubSocialUrl;

  return (
    <div className="group relative flex flex-col h-full bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.5)] card-appear">
      
      {/* Contenedor de Imagen */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
        <img 
          src={imgError ? fallbackImage : finalImageUrl} 
          alt={project.name}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            imgError ? 'opacity-40 grayscale' : 'group-hover:scale-110'
          }`}
          onError={() => {
            console.error(`Error cargando: ${finalImageUrl}`);
            setImgError(true);
          }}
        />
        
        {/* Badge de Lenguaje */}
        {project.language && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-1 text-[9px] font-bold bg-blue-600/80 backdrop-blur-sm text-white rounded uppercase tracking-widest">
              {project.language}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tighter">
          {project.name.replace(/-/g, ' ')}
        </h3>
        
        <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2 h-8 italic">
          {project.description || "Industrial Software Engineering"}
        </p>

        {/* Botones de Acción */}
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-5">
            <a 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-black text-gray-500 hover:text-white transition-colors tracking-widest"
            >
              <FaGithub size={14} /> GITHUB
            </a>

            <a 
              href={`${project.html_url}#readme`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-black text-gray-500 hover:text-blue-400 transition-colors tracking-widest"
            >
              <FaInfoCircle size={14} /> INFO
            </a>
          </div>

          {project.homepage && (
            <a 
              href={project.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition-all hover:scale-110"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;