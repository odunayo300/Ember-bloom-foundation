import { ImageWithFallback } from "./Figma/ImageWithFallBack"
import ladiesHuggingTogether from "../assets/ladiesHuggingTogether.png"
import { Button } from "./Ui/button"
import { Link } from "react-router-dom"

export default function HeroSection () {
    return(
    <section id="header" className="relative py-24 bg-background overflow-hidden">
      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary/20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-4">
                Survivor-Led • Community-Driven • Hope-Centered
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                From the Ashes, We{" "}
                <span className="text-primary font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Rise and Bloom
                </span>
              </h1>
              <p className= "text-lg leading-relaxed text-foreground/80 items-center max-w-lg">
                Survivor-led support empowering women to rebuild their lives through mental health care, 
                digital and technical skills training, and a compassionate community network
              </p>
              <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border-l-4 border-primary">
                <p className="text-base leading-relaxed text-foreground/90">
                  We are here for women navigating life's toughest transitions — Separation, Divorce, 
                  Widowhood, Domestic violence, or other life challenges. We have walked this path, so you 
                  don't have to walk alone.
                </p>
              </div>
              <p className="text-lg italic text-primary">
                Because every woman deserves a safe place to heal and thrive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/2349090000904?text=Hello%2C%20I%20would%20like%20to%20get%20support%20from%20Ember%20Bloom%20Women." target="_blank" rel="noopener noreferrer">
                <Button  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                 Get Support → Speak to someone today
                </Button>
              </a>
              <Button 
                className="border-2 border-primary text-white hover:bg-secondary hover:text-white px-8 py-4 text-lg transition-all duration-300"
              >
                <Link to={"Volunteer"}>
                  Join Us → Be part of the change
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20"></div>
              <ImageWithFallback
                src={ladiesHuggingTogether}
                alt="Women supporting each other with warm embrace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating accent cards */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">500+ Lives Transformed</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Community Support</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-4 w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute bottom-1/4 -right-4 w-16 h-16 rounded-full bg-secondary/20 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
    )
}