import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">My <span>Education</span></h2>
        
        <div className="education-timeline">
          {/* B.Tech */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="degree">B.Tech in Computer Science</h3>
                <p className="institution">
                  <i className="fas fa-university"></i> APJ Abdul Kalam Technical University
                </p>
              </div>
              <div className="timeline-details">
                <p className="duration">
                  <i className="far fa-calendar-alt"></i> 2018 – 2022
                </p>
              </div>
            </div>
          </div>

          {/* 12th */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="degree">Intermediate (12th)</h3>
                <p className="institution">
                  <i className="fas fa-school"></i> UP Board
                </p>
              </div>
              <div className="timeline-details">
                <p className="duration">
                  <i className="far fa-calendar-alt"></i> 2017 | <span className="percentage">66%</span>
                </p>
              </div>
            </div>
          </div>

          {/* 10th */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="degree">High School (10th)</h3>
                <p className="institution">
                  <i className="fas fa-school"></i> UP Board
                </p>
              </div>
              <div className="timeline-details">
                <p className="duration">
                  <i className="far fa-calendar-alt"></i> 2015 | <span className="percentage">75%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;