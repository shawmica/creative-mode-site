
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Award } from "lucide-react";

const certificationsData = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
    description: "Foundational certification validating cloud fluency and AWS knowledge."
  },
  {
    id: 2,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
    date: "January 2023",
    description: "Certification for understanding and applying Scrum framework and practices."
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    issuer: "Udacity",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400",
    date: "October 2022",
    description: "Comprehensive training in modern web development technologies and practices."
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-2 animate-fade-in">Certifications</h2>
        <p className="text-muted-foreground mb-8 animate-fade-in animation-delay-100">Professional qualifications and achievements</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {certificationsData.map((certification, index) => (
            <Card 
              key={certification.id} 
              className="overflow-hidden hover-scale animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={certification.image} 
                  alt={certification.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">{certification.date}</p>
                </div>
                <h3 className="text-xl font-medium mb-1">{certification.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">Issued by {certification.issuer}</p>
                <p className="text-sm">{certification.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
