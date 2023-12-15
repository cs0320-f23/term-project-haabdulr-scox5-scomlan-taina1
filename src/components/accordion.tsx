import React, { useState } from "react";

const accordionStyles = {
  maxWidth: "600px",
  minWidth: "80%",
  margin: "auto",
  backgroundColor: "white",
  color: "#white",
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "10px",
  color: "black",
  borderBottom: "2px solid gold",
  fontWeight: "bold",
};

const accordionContentStyles = {
  padding: "10px",
  background: "white",
  color: "black",
};

const AccordionSection = ({ section, isActiveSection, toggleSection }) => {
  return (
    <div>
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>
          <span style={{ color: "#F00" }}>{section.title.split(" ")[0]}</span>
          {section.title.substring(section.title.split(" ")[0].length)}
        </div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && (
        <div style={accordionContentStyles}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleSection = (index) => {
    const currentIndex = activeIndices.indexOf(index);
    let newIndices;

    if (currentIndex === -1) {
      newIndices = [...activeIndices, index];
    } else {
      newIndices = activeIndices.filter((i) => i !== index);
    }

    setActiveIndices(newIndices);
  };

  return (
    <div style={accordionStyles}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={activeIndices.includes(index)}
          toggleSection={() => toggleSection(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
