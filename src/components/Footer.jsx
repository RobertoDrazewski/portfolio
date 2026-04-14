import * as Lucide from 'lucide-react';

const Footer = () => {
  const GitHubIcon = Lucide.GitHub || Lucide.Github;
  const LinkedinIcon = Lucide.Linkedin;
  const MailIcon = Lucide.Mail;

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm italic">
          © {new Date().getFullYear()} Roberto Drazewski.
        </p>
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors"><GitHubIcon size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><LinkedinIcon size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><MailIcon size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;