import skills from '../data/skills';
import '../styles/skills.css';

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        
        ))}
      </div>
    </section>
    
    
  );
}
<hr />

export default Skills;