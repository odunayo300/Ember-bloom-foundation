import { Button } from "./Ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./Ui/card";
import { Input } from "./Ui/input";
import { Textarea } from "./Ui/textarea";
import { Mail, Phone, MessageCircle, X } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type ContactSectionProps = {
  isOpen?: boolean;
  closeCall?: () => void;
  openCall?: () => void;
};

export function ContactSection({ isOpen, closeCall, openCall }: ContactSectionProps) {
  // State for form fields
  const form = useRef<HTMLFormElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l7jnwql",
        "template_mklqjfw",
        form.current as HTMLFormElement,
        {
          publicKey: "Ad1_ndMZDu80So-4n",
        }
      )
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 10000); // Reset success message after 10 seconds
        },
        (err: unknown) => {
          let text = 'An error occurred';
          if (typeof err === 'object' && err !== null && 'text' in err) {
            const maybeText = (err as Record<string, unknown>)["text"];
            if (typeof maybeText === 'string') text = maybeText;
          } else if (err instanceof Error) {
            text = err.message;
          }
          setError(true);
          setErrorText(text);
          setTimeout(() => setError(false), 10000);
        }
      );
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto transform transition-all duration-300 scale-100 opacity-100"
            style={{ animation: 'slideDown 0.3s ease-out' }}
          >
            {/* Enhanced Title with Icon */}
            <div className="p-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Emergency Contact
                </h2>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                For immediate assistance in cases of domestic violence
              </p>
            </div>

            {/* Enhanced Buttons with Better Hover Effects */}
            <div className="p-6 space-y-4">
              <a href="tel:999" className="block group">
                <button className="w-full flex items-center justify-between px-5 py-3 bg-gradient-to-r from-green-600 to-green-500 
                  text-white rounded-xl hover:shadow-lg transform hover:scale-[0.99] transition-all duration-300 group-hover:from-green-500 group-hover:to-green-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span className="font-medium">United Kingdom</span>
                  </div>
                  <span className="text-sm opacity-90">999</span>
                </button>
              </a>

              <a href="tel:+2348121133399" className="block group">
                <button className="w-full flex items-center justify-between px-5 py-3 bg-gradient-to-r from-green-600 to-green-500 
                  text-white rounded-xl hover:shadow-lg transform hover:scale-[0.99] transition-all duration-300 group-hover:from-green-500 group-hover:to-green-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span className="font-medium">Nigeria</span>
                  </div>
                  <span className="text-sm opacity-90">+234 812 113 3399</span>
                </button>
              </a>

              {/* Enhanced Cancel Button */}
              <button
                onClick={closeCall}
                className="w-full flex items-center justify-center px-5 py-3 bg-gray-100 text-gray-700 rounded-xl
                  hover:bg-gray-200 transform hover:scale-[0.99] transition-all duration-300 mt-2"
              >
                <X className="h-5 w-5 mr-2" />
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-2xl w-full max-w-sm mx-auto
            transform transition-all duration-500 scale-100 opacity-100 relative overflow-hidden">
            {/* Success gradient border */}
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-400"></div>
            
            {/* Animated checkmark */}
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4
              animate-[bounce_0.5s_ease-in-out]">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  className="animate-[dash_0.5s_ease-in-out_forwards]"
                  style={{ strokeDasharray: '100', strokeDashoffset: '100' }}
                />
              </svg>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 text-center text-base sm:text-lg">
              Thank you for reaching out. We'll get back to you soon.
            </p>
            
            {/* Success animation particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-1/2 right-6 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-2xl w-full max-w-sm mx-auto
            transform transition-all duration-500 scale-100 opacity-100 relative overflow-hidden">
            {/* Error gradient border */}
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-400 via-red-500 to-red-400"></div>
            
            {/* Animated error icon */}
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4
              animate-[bounce_0.5s_ease-in-out]">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  className="animate-[dash_0.5s_ease-in-out_forwards]"
                  style={{ strokeDasharray: '100', strokeDashoffset: '100' }}
                />
              </svg>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Oops!
            </h3>
            <p className="text-gray-600 text-center text-base sm:text-lg">
              {errorText}
            </p>
            
            {/* Error animation particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-4 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-1/2 right-6 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

    <section data-reveal className="py-12 sm:py-24 bg-foreground text-white relative overflow-hidden">
        {/* Enhanced gradient background with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 animate-gradient"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 
          blur-3xl -translate-y-32 translate-x-32 animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 
          blur-2xl translate-y-24 -translate-x-24 animate-float"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full mb-4 sm:mb-6
              transform hover:scale-105 transition-all duration-500 border border-white/10">
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight font-semibold">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
              We'd love to hear from you. Whether you're seeking support,
              looking to collaborate, or wanting to learn more, our team is here
              to listen with empathy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16" id="contact">
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "emberbloomf@gmail.com",
                    description: "Send us your questions anytime",
                    delay: "100",
                    gradient: "from-accent/20 to-primary/20"
                  },
                  {
                    icon: Phone,
                    title: "Phone/WhatsApp",
                    value: "+2349090000904",
                    description: "Available during business hours",
                    delay: "200",
                    gradient: "from-primary/20 to-secondary/20"
                  },
                  {
                    icon: MessageCircle,
                    title: "Follow Us",
                    value: "@emberbloomfoundation",
                    description: "Stay connected on social media",
                    delay: "300",
                    gradient: "from-secondary/20 to-accent/20"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl
                      hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]
                      border border-white/5 hover:border-white/10"
                    style={{
                      opacity: 0,
                      animation: `fadeIn 0.5s ease-out forwards ${item.delay}ms`
                    }}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient}
                      flex items-center justify-center flex-shrink-0 transition-transform duration-500
                      group-hover:scale-110 group-hover:rotate-[360deg]`}>
                      <item.icon className="w-7 h-7 text-white transform transition-all duration-500" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-white text-base font-medium">{item.title}</p>
                      <p className="text-accent text-base sm:text-lg font-semibold group-hover:text-accent/90 transition-colors duration-300">
                        {item.value}
                      </p>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Emergency Contact Card */}
              <div className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 
                backdrop-blur-sm border border-primary/30 rounded-2xl transform hover:scale-[1.02] 
                transition-all duration-500 group relative overflow-hidden">
                {/* Animated emergency icon */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl 
                  group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center
                      animate-pulse">
                      <span className="text-2xl" role="img" aria-label="emergency">🚨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Crisis Support</h3>
                  </div>
                  
                  <p className="text-white/90 text-base mb-6 leading-relaxed">
                    If you're in immediate danger, please contact local emergency
                    services or a crisis hotline.
                  </p>
                  
                  <Button
                    onClick={openCall}
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-medium px-6 py-3
                      transform hover:scale-[0.98] active:scale-95 transition-all duration-300
                      shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Crisis Resources
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-2xl transform transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-1">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-75"></div>
                <CardTitle className="text-xl sm:text-2xl text-foreground font-semibold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Send us a message
                  </span>
                </CardTitle>
                <p className="text-xs sm:text-sm text-foreground/60 mt-1.5">
                  We'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="space-y-2 group">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground/80 flex items-center space-x-2 group-focus-within:text-accent transition-colors duration-200"
                    >
                      <span>Full Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="fullName"
                      placeholder="Enter your Name"
                      className="w-full border-foreground/20 focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white/80 placeholder:text-black/60
                        transition-all duration-300 hover:border-accent/50 transform hover:-translate-y-[2px] h-12 sm:h-11 px-4 rounded-md text-base sm:text-sm"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      name="fullName"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground/80 flex items-center space-x-2 group-focus-within:text-accent transition-colors duration-200"
                    >
                      <span>Email</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-foreground/20 focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white/80 placeholder:text-black/60
                            transition-all duration-300 hover:border-accent/50 transform hover:-translate-y-[2px]"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground/80 flex items-center space-x-2 group-focus-within:text-accent transition-colors duration-200"
                    >
                      <span>Subject</span>
                      <span className="text-red-500">*</span>
                    </label>

                      <select
                        onChange={(e) => setSubject(e.target.value)}
                        id="subject"
                        name="title"
                        required
                        value={subject}
                        className="appearance-none w-full block h-12 sm:h-11 px-4 py-2 rounded-md border border-foreground/20 bg-white/80 text-foreground text-base sm:text-sm leading-6 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 cursor-pointer bg-no-repeat"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.25em 1.25em'
                        }}
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="Donation">Donation</option>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Others">Others</option>
                      </select>
                  </div>

                  <div className="space-y-2 group">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground/80 flex items-center space-x-2 group-focus-within:text-accent transition-colors duration-200"
                    >
                      <span>Message</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      className="w-full min-h-32 border-foreground/20 focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white/80 placeholder:text-black/60
                            transition-all duration-300 hover:border-accent/50 transform hover:-translate-y-[2px] resize-none p-4 rounded-md text-base sm:text-sm"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-6 text-lg
                            shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg relative overflow-hidden group"
                      size="lg"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="relative flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </form>

                <div className="mt-6 border-t border-foreground/10 pt-4">
                  <p className="text-sm text-center text-foreground/70 flex flex-col items-center space-y-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0"
                      />
                    </svg>
                    <span>
                      We'll respond within 24 hours. All communications are
                      confidential.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Decorative accent lines */}
          <div className="mt-20 space-y-2">
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-25"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
