
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Menu, X, Moon, Sun } from "lucide-react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("hero")} className={navigationMenuTriggerStyle()}>
                Home
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("about")} className={navigationMenuTriggerStyle()}>
                About
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("skills")} className={navigationMenuTriggerStyle()}>
                Skills
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("projects")} className={navigationMenuTriggerStyle()}>
                Projects
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("experience")} className={navigationMenuTriggerStyle()}>
                Experience
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("certifications")} className={navigationMenuTriggerStyle()}>
                Certifications
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("extracurricular")} className={navigationMenuTriggerStyle()}>
                Extracurricular
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("contact")} className={navigationMenuTriggerStyle()}>
                Contact
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("hero")} className="text-lg font-medium hover:text-primary">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-lg font-medium hover:text-primary">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-lg font-medium hover:text-primary">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-lg font-medium hover:text-primary">
                Projects
              </button>
              <button onClick={() => scrollToSection("experience")} className="text-lg font-medium hover:text-primary">
                Experience
              </button>
              <button onClick={() => scrollToSection("certifications")} className="text-lg font-medium hover:text-primary">
                Certifications
              </button>
              <button onClick={() => scrollToSection("extracurricular")} className="text-lg font-medium hover:text-primary">
                Extracurricular
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-lg font-medium hover:text-primary">
                Contact
              </button>
            </nav>
          </div>
        )}

        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="ml-auto md:ml-0"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
