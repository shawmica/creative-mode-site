
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  id?: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Hi, I'm <span className="text-gradient-primary">Your Name</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto animate-fade-in animation-delay-200">
            A passionate full-stack developer building elegant, performant, and user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center animate-fade-in animation-delay-300">
            <Button asChild size="lg" className="hover-scale">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
          
        <div className="flex justify-center animate-fade-in animation-delay-400">
          <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
              alt="Developer Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
