import React, { useState } from "react";
import "../styles/subPage.scss";
import "../styles/feedbackBox.scss";

const Feedback = () => {
  return (
    <div id="feedback-box">
      <h2>Feedback</h2>
      <form id="feedback-form" action="/submitfeedback" method="post">
        {/* TODO: implement feedback endpoint */}
        <textarea
          id="input-text"
          name="feedback"
          rows={4}
          cols={50}
          placeholder="Enter your feedback here..."
        ></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Feedback;
