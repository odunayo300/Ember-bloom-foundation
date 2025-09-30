import { ImageWithFallback } from "./Figma/ImageWithFallBack"
import { Heart, HandHeart, Users,Phone,X } from "lucide-react";
import { Button } from "./Ui/button";

export default function SupportSection({handleNavClick,isOpen,closeCall,openCall}:any){
  


    return(
        <>
         {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center relative">
              {/* Title */}
              <h2 className="text-lg font-semibold mb-4">
                Call authority in emergency case of domestic violence
              </h2>

              {/* Buttons */}
              <div className="space-y-3">
               <a href="tel:999">
                 <button className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  <Phone className="h-5 w-5 mr-2" />
                  In UK
                 </button>
               </a>

               <a href="tel:+2348121133399">
                <Button className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  <Phone className="h-5 w-5 mr-2" />
                  In Nigeria
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
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/15 blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm text-white/90">
                  Safe Space • Compassionate Care • Professional Support
                </div>
                <h2 className="text-4xl md:text-5xl leading-tight">
                  You're Not Alone
                </h2>
                <p className="text-xl leading-relaxed text-white/90">
                  Every woman deserves safety, dignity, and hope. Whether you need someone to talk to, 
                  access to counseling, or tools to rebuild your life, we are here with open arms and practical support.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-muted hover:bg-muted/90 text-white px-8 py-4 shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://wa.me/2349090000904?text=Hello%2C%20I%20would%20like%20to%20get%20support%20from%20Ember%20Bloom%20Women.",
                      "_blank"
                    )
                  }
                >
                  Get Help Now
                </Button>
                <Button onClick={openCall} className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-1 mx-auto mb-8 bg-muted rounded-full"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-foreground/80 mb-8">
                Your support creates a lifeline for women in transition. Together, we can provide safe spaces, 
                vital services, and opportunities that help women heal and start anew.
              </p>
              <Button onClick={() => handleNavClick("contact")} className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 shadow-lg">
                Partner With Us
              </Button>
            </div>
          </div>
          
          {/* Support impact stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl text-primary mb-2">150+</h3>
              <p className="text-foreground/70">Active Volunteers</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl text-secondary mb-2">25+</h3>
              <p className="text-foreground/70">Partner Organizations</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-muted" />
              </div>
              <h3 className="text-2xl text-muted mb-2">500+</h3>
              <p className="text-foreground/70">Lives Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Donate Now */}
      <section className="py-24 bg-muted text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted to-muted/90"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-y-32 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm text-white/90">
                Impact • Transformation • Hope
              </div>
              <h2 className="text-4xl md:text-5xl leading-tight">
                Give Hope. Spark Change.
              </h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-white/90">
                Every contribution helps restore a life. Your generosity funds therapy, legal aid, skills training, 
                and community care that allow women to rise, rebuild, and thrive.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => handleNavClick("contact")} className="bg-accent hover:bg-accent/90 text-foreground px-8 py-4 shadow-lg">
                Donate Today
              </Button>
              <Button onClick={() => handleNavClick("contact")} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4">
                Monthly Giving
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}