
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
            Hi, I'm <span className="text-gradient-primary">Your Name</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl animate-fade-in animation-delay-200">
            A passionate full-stack developer building elegant, performant, and user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animation-delay-300">
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
      </div>
    </section>
  );
};

export default HeroSection;
