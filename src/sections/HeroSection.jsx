import React from 'react';
import '../styles/HeroSection.css'; 
import angleDownIcon from '../assets/angles-down-solid.svg';
import Silk from '../components/design/Silk';

function HeroSection() {
    return (
        <div className='heroContainer'>
            <div className='backdropSilk'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#025d40"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <nav className='navi'>
                <h1>NXD</h1>
                <ul className='sectionNavs'>
                    <li><button>About</button></li>
                    <li><button>Skills</button></li>
                    <li><button>Certifications</button></li>
                    <li><button>Projects</button></li>
                    <li><button>Experience</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </nav>
            <main className='heroMain'>
                <section>
                    <h2>Hi, Im </h2>
                    <h2>Nickol Jairo Belgica</h2>
                    <div className='emDashLine'></div>
                    <h2>and this is...</h2>
                </section>
                <h1>MY SOFTWARE<br/>DEVELOPER JOURNEY</h1>
                <p> I blend creative design with efficient code <br/>to build projects that not only work but enchant</p> </main>
            <footer className='heroFoot'>
                <section>
                    <img src={angleDownIcon} alt="scroll down" width='40' height='40'/>
                    <p>Scroll</p>
                </section>
                <section>
                    {/* buttons for socials links */}
                </section>
            </footer>
        </div>
    );
}

export default HeroSection;