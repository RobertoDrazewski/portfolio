import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { 
  SiCplusplus, SiPython, SiNodedotjs, SiExpress, 
  SiReact, SiVite, SiPostman, SiSelenium, SiJira, SiMysql, 
  SiTypescript, SiTailwindcss 
} from 'react-icons/si';
import { FaLinkedin, FaGithub, FaWindows } from 'react-icons/fa';
import { LuCpu, LuChevronDown } from 'react-icons/lu';

const Hero = () => {
  const { t } = useTranslation();

  const techCategories = [
    {
      label: t('hero.frontend'),
      icons: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        { name: "TS", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    {
      label: t('hero.backend'),
      icons: [
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> }
      ]
    },
    {
      label: t('hero.tools'),
      icons: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Selenium", icon: <SiSelenium className="text-[#43B02A]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "M365", icon: <FaWindows className="text-[#00A4EF]" /> },
        { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      
      {/* 1. Fondo de Video (Ambiente) */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/assets/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        
        {/* Badge superior dinámico */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] font-bold tracking-[0.3em] uppercase mb-6">
          <LuCpu className="animate-pulse" />
          <span>{t('hero.role')}</span>
        </div>

        {/* Nombre Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8">
          ROBERTO <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">DRAZEWSKI</span>
        </h1>

        {/* Reseña Elaborada - SIN TEXTO DURO para evitar duplicados */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            <Trans i18nKey="hero.about_me">
              {/* i18next usará estos componentes para reemplazar <0></0> y <1></1> del JSON */}
              <span className="text-white font-medium italic" />
              <span className="text-white font-medium italic" />
            </Trans>
          </p>
        </div>

        {/* Video de Resultado */}
        <div className="relative z-30 max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(37,99,235,0.2)] bg-black/50">
          <video 
            controls 
            preload="metadata"
            playsInline
            className="w-full h-auto aspect-video object-cover block"
          >
            <source src="/assets/video/RESULTADO_FINAL_PORTFOLIO.mp4" type="video/mp4" />
            <p className="text-white p-4">Tu navegador no soporta el video.</p>
          </video>
        </div>

        {/* Call to Action: Redes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a 
            href="https://github.com/RobertoDrazewski" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto text-[10px] tracking-widest uppercase"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/robert-drazewski" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#0077b5] text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] transition-all duration-300 w-full sm:w-auto text-[10px] tracking-widest uppercase"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Rejilla de Tecnologías Dinámica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-blue-500/80 font-bold mb-6">
                {cat.label}
              </h3>
              <div className="flex flex-wrap justify-center gap-5">
                {cat.icons.map((tech, i) => (
                  <div key={i} className="group relative">
                    <div className="text-2xl transition-all duration-300 group-hover:scale-125 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100">
                      {tech.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[8px] text-white bg-blue-600 px-2 py-0.5 rounded transition-all whitespace-nowrap font-bold z-30 pointer-events-none">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-gray-700">
        <LuChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;