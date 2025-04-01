
import { Button } from "@/components/ui/button";
import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O mně</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Několik informací o mě, mém profesním růstu a pracovních zkušenostech.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="h-full p-8 rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                <User size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Kdo jsem</h3>
              <p className="text-gray-600">
                Jsem vášnivý JavaScript vývojář s více než 3 lety zkušeností ve vývoji moderních webových aplikací. 
                Mým cílem je vytvářet efektivní, škálovatelné a uživatelsky přívětivé aplikace.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="h-full p-8 rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                <Briefcase size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Zkušenosti</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <p className="text-sm text-gray-500">TechCompany s.r.o. | 2021 - současnost</p>
                </li>
                <li>
                  <h4 className="font-medium">JavaScript Developer</h4>
                  <p className="text-sm text-gray-500">WebStudio | 2019 - 2021</p>
                </li>
                <li>
                  <h4 className="font-medium">Junior Web Developer</h4>
                  <p className="text-sm text-gray-500">DigiAgency | 2018 - 2019</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="h-full p-8 rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                <Code size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Vzdělání</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Magisterský titul v Informatice</h4>
                  <p className="text-sm text-gray-500">Technická univerzita | 2016 - 2018</p>
                </li>
                <li>
                  <h4 className="font-medium">Bakalářský titul v Počítačových vědách</h4>
                  <p className="text-sm text-gray-500">Technická univerzita | 2013 - 2016</p>
                </li>
                <li>
                  <h4 className="font-medium">Certifikace</h4>
                  <p className="text-sm text-gray-500">React Advanced, TypeScript Pro, AWS Developer</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Stáhnout CV
          </Button>
        </div>
      </div>
    </section>
  );
};
