import React from "react";
import SubPage from "../SubPage.tsx";

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

/**
 * the labels for each question (if a label is not a heading, it will be followd by an input box. if it is a heading, it will appear bigger and not followed by an input box)
 * the "name" field is useful for accessig the corresponding field in the formData dictionary
 */
const formQuestions = [
  {
    label: "NAME OF PRIMARY CARE DOCTOR:",
    name: "primaryCareDoctor",
    heading: true,
  },
  { label: "Phone Number:", name: "phoneNumber" },
  { label: "Hours:", name: "hours" },
  {
    label: "Hospital/Facility/Practice Name:",
    name: "hospitalName",
  },
  {
    label: "Address:",
    name: "hospitalAddress",
  },
  {
    label: "BEFORE MY APPOINTMENT:",
    heading: true,
    subheading:
      "(Use this to prepare for each appointment you have with your primary care doctor.)",
    name: "beforeAppointment",
  },
  {
    label: "Date of appointment:",
    name: "appointmentDate",
  },
  {
    label: "Location:",
    name: "appointmentLocation",
  },
  {
    label: "How am I getting there?",
    name: "transportation",
  },
  {
    label: "What do I want to talk about with my primary care doctor?",
    subheading:
      "(You can ask your primary care doctor about anything. This may include new symptoms, challenges getting medications or transportation, an unsafe situation, or anything which concerns your health.)",
    name: "topicsToDiscuss",
  },
  {
    label: "DURING MY APPOINTMENT:",
    heading: true,
    subheading:
      "(Here, you can write down answers to your questions and other notes from your conversation with your doctor.)",
    name: "duringAppointment",
  },
];

const initialFormData = {
  primaryCareDoctor: "",
  phoneNumber: "",
  hours: "",
  beforeAppointment: "",
  hospitalName: "",
  hospitalAddress: "",
  appointmentDate: "",
  appointmentLocation: "",
  topicsToDiscuss: "",
  transportation: "",
  duringAppointment: "",
};

const PrimaryCare = () => {
  return (
    <SubPage
      title="Primary Care"
      accordionData={accordionData}
      initialFormData={initialFormData}
      formQuestions={formQuestions}
    />
  );
};

export default PrimaryCare;
