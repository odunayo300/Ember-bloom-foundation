import { Heart,ChevronUp } from "lucide-react";

export function Footer({handleNavClick}:any) {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Enhanced Logo & Mission */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌸</span>
              </div>
              <div>
                <h3 className="text-2xl">Ember Bloom Foundation</h3>
                <p className="text-sm text-white/70">For Women's Growth and Empowerment</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed max-w-md">
              Survivor-led support helping women rebuild their lives through mental health care, 
              skills training, and compassionate community.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <span className="text-sm">✨ Empowering women since 2024</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li onClick={() => handleNavClick("about")} className="hover:text-primary transition-colors duration-300 cursor-pointer">About Us</li>
              <li onClick={() => handleNavClick("services")} className="hover:text-primary transition-colors duration-300 cursor-pointer">Our Work</li>
              <li onClick={() => handleNavClick("get-involved")} className="hover:text-primary transition-colors duration-300 cursor-pointer">Get Involved</li>
              <li onClick={() => handleNavClick("contact")} className="hover:text-primary transition-colors duration-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg mb-6 text-accent">Support</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="https://wa.me/2349090000904?text=Hi%20i'll%20like%20to%20get%20help%20from%20Ember%20Bloom%20!" target="_blank" className="hover:text-secondary transition-colors duration-300">Get Help</a></li>
              <li onClick={() => handleNavClick("contact")} className="hover:text-secondary transition-colors duration-300 cursor-pointer">Crisis Resources</li>
              <li onClick={() => handleNavClick("contact")} className="hover:text-secondary transition-colors duration-300 cursor-pointer">Volunteer</li>
              <li onClick={() => handleNavClick("contact")} className="hover:text-secondary transition-colors duration-300 cursor-pointer">Donate</li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-secondary animate-pulse" />
              <span>for survivors everywhere</span>
            </div>
            <div className="text-white/60 text-sm">
              © 2025 Ember Bloom Foundation. All rights reserved.
            </div>
          </div>
        </div>

        {/* Enhanced Disclaimer */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-sm">⚠️</span>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm text-white">Emergency Notice</h5>
              <p className="text-xs text-white/80 leading-relaxed">
                If you are in immediate danger, please contact emergency services or the National Domestic Violence Hotline: 
                1-800-799-7233. This website is not intended as a substitute for professional medical or legal advice.
              </p>
            </div>
          </div>
        </div>
        <button
        onClick={() => handleNavClick("header")}
        className="fixed right-6 bottom-8 md:bottom-16 z-50 bg-white/20 hover:bg-white/40 transition-colors rounded-full p-3 shadow-lg flex items-center justify-center"
        aria-label="Scroll to top"
        >
        <ChevronUp className="w-6 h-6 text-white" />
       </button>
      </div>
    </footer>
  );
}