
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface Technology {
  name: string;
  icon: string;
  proficiency: number;
  category: "frontend" | "backend" | "design" | "other";
}

const technologies: Technology[] = [
  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 90, category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 85, category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 92, category: "frontend" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 95, category: "frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 90, category: "frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", proficiency: 88, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 80, category: "backend" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", proficiency: 78, category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", proficiency: 75, category: "backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: 70, category: "backend" },
  
  // Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 85, category: "design" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", proficiency: 75, category: "design" },
  
  // Other
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", proficiency: 88, category: "other" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", proficiency: 65, category: "other" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", proficiency: 60, category: "other" },
];

const categoryLabels = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  design: "UI/UX Design",
  other: "DevOps & Tools"
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [animatedItems, setAnimatedItems] = useState<{ [key: string]: boolean }>({});

  // Setting up animation triggers when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedItems = technologies.reduce((acc, tech) => {
        return { ...acc, [tech.name]: true };
      }, {});
      setAnimatedItems(newAnimatedItems);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Filter technologies based on selected category
  const filteredTechnologies = selectedCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section id="skills" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container animate-fade-in">
        <h2 className="text-3xl font-bold tracking-tight mb-8 animate-fade-in">Skills & Expertise</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in animation-delay-100">
          <Badge 
            onClick={() => setSelectedCategory("all")}
            className={`cursor-pointer text-sm px-4 py-2 transition-all hover-scale ${selectedCategory === "all" ? "bg-primary" : "bg-secondary"}`}
          >
            All
          </Badge>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Badge 
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`cursor-pointer text-sm px-4 py-2 transition-all hover-scale ${selectedCategory === key ? "bg-primary" : "bg-secondary"}`}
            >
              {label}
            </Badge>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <Card 
              key={tech.name}
              className={`overflow-hidden transform transition-all duration-500 hover:shadow-lg ${
                animatedItems[tech.name] ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-2">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-8 object-contain" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{tech.name}</h3>
                    <div className="mt-1 flex items-center">
                      <Progress value={tech.proficiency} className="h-2 flex-1" />
                      <span className="text-xs font-medium ml-2 w-8">{tech.proficiency}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Category Descriptions */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-5 animate-fade-in animation-delay-200">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">Creating responsive, interactive user interfaces using modern frameworks and libraries like React and Next.js. Strong focus on performance optimization and clean, maintainable code.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Backend Development</h3>
              <p className="text-muted-foreground">Building scalable server-side applications and RESTful APIs with Node.js and Express. Experience with database design and management across SQL and NoSQL systems.</p>
            </div>
          </div>
          
          <div className="space-y-5 animate-fade-in animation-delay-300">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">Designing intuitive user experiences with a focus on usability, accessibility, and visual appeal. Proficient with design tools like Figma and Adobe XD.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">DevOps & Tools</h3>
              <p className="text-muted-foreground">Experience with version control using Git, containerization with Docker, and cloud deployment on AWS. Familiar with CI/CD pipelines and infrastructure as code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
