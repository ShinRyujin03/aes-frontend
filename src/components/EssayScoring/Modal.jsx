import './modal.css'; // Create a CSS file for modal styling

const Modal = ({ isOpen, onClose, data, score }) => {
  if (!isOpen) {
    return null;
  }

  console.log('Score object:', score);

  // Round the score if it exists
  const roundedScore = score && score.sentiment_obj && typeof score.sentiment_obj.score === 'number'
    ? Math.round(score.sentiment_obj.score * 2) / 2
    : null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        {roundedScore !== null ? (
          <h2>Your Score Results: {roundedScore}</h2>
        ) : (
          <p>No Score found.</p>
        )}
        <h2>Grammar Check Results</h2>
        <div className="modal-content">
          {data && data.spellcheck && data.spellcheck.corrections && data.spellcheck.corrections.length > 0 ? (
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
