
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  codeUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg bg-white">
      <div className="aspect-video w-full overflow-hidden bg-amber-100">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex gap-3">
          {codeUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github size={16} />
                <span>Kód</span>
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" asChild className="bg-amber-500 hover:bg-amber-600">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <span>Demo</span>
                <ExternalLink size={16} />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
