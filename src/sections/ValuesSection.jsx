import React, { useEffect,useState } from "react";
import '../styles/ValuesSection.css';
import ValuesContainer from "../components/ValuesContainer";
import "../styles/componentStyles/ValuesContainer.css"
import { GiGiftOfKnowledge, GiStumpRegrowth } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiMagicWand } from "react-icons/pi";

const ValuesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=> {
            setActiveIndex((prev) => (prev+1) % valueProps.length);
        },5000);
        return () => clearInterval(interval);
    }, []);

    const valueQuotes = [
        "Growth is most alive when I’m at the edge of what I know. I thrive in the tension between uncertainty and discovery. My joy lives not in mastery, but in the stretch beyond.", 
        "My greatest days aren't defined by results, but by how fully I show up in each moment.", 
        "Hyper-efficiency isn't just doing more in less time, it's wielding every tool, shortcut, and system like extensions of your mind.",
        "Art leads. I craft not for efficiency alone, but to evoke, to elevate, to inspire."
    ];
    const valueProps = [
        {name:"Growth", imgSrc: <GiGiftOfKnowledge className="valuesIcons"/> },
        {name:"Max Effort", imgSrc: <IoSpeedometer className="valuesIcons"/> },
        {name:"Hyper Efficient", imgSrc: <LiaShippingFastSolid className="valuesIcons"/> },
        {name:"Artistic", imgSrc: <PiMagicWand className="valuesIcons"/> },
    ];
    return(
        <section className="valuesRoot">
            <h1>My Guiding Compass</h1>
            <div className='wrapthis'>
                <main className="mainGridValues">
                    {valueProps.map((params, index) => (
                        <ValuesContainer idx={index} activeComp={activeIndex} valueName={params.name}>
                            {params.imgSrc}
                        </ValuesContainer>
                    ))}
                </main>
            </div>
            <footer>
                <h3>{valueQuotes[activeIndex]}</h3>
            </footer>
            <div className="divider"></div>
        </section>
    );
}

export default ValuesSection;