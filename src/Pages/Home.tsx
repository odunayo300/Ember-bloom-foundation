import AboutSection from "../Components/AboutSection"
import { Header } from "../Components/Header"
import HeroSection from "../Components/HeroSection"
import { ServicesSection } from "../Components/ServicesSection"
import SupportSection from "../Components/SupportSection"
import GetInvolvedSection from "../Components/GetInvolvedSection"
import StoriesSection from "../Components/StoriesSection"
import {ContactSection} from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
import { useState } from "react"


 export default function Home() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen,setIsOpen] = useState(false)

    const exitApp = () => {
     const decoys = [
      "https://www.google.com/",
      "https://www.bbc.com/",
      "https://www.weather.com/",
      "https://www.amazon.com/",
      "https://www.youtube.com/",
      "https://www.imdb.com/",
      "https://www.msn.com/",
      "https://www.nytimes.com/"
    ];

    // pick a random decoy
    const url = decoys[Math.floor(Math.random() * decoys.length)];
    window.location.replace(url)
  }

  const openCall = () =>{
    setIsOpen(true)
  }

  const closeCall = () =>{
    setIsOpen(false)
  }

    // Smooth scroll function
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <div className ="min-h-screen bg-background w-full overflow-x-hidden">
      <button onClick={exitApp}
       className= "fixed right-4 top-1/2 z-50 -translate-y-1/2 border-secondary bg-red-500 text-white hover:bg-secondary hover:text-white px-4 py-2 rounded-full shadow-lg animate-exit-blink"
      >
        Quick Exit
      </button>
          <Header 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            handleNavClick={handleNavClick}
          />
          <main>
            <HeroSection/>
            <SupportSection
              handleNavClick={handleNavClick}
              openCall = {openCall}
              closeCall = {closeCall}
              isOpen = {isOpen}
            />
            <AboutSection/>
            <ServicesSection/>
            <GetInvolvedSection
              handleNavClick = {handleNavClick}
            />
            <StoriesSection/>
            <ContactSection
              openCall = {openCall}
              closeCall = {closeCall}
              isOpen = {isOpen}
            />
          </main>
          <Footer
            handleNavClick={handleNavClick}
          />
    </div>
  )
}


