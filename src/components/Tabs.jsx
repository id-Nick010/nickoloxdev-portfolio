// SkillsTabs.jsx
import React, { useEffect, useState } from "react";
import "../styles/componentStyles/Tabs.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaBootstrap,
  FaJava,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
    FaDartLang,
  FaFlutter,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiExpress, SiTensorflow, SiTypescript} from "react-icons/si";
import { PiFileCDuotone, PiFileCSharpBold } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { TbSquareLetterKFilled } from "react-icons/tb";
import { DiVim } from "react-icons/di";
import { VscJson } from "react-icons/vsc";

const tabData = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "React", icon: <FaReact /> },
      { name: "Flutter", icon: <FaFlutter /> },
      { name: "Tailwind", icon: <RiTailwindCssFill/> },
      { name: "UI/UX", icon: <MdOutlineDesignServices/> },
      { name: "Typescript", icon: <SiTypescript/> },
      { name: "Dart", icon: <FaDartLang/> },
      { name: "Bootstrap", icon: <FaBootstrap /> },

    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "SQL", icon: <GrMysql /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Javascript", icon: <FaJsSquare /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "C Lang", icon: <PiFileCDuotone/> },
      { name: "C#", icon: <PiFileCSharpBold /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Firebase", icon: <IoLogoFirebase /> },
      { name: "NoSQL", icon: <FaDatabase /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Tensorflow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <TbSquareLetterKFilled /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Json", icon: <VscJson /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Vim", icon: <DiVim /> },
    ],
  },
];

function SkillsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabData.length);
    }, 5000); // Auto switch every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skills-container">
      <div className="tab-buttons">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="skills-grid fade-in">
        {tabData[activeTab].skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsTabs;
