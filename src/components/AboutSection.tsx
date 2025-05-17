
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 scroll-mt-16 animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 animate-fade-in">About Me</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 animate-fade-in animation-delay-100">
            <p>
              I'm a full-stack developer with a passion for creating beautiful, functional web applications. 
              With over X years of experience in the industry, I've worked on a variety of projects from 
              small business websites to large enterprise applications.
            </p>
            <p>
              My journey in software development began when I was in college, and I've been hooked ever since. 
              I love the challenge of solving complex problems and the satisfaction of creating something useful.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="hover-scale animate-fade-in animation-delay-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-2">Frontend Development</h3>
                <p className="text-muted-foreground text-sm">
                  React, Next.js, TailwindCSS, TypeScript
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale animate-fade-in animation-delay-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Database className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-2">Backend Development</h3>
                <p className="text-muted-foreground text-sm">
                  Node.js, Express, PostgreSQL, MongoDB
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale animate-fade-in animation-delay-400 sm:col-span-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Layout className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground text-sm">
                  Figma, Adobe XD, User Testing, Accessibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
