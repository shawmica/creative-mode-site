
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define your schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      
      // Reset form and show success message
      form.reset();
      setIsSubmitting(false);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1000);
    
    // In a real implementation, you would send this data to your email service
    // Example: sendToEmailService(data);
  }

  return (
    <section id="contact" className="py-16 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 animate-fade-in">Contact Me</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 animate-fade-in animation-delay-100">
            <p className="text-lg">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            <div className="space-y-2 animate-fade-in animation-delay-200">
              <p className="flex items-center text-muted-foreground">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:your-email@example.com" className="hover:text-foreground transition-colors">
                  your-email@example.com
                </a>
              </p>
              <p className="flex items-center text-muted-foreground">
                <span className="font-medium mr-2">Location:</span>
                <span>City, Country</span>
              </p>
            </div>
          </div>
          
          <Card className="animate-fade-in animation-delay-300">
            <div className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
