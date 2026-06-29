import MainLayout from "../components/layout/MainLayout";
import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiEye,
  FiGithub,
  FiLinkedin,
  FiMonitor,
  FiShield,
  FiCheckCircle,
  FiCamera,
  FiUpload,
  FiBarChart2,
  FiSettings,
  FiFileText,
  FiUser,
} from "react-icons/fi";
import "../styles/about.css";

function About() {
  return (
    <MainLayout>
      <div className="about-page">

        <div className="about-hero">

          <h1>VisionGuard AI</h1>

          <p>
            VisionGuard AI is a real-time intelligent surveillance system
            developed using Computer Vision and Artificial Intelligence.
            The application performs live object detection using YOLOv8,
            stores detections in SQLite, generates analytics, creates
            professional reports, and provides a modern surveillance dashboard
            for monitoring security events.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-card">

            <h2>
              <FiShield /> Key Features
            </h2>

            <ul className="feature-list">

<li><FiCamera /> Real-Time Webcam Object Detection</li>

<li><FiUpload /> Image Upload Detection</li>

<li><FiCheckCircle /> Live Detection Dashboard</li>

<li><FiDatabase /> Detection History (SQLite)</li>

<li><FiBarChart2 /> Analytics Dashboard</li>

<li><FiFileText /> PDF & CSV Report Generation</li>

<li><FiActivity /> Interactive Charts</li>

<li><FiSettings /> Configurable Detection Settings</li>

</ul>

          </div>

          <div className="about-card">

            <h2>
              <FiCpu /> Technology Stack
            </h2>

            <div className="tech-grid">

              <div className="tech-item">React</div>

              <div className="tech-item">Flask</div>

              <div className="tech-item">YOLOv8</div>

              <div className="tech-item">OpenCV</div>

              <div className="tech-item">SQLite</div>

              <div className="tech-item">SQLAlchemy</div>

              <div className="tech-item">Axios</div>

              <div className="tech-item">ReportLab</div>

            </div>

          </div>

          <div className="about-card">

            <h2>
              <FiActivity /> Project Architecture
            </h2>

            <ul className="feature-list">

              <li>
                <FiMonitor /> React Dashboard
              </li>

              <li>
                <FiEye /> YOLOv8 Detection Engine
              </li>

              <li>
                <FiDatabase /> SQLite Detection Storage
              </li>

              <li>
                REST APIs for Analytics & Reports
              </li>

              <li>
                Flask Backend Services
              </li>

              <li>
                Report Generation (PDF / CSV)
              </li>

            </ul>

          </div>

          <div className="about-card">

            <h2>Project Highlights</h2>

            <ul className="feature-list">

              <li>Real-Time AI Surveillance</li>

              <li>Modern Dashboard UI</li>

              <li>REST API Integration</li>

              <li>Computer Vision using YOLOv8</li>

              <li>Database Driven Analytics</li>

              <li>Production Ready Architecture</li>

            </ul>

          </div>

        </div>

        <div className="developer-card">

          <h2>
  <FiUser /> Developer
</h2>

<h3
  style={{
    color:"#111827",
    fontSize:"28px",
    marginTop:"15px",
    marginBottom:"10px"
  }}
>
  Soujanya Jain Brahmaraj
</h3>

<p
  style={{
    color:"#4b5563",
    fontSize:"17px"
  }}
>
  AI Engineer | Computer Vision Enthusiast | Full Stack Developer
</p>
          <div className="developer-links">

            <a
              href="https://github.com/Soujana77"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/soujanya-jain-3946b7298"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>

          </div>

          <div className="version">

            <p>
              <strong>VisionGuard AI</strong>
            </p>

            <p>Version 1.0.0</p>

            <p>Built using React, Flask & YOLOv8</p>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default About;