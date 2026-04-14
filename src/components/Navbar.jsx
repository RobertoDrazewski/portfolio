import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Lucide from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const GitHubIcon = Lucide.Github || Lucide.Code;
  const LinkedinIcon = Lucide.Linkedin || Lucide.User;
  const LanguagesIcon = Lucide.Languages || Lucide.Globe;
  const DownloadIcon = Lucide.Download || Lucide.FileText;

  const avatarUrl = "https://github.com/RobertoDrazewski.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* LOGO / AVATAR */}
        <div className="flex items-center gap-3 group">
          <a href="#" className="relative flex-shrink-0">
            <img 
              src={avatarUrl} 
              alt="Roberto Drazewski" 
              className="w-8 h-8 rounded-full border border-white/20 group-hover:border-blue-500 transition-colors object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full shadow-sm"></span>
          </a>
          
          <a href="#" className="text-xl font-black tracking-tighter text-white">
            RD<span className="text-blue-500">.</span>
          </a>
        </div>

        {/* LINKS CENTRALES (Solo Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#projects" className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">
            {t('nav.projects')}
          </a>
          <a href="#about" className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">
            {t('nav.about')}
          </a>
        </div>

        {/* ACCIONES (CV, Redes, Idioma) - VISIBLE EN TODO DISPOSITIVO */}
        <div className="flex items-center gap-3 md:gap-5">
          
          {/* SECCIÓN CV (Ahora fuera del hidden md:flex) */}
          <div className="relative group/cv">
            <button className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold py-2">
              <DownloadIcon size={16} className="text-blue-500" />
              <span className="hidden xs:inline">CV</span>
            </button>
            
            {/* Menú desplegable */}
            <div className="absolute right-0 md:left-0 mt-0 w-32 bg-black border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover/cv:opacity-100 group-hover/cv:visible transition-all duration-300 transform translate-y-2 group-hover/cv:translate-y-0 overflow-hidden z-50">
              <a 
                href="/docs/Professional CV Resume (esp).pdf" 
                download="Roberto_Drazewski_CV_ESP.pdf"
                className="block px-4 py-3 text-[9px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest border-b border-white/5"
              >
                Español
              </a>
              <a 
                href="/docs/Professional CV (eng).pdf" 
                download="Roberto_Drazewski_CV_ENG.pdf"
                className="block px-4 py-3 text-[9px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest"
              >
                English
              </a>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-white/10 mx-1"></div>

          {/* REDES SOCIALES */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/robert-drazewski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors"
            >
              <LinkedinIcon size={18} strokeWidth={1.5} />
            </a>

            <a 
              href="https://github.com/RobertoDrazewski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitHubIcon size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>

          {/* IDIOMA */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-[10px] font-bold text-gray-300 uppercase tracking-tighter"
          >
            <LanguagesIcon size={14} />
            <span>{i18n.language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;