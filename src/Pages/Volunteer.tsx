import { Link } from "react-router-dom"
import logo from '../assets/emberLogoImage.png'
import { Button } from "../Components/Ui/button"

export default function Volunteer() {
  return (
    <div>
      <header className="backdrop-blur-sm border-b sticky top-0 z-50 bg-primary border-border">
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
                    <Button className="bg-accent hover:bg-accent/90 text-foreground shadow-md hover:shadow-lg transition-all duration-300">
                      <Link to={"/"}>
                        To Home Page
                      </Link>
                    </Button>
              </div>
        </div>
      </header>
      {/* Google form Below */}
       <div className="w-full h-[100vh]"> 
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScDook9PDp6E0u224TjrNIYfWuE9PWK7lRJwasdCkuaKb4tyA/viewform?embedded=true" 
          title="Volunteer form"
          loading="lazy"
          className="w-full h-full"
          style={{ border: 0 }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}
