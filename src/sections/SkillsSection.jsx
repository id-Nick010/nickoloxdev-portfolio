import '../styles/SkillsSection.css';
import Tabs from '../components/Tabs.jsx'

const SkillsSection = ( ) => {
    return(
        <section className='skillsRoot'>
            <h1>My Skills</h1>
            <section className='skillsTab'>
                <button>Frontend</button>
                <button>Backend</button>
                <button>Others</button>
            </section>
            <section className='skillsContainer'>
                <div className='skillCard'>React</div>
                <div className='skillCard'>Tailwind</div>
                <div className='skillCard'>Typescript</div>
                <div className='skillCard'>CSS</div>
                <div className='skillCard'>HTML</div>
            </section>
            {/* <Tabs/> */}
        </section>
    );
};

export default SkillsSection;