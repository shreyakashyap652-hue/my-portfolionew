import "./App.css";

function App() {
  return (
    <div className="container">
      {/* 🐞 Flying Ladybugs */}
      <div className="ladybug bug1">🐞</div>
      <div className="ladybug bug2">🐞</div>
      <div className="ladybug bug3">🐞</div>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Hi, I'm Shreya 👋</h1>
        <h2 className="typing">QA Automation Engineer</h2>
        <p>QA + Automation + Manual + Data Validation</p>

        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/shreya-kashyap-681558248"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>

          <a href="/resume.pdf" download>
            <button>Download Resume</button>
          </a>

          <a href="mailto:shreyakashyap475@gmail.com">
            <button>Email Me</button>
          </a>
        </div>
      </section>

      {/* SUMMARY */}
      <section>
        <h2>🧾 Summary</h2>
        <div className="card">
          <p>
            • 1+ years of experience in manual and automation testing and data validation of web-based applications.<br/>
            • Strong in functional, regression, smoke, and integration testing.<br/>
            • Skilled in Selenium (Java + TestNG), Appium (Java & Python), and Playwright (Python).<br/>
            • Hands-on experience in UI automation, data validation, and defect tracking using Jira.<br/>
            • Experience in exploratory, compatibility, and ad hoc testing.<br/>
            • Good understanding of SDLC & STLC with strong analytical and problem-solving skills.<br/>
            • Focused on collaboration, timely delivery, and continuous QA improvement.
          </p>
        </div>
      </section>

      {/* 🌍 DOMAIN BADGES */}
      <section>
        <h2>🌍 Domains Worked On</h2>
        <div className="badges">
          <span>Healthcare</span>
          <span>E-Commerce</span>
          <span>CRM</span>
          <span>Gaming</span>
          <span>Fleet Management</span>
          <span>E-Learning</span>
          <span>Community Apps</span>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section>
        <h2>🛠️ Technical Skills</h2>
        <div className="grid">
          <div className="card"><b>Languages:</b><br/>Java, Python</div>
          <div className="card"><b>Frameworks:</b><br/>TestNG, Playwright</div>
          <div className="card"><b>Automation Stack:</b><br/>Selenium, Playwright, Appium, PyTest, POM, Maven, Jira</div>
          <div className="card"><b>Tools:</b><br/>Postman, Appium</div>
          <div className="card"><b>IDEs:</b><br/>Eclipse, IntelliJ, VS Code</div>
          <div className="card"><b>OS:</b><br/>Windows, MacOS, Android, iOS</div>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>🎓 Professional Qualifications</h2>
        <div className="grid">
          <div className="card">
            <b>B.Sc.</b><br/>
            Holy Cross Women’s College, Ambikapur, Chhattisgarh (2021)
          </div>
          <div className="card">
            <b>12th</b><br/>
            Holy Cross Convent School, Ambikapur, Chhattisgarh (2018)
          </div>
          <div className="card">
            <b>10th</b><br/>
            Holy Cross Convent School, Ambikapur, Chhattisgarh (2016)
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section>
        <h2>🚀 Project Experience</h2>
        <div className="grid">

          <div className="card">
            <h3>Punjabi Samaj (Community Mobile App)</h3>
            <p>
              End-to-end testing of community mobile app covering directories,
              events, announcements, and navigation modules. Automated key flows
              using Appium + Python and performed cross-device validation.
            </p>
          </div>

          <div className="card">
            <h3>Medipilot 360 (Healthcare)</h3>
            <p>
              Tested Doctor & Receptionist apps including appointment booking,
              patient management, dashboards, and prescription workflows.
              Executed regression automation using Playwright with Python.
            </p>
          </div>

          <div className="card">
            <h3>Sharp Quiz (E-Learning)</h3>
            <p>
              Automated quiz flows, scoring validation, and user progress tracking
              using Selenium with Java. Performed data validation and defect tracking in Jira.
            </p>
          </div>

          <div className="card">
            <h3>Housie Mania (Gaming)</h3>
            <p>
              Validated gameplay logic, random number sync, and multiplayer flows.
              Conducted regression automation and data validation testing.
            </p>
          </div>

          <div className="card">
            <h3>E-Commerce Web Application</h3>
            <p>
              Tested order placement, cancellation, and delivery updates across
              website and application. Performed UI-DB validation and regression automation.
            </p>
          </div>

          <div className="card">
            <h3>Vehicle & Fleet Management</h3>
            <p>
              Tested trip logs, service records, and fleet workflows. Conducted
              manual + automated regression testing and database validations.
            </p>
          </div>

          <div className="card">
            <h3>We Build Trades (CRM)</h3>
            <p>
              Performed functional and integration testing for CRM panels
              covering sales, marketing, and operations workflows with Jira defect tracking.
            </p>
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