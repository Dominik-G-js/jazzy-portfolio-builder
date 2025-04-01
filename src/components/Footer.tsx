
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-amber-400">Dominik Gomboš</h3>
            <p className="mt-2 text-gray-400">
              JavaScript vývojář zaměřený na moderní webové technologie
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={16} />
              <span>dominik.gombos@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Phone size={16} />
              <span>+420605310612</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <MapPin size={16} />
              <span>Ostrava 70030, Česká republika</span>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dominik Gomboš. Všechna práva vyhrazena.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
