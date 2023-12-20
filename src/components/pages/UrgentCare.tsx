import React from "react";
import SubPage from "../SubPage.tsx";


const accordionData = [
  {
    title: "WHY is urgent care important?",
    content: (
      <>
    Urgent care clinics, or walk-in clinics, can help treat injuries or illnesses that need to be taken care of as soon 
    as possible but aren’t severe enough for you to visit an emergency room.  Urgent care clinics are like a mix between
     primary care doctors and emergency rooms, and they are especially helpful if you don’t have a primary care doctor to
      visit. These clinics often have shorter wait times and the environment is often friendlier than emergency rooms.
        <br />
      </>
    ),
  },

  {
    title: "WHAT is urgent care?",
    content: (
      <>
      Some ways that urgent care clinics are different from primary care doctors:
        <ul>
          <li>Longer hours (many are open 24/7)</li>
          <li>More locations</li>
          <li>You may not need to make an appointment (walk-in accepted)</li>
          <li>They will not have access to your medical history</li>

        </ul>
      </>
    ),
  },


];

const formQuestions = [
    { label: "What is the name of your urgent care clinic?", name: "clinic" },
    { label: "Phone Number:", name: "phoneNumber" },

  ];
  
  const initialFormData = {
    clinic: "",
    phoneNumber: "",
 
  };



  const UrgentCare = () => {
    return (
      <SubPage
        title="Urgent Care"
        accordionData={accordionData}
        initialFormData={initialFormData}
        formQuestions={formQuestions}
      />
    );
  };
  
  export default UrgentCare;
