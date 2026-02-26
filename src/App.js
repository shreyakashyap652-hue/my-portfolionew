import "./App.css";
import { useEffect } from "react";

function App() {

  // ✨ Reveal + Stagger Animations (Fixed + Skill Bars)
useEffect(() => {
  const reveals = document.querySelectorAll(".reveal");
  const cards = document.querySelectorAll(".reveal-card");
  const fills = document.querySelectorAll(".progress-fill");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    // 🔹 Section reveal
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });

    // 🔹 Staggered card animation
    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - 100) {
        setTimeout(() => {
          card.classList.add("active");
        }, index * 120);
      } else {
        card.classList.remove("active");
      }
    });

    // 🔹 Skill Progress Bar Animation 📊
    fills.forEach((fill) => {
      const fillTop = fill.getBoundingClientRect().top;

      if (fillTop < windowHeight - 50) {
        fill.style.width = fill.dataset.width;
      } else {
        fill.style.width = "0%";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  // Trigger once after load delay (but still scroll-based feel)
  setTimeout(revealOnScroll, 200);

  return () => window.removeEventListener("scroll", revealOnScroll);
}, []);
  // ✨ Active Navbar Highlight on Scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.dataset.section === current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🌸 Top Elegant Navbar */}
      <nav className="top-navbar">
        <div className="nav-logo">Shreya</div>

        <div className="nav-links">
          <a href="#summary" data-section="summary">Summary</a>
          <a href="#skills" data-section="skills">Skills</a>
          <a href="#projects" data-section="projects">Projects</a>
          <a href="#education" data-section="education">Education</a>
          <a href="#contact" data-section="contact">Contact</a>
        </div>
      </nav>

      {/* Main Page Content */}
      <div className="container">
        {/* 🐞 Flying Ladybugs */}
        <div className="ladybug bug1">🐞</div>
        <div className="ladybug bug2">🐞</div>
        <div className="ladybug bug3">🐞</div>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="avatar">👩‍💻</div>

          <h1>
            Hi, I'm <span className="name">Shreya</span> 👋
          </h1>

          <h2 className="typing">QA Automation Engineer</h2>

          <p className="subtitle">
            QA · Automation · Manual · Data Validation
          </p>

          <div className="buttons">
            <a href="https://www.linkedin.com/in/shreya-kashyap-681558248" target="_blank" rel="noreferrer">
              <button className="btn primary">LinkedIn</button>
            </a>

            <a href="/resume.pdf" download>
              <button className="btn secondary">Download Resume</button>
            </a>

            <a href="mailto:shreyakashyap475@gmail.com">
              <button className="btn secondary">Email Me</button>
            </a>
          </div>
        </section>

        {/* SUMMARY */}
        <section id="summary" className="reveal">
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

        {/* TECHNICAL SKILLS */}
<section id="skills" className="reveal">
  <h2>🛠️ Technical Skills</h2>

  {/* 🔹 Skill Cards */}
  <div className="grid">
    <div className="card reveal-card"><b>Languages:</b><br/>Java, Python</div>
    <div className="card reveal-card"><b>Frameworks:</b><br/>TestNG, Playwright</div>
    <div className="card reveal-card"><b>Automation Stack:</b><br/>Selenium, Playwright, Appium, PyTest, POM, Maven, Jira</div>
    <div className="card reveal-card"><b>Tools:</b><br/>Postman, Appium</div>
    <div className="card reveal-card"><b>IDEs:</b><br/>Eclipse, IntelliJ, VS Code</div>
    <div className="card reveal-card"><b>OS:</b><br/>Windows, MacOS, Android, iOS</div>
  </div>

  {/* 🔹 Animated Skill Bars */}
  <div className="skills-bars">
    <div className="skill reveal-card">
      <span>Selenium</span>
      <div className="progress">
        <div className="progress-fill" data-width="90%"></div>
      </div>
    </div>

    <div className="skill reveal-card">
      <span>Playwright</span>
      <div className="progress">
        <div className="progress-fill" data-width="85%"></div>
      </div>
    </div>

    <div className="skill reveal-card">
      <span>Appium</span>
      <div className="progress">
        <div className="progress-fill" data-width="80%"></div>
      </div>
    </div>

    <div className="skill reveal-card">
      <span>Java</span>
      <div className="progress">
        <div className="progress-fill" data-width="85%"></div>
      </div>
    </div>

    <div className="skill reveal-card">
      <span>Python</span>
      <div className="progress">
        <div className="progress-fill" data-width="80%"></div>
      </div>
    </div>

    <div className="skill reveal-card">
      <span>API Testing (Postman)</span>
      <div className="progress">
        <div className="progress-fill" data-width="75%"></div>
      </div>
    </div>
  </div>
</section>
        {/* EDUCATION */}
        <section id="education" className="reveal">
          <h2>🎓 Professional Qualifications</h2>
          <div className="grid">
            <div className="card reveal-card">
              <b>B.Sc.</b><br/>
              Holy Cross Women’s College, Ambikapur, Chhattisgarh (2021)
            </div>
            <div className="card reveal-card">
              <b>12th</b><br/>
              Holy Cross Convent School, Ambikapur, Chhattisgarh (2018)
            </div>
            <div className="card reveal-card">
              <b>10th</b><br/>
              Holy Cross Convent School, Ambikapur, Chhattisgarh (2016)
            </div>
          </div>
        </section>

        {/* PROJECT EXPERIENCE */}
        <section id="projects" className="reveal">
          <h2>🚀 Project Experience</h2>
          <div className="grid">
            <div className="card reveal-card">
              <h3>Punjabi Samaj (Community Mobile App)</h3>
              <p>End-to-end testing of community mobile app with Appium + Python automation.</p>
            </div>

            <div className="card reveal-card">
              <h3>Medipilot 360 (Healthcare)</h3>
              <p>Automation regression testing using Playwright with Python.</p>
            </div>

            <div className="card reveal-card">
              <h3>Sharp Quiz (E-Learning)</h3>
              <p>Selenium Java automation for quiz flows and scoring validation.</p>
            </div>
            <div className="card reveal-card">
      <h3>Housie Mania (Gaming)</h3>
      <p>
        Validated gameplay logic, random number sync, and multiplayer flows.
        Conducted regression automation and data validation testing.
      </p>
    </div>

    <div className="card reveal-card">
      <h3>E-Commerce Web Application</h3>
      <p>
        Tested order placement, cancellation, and delivery updates across
        website and application. Performed UI-DB validation and regression automation.
      </p>
    </div>

    <div className="card reveal-card">
      <h3>Vehicle & Fleet Management</h3>
      <p>
        Tested trip logs, service records, and fleet workflows. Conducted
        manual + automated regression testing and database validations.
      </p>
    </div>

    <div className="card reveal-card">
      <h3>We Build Trades (CRM)</h3>
      <p>
        Performed functional and integration testing for CRM panels
        covering sales, marketing, and operations workflows with Jira defect tracking.
      </p>
    </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact reveal">
          <h2>📫 Contact Me</h2>
          <p>📞 +91 9981155633</p>
          <p>📧 shreyakashyap475@gmail.com</p>
        </section>
      </div>
    </>
  );
}

export default App;