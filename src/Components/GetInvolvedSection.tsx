import { Button } from "./Ui/button";
import { HandHeart, Handshake, Heart } from "lucide-react";

export default function GetInvolvedSection({handleNavClick}:any) {

  const involvementOptions = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Share your time, skills, or mentorship to make a difference in the lives of women rebuilding their futures.",
      action: "Volunteer",
      color: "primary"
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "We collaborate with organizations, businesses, and institutions to strengthen impact and create sustainable change.",
      action: "Partner With Us",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Your gift provides real solutions—mental health care, legal aid, training, and safe spaces for survivors.",
      action: "Donate",
      color: "accent"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-32 left-32 w-48 h-48 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-white/15 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm text-white/90 mb-6">
            Join Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Be Part of Her Journey
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/90">
            Volunteer, partner, or donate—every action helps women rebuild their futures.
          </p>
        </div>

        {/* Get Involved Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-6 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl text-white">{option.title}</h3>
                  <p className="leading-relaxed text-white/90">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center space-y-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {involvementOptions.map((option, index) => {
              const IconComponent = option.icon;
              const colorClasses : { [key: string]: any} = {
                primary: "bg-white text-primary hover:bg-white/90",
                secondary: "bg-secondary hover:bg-secondary/90 text-white",
                accent: "bg-accent hover:bg-accent/90 text-foreground"
              };
              
              return (
                <Button 
                  key={index} 
                  className={`px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105 ${colorClasses[option.color]}`}
                  onClick={() => handleNavClick("contact")}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {option.action}
                </Button>
              );
            })}
          </div>
          
          {/* Additional engagement section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl text-white mb-4">Ready to make an impact?</h3>
              <p className="text-white/90 mb-6">Join our community of changemakers and help transform lives</p>
              <Button onClick={() => handleNavClick("contact")} className="bg-white text-primary hover:bg-white/90 px-8 py-3">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}