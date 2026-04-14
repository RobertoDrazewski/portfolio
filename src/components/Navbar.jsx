import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as Lucide from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false); // Estado para controlar el menú en móvil
  const cvMenuRef = useRef(null);

  const GitHubIcon = Lucide.Github || Lucide.Code;
  const LinkedinIcon = Lucide.Linkedin || Lucide.User;
  const LanguagesIcon = Lucide.Languages || Lucide.Globe;
  const DownloadIcon = Lucide.Download || Lucide.FileText;

  const avatarUrl = "https://github.com/RobertoDrazewski.png";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Cerrar menú si se hace clic fuera
    const handleClickOutside = (event) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target)) {
        setIsCVOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <img 
              src={avatarUrl} 
              alt="Roberto Drazewski" 
              className="w-8 h-8 rounded-full border border-white/20 object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white">RD<span className="text-blue-500">.</span></span>
        </div>

        {/* ACCIONES */}
        <div className="flex items-center gap-3 md:gap-5">
          
          {/* SECCIÓN CV REPARADA */}
          <div className="relative" ref={cvMenuRef}>
            <button 
              onClick={() => setIsCVOpen(!isCVOpen)}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold py-2 focus:outline-none"
            >
              <DownloadIcon size={16} className="text-blue-500" />
              <span className="hidden xs:inline">CV</span>
            </button>
            
            {/* Menú desplegable dinámico */}
            <div className={`absolute right-0 mt-2 w-32 bg-black border border-white/10 rounded-lg shadow-2xl transition-all duration-300 overflow-hidden z-50 ${
              isCVOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
            } md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0`}>
              <a 
                href="/docs/Professional CV Resume (esp).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download
                className="block px-4 py-3 text-[9px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest border-b border-white/5"
                onClick={() => setIsCVOpen(false)}
              >
                Español
              </a>
              <a 
                href="/docs/Professional CV (eng).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download
                className="block px-4 py-3 text-[9px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest"
                onClick={() => setIsCVOpen(false)}
              >
                English
              </a>
            </div>
          </div>

          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>

          {/* REDES */}
          <a href="https://www.linkedin.com/in/robert-drazewski" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5]">
            <LinkedinIcon size={18} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/RobertoDrazewski" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon size={18} strokeWidth={1.5} />
          </a>

          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>

          {/* IDIOMA */}
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-gray-300">
            <LanguagesIcon size={14} />
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;