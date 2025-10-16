import { Button } from "./Ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./Ui/card";
import { Input } from "./Ui/input";
import { Textarea } from "./Ui/textarea"
import { Mail, Phone, MessageCircle,X} from "lucide-react";
import { useState, useRef} from "react";
import emailjs from "@emailjs/browser"

export function ContactSection({isOpen,closeCall,openCall}:any) {

  // State for form fields
  const form = useRef <HTMLFormElement> (null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l7jnwql', 'template_mklqjfw', form.current as HTMLFormElement, {
        publicKey: 'Ad1_ndMZDu80So-4n',
      })
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 10000); // Reset success message after 5 seconds
        },
        (error:any) => {
          setError(true);
          setErrorText(error.text);
          setTimeout(() => setError(false), 10000);
        },
      );
  };

  return (
    <div>
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
                 <button className="w-full flex items-center mb-2 justify-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                   <Phone className="h-5 w-5 mr-2" />
                   In UK
                 </button>
                </a>

                <a href="tel:+2348121133399">
                  <button className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    <Phone className="h-5 w-5 mr-2" />
                    In Nigeria
                 </button>
                </a>
              </div>
                {/* Cancel Button */}
              <button
                onClick={closeCall}
                className="mt-5 w-full flex items-center justify-center bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                <X className="h-5 w-5 mr-2" />
                Cancel
              </button>
            </div>
          </div>
         )}
    
        {success && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center shadow-2xl animate-slideDown">
              <svg className="w-12 h-12 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-700 font-bold text-2xl mb-2">Success!</span>
              <p className="text-green-600 text-lg">Your message has been successfully sent.</p>
            </div>
          </div>
        )}

        {error && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center shadow-2xl animate-slideDown">
              <svg className="w-12 h-12 text-red-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-red-700 font-bold text-2xl mb-2">Error!</span>
              <p className="text-red-600 text-lg">{errorText}</p>
            </div>
          </div>
        )}
    
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/20 blur-2xl translate-y-24 -translate-x-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/10 rounded-full text-sm text-white/90 mb-6">
            📞 Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Contact Us
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/90">
            We'd love to hear from you. Whether you're seeking support, looking to collaborate, or wanting to learn more, 
            our team is here to listen with empathy.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16" id="contact">
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="text-white text-lg">Email</p>
                  <p className="text-accent text-xl">emberbloomf@gmail.com</p>
                  <p className="text-white/70 text-sm">Send us your questions anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="text-white text-lg">Phone/WhatsApp</p>
                  <p className="text-accent text-xl">+2349090000904</p>
                  <p className="text-white/70 text-sm">Available during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="text-white text-lg">Follow Us</p>
                  <p className="text-accent text-xl">@emberbloomfoundation</p>
                  <p className="text-white/70 text-sm">Stay connected on social media</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-6 bg-primary/20 border border-primary/30 rounded-2xl">
              <h3 className="text-lg text-white mb-2">🚨 Crisis Support</h3>
              <p className="text-white/90 text-sm mb-4">
                If you're in immediate danger, please contact local emergency services or a crisis hotline.
              </p>
              <Button onClick={openCall} size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Crisis Resources
              </Button>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card  className="bg-card/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="space-y-2 mb-4">
                    <label htmlFor="firstName" className="text-sm text-foreground/80">
                        Full Name
                    </label>
                    <Input 
                        id="fullName" 
                        placeholder="Enter your Name" 
                        className="border-foreground/20 focus:ring-primary focus:border-transparent bg-white/80 placeholder:text-black "
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        name="fullName"
                    />
                    </div>

                    <div className="space-y-2 mb-4">
                        <label htmlFor="email" className="text-sm text-foreground/80">
                        Email
                        </label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="your.email@example.com"
                            className="border-foreground/20 focus:ring-primary focus:border-transparent bg-white/80 placeholder:text-black "
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                        />
                    </div>

                    <div className="space-y-2 mb-4">
                        <label htmlFor="subject" className="text-sm text-foreground/80">
                        Subject
                        </label>
                
                        <select
                          onChange={(e) => setSubject(e.target.value)}
                          id="subject"
                          name="title"
                          required
                          value={subject}
                          className="w-full md:w-full block h-11 md:h-9 px-4 py-2 md:py-1 pr-10 rounded-md border border-foreground/20 bg-white/80 text-foreground text-base md:text-sm leading-6 focus:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-colors appearance-none"
                        >
                          <option value={" "}> </option>
                          <option value={"Donation"}> Donation</option>
                          <option value={"Sponsorship"}>Sponsorship</option>
                          <option value={"Others"}> Others</option>
                        </select>
                    </div>

                    <div className="space-y-2 mb-4">
                        <label htmlFor="message" className="text-sm text-foreground/80">
                        Message
                        </label>
                        <Textarea 
                            id="message" 
                            placeholder="Tell us how we can help..."
                            className="min-h-32 border-foreground/20 focus:ring-primary focus:border-transparent resize-none bg-white/80 placeholder:text-black"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                        />
                    </div>

                    <Button 
                        className="w-full bg-primary mt-2 hover:bg-primary/90 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                        size="lg"
                    >
                        Send Message
                    </Button>
                </form>

              <p className="text-xs text-center text-foreground/70">
                We'll respond within 24 hours. All communications are confidential.
              </p>
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