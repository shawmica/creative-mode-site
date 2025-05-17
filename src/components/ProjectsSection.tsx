
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration, user accounts, and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for organizing tasks with team collaboration features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking expenses, income, and investments with visualization tools.",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 scroll-mt-16 animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 animate-fade-in">Projects</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="hover-scale overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
