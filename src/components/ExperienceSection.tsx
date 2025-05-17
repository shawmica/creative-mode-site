
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    duration: "January 2021 - Present",
    description: "Led the development of the company's flagship product, improving performance by 40%. Managed a team of 5 developers and implemented modern CI/CD practices."
  },
  {
    id: 2,
    company: "Digital Solutions LLC",
    position: "Full Stack Developer",
    duration: "June 2018 - December 2020",
    description: "Developed responsive web applications using React and Node.js. Collaborated with design teams to implement UI/UX improvements and integrated third-party APIs."
  },
  {
    id: 3,
    company: "Web Creators Studio",
    position: "Junior Developer",
    duration: "August 2016 - May 2018",
    description: "Built and maintained client websites using HTML, CSS, and JavaScript. Assisted in transitioning the company's tech stack to React and improved site performance."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 animate-fade-in">Experience</h2>
        
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <Card 
              key={item.id} 
              style={{ 
                opacity: 0, 
                animation: "fade-in 0.6s ease-out forwards", 
                animationDelay: `${index * 200}ms` 
              }}
            >
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{item.position}</CardTitle>
                  <div className="text-muted-foreground">
                    <span className="font-medium">{item.company}</span> • <span>{item.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
