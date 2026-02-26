import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Hi, I'm Shreya 👋</h1>
        <h2>QA Automation Engineer</h2>
        <p>Python | Playwright | Appium | Selenium | Automation Testing</p>

        <div className="buttons">
          <a href="https://www.linkedin.com/in/shreya-kashyap-681558248" target="_blank" rel="noreferrer">
            <button>LinkedIn</button>
          </a>
          <a href="mailto:shreyakashyap475@gmail.com">
            <button>Email Me</button>
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2>🛠️ Technical Skills</h2>
        <div className="grid">
          <div className="card"><b>Languages:</b><br/> Java, Python</div>
          <div className="card"><b>Frameworks:</b><br/> TestNG, Playwright, PyTest</div>
          <div className="card"><b>Automation:</b><br/> Selenium, Playwright, Appium, POM</div>
          <div className="card"><b>Tools:</b><br/> Postman, Maven, Jira</div>
          <div className="card"><b>IDEs:</b><br/> Eclipse, IntelliJ, VS Code</div>
          <div className="card"><b>OS:</b><br/> Windows, MacOS, Android, iOS</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>🚀 Project Experience</h2>
        <div className="grid">

          <div className="card">
            <h3>Medipilot 360</h3>
            <p>Automation testing for clinic workflows using Playwright & Selenium.</p>
          </div>

          <div className="card">
            <h3>Secure Proctoring System</h3>
            <p>Automated exam flows, focus detection & anti-cheating validation.</p>
          </div>

          <div className="card">
            <h3>Punjabi Samaj App</h3>
            <p>Mobile automation testing using Python + Appium.</p>
          </div>

          <div className="card">
            <h3>Sharp Quiz</h3>
            <p>Selenium Java automation for quiz logic & scoring validation.</p>
          </div>

          <div className="card">
            <h3>Housie Mania</h3>
            <p>Functional & regression testing for multiplayer game logic.</p>
          </div>

          <div className="card">
            <h3>E-Commerce Platform</h3>
            <p>UI + DB validation & automation regression testing.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>📫 Contact Me</h2>
        <p>📞 +91 9981155633</p>
        <p>📧 shreyakashyap475@gmail.com</p>
      </section>
    </div>
  );
}

export default App;