import "../styles/ProjectsSection.css";
import scambaPhone from "../assets/images/scambaShowPic.png";
import picseePhone from "../assets/images/picseePhone.png";
import Divider from "../components/Divider.jsx";

const projects = [
  {
    title: "SCAMBA",
    subtitle:
      "Mobile app built with Flutter and Flask that detects spam in English, Filipino, and code-switched SMS using XLM-RoBERTa. Features real-time classification, intuitive swipe and filter UI, and optimized performance for low-end devices.",
    image: scambaPhone,
  },
  {
    title: "PICSEE",
    subtitle: "Is a Flutter mobile app that uses on-device AI to auto-organize photos into smart albums with deep learning-based tagging and a smooth, responsive UI. It simplifies photo management while showcasing intelligent categorization and elegant design.",
    image: picseePhone,
  },
  {
    title: "Tailwind Studio",
    subtitle: "Creative animations and dynamic UI with Tailwind CSS",
    image: "../assets/images/myPicBackG.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projectsRoot">
      <Divider />
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <main className="projectCardContainer">
          <div className="project-text-block">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <div className="project-img-wrapper">
            <img src={project.image} alt="Project Pic" />
          </div>
        </main>
      ))}
    </section>
  );
};

export default ProjectsSection;
