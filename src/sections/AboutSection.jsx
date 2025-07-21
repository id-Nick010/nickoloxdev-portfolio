import React from "react";
import '../styles/AboutSection.css';

function AboutSection() {
    return(
        <section className='aboutMeRoot' id='aboutMe'>
            <div className="tint"></div>
            <section className='sectionCenter'>
                <main className='MainAboutMe'>
                    <h1>ABOUT<span>ME</span></h1>
                    <h2>deve/oper</h2>
                    <p>
                        I’m a full-stack developer driven by innovation, Artistry, and efficiency. 
                        I craft seamless digital experiences that blend elegant design with robust functionality. 
                        While I specialize in frontend and backend development, I also actively explore AI and machine learning, fueling my curiosity and expanding what I can build.
                    </p>
                </main>
                <aside className='asideBox'>
                    <h2>FRONTEND</h2>
                    <h2>BACKEND</h2>
                    <h2>AI/ML</h2>
                    <h2>WEB</h2>
                    <h2>MOBILE</h2>
                </aside>
            </section>
            <div className='divider'></div>
            <footer className='footerEducation'>
                <section>
                    <h4>BS Computer Science</h4>
                    <p>Bicol University</p>
                </section>
                <section>
                    <h4>NC2 Java Programming</h4>
                    <p>Tesda NRG</p>
                </section>
                <section>
                    <h4>Web Development Workshop</h4>
                    <p>Zuitt Coding Bootcamp</p>
                </section>
            </footer>
        </section>
        
    );
}

export default AboutSection;