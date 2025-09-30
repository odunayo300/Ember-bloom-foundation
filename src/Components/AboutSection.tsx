import { ImageWithFallback } from "./Figma/ImageWithFallBack";

export default function AboutSection() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #C8A2C8, #F4C2C2)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581802238095-7f7cdf64652f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vbWluZyUyMGZsb3dlcnMlMjBob3BlfGVufDF8fHx8MTc1ODA5MTU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Blooming flowers representing hope and growth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full shadow-lg flex items-center justify-center" style={{ backgroundColor: '#FAF9F6' }}>
              <span className="text-3xl">🌸</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl" style={{ color: '#444444' }}>
                🌸 Who We Are
              </h2>
              
              <div className="space-y-4 leading-relaxed" style={{ color: '#444444' }}>
                <p>
                  Ember Bloom Foundation is a survivor-led nonprofit supporting women through life's transitions—divorce, 
                  widowhood, domestic violence, or other challenges. With compassion and tools, we help women move from survival to growth.
                </p>
              </div>

              {/* Mission Statement - Pull Quote Style */}
              <div className="my-8 p-6 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(200, 162, 200, 0.1)', borderColor: '#C8A2C8' }}>
                <blockquote className="text-2xl italic" style={{ color: '#C8A2C8' }}>
                  "Restoring dignity. Rebuilding futures."
                </blockquote>
              </div>

              {/* Vision Statement */}
              <div className="space-y-3">
                <p className="italic text-lg leading-relaxed" style={{ color: '#444444' }}>
                  A world where every woman survivor can heal, grow, and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}