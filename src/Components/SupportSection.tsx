import { ImageWithFallback } from "./Figma/ImageWithFallBack"
import { Heart, HandHeart, Users,Phone,X } from "lucide-react";
import { Button } from "./Ui/button";

type SupportSectionProps = {
  isOpen?: boolean;
  closeCall?: () => void;
  openCall?: () => void;
  handleNavClick?: (id: string) => void;
};

export default function SupportSection({isOpen, closeCall, openCall, handleNavClick}: SupportSectionProps) {
  


    return(
        <>
         {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[320px] text-center relative">
              {/* Title */}
              <h2 className="text-lg font-semibold mb-4">
                Call authority in emergency case of domestic violence
              </h2>

              {/* Buttons */}
              <div className="space-y-4">
               <a href="tel:999" className="block">
                 <button className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="font-medium">In UK</span>
                 </button>
               </a>

               <a href="tel:+2348121133399" className="block">
                <Button className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="font-medium">In Nigeria</span>
                </Button>
               </a>
              </div>
                {/* Cancel Button */}
              <Button
                onClick={closeCall}
                className="mt-5 w-full flex items-center justify-center bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                <X className="h-5 w-5 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
         )}


      {/* Section 1: Get Support */}
  <section data-reveal className="py-6 sm:py-16 -mt-6 sm:mt-0 bg-primary text-white relative overflow-hidden">
        {/* Enhanced gradient background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 animate-gradient"></div>
        {/* Animated floating orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white/20 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/15 blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/10 blur-xl animate-float-fast"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1.5 bg-white/20 rounded-full text-xs sm:text-sm text-white/90">
                  Safe Space • Compassionate Care • Professional Support
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold">
                  You're Not Alone
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  Every woman deserves safety, dignity, and hope. Whether you need someone to talk to, 
                  access to counseling, or tools to rebuild your life, we are here with open arms and practical support.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-muted hover:bg-muted/90 text-white px-6 py-3 sm:px-8 sm:py-4 shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://wa.me/2349090000904?text=Hello%2C%20I%20would%20like%20to%20get%20support%20from%20Ember%20Bloom%20Women.",
                      "_blank"
                    )
                  }
                >
                  Get Help Now
                </Button>
                <Button onClick={openCall} className="bg-white text-primary px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:bg-white">
                  Crisis Resources
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739302750691-59c12d251139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWVuJTIwc3VwcG9ydCUyMGdyb3VwJTIwY291bnNlbGluZ3xlbnwxfHx8fDE3NTgwOTQ4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Women of color in supportive counseling session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Support Us/Volunteer */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-1 mx-auto mb-8 bg-muted rounded-full"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-6 sm:mb-8">
                Your support creates a lifeline for women in transition. Together, we can provide safe spaces, 
                vital services, and opportunities that help women heal and start anew.
              </p>
              <Button onClick={() => handleNavClick("contact")} className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 shadow-lg transition-all duration-300 hover:shadow-xl">
                Partner With Us
              </Button>
            </div>
          </div>
          
          {/* Support impact stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HandHeart, color: "primary", number: "150+", label: "Active Volunteers" },
              { icon: Heart, color: "secondary", number: "25+", label: "Partner Organizations" },
              { icon: Users, color: "muted", number: "500+", label: "Lives Transformed" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  data-reveal="stat"
                  style={{ animationDelay: `${index * 200}ms` }}
                  className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-lg 
                    transform hover:-translate-y-1 transition-all duration-300 
                    group cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${item.color}/10 rounded-full 
                    flex items-center justify-center transform group-hover:scale-110 
                    group-hover:rotate-12 transition-all duration-500`}>
                    <IconComponent className={`w-8 h-8 text-${item.color}`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl text-${item.color} mb-1.5 group-hover:scale-110 
                    transition-transform duration-300 font-semibold`}>
                    {item.number}
                  </h3>
                  <p className="text-sm text-foreground/70 group-hover:text-foreground/90 
                    transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Donate Now */}
      <section className="py-8 bg-muted text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted to-muted/90"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-y-32 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1.5 bg-white/20 rounded-full text-xs sm:text-sm text-white/90">
                Impact • Transformation • Hope
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold">
                Give Hope. Spark Change.
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-white/90">
                Every contribution helps restore a life. Your generosity funds therapy, legal aid, skills training,
                and community care that allow women to rise, rebuild, and thrive.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => handleNavClick("contact")} className="bg-accent hover:bg-accent/90 text-foreground px-8 py-4 shadow-lg transition-all duration-300 hover:shadow-xl">
                Donate Today
              </Button>
              <Button onClick={() => handleNavClick("contact")} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 transition-all duration-300 hover:shadow-xl">
                Monthly Giving
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}