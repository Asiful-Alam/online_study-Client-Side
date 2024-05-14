// Modal.js

const Modal = ({ assignmentId, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const givenMark = event.target.mark.value;
    const feedback = event.target.feedback.value;
    onSubmit(assignmentId, givenMark, feedback);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <input
          type="number"
          name="mark"
          placeholder="Enter marks"
          required
        />
        <input
          type="text"
          name="feedback"
          placeholder="Enter feedback"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Modal;
