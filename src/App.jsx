import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import MentorSection from "./components/MentorSection/MentorSection";
import EventSection from "./components/EventSection/EventSection";
import FameSection from "./components/FameSection/FameSection";
import HowToJoinSection from "./components/HowToJoinSection/HowToJoinSection";
import PhotoSection from "./components/PhotoSection/PhotoSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import FAQsSection from "./components/FAQsSection/FAQsSection";
import ImpactSection from "./components/ImpactSection/ImpactSection";
import CodingQuest from "./components/CodingQuest/CodingQuest";
import WebDevHackathon from "./components/WebDevHackathon/WebDevHackathon"
import Classes from "./components/Classes/Classes"
import AndroidDev from "./components/AndroidDev/AndroidDev"
import ModelSection from "./components/ModelSection/ModelSection"

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Navbar will be present on all pages */}
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <HomeSection />
              <ImpactSection />
              <AboutSection />
              <MentorSection />
              <EventSection />
              <FameSection />
              <HowToJoinSection />
              <PhotoSection />
              <ContactUsSection />
              <FAQsSection />
            </>
          } 
        />
        <Route path="/codingquest" element={<CodingQuest/>}/>
        <Route path="/webdev" element={<WebDevHackathon/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/android" element={<AndroidDev/>}/>
        <Route path="/aboutus" element={<AboutSection />} />
        <Route path="/gallery" element={<PhotoSection />} />
        <Route path="/upcomingevents" element={<EventSection />} />
        <Route path="/contactus" element={<ContactUsSection />} />
        <Route path="/model" element={<ModelSection />} />
      </Routes>
    </Router>
  );
};

export default App;