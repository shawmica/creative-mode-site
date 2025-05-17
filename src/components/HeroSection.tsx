
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
              Hi, I'm <span className="text-gradient-primary">Your Name</span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl animate-fade-in animation-delay-200">
              A passionate full-stack developer building elegant, performant, and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animation-delay-400">
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
          
          <div className="order-1 md:order-2 animate-fade-in animation-delay-300">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
