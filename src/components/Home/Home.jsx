// import React from 'react';
import './style.css'; // Import your CSS file here

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <img src="logo.svg" alt="Logo" className="logo" />
        </div>
        <div className="nav-container">
          <nav>
            <a href="/check-essay">Doing Test</a>
            <a href="/topic">Topic</a>
            <a href="/sample">Samples</a>
          </nav>
        </div>
        <div className="icons">
          <button className="icon-button">&#36;</button>
          <button className="icon-button">&#128100;</button>
          <div className="search-container">
            <input type="text" id="search-bar" placeholder="Search..." />
            <button className="search-button">&#128269;</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Check IELTS Essay with AI</h2>
            <p>Improve your IELTS writing score with the newest technology</p>
            <button className="check-essay-button">Check My Essay</button>
          </div>
          <div className="hero-img">
            <video autoPlay muted loop>
              <source src="landing-writing.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="check-section">
          <div className="check-image">
            <img src="img/check-essay.png" alt="Check Essay Image" />
          </div>
          <div className="check-content">
            <h2>Check your IELTS essay in seconds</h2>
            <p>
              You can get instant feedback on your IELTS writing tasks with AI-powered suggestions and detailed
              explanations. Our system checks your grammar, vocabulary, and coherence, giving you a comprehensive analysis
              of your strengths and weaknesses. With AI, you can quickly identify areas for improvement and get the
              guidance you need to achieve your target band score.
            </p>
          </div>
        </section>

        <section className="why-section">
          <div className="reasons-container">
            <div className="laptop-image">
              <img src="img/Laptop.jpg" alt="Laptop Image" />
            </div>
            <div className="reasons">
              <h2>Why should I use AuIES now?</h2>
              <div className="reason">
                <img src="img/1.png" alt="Free to reach" />
                <h3>It&quot;s free to reach</h3>
                <p>You can use it for free, but we recommend using paid plans for the best support</p>
              </div>
              <div className="reason">
                <img src="img/2.png" alt="Transparent grading" />
                <h3>It has transparent grading</h3>
                <p>Our system uses new AI technologies to score IELTS in the most transparent and clear way</p>
              </div>
              <div className="reason">
                <img src="img/3.png" alt="Improve your IELTS writing grammar" />
                <h3>It can improve your IELTS writing grammar</h3>
                <p>
                  You will have many new ideas to make writing easier. Not only that, you can also see your own mistakes to
                  improve yourself with our specialized suggestion system for each user.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-to-section">
          <h2>How can I use it?</h2>
          <div className="steps">
            <div className="step">
              <span>1</span>
              <p>Type or paste your essay</p>
            </div>
            <div className="step">
              <span>2</span>
              <p>Press the &quot;Check Essay&quot; button</p>
            </div>
            <div className="step">
              <span>3</span>
              <p>Get a band score instantly</p>
            </div>
          </div>
        </section>
        <script src="script.js"></script>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <img src="logo.svg" alt="Logo" className="footer-logo" />
            <p>Automated IELTS Scoring</p>
            <p>&copy; 2024 Writing9. All rights reserved</p>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;