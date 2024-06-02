// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import your CSS file here

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Check IELTS Essay with AI</h2>
            <p>Improve your IELTS writing score with the newest technology</p>
          <button className="check-essay-button" onClick={() => navigate("/check-essay")}>
              Check My Essay
          </button>          
          </div>
          <div className="hero-img">
            <video autoPlay muted loop>
              <source src="landing-writing.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="check-section">
          <div className="check-image">
            <img src="./check-essay.png" alt="Check Essay Image" />
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
              <img src="./Laptop.jpg" alt="Laptop Image" />
            </div>
            <div className="reasons">
              <h2>Why should I use AuIES now?</h2>
              <div className="reason">
                <img src="./1.png" alt="Free to reach" />
                <h3>It&quot;s free to reach</h3>
                <p>You can use it for free, but we recommend using paid plans for the best support</p>
              </div>
              <div className="reason">
                <img src="./2.png" alt="Transparent grading" />
                <h3>It has transparent grading</h3>
                <p>Our system uses new AI technologies to score IELTS in the most transparent and clear way</p>
              </div>
              <div className="reason">
                <img src="./3.png" alt="Improve your IELTS writing grammar" />
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


    </div>
  );
};

export default Home;