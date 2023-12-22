import React, { useState } from "react";
import Accordion from "./accordion.tsx";
import "../styles/mentalHealth.scss";
import "../styles/subPage.scss";
import { savePDF } from "./PDFFiller.tsx"; // Import your PDF handling functions

const SubPage = ({ accordionData, title, initialFormData, formQuestions }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleScrollToNotes = () => {
    setIsCollapsed(false);
    const showNotesSection = document.getElementById("show-notes-button");

    if (showNotesSection) {
      showNotesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Pass the form data and your PDF link to savePDF function
      await savePDF(formData, '/path/to/your/fillable.pdf');
      alert("PDF saved successfully!");
    } catch (error) {
      console.error("Error saving PDF:", error);
      alert("Failed to save PDF.");
    }
  };

  return (
    <div className="sub-page-container">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="main-content">
        <div className="data-and-sidebar">
          <Accordion sections={accordionData} />
          <div className="sidebar">
            <button className="sidebar-button" onClick={handleScrollToNotes}>
              📝 Take Notes
            </button>
            <button className="sidebar-button" onClick={() => window.print()}>
              🖨️ Print <br></br>Entire Page
            </button>
            <button className="sidebar-button" onClick={handleSubmit}>
              📥 Save <br></br> Notes
            </button>
          </div>
        </div>
        <button
          onClick={toggleCollapse}
          className="sidebar-button"
          id="show-notes-button"
        >
          Show Notes
        </button>
        {!isCollapsed && (
          <div className="PDF-container">
            <div className="PDF-header">
              <h1 id="title-PDF">My Notes</h1>
              <h2 id="subtitle-PDF">{title}</h2>
            </div>
            <div className="PDF">
              <div className="PDF-content">
                <form className="PDF-form">
                  {formQuestions.map((question, index) => (
                    <label key={index} className="label-form">
                      <b
                        style={
                          question.heading && {
                            color: "#10c0df",
                            fontSize: "1.5em",
                          }
                        }
                      >
                        {question.label}
                      </b>
                      <i>{question.subheading}</i>
                      {!question.heading && (
                        <textarea
                          className="text-form"
                          name={question.name}
                          value={formData[question.name]}
                          onChange={handleInputChange}
                        />
                      )}
                    </label>
                  ))}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubPage;

