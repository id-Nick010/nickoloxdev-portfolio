import React from 'react';
import '../styles/HeroSection.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HeroSection() {
    return (
        <section className='heroContainer' id='home'>
            <main className='heroMain'>
                <section>
                    <h2>Hi, Im </h2>
                    <h2 className='heroName'>Nickol Jairo Belgica</h2>
                    <div className='emDashLine'></div>
                    <h2>and this is...</h2>
                </section>
                <h1 className='mainHeroHeader'>MY SOFTWARE<br/>DEVELOPER JOURNEY</h1>
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
        </section>
    );
}

export default HeroSection;