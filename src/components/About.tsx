
import { Button } from "@/components/ui/button";
import { Briefcase, Code, User, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O mně</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Vážný programátor se zaměřením na vývoj webových stránek, aplikací a her.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="h-full p-8 rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                <User size={48} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Kdo jsem</h3>
              <p className="text-gray-600">
                Vážný programátor se zaměřením na vývoj webových stránek, aplikací a her. Mám více než tři roky zkušeností v oblasti vývoje, přičemž jsem pracoval na různých projektech v platformě Upgates, která kombinuje technologie jako Latte, Nette, HTML, JavaScript a AJAX. Jsem nadšený z učení nových dovedností a objevování inovativních způsobů, jak vytvářet atraktivní a funkční digitální produkty.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>Datum narození: 9. 3. 1998</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="h-full p-8 rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                <Briefcase size={48} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Zkušenosti</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Programátor</h4>
                  <p className="text-sm text-gray-500">Webdevel s.r.o., Ostrava | LED 2022 - současnost</p>
                  <p className="text-sm text-gray-600 mt-1">Pracoval jsem na různých projektech na platformě Upgates, která kombinuje technologie jako Latte, Nette, HTML, JavaScript, AJAX a CSS.</p>
                </li>
                <li>
                  <h4 className="font-medium">Programátor Junior</h4>
                  <p className="text-sm text-gray-500">Webdevel s.r.o., Ostrava | BŘE 2019 - LED 2020</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="h-full p-8 rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex justify-center mb-6">
                <Code size={48} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Vzdělání</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Vítkovická střední</h4>
                  <p className="text-sm text-gray-500">Truhlář | 2016 - 2019</p>
                </li>
                <li>
                  <h4 className="font-medium">Certifikace</h4>
                  <p className="text-sm text-gray-500">Webový Programátor | 2019</p>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-medium mb-2">Jazyky</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium">Český jazyk</span>
                    <span className="text-xs text-gray-500 ml-2">(C2 - Expert)</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Anglický jazyk</span>
                    <span className="text-xs text-gray-500 ml-2">(A1 - Úplný začátečník)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-amber-500 text-amber-600 hover:bg-amber-50"
          >
            Stáhnout CV
          </Button>
        </div>
      </div>
    </section>
  );
};
