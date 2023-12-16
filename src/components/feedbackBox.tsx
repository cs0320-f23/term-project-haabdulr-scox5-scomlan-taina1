import React, { useState } from "react";
import "../styles/feedbackBox.scss";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
    // Reset error state when user starts typing
    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input before submitting
    if (feedback.trim() === "") {
      // Show error if textarea is empty
      setIsError(true);
    } else {
      // TODO: Implement feedback submission logic
      console.log("Submitting feedback:", feedback);
      // Reset feedback state after submission
      setFeedback("");
    }
  };

  return (
    <div id="feedback-box">
      <h2>Feedback</h2>
      <form id="feedback-form" onSubmit={handleSubmit}>
        {/* TODO: implement feedback endpoint */}
        <textarea
          id="input-text"
          name="feedback"
          rows={4}
          cols={50}
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={handleInputChange}
          className={isError ? "error" : ""}
        ></textarea>
        {isError && <p className="error-message">Feedback cannot be empty</p>}
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Feedback;
