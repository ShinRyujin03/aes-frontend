// Modal.js
import './modal.css'; // Create a CSS file for modal styling

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        {/* {data && score.sentiment_obj.score && score.sentiment_obj.score.length > 0 ? (
        <h2>Your Score Results: {score.sentiment_obj.score}</h2>): (
            <p>No Score found.</p>
          )} */}
        <h2>Grammar Check Results</h2>
        <div className="modal-content">
          {data && data.spellcheck.corrections && data.spellcheck.corrections.length > 0 ? (
            data.spellcheck.corrections.map(correction => (
              <div key={correction.id} className="correction">
                <h3>{correction.shortDescription}</h3>
                <p>{correction.longDescription}</p>
                <p><strong>Mistake:</strong> {correction.mistakeText}</p>
                <p><strong>Correction:</strong> {correction.correctionText}</p>
              </div>
            ))
          ) : (
            <p>No corrections found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;