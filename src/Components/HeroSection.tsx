import { ImageWithFallback } from "./Figma/ImageWithFallBack"
import ladiesHuggingTogether from "../assets/ladiesHuggingTogether.png"
import { Button } from "./Ui/button"
import { Link } from "react-router-dom"

export default function HeroSection () {
    return(
  <section data-reveal id="header" className="relative min-h-screen py-30 sm:py-32 sm:pt-100 lg:py-40 bg-background overflow-hidden flex items-center">
      {/* Enhanced gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/15 animate-gradient"></div>
      
      {/* Animated decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary/20 blur-xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Content with Staggered Animation */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8">
            <div className="space-y-4 sm:space-y-6">
              <div
                className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full backdrop-blur-sm
                  border border-primary/20 shadow-lg transform hover:scale-105 transition-all duration-500"
              >
                <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Survivor-Led • Community-Driven • Hope-Centered
                </p>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold">
                From the Ashes, We{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Rise and Bloom
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-primary/30 to-secondary/30 -z-10 transform skew-x-12"></div>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foreground/80 max-w-xl">
                Survivor-led support empowering women to rebuild their lives through mental health care,
                digital and technical skills training, and a compassionate community network.
              </p>
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl border-l-4 border-primary/50 shadow-lg
                backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 transform hover:scale-[1.02]">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90">
                  We are here for women navigating life's toughest transitions — Separation, Divorce,
                  Widowhood, Domestic violence, or other life challenges. We have walked this path, so you
                  don't have to walk alone.
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
                Because every woman deserves a safe place to heal and thrive.
              </p>
            </div>

            {/* Enhanced CTA Buttons with Micro-interactions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto lg:mx-0">
              <a 
                href="https://wa.me/2349090000904?text=Hello%2C%20I%20would%20like%20to%20get%20support%20from%20Ember%20Bloom%20Women." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transform hover:scale-[0.98] transition-all duration-300"
              >
                <Button className="w-full bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-white
                  px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl
                  group-hover:from-secondary/90 group-hover:to-secondary relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Support
                    <span className="text-white/80 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <span className="text-sm font-normal ml-1">Speak to someone today</span>
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                    translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Button>
              </a>
              <Button
                className="group w-full border-2 border-primary/50 hover:border-primary bg-transparent hover:bg-primary/5
                  text-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 rounded-xl relative overflow-hidden
                  shadow-lg hover:shadow-xl transform hover:scale-[0.98]"
              >
                <Link to={"Volunteer"} className="relative z-10 flex items-center justify-center gap-2">
                  Join Us
                  <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="text-sm font-normal ml-1">Be part of the change</span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Section with Advanced Effects */}
          <div className="relative group">
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl
              transform group-hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-secondary/20 
                opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>
              <ImageWithFallback
                src={ladiesHuggingTogether}
                alt="Women supporting each other with warm embrace"
                className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
              />
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 
                group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            </div>
            
            {/* Enhanced Floating Cards with Hover Effects */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg
              transform hover:scale-105 transition-transform duration-300 cursor-pointer
              hover:shadow-xl border border-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  500+ Lives Transformed
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg
              transform hover:scale-105 transition-transform duration-300 cursor-pointer
              hover:shadow-xl border border-muted/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-muted rounded-full animate-pulse"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-muted to-primary bg-clip-text text-transparent">
                  Community Support
                </span>
              </div>
            </div>
            
            {/* Animated Decorative Elements */}
            <div className="absolute top-1/4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 
              blur-xl animate-float-slow opacity-75"></div>
            <div className="absolute bottom-1/4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 
              blur-lg animate-float opacity-75"></div>
          </div>
        </div>
      </div>
    </section>
    )
}