import React from "react";
import "./Academics.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Bachelor of Technology",
    institution: "Lovely Profesional University, Punjab",
    duration: "2022 - Present",
    cgpa: "In Progress",
    details: [
      "Computer Science and Technology",
      "Specialization in AI & ML",
      "Key courses: Data Structures, Algorithms, Machine Learning",
      "Research Projects in AI/ML",
    ],
  },
  {
    title: "Pre-University College",
    institution: "Indian public school, Bihar",
    duration: "2019 - 2021",
    Percentage: "60",
    details: [
      "Physics, Maths, Chemistry, Computer Science",
      "Pre-University Completion",
      "Advanced Mathematics and Computer Science",
    ],
  },
  {
    title: "Secondary High School",
    institution: "Indian public school, Bihar",
    duration: "2018 - 2019",
    Percentage: "72",
    details: [
      "Based on NCERT",
      "Secondary Education Completion",
      "Strong foundation in Science"
      
    ],
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">My Academic Journey</h1>
      <div className="academics-grid">
        {academicsData.map((edu, index) => (
          <div key={index} className="academic-card">
            <h2>{edu.title}</h2>
            <h3>{edu.institution}</h3>
            <p className="academic-duration">{edu.duration}</p>
            <p className="academic-cgpa">CGPA: {edu.cgpa}</p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
