import { useRef, useState, useEffect } from 'react';
import './style.css';
import { createEssayGrammar, createEssayScore } from "../../ApiRequests/actions/essayActions";
import { useDispatch, useSelector } from "react-redux";
import Modal from './Modal'; // Import the Modal component

const EssayScoring = () => {
    const essayTextareaRef = useRef(null);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const { listing, loading: loadingGrammar, error: errorGrammar, success: successGrammar } = useSelector((state) => state.essayGrammarCreate);
    const { scoreGeneral, loading: loadingScore, error: errorScore, success: successScore } = useSelector((state) => state.essayScoreCreate);

    const handleCheckGrammar = async () => {
        const essayText = essayTextareaRef.current?.value;
        if (essayText) {
            try {
                await Promise.all([
                    dispatch(createEssayGrammar({ text: essayText, topic: 'topic' })),
                    dispatch(createEssayScore({ text: essayText, topic: 'topic' }))
                ]);
                console.log("Grammar and score checked for essay:", essayText);
            } catch (error) {
                console.error("Error checking grammar or scoring essay:", error);
            }
        } else {
            console.log("Essay textarea is not available");
        }
    };

    useEffect(() => {
        if (successGrammar && successScore) {
            console.log(scoreGeneral.sentiment_obj.score); // Now scoreGeneral should be updated
            setModalOpen(true); // Open the modal
        }
    }, [successGrammar, successScore, scoreGeneral]);

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
                        <button className="check-essay-button" onClick={handleCheckGrammar} disabled={loadingGrammar || loadingScore}>
                            {loadingGrammar || loadingScore ? 'Checking...' : 'Check essay'}
                        </button>
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
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                data={listing}
                score={scoreGeneral}
            />
        </div>
    );
}

export default EssayScoring;
