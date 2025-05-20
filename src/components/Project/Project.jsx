import './Project.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My <span>Projects</span></h2>
        
        <div className="projects-grid">

          {/* BookMyShow Project */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">BookMyShow Backend Application</h3>
              <p className="project-year">2024</p>
            </div>
            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Hibernate</span>
              <span>MySQL</span>
              <span>JWT</span>
            </div>
            <ul className="project-features">
              <li>Built 23 REST APIs for user registration, login, booking</li>
              <li>Implemented JWT authentication/authorization</li>
              <li>Designed seat booking logic with ShowSeat/TheaterSeat</li>
              <li>Email integration for notifications</li>
            </ul>
            <a href="https://github.com/MohammadKasaf/Book_My_Show" className="github-link">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* Chat Application */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Chat Application (Full Stack)</h3>
              <p className="project-year">2025</p>
            </div>
            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>Hibernate/JPA</span>
            </div>
            <ul className="project-features">
              <li>Real-time messaging with user authentication</li>
              <li>Secure password handling</li>
              <li>REST APIs with Spring Boot + MySQL</li>
              <li>React frontend for chat interface</li>
            </ul>
            <a href="https://github.com/mohammadkasaf/Chat-Application" className="github-link">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          {/* Ecommerce Project */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Ecommerce Backend Application</h3>
              <p className="project-year">2024</p>
            </div>
            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Twilio</span>
              <span>JWT</span>
              <span>MySQL</span>
            </div>
            <ul className="project-features">
              <li>35+ REST APIs for full ecommerce operations</li>
              <li>JWT + role-based authorization</li>
              <li>Twilio OTP verification</li>
              <li>Email notifications system</li>
            </ul>
            <a href="https://github.com/MohammadKasaf/Ecommerce-Backend-Application-using-springboot" className="github-link">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;