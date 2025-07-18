import React, { useEffect,useState } from "react";
import '../styles/ValuesSection.css';
import ValuesContainer from "../components/ValuesContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faGaugeHigh, faGears, faMagicWandSparkles} from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/ValuesContainer.css"

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
        {name:"Growth", imgSrc: <FontAwesomeIcon icon={faArrowUpRightDots} size='4x' color='white'/> },
        {name:"Max Effort", imgSrc: <FontAwesomeIcon icon={faGaugeHigh} size='4x' color='white'/> },
        {name:"Hyper-Efficient", imgSrc: <FontAwesomeIcon icon={faGears} size='4x' color='white'/> },
        {name:"Artistic", imgSrc: <FontAwesomeIcon icon={faMagicWandSparkles} size='4x' color='white'/> },
    ];
    return(
        <section className="valuesRoot">
            <h1>My Guiding Compass</h1>
            <main className="mainGridValues">
                {valueProps.map((params, index) => (
                    <ValuesContainer idx={index} activeComp={activeIndex} valueName={params.name}>
                        {params.imgSrc}
                    </ValuesContainer>
                ))}
            </main>
            <footer>
                <h3>{valueQuotes[activeIndex]}</h3>
            </footer>
        </section>
    );
}

export default ValuesSection;