
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-br from-amber-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Ahoj, jsem</span>
              <span className="text-amber-500 block mt-2">Dominik Gomboš</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
              Specializuji se na vývoj moderních webových aplikací 
              s využitím technologií jako Latte, Nette, HTML, JavaScript a AJAX.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kontaktujte mě
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-50"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Moje projekty
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-amber-500/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold text-amber-500/30">&lt;/&gt;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce p-2 rounded-full bg-white shadow-md"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="text-amber-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
