import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import Nav from "./sections/Nav";
import ValuesSection from "./sections/ValuesSection";
import Silk from "./components/design/Silk";


function App() {
    return (
        <div className="width:100vw">
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
        </div>
    );
}

export default App;