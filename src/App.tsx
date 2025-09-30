import AboutSection from "./Components/AboutSection"
import { Header } from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import { ServicesSection } from "./Components/ServicesSection"
import SupportSection from "./Components/SupportSection"
import GetInvolvedSection from "./Components/GetInvolvedSection"
import StoriesSection from "./Components/StoriesSection"
import {ContactSection} from "./Components/ContactSection"
import { Footer } from "./Components/Footer"
import { useState } from "react"

export default function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isOpen,setIsOpen] = useState(false)

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
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <div className ="min-h-screen bg-background">
      <Header 
        isMenuOpen  = {isMenuOpen}
        setIsMenuOpen = {setIsMenuOpen}
        handleNavClick = {handleNavClick}
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
