import React, { useState } from "react";
import Accordion from "../accordion.tsx";
import "../styles/mentalHealth.scss";
import "../styles/subPage.scss";
import html2pdf from "html2pdf.js";

const accordionData = [
  {
    title: "WHY is primary care important?",
    content: `
    Your primary care doctor (PCP) should be your go-to person in the health care system. Because they het to know you well over time, they can provide and refer the best possible care for you.

    Primary care doctors also provide important preventative care services, like disease screening tests and immunizations which can help you stay healthy to avoid health problems later on.    `,
  },
  {
    title: "WHO needs a primary care doctor?",
    content: `
    Everyone should have a primary care doctor, even if they are not sick or injured.
    `,
  },
  {
    title: "WHAT is primary care?",
    content: `
    A primary care doctor takes care of all of your basic health needs and refers you to other doctors and services when needed. A good primary care doctor pays attention to your situation and surroundings so they can take care of your whole self, not just your medical conditions.

    Primary care doctors are important because they take care of you regularly over a long period of time. This way, they can get to know you and your health really well. 
    
    Primary care services: some things your primary care doctor can do for you include:
    Wellness visits and physicals
    Non-urgent illness, injury, or health concerns
    Preventative care services, like:
    Immunizations (for example, the yearly flu shot)
    Diagnostic and screening tests 
    *** Primary care services are covered by Medicaid, so you don’t have to pay for them.
    Primary care doctors can be different kinds of doctors. For example, they may be called family medicine doctors or internal medicine doctors. Pediatricians are primary care doctors for children and some OB/GYN doctors can be primary care doctors for women.
    `,
  },
  {
    title: "WHERE can I find a primary care doctor?",
    content: `
    You can find your primary care doctor by calling the “Primary Care Physician” on your United or Neighborhood insurance card. If you cannot find it or need a new primary care doctor, call your insurance company who can help you find one in your area (phone numbers on pg. 5)
    Community heath centers (pg. 27) may also have primary care doctors.
    
    
    `,
  },
  {
    title: "WHEN should I see my primary care doctor?",
    content: `
    You should have a wellness visit, also known as a check-up, every 6-12 months. Make sure to talk about this with your doctor.
    Also, make an appointment to see your primary care doctor if you have a health concern and would like to see a doctor.
    
    
    `,
  },
  {
    title: "TIPS & TRICKS",
    content: `
    In your cell phone, planner, or anywhere else that you keep important information:
    Save your primary care doctor’s office number. You should be able to quickly and easily call to make appointments If you have any health concern.
    Write down the date, time, and location of your next appointment. These can be made really far In the future and can be easy to forget. If you will miss an appointment, let the doctor’s office know as soon as possible, or at least 24 hours before the appointment. 
    It may take time (several weeks or months) to get an appointment with your primary care doctor since they can be very busy. However, once you are a regular patient, you should be able to get appointments much more quickly. 
    It is important to find a primary care doctor that you feel comfortable with. If you are seeing someone you don’t like, make sure to try others until you find the right fit.
    A good primary care doctor should:
    Answer your questions clearly and honestly
    Treat you with respect
    Take time to understand you and your situation
    Before you see your doctor, it can be helpful to think of things you want to talk about with them. There is room to write these down on the next page.
    `,
  },
  {
    title: "WHAT does a primary care visit look like?",
    content: `
      Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.

    `,
  },
];

const MentalHealth = () => {
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

  /**
   * for downloading the PDF
   */
  const handleDownloadPDF = () => {
    const content = document.getElementById("formContent");

    if (content) {
      html2pdf(content);
    }
  };

  /**
   * the initial state of the form/PDF's data. the format is field name: "value"
   */
  const [formData, setFormData] = useState({
    onMind: "",
    help: "",
    goals: "",
    person: "",
  });

  /**
   * keeps the input box content updated as the user types
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * I want to create a subPage component so I can easily change page structure
   * without having to edit every single page.
   *
   * The subpage component will take in the following props:
   *
   * each page should have its own useState dictionary formData, and its own handleInputChange
   * function
   *
   * each page should have its own accordionData
   *
   * each page has a unique title
   *
   * each page has unique form questions.
   *  form questions are in labels
   *  each label has a unique: question, name, and value.
   *  name="goals" and value=formData.goals
   */

  return (
    <div className="sub-page-container">
      <header>
        <h1>Mental Health</h1>
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
        <div className="PDF">
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
              {/* PDF content goes here */}
              <div className="PDF-header">
                <h1 id="title-PDF">My Notes</h1>
                <h2 id="subtitle-PDF">Mental Health & Substance Use</h2>
              </div>
              <div className="PDF-content">
                <form className="PDF-form">
                  <label className="mental-label">
                    <b>What’s on my mind right now?</b>
                    <textarea
                      className="text-mental"
                      name="onMind"
                      value={formData.onMind}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="mental-label">
                    <b>What are my goals right now?</b>
                    <textarea
                      className="text-mental"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="mental-label">
                    <b>What will help me reach these goals?</b>
                    <textarea
                      className="text-mental"
                      name="help"
                      value={formData.help}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="mental-label">
                    <b>
                      Person who can help me (write the name of a therapist,
                      counselor, social or case worker, etc.):
                    </b>
                    <textarea
                      name="person"
                      value={formData.person}
                      onChange={handleInputChange}
                    />
                  </label>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
