import { Button } from "./Ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/ember-bloom logo 2.jpg"

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavClick: (id: string) => void;
};

export function Header({isMenuOpen,setIsMenuOpen,handleNavClick}:HeaderProps) {

  const exitApp = () =>{     //exit app to the weather incase a client tries to get involved with what the user is doing to avoid being dectectable 
     const decoys = [ 
      "https://www.google.com/",
      "https://www.bbc.com/",
      "https://www.weather.com/",
      "https://www.amazon.com/",
      "https://www.youtube.com/",
      "https://www.imdb.com/",
      "https://www.msn.com/",
      "https://www.nytimes.com/"
    ];

    // pick a random decoy
    const url = decoys[Math.floor(Math.random() * decoys.length)];
    window.location.replace(url)
  }

  return (
    <header className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 bg-white/90 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white/90 rounded-lg p-1">
              <img
                src={logo}
                alt="Ember Bloom Foundation Logo"
                className="h-24 w-auto object-contain transition-all duration-500 transform hover:scale-105 hover:brightness-110"
              />
            </div>
          </div>

          {/* Desktop Navigation with Underline Effect */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {[
              { text: "About", id: "about" },
              { text: "Our Work", id: "services" },
              { text: "Get Involved", id: "get-involved" },
              { text: "Contact", id: "contact" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="group relative text-foreground py-2 px-3 bg-transparent border-none cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">{item.text}</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 ml-4 lg:ml-8">
            <Button 
              onClick={exitApp} 
              className="border border-white/20 bg-red-500/90 text-white hover:bg-red-600 hover:scale-[0.98] active:scale-95 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Exit App
            </Button>
            <Button
              className="bg-accent/90 hover:bg-accent text-foreground hover:scale-[0.98] active:scale-95 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => handleNavClick("contact")}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <Button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors relative overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
          </Button>
        </div>

        {/* Enhanced Mobile Menu with Backdrop Blur */}
        <div
          className="md:hidden border-t border-border overflow-hidden backdrop-blur-md"
          aria-hidden={!isMenuOpen}
          role="region"
          id="mobile-menu"
          style={{
            maxHeight: isMenuOpen ? 420 : 0,
            transition: 'max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <nav className="flex flex-col items-center px-4 py-4 space-y-1">
            {[
              { text: "About", id: "about", delay: "75" },
              { text: "Our Work", id: "services", delay: "150" },
              { text: "Get Involved", id: "get-involved", delay: "225" },
              { text: "Contact", id: "contact", delay: "300" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative w-full py-3 text-foreground text-center transition-all duration-300
                  ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                style={{ transitionDelay: isMenuOpen ? `${item.delay}ms` : '0ms' }}
              >
                <span className="relative z-10 text-lg font-medium">{item.text}</span>
                <div className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}

            <div className="flex flex-col space-y-3 pt-4 w-full items-center mt-2">
              <Button 
                onClick={exitApp} 
                className="w-11/12 border border-white/20 bg-red-500/90 text-white hover:bg-red-600 hover:scale-[0.98] active:scale-95 shadow-md transition-all duration-300"
              >
                Exit App
              </Button>
              <Button
                className="w-11/12 bg-accent/90 hover:bg-accent text-foreground hover:scale-[0.98] active:scale-95 shadow-md transition-all duration-300"
                onClick={() => handleNavClick("contact")}
              >
                Donate Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}