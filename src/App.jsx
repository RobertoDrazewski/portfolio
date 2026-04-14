import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { useGitHubProjects } from './hooks/useGitHubProjects';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  // Hook con tu usuario real
  const { projects, loading } = useGitHubProjects('RobertoDrazewski');

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      <main>
        {/* Sección Hero */}
        <Hero />
        
        {/* Sección de Proyectos */}
        <section id="projects" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
          <header className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
                {t('projects.title')}
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </h2>
            <p className="text-gray-500 max-w-2xl italic">
              {/* Usamos una llave de traducción para la descripción */}
              {t('projects.subtitle') || "Explora mi trabajo reciente en sistemas embebidos, IoT industrial y desarrollo Full Stack."}
            </p>
          </header>

          {loading ? (
            /* Cargando... */
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
              <p className="text-gray-500 text-[10px] animate-pulse tracking-[0.3em] uppercase">
                {t('projects.sync')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects && projects.length > 0 ? (
                projects.map(repo => (
                  <ProjectCard key={repo.id} project={repo} />
                ))
              ) : (
                /* Estado vacío */
                <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
                   <p className="text-gray-600 text-sm tracking-widest uppercase italic">
                    {t('projects.no_repos')}
                   </p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="py-12 border-t border-white/5 text-center bg-black">
        <p className="text-gray-600 text-[9px] tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} Roberto Drazewski • {t('hero.role')}
        </p>
      </footer>
    </div>
  );
}

export default App;