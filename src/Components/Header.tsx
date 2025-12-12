import { Button } from "./Ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/ember-bloom-new-logo.svg"

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavClick: (id: string) => void;
};

export function Header({isMenuOpen,setIsMenuOpen,handleNavClick}:HeaderProps) {
  return (
    <header  className="backdrop-blur-sm border-b sticky top-0 z-50 bg-primary border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Ember Bloom Foundation Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick("about")} className="text-white hover:text-white/80 transition-colors duration-300 py-2 bg-transparent border-none cursor-pointer">About</button>
            <button onClick={() => handleNavClick("services")} className="text-white hover:text-white/80 transition-colors duration-300 py-2 bg-transparent border-none cursor-pointer">Our Work</button>
            <button onClick={() => handleNavClick("get-involved")} className="text-white hover:text-white/80 transition-colors duration-300 py-2 bg-transparent border-none cursor-pointer">Get Involved</button>
            <button onClick={() => handleNavClick("contact")} className="text-white hover:text-white/80 transition-colors duration-300 py-2 bg-transparent border-none cursor-pointer">Contact</button>
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <Button onClick={exitApp} className="border-secondary bg-red-500 text-white hover:bg-secondary hover:text-white transition-all duration-300">
               Exit App
            </Button> */}
            <Button
             
             className="bg-accent hover:bg-accent/90 text-foreground shadow-md hover:shadow-lg transition-all duration-300"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
                <button onClick={() => handleNavClick("about")} className="text-white hover:text-white/80 transition-colors py-2 bg-transparent border-none cursor-pointer">About</button>
                <button onClick={() => handleNavClick("services")} className="text-white hover:text-white/80 transition-colors py-2 bg-transparent border-none cursor-pointer">Our Work</button>
                <button onClick={() => handleNavClick("get-involved")} className="text-white hover:text-white/80 transition-colors py-2 bg-transparent border-none cursor-pointer">Get Involved</button>
                <button onClick={() => handleNavClick("contact")} className="text-white hover:text-white/80 transition-colors py-2 bg-transparent border-none cursor-pointer">Contact</button>
              <div className="flex flex-col space-y-3 pt-4">
                {/* <Button onClick={exitApp} className="border-secondary bg-red-500 text-white hover:bg-secondary hover:text-white">
                    Exit App
                </Button> */}
                <Button 
                className="bg-accent hover:bg-accent/90 text-foreground"
                onClick={() =>handleNavClick("contact")}
                >
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}