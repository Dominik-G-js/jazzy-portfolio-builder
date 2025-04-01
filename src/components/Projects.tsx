
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Moderní dashboard pro správu e-shopu s real-time analýzou dat a správou objednávek.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=337",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Social Media App",
    description: "Responzivní aplikace pro sdílení obsahu s autentizací, messagingem a real-time notifikacemi.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=337",
    technologies: ["Vue.js", "JavaScript", "Express", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Task Management Tool",
    description: "Aplikace pro organizaci a sledování úkolů v týmu s drag-and-drop rozhraním a automatizací.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=337",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Moje projekty</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Výběr mých nejnovějších projektů, které ukazují mé dovednosti a zkušenosti v oblasti webového vývoje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-600 font-medium">
            A mnoho dalších projektů na mém{" "}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-800"
            >
              GitHubu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
