import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-left">

          <h3>Hi, I'm</h3>

          <h1>
            KALAKADA <br />
            <span>SIVA KUMAR</span>
          </h1>

          <h2>
            Full Stack Web Developer | MCA Student
          </h2>

          <p>
            I build responsive, modern and user-friendly
            web applications using modern technologies.
          </p>

          <div className="hero-buttons">

            <a
  href="/resume/Siva_Resume.pdf"
  download
  className="btn primary-btn"
>
  Download Resume
</a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="mailto:sivakumar29093@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>

          </div>

        </div>

        {/* PROFILE */}

        <div className="hero-right">

          <img
            src="/images/profile.png"
            alt="profile"
            className="profile-img"
          />

        </div>

      </section>

      {/* ABOUT + SKILLS */}

      <section className="about-skills-section">

        <div className="about-skills-container">

          {/* ABOUT */}

          <div className="about-box" id="about">

            <h2>
              👤 ABOUT ME
            </h2>

            <p>
              I'm an MCA student with a strong foundation in full stack web
              development. I love turning ideas into real-world web
              applications. I enjoy working with modern technologies and
              continuously learning new skills to improve my craft.
            </p>

            <button className="read-btn">
              Read More →
            </button>

          </div>

          {/* SKILLS */}

          <div className="skills-box" id="skills">

            <h2>
              &lt;/&gt; SKILLS
            </h2>

            <div className="skills-grid-new">

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt=""
                />
                <p>HTML</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt=""
                />
                <p>CSS</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt=""
                />
                <p>JavaScript</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                  alt=""
                />
                <p>PHP</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                  alt=""
                />
                <p>Python</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
                  alt=""
                />
                <p>MySQL</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt=""
                />
                <p>GitHub</p>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt=""
                />
                <p>Bootstrap</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

<section className="education-section" id="education">

  <h1 className="section-title">
    EDUCATION
  </h1>

  <div className="education-container">

    {/* CLASS X */}

    <div className="education-card">

      <img
        src="/images/ap.png"
        alt="AP School"
        className="education-logo"
      />

      <h2>Class X</h2>

      <h3>
        AP Model School, Andhra Pradesh
      </h3>

      <p>GPA: 9.2</p>

    </div>

    {/* CLASS XII */}

    <div className="education-card">

      <img
        src="/images/ap.png"
        alt="AP School"
        className="education-logo"
      />

      <h2>Class XII (BIPC)</h2>

      <h3>
        AP Model School, Andhra Pradesh
      </h3>

      <p>Percentage: 87%</p>

    </div>

    {/* BCA */}

    <div className="education-card">

      <img
        src="/images/bnu.png"
        alt="BNU"
        className="education-logo"
      />

      <h2>
        Bachelor of Computer Applications (BCA)
      </h2>

      <h3>
        Patel Institute of Science and Management,
        Bengaluru North University
      </h3>

      <p>
        Sep 2022 – May 2025
      </p>

      <p>
        GPA: 8.77
      </p>

    </div>

    {/* MCA */}

    <div className="education-card">

      <img
        src="/images/gitam.png"
        alt="GITAM"
        className="education-logo"
      />

      <h2>
        Master of Computer Applications (MCA) – Pursuing
      </h2>

      <h3>
        GITAM University, Visakhapatnam
      </h3>

      <p>
        Year: 2025 – Present
      </p>

    </div>

  </div>

</section>

      {/* PROJECTS */}

      <section className="projects-section" id="projects">

        <h1 className="section-title">PROJECTS</h1>

        <div className="projects-grid">

          <div className="project-card">

            <img
              src="/images/ecommerce.png"
              alt="ecommerce"
            />

            <h2>Ecommerce Website</h2>

            <p>
              Full-featured ecommerce website with shopping cart
              and responsive UI.
            </p>

          </div>

          <div className="project-card">

            <img
              src="/images/voting.png"
              alt="voting"
            />

            <h2>Online Voting System</h2>

            <p>
              Secure online voting system for transparent
              elections and result management.
            </p>

          </div>

          <div className="project-card">

            <img
              src="/images/resume.png"
              alt="resume"
            />

            <h2>AI Resume Analyzer</h2>

            <p>
              AI powered resume analyzer that provides smart
              insights and suggestions.
            </p>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}

      <section className="cert-section" id="certifications">

        <h1 className="section-title">
          CERTIFICATIONS
        </h1>

        <div className="cert-grid">

          <div className="cert-card">
            <img src="/images/cert1.png" alt="cert1" />
          </div>

          <div className="cert-card">
            <img src="/images/cert2.png" alt="cert2" />
          </div>

          <div className="cert-card">
            <img src="/images/cert3.png" alt="cert3" />
          </div>

          <div className="cert-card">
            <img src="/images/cert4.png" alt="cert4" />
          </div>

        </div>

      </section>

      {/* CONTACT */}

<section className="contact-section" id="contact">

  <h1 className="section-title">
    CONTACT ME
  </h1>

  <div className="contact-container">

    <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/"
  className="contact-form"
>
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />

      <h2>Contact Form</h2>
      <div className="contact-details-box">

  <p>
    📞 +91 9347130879
  </p>

  <p>
    📧 sivakumar29093@gmail.com
  </p>

</div>

      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email ID"
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Your Subject"
        required
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        required
      ></textarea>

      <button type="submit">
        Send Message
      </button>

    </form>

  </div>

</section>  

      {/* FOOTER */}

      <footer>

        <div className="marquee">

          <div className="marquee-content">

            © 2026 KALAKADA SIVA KUMAR | All Rights Reserved
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;