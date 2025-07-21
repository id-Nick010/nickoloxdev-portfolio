import React, { useState } from "react";
import '../styles/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="navRoot">
      <nav className="navi">
        <h1 className="navLogo"><a href="#home">NXD</a></h1>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`sectionNavs ${isOpen ? "open" : ""}`}>
          <li><a href="#aboutMe"><button>About</button></a></li>
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