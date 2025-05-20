import './Skill.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-code"></i> Languages
            </h3>
            <ul className="skills-list">
              <li><span>Core Java</span></li>
              <li><span>HTML5</span></li>
              <li><span>CSS3</span></li>
              <li><span>JavaScript</span></li>
              <li><span>SQL</span></li>
            </ul>
          </div>

          {/* Frameworks & Tools */}
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-cogs"></i> Frameworks & Tools
            </h3>
            <ul className="skills-list">
              <li><span>Spring Boot</span></li>
              <li><span>React</span></li>
              <li><span>Hibernate/JPA</span></li>
              <li><span>MySQL</span></li>
              <li><span>Spring JDBC</span></li>
              <li><span>Maven</span></li>
              <li><span>Spring MVC</span></li>
              <li><span>Spring Security</span></li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-tools"></i> Developer Tools
            </h3>
            <ul className="skills-list">
              <li><span>VS Code</span></li>
              <li><span>IntelliJ IDEA</span></li>
              <li><span>MySQL Workbench</span></li>
              <li><span>Postman</span></li>
              <li><span>Swagger</span></li>
            </ul>
          </div>

          {/* Coursework */}
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-graduation-cap"></i> Coursework
            </h3>
            <ul className="skills-list">
              <li><span>DBMS</span></li>
              <li><span>Operating System</span></li>
              <li><span>OOPS</span></li>
              <li><span>Computer Network</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;