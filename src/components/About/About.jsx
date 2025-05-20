import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-heading">
            <h1 className="greeting">Hello,</h1>
            <h1 className="name">
              I'm <span>Mohammad Kasaf</span>
            </h1>
            <h2 className="title">Full Stack Java Developer</h2>
          </div>

          <div className="about-details">
            <div className="about-text">
              <p className="about-description">
                I am a Full Stack Java Developer who enjoys building web applications
                and solving problems. I have solved <span className="highlight">500+ DSA questions</span> on
                LeetCode, GeeksforGeeks, and AccioJob, which improved my logic and
                thinking skills. On the backend, I use <span className="highlight">Java and Spring Boot</span> to
                build APIs. On the frontend, I use <span className="highlight">HTML, CSS, JavaScript, and
                React</span> to make simple and user-friendly websites.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">DSA Problems Solved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years of Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;