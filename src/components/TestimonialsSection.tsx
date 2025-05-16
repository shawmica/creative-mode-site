
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    quote: "Working with this developer was a fantastic experience. They delivered exceptional results on time and were extremely professional throughout the project."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CMO, DesignHub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    quote: "The attention to detail and creative problem-solving skills were impressive. Our project exceeded expectations thanks to their expertise."
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    quote: "We've worked together on multiple projects and each time the results have been outstanding. Highly recommended for any development project."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-2 animate-fade-in">Testimonials</h2>
        <p className="text-muted-foreground mb-8 animate-fade-in animation-delay-100">What clients say about my work</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <Card key={testimonial.id} className="h-full flex flex-col animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 flex-1 flex flex-col">
                <QuoteIcon className="h-8 w-8 text-primary/30 mb-4" />
                <p className="flex-1 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
