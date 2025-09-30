import { ImageWithFallback } from "./Figma/ImageWithFallBack";
import { Quote } from "lucide-react";
import { Button } from "./Ui/button";

export default function StoriesSection() {
    const stories = [
    {
      quote: "After leaving an abusive relationship, I thought I'd lost everything. Ember Bloom helped me find my strength again through their counseling program and job training. Today, I'm financially independent and helping other women on their journey.",
      author: "Sarah M.",
      role: "Survivor & Mentor",
      image: "https://images.unsplash.com/photo-1646066490017-c935b1a1eb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBtZW50b3JzaGlwJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU4MDk0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      quote: "Widowhood at 45 left me feeling lost and alone. Through Ember Bloom's support groups, I discovered I wasn't just surviving—I was capable of thriving. I've since started my own business and mentor other women facing similar challenges.",
      author: "Maria L.",
      role: "Entrepreneur & Advocate", 
      image: "https://images.unsplash.com/photo-1707995673778-f7ded37a4c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjB3b21lbiUyMHByb2Zlc3Npb25hbCUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc1ODA5NDg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      quote: "My divorce at 50 felt like the end of my world. Ember Bloom taught me that endings can be new beginnings. Through their legal aid program and emotional support, I rebuilt my life and found peace I never knew was possible.",
      author: "Jennifer K.",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1604900881431-781565ae8d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWVuJTIwY29tbXVuaXR5JTIwc3VwcG9ydCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4MDk0ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];
  return (
    <section id="stories" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-muted/10 rounded-full text-sm text-muted mb-6">
            📖 Stories of Hope & Transformation
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Voices of Resilience
          </h2>
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-muted to-secondary rounded-full"></div>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl leading-relaxed text-foreground/80">
              Real stories of courage and renewal, reminding women everywhere: healing is possible.
            </p>
            <p className="text-base leading-relaxed text-foreground/70">
              Every survivor's journey is unique, but each one carries a message of strength and renewal. 
              By sharing these stories, we remind women everywhere: healing is possible, and brighter days are ahead.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[3/2] overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={`Portrait of ${story.author}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl text-foreground">{story.author}</h3>
                  <p className="text-sm text-primary">{story.role}</p>
                </div>
                <Quote className="w-8 h-8 text-primary/60" />
                <blockquote className="text-base leading-relaxed italic text-foreground/80">
                  "{story.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <span className="text-sm text-muted">Transformation Story</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center space-y-8">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl text-foreground mb-4">Your Story Matters</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Every story of resilience inspires hope in others. Share your journey and become part of the healing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/2349090000904?text=Hello%2C%20I%20would%20like%20to%20share%20my%20story%20with%20Ember%20Bloom%20Women." target="_blank" rel="noopener noreferrer">
                <Button  className="bg-muted hover:bg-muted/90 text-white px-8 py-3 shadow-lg">
                  Share Your Story
                </Button>
              </a>
              <Button  className="border-primary text-white hover:bg-secondary hover:text-white px-8 py-3">
                Read More Stories
              </Button>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border border-primary/20">
            <p className="text-2xl md:text-3xl italic mb-4 text-foreground">
              "Every woman—no matter her story—has the power to rise from adversity and bloom again."
            </p>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
