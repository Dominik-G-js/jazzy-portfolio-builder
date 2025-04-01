
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "BlackJack Game",
    description: "Jednoduchá hra BlackJack implementovaná v JavaScriptu s využitím HTML a CSS.",
    image: "https://images.unsplash.com/photo-1588591795084-1770cb3be374?auto=format&fit=crop&w=600&h=337",
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://toxic-chleba-04.github.io/BlackJack-Game/",
    codeUrl: "https://github.com/Toxic-chleba-04/BlackJack-Game"
  },
  {
    title: "Currency Calculator",
    description: "Kalkulačka pro převod měn v reálném čase s aktuálními kurzy.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6d5f2ed?auto=format&fit=crop&w=600&h=337",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    demoUrl: "https://toxic-chleba-04.github.io/Currency-Calculator/",
    codeUrl: "https://github.com/Toxic-chleba-04/Currency-Calculator"
  },
  {
    title: "Hangman Game",
    description: "Klasická hra šibenice s vlastní grafikou a interaktivním rozhraním.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=600&h=337",
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://toxic-chleba-04.github.io/Hangman-game/",
    codeUrl: "https://github.com/Toxic-chleba-04/Hangman-game"
  },
  {
    title: "Quiz App",
    description: "Interaktivní kvízová aplikace s různými kategoriemi otázek.",
    image: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&w=600&h=337",
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://toxic-chleba-04.github.io/Quiz-app/",
    codeUrl: "https://github.com/Toxic-chleba-04/Quiz-app"
  },
  {
    title: "To-Do List",
    description: "Aplikace pro správu úkolů s možností přidávání, mazání a označování splněných úkolů.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&h=337",
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    demoUrl: "https://toxic-chleba-04.github.io/ToDoList/",
    codeUrl: "https://github.com/Toxic-chleba-04/ToDoList"
  },
  {
    title: "Weather App",
    description: "Aplikace pro zobrazení aktuálního počasí a předpovědi pomocí Weather API.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&h=337",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    demoUrl: "https://toxic-chleba-04.github.io/Weather-app/",
    codeUrl: "https://github.com/Toxic-chleba-04/Weather-app"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Moje projekty</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Výběr mých projektů, které ukazují mé dovednosti v oblasti webového vývoje a programování v JavaScriptu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-amber-600 font-medium">
            Další projekty najdete na mém{" "}
            <a 
              href="https://github.com/Toxic-chleba-04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-amber-800"
            >
              GitHubu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
