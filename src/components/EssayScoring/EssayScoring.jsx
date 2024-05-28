// import React from 'react';
import { useRef } from 'react';
import './style.css'; // Import your CSS file here
import { createEssayScore } from "../../ApiRequests/actions/essayActions";
import { useDispatch } from "react-redux";



const EssayScoring= () => {
    const essayTextareaRef = useRef(null);
    // const dispatch = useDispatch();
    const dispatch = useDispatch()

    const handleCheckGrammar = () => {
        const essayText = essayTextareaRef.current?.value;
        if (essayText) {
            dispatch(createEssayScore({text: essayText, topic: 'topic'}));
            console.log("Grammar checked for essay:", essayText);
        } else {
            console.log("Essay textarea is not available");
        }
    };

    return (
        <div>
            <header>
                <div>
                    <img src="logo.png" alt="Logo" className="logo" />
                </div>
                <div className="nav-container">
                    <nav>
                        <a href="#">Doing Test</a>
                        <a href="#">Topic</a>
                        <a href="#">Samples</a>
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
                <div className="container">
                    <div className="left-column">
                        <div className="input-box">
                            <input type="text" placeholder="Enter or paste question" />
                            <button>Get a random question</button>
                        </div>
                        <textarea ref={essayTextareaRef} placeholder="Enter or paste essay"></textarea>
                        <div className="upload-container">
                            <input type="file" id="fileInput" accept=".txt,.doc,.docx" hidden />
                            <label htmlFor="fileInput" className="upload-button">Upload File</label>
                        </div>
                        <div className="word-count">0 paragraphs 0 words</div>
                    </div>
                    <div className="right-column">
                        <button className="check-essay-button" onClick={handleCheckGrammar}>Check essay</button>
                        <button className="timer" id="timerButton">Time: 40 min</button>
                        <div className="criteria-section">
                            <h2>COHERENCE AND COHESION</h2>
                            <ul>
                                <li>Logical structure</li>
                                <li>Accurate linking words</li>
                                <li>Variety in linking words</li>
                            </ul>
                            <h2>LEXICAL RESOURCE</h2>
                            <ul>
                                <li>Varied vocabulary</li>
                                <li>Accurate spelling & word formation</li>
                            </ul>
                            <h2>GRAMMATICAL RANGE</h2>
                            <ul>
                                <li>Mix of complex & simple sentences</li>
                                <li>Clear and correct grammar</li>
                            </ul>
                            <h2>TASK ACHIEVEMENT</h2>
                            <ul>
                                <li>Complete response</li>
                                <li>Appropriate word count</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <img src="logo.png" alt="Logo" className="footer-logo" />
                        <p>Automated IELTS Scoring</p>
                        <p>&copy; 2024 Writing9. All rights reserved.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Product</h3>
                        <ul>
                            <li><a href="#">How does it work?</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Scholarship</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>IELTS Task 2 Topics</h3>
                        <ul>
                            <li><a href="#">Latest Topics (May & June)</a></li>
                            <li><a href="#">Opinion topics</a></li>
                            <li><a href="#">Discussion topics</a></li>
                            <li><a href="#">Problem and solution topics</a></li>
                            <li><a href="#">Advantages and disadvantages topics</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                        <h3>IELTS Task 2 Samples</h3>
                        <ul>
                            <li><a href="#">Latest Samples</a></li>
                            <li><a href="#">Samples Band 6</a></li>
                            <li><a href="#">Samples Band 6.5</a></li>
                            <li><a href="#">Samples Band 7</a></li>
                            <li><a href="#">Samples Band 7.5</a></li>
                            <li><a href="#">Samples Band 8</a></li>
                            <li><a href="#">Samples Band 8.5</a></li>
                            <li><a href="#">Samples Band 9</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>DMCA Policy</h3>
                        <ul>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default EssayScoring;
