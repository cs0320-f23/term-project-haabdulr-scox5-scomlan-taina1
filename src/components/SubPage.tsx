import React, { useState } from "react";
import Accordion from "./accordion.tsx";
import "../styles/mentalHealth.scss";
import "../styles/subPage.scss";

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

  /**
   * collapses or uncollapses the notes
   */
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  /**
   * scrolls down to the notes section
   */
  const handleScrollToNotes = () => {
    setIsCollapsed(false);
    const showNotesSection = document.getElementById("show-notes-button");

    if (showNotesSection) {
      showNotesSection.scrollIntoView({ behavior: "smooth" });
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
            <button
              className="sidebar-button"
              onClick={() => console.log("Download")}
            >
              📥 Download <br></br> Notes
            </button>
          </div>
        </div>
        {/* Dropdown button */}
        <button
          onClick={toggleCollapse}
          className="sidebar-button"
          id="show-notes-button"
        >
          Show Notes
        </button>

        {/* Collapsible div */}
        {!isCollapsed && (
          <div className="PDF-container">
            <div className="PDF-header">
              <h1 id="title-PDF">My Notes</h1>
              <h2 id="subtitle-PDF">{title}</h2>
            </div>
            <div className="PDF">
              {/* Example form using the provided formData and handleInputChange */}
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
