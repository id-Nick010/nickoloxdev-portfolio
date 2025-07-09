import React from 'react';
import '../styles/HeroSection.css'; 
import Silk from '../components/design/Silk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HeroSection() {
    return (
        <div className='heroContainer' id='home'>
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
                <h1 className='navLogo'><a href='#home'>NXD</a></h1>
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
                    <h2 className='heroName'>Nickol Jairo Belgica</h2>
                    <div className='emDashLine'></div>
                    <h2>and this is...</h2>
                </section>
                <h1>MY SOFTWARE<br/>DEVELOPER JOURNEY</h1>
                <p> I blend creative design with efficient code <br/>to build projects that not only work but enchant</p> </main>
            <footer className='heroFoot'>
                <section className='scrollIndicator'>
                    <FontAwesomeIcon icon={faAnglesDown} size='1x'/>
                    <p>Scroll</p>
                </section>
                <section className='heroSocialsLink'>
                    <a href='https://github.com/id-Nick010' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                    </a>
                    <a href='https://linkedin.com/in/njbelgica' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                    <a href='mailto:njbelgica158@gmail.com' target='_blank'>
                        <FontAwesomeIcon icon={faSquareEnvelope} size='2x'/>
                    </a>
                </section>
            </footer>
        </div>
    );
}

export default HeroSection;