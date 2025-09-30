
import { Brain, Scale, TrendingUp, Users } from "lucide-react";
import { ImageWithFallback } from "./Figma/ImageWithFallBack";
import holdingHandsTogether from "../assets/holdingHandsTogether.png"

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Mental Health & Healing",
      description: "Safe, confidential counseling, peer support groups, and wellness programs that nurture emotional strength and resilience.",
      image: "https://images.unsplash.com/photo-1591791792024-62c0af34bc9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBjb3Vuc2VsaW5nfGVufDF8fHx8MTc1ODA5MTYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Scale,
      title: "Legal Aid & Advocacy",
      description: "Guidance and connections to trusted legal resources that help protect women's rights and secure justice.",
      image: "https://images.unsplash.com/photo-1580566675342-9945a20eb134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU4MDkxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: TrendingUp,
      title: "Economic Empowerment",
      description: "Training in digital and vocational skills that open pathways to independence, meaningful work, and entrepreneurship.",
      image: "https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlYXJuaW5nJTIwc2tpbGxzfGVufDF8fHx8MTc1ODA5MTYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "A compassionate network of survivors and allies, reminding women everywhere: you are not alone.",
      image: "https://images.unsplash.com/photo-1580566675342-9945a20eb134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU4MDkxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-sm text-primary mb-6">
            About Ember Bloom Foundation
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Healing • Justice • Empowerment • Community
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        {/* About Us Content */}
        <div className="mb-20 space-y-12">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <p className="text-xl leading-relaxed text-foreground">
              <strong className="text-primary">Ember Bloom Foundation for Women's Growth and Empowerment</strong> is a survivor-led nonprofit organization.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mx-auto">
              We walk alongside women navigating transitions such as separation, divorce, widowhood, or recovery from domestic violence. 
              With compassion and understanding, we provide the tools, support, and community needed to move from survival to growth.
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl italic text-primary leading-relaxed">
                At Ember Bloom, we believe every woman—no matter her story—has the power to rise from adversity and bloom again.
              </p>
            </div>
          </div>

          {/* Mission Statement - Enhanced Pull Quote Style */}
          <div className="text-center my-16">
            <div className="max-w-3xl mx-auto p-10 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl border border-primary/20 shadow-lg">
              <blockquote className="text-3xl md:text-4xl italic text-primary leading-relaxed">
                "Restoring dignity. Rebuilding futures."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="text-center">
            <p className="text-xl italic leading-relaxed max-w-3xl mx-auto text-foreground/80">
              A world where every woman survivor can heal, grow, and thrive.
            </p>
          </div>

          {/* Mission & Vision Details */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="leading-relaxed text-foreground/80">
                To restore and empower women in transition by providing access to mental health care, psychosocial support, 
                legal aid, and digital skills that foster healing, independence, and dignity.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/10">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="leading-relaxed text-foreground/80">
                A world where every woman survivor can heal, grow, and thrive supported by compassion, inclusion, 
                and opportunities to live free from violence and limitation.
              </p>
            </div>
          </div>
        </div>

        {/* Our Work Services */}
        <div id="services" className="space-y-12">
          <h3 className="text-3xl text-center text-foreground">Our Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const serviceImages = [
                "https://images.unsplash.com/photo-1739302750691-59c12d251139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWVuJTIwc3VwcG9ydCUyMGdyb3VwJTIwY291bnNlbGluZ3xlbnwxfHx8fDE3NTgwOTQ4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1588181730436-81bb7742b549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNvbG9yJTIwbGVnYWwlMjBhZHZvY2FjeSUyMGp1c3RpY2V8ZW58MXx8fHwxNzU4MDk0OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1739303987830-ca19742b19bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG9mJTIwY29sb3IlMjBsZWFybmluZyUyMHRlY2hub2xvZ3klMjBza2lsbHN8ZW58MXx8fHwxNzU4MDk0ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                holdingHandsTogether
              ];
              
              return (
                <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/2] overflow-hidden">
                    <ImageWithFallback
                      src={serviceImages[index]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <h4 className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="leading-relaxed text-foreground/70">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}