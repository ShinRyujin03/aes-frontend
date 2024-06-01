import React, { useRef, useState } from 'react';
import './style.css';
import { createEssayGrammar, createEssayScore } from "../../ApiRequests/actions/essayActions";
import { useDispatch, useSelector } from "react-redux";
import Modal from './Modal'; // Import the Modal component

const EssayScoring = () => {
    const essayTextareaRef = useRef(null);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [responseData, setResponseData] = useState(null);
    // const [responseScore, setResponseScore] = useState(null);
    const { listing } = useSelector((state) => state.essayGrammarCreate); // Get the listing from the store
    // const { score } = useSelector((state) => state.essayScoreCreate); // Get the listing from the store

    const handleCheckGrammar = async () => {
        const essayText = essayTextareaRef.current?.value;
        if (essayText) {
            try {
                await dispatch(createEssayGrammar({ text: essayText, topic: 'topic' }));
                setResponseData(listing); // Set the response data in the state
                setModalOpen(true); // Open the modal
                console.log("Grammar checked for essay:", essayText);
            } catch (error) {
                console.error("Error checking grammar:", error);
            }
        } else {
            console.log("Essay textarea is not available");
        }
    };
    // const handleCheckScore = async () => {
    //     const essayText = essayTextareaRef.current?.value;
    //     if (essayText) {
    //         try {
    //             await dispatch(createEssayScore({ text: essayText, topic: 'topic' }));
    //             console.log(score)
    //             setResponseScore(score); // Set the response data in the state
    //             setModalOpen(true); // Open the modal
    //             console.log("Score checked for essay:", essayText);
    //         } catch (error) {
    //             console.error("Error checking score:", error);
    //         }
    //     } else {
    //         console.log("Essay textarea is not available");
    //     }
    // };
    // const handleCheckEssay = () => {
    // handleCheckGrammar();
    // handleCheckScore();
    // };
    return (
        <div>
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
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={responseData} />
        </div>
    );
}

export default EssayScoring;