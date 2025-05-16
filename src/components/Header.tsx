
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
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#skills">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Skills
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#projects">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#experience">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#testimonials">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/#about" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/#skills" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link to="/#projects" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link to="/#experience" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </Link>
              <Link to="/#testimonials" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link to="/#contact" className="text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
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
