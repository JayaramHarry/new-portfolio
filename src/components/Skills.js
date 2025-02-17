import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 95 },
    { name: "Node.js", percentage: 95 },
    { name: "CSS", percentage: 95 },
    { name: "UI/UX Design", percentage: 88 },
    {name: "Python", percentage: 80},
    {name: "SQL", percentage: 90},
    {name: "Django", percentage: 80},
  ];

  return (
    <div className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">|| Special Skills</span>
          <h2 className="section-title">My Special Skill Field Here.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              style={{ "--progress-width": `${skill.percentage}%` }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
