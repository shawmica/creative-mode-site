
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const skillsData = [
  {
    id: 1,
    name: "Frontend Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    description: "Building responsive and interactive user interfaces using modern frameworks and libraries."
  },
  {
    id: 2,
    name: "Backend Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    description: "Creating robust server-side applications and APIs that power web applications."
  },
  {
    id: 3,
    name: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    description: "Designing intuitive user experiences and visually appealing interfaces."
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 animate-fade-in">Skills & Expertise</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {skillsData.map((skill, index) => (
            <Card key={skill.id} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">{skill.name}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
