import resumePDF from '../../assets/kasaf_resume.pdf';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">My <span>Resume</span></h2>
        
        <div className="resume-content">
          <div className="resume-card">
            <div className="resume-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <h3 className="resume-title">Mohammad Kasaf - Full Stack Developer</h3>
            <p className="resume-description">
              Download my complete resume to view my skills,Training, and projects in detail.
            </p>
            <div className="resume-buttons">
              <a 
                href={resumePDF} 
                className="download-btn"
                download="Mohammad_Kasaf_Resume.pdf"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
              <a 
                href={resumePDF} 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-btn"
              >
                <i className="fas fa-eye"></i> View Online
              </a>
            </div>
          </div>
          
          <div className="skills-highlight">
            <h4>Key Technical Skills:</h4>
            <ul>
              <li><span>Java</span> - Spring Boot, Hibernate, JPA</li>
              <li><span>Databases</span> - MySQL, MongoDB</li>
              <li><span>Web Technologies</span> - HTML, CSS, JavaScript, React</li>
              <li><span>Tools</span> - Git, Maven, Postman, Swagger</li>
              <li><span>Concepts</span> - OOPs, DSA, System Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;