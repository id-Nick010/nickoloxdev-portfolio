import React from "react"
import '../styles/Nav.css'

const Nav = () => {
    return(
        <section className="navRoot">
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
        </section>
    );
}

export default Nav;

