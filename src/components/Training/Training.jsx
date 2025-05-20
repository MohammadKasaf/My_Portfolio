import './Training.css';

const Trainings = () => {
  return (
    <section id="trainings" className="trainings-section">
      <div className="trainings-container">
        <h2 className="section-title">My <span>Training</span></h2>
        
        <div className="training-card">
          <div className="training-header">
            <h3 className="training-title">Java Full Stack Development</h3>
            <div className="training-meta">
              <span className="training-duration">May 2023 – December 2024</span>
              <span className="training-role">Trainee, Remote</span>
            </div>
          </div>
          
          <div className="training-provider">
            <i className="fas fa-certificate"></i> AccioJob
          </div>
          
          <ul className="training-details">
            <li>
              <i className="fas fa-check-circle"></i> Pursuing certifications in Java, DSA, Spring Boot, and MySQL
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Developing real-life projects and practicing DSA
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Regular mock interviews and technical assessments
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Hands-on experience with Spring Boot projects
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trainings;