import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import Nav from "./sections/Nav";
import ValuesSection from "./sections/ValuesSection";
import Silk from "./components/design/Silk";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";


function App() {
    return (
        <div className="">
            <div className='backdropSilk'>
                <Silk
                    speed={10}
                    scale={1}
                    color="#025d40"
                    noiseIntensity={2}
                    rotation={0}
                />
            </div>
            <Nav/>
            <HeroSection/>
            <AboutSection/>
            <ValuesSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </div>
    );
}

export default App;