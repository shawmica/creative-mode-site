
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Flag } from "lucide-react";

const extracurricularData = [
  {
    id: 1,
    title: "Volunteer Web Developer",
    organization: "Local Community Center",
    period: "2022 - Present",
    icon: <Star className="h-10 w-10 text-primary/70" />,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400",
    description: "Developing and maintaining websites for local non-profit organizations, providing free web services to community groups."
  },
  {
    id: 2,
    title: "Tech Meetup Organizer",
    organization: "City Tech Enthusiasts",
    period: "2021 - Present",
    icon: <Trophy className="h-10 w-10 text-primary/70" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
    description: "Organizing monthly technology meetups focusing on web development, bringing together professionals and enthusiasts."
  },
  {
    id: 3,
    title: "Hackathon Participant",
    organization: "Various Tech Events",
    period: "2020 - Present",
    icon: <Flag className="h-10 w-10 text-primary/70" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
    description: "Regular participant in both local and national hackathons, focusing on creating innovative solutions to real-world problems."
  }
];

const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="py-16 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-2 animate-fade-in">Extracurricular Activities</h2>
        <p className="text-muted-foreground mb-8 animate-fade-in animation-delay-100">Community involvement and personal initiatives</p>
        
        <div className="grid gap-8">
          {extracurricularData.map((activity, index) => (
            <Card 
              key={activity.id} 
              className="overflow-hidden animate-fade-in hover:shadow-lg transition-all" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="h-full overflow-hidden md:col-span-1">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {activity.icon}
                        <div>
                          <h3 className="text-xl font-medium">{activity.title}</h3>
                          <p className="text-sm text-muted-foreground">{activity.organization}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {activity.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
