import React from "react";
import SubPage from "../SubPage.tsx";
// import InteractiveImage from "../InteractiveImage.tsx";
import ImageOverlay from "../ImageOverlay.tsx";
import primaryOffice from "../../images/PrimaryCareOffice.png";

/**
 * the highlighted areas on the image in the section titled "What does a primary care visit look like?"
 */
const textAreas = [
  {
    text: "At each visit, your PCP will check in with you about your medications. Be open with them about any issues you've been having, so you can adjust accordingly.",
    position: { x: 90, y: 44 },
  },
  {
    text: "Your PCP will track things like height, weight, blood pressure, and vision over time. This way, they'll know when something is off.",
    position: { x: 22, y: 30 },
  },
  {
    text: "Your PCP will do a physical exam. Tell them if anything makes you uncomfortable.",
    position: { x: 53, y: 45 },
  },
  {
    text: "The most important part of your PCP visit is talking to your doctor. They'll ask you many questions, but always make sure to ask your questions as well.",
    position: { x: 78, y: 80 },
  },
  // Add more text areas as needed
];

const overlay = <ImageOverlay imageUrl={primaryOffice} textAreas={textAreas} />;
/**
 * To change the dropdown menu information, edit here.
 * the "content" field can be in HTML or it can just be a string
 */
const accordionData = [
  {
    title: "WHY is primary care important?",
    content: (
      <>
        <b>
          Your primary care doctor (PCP) should be your go-to person in the
          health care system.
        </b>{" "}
        Because they het to know you well over time, they can provide and refer
        the best possible care for you.
        <br></br> <br></br>
        <b>
          Primary care doctors also provide important{" "}
          <span style={{ textDecoration: "underline" }}>
            preventative care services
          </span>
        </b>
        , like disease screening tests and immunizations which can help you stay
        healthy to avoid health problems later on.
      </>
    ),
  },
  {
    title: "WHO needs a primary care doctor?",
    content: (
      <b>
        Everyone should have a primary care doctor, even if they are not sick or
        injured.
      </b>
    ),
  },
  {
    title: "WHAT is primary care?",
    content: (
      <>
        <b>
          A primary care doctor takes care of all of your basic health needs and
          refers you to other doctors and services when needed.
        </b>{" "}
        A good primary care doctor pays attention to your situation and
        surroundings so they can take care of your whole self, not just your
        medical conditions.
        <br />
        <br />
        Primary care doctors are important because they take care of you
        regularly over a long period of time. This way, they can get to know you
        and your health really well.
        <br />
        <br />
        <b>Primary care services: </b>some things your primary care doctor can
        do for you include:{" "}
        <ul>
          <li>Wellness visits and physicals</li>
          <li>Non-urgent illness, injury, or health concerns</li>
          <li>
            Preventative care services, like:
            <ul>
              <li>Immunizations (for example, the yearly flu shot)</li>
              <li>Diagnostic and screening tests</li>
            </ul>
          </li>
        </ul>
        <br />
        *** Primary care services are covered by Medicaid, so you don’t have to
        pay for them. Primary care doctors can be different kinds of doctors.
        For example, they may be called family medicine doctors or internal
        medicine doctors. Pediatricians are primary care doctors for children
        and some OB/GYN doctors can be primary care doctors for women.
      </>
    ),
  },
  {
    title: "WHERE can I find a primary care doctor?",
    content: (
      <ul>
        <li>
          You can find your primary care doctor by{" "}
          <b>
            calling the “Primary Care Physician” on your United or Neighborhood
            insurance card.
          </b>{" "}
          If you cannot find it or need a new primary care doctor,{" "}
          <b>
            call your insurance company who can help you find one in your area
          </b>{" "}
          (phone numbers on pg. 5)
        </li>
        <li>
          <b>
            Community heath centers (pg. 27) may also have primary care doctors.
          </b>
        </li>
      </ul>
    ),
  },
  {
    title: "WHEN should I see my primary care doctor?",
    content: (
      <ul>
        <li>
          <b>
            You should have a wellness visit, also known as a check-up, every
            6-12 months.
          </b>{" "}
          Make sure to talk about this with your doctor.
          <li>
            Also,{" "}
            <b>
              make an appointment to see your primary care doctor if you have a
              health concern
            </b>{" "}
            and would like to see a doctor.
          </li>
        </li>
      </ul>
    ),
  },
  {
    title: "TIPS & TRICKS",

    content: (
      <ul>
        <li>
          In your cell phone, planner, or anywhere else that you keep important
          information:
          <ul>
            <li>
              <b>Save your primary care doctor’s office number.</b> You should
              be able to quickly and easily call to make appointments If you
              have any health concern.
            </li>{" "}
            <li>
              <b>
                Write down the date, time, and location of your next
                appointment.
              </b>
              These can be made really far In the future and can be easy to
              forget. If you will miss an appointment, let the doctor’s office
              know as soon as possible, or at least 24 hours before the
              appointment.
            </li>
          </ul>
        </li>
        <li>
          <b>
            It may take time (several weeks or months) to get an appointment
            with your primary care doctor since they can be very busy.
          </b>{" "}
          However, once you are a regular patient, you should be able to get
          appointments much more quickly.
        </li>
        <li>
          <b>
            It is important to find a primary care doctor that you feel
            comfortable with.
          </b>{" "}
          If you are seeing someone you don’t like, make sure to try others
          until you find the right fit.
          <ul>
            <li>
              A good primary care doctor should:
              <ul>
                <li>Answer your questions clearly and honestly</li>{" "}
                <li>Treat you with respect</li>
                <li>Take time to understand you and your situation</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Before you see your doctor</b>, it can be helpful to think of
          things you want to talk about with them. There is room to write these
          down on the next page.
        </li>
      </ul>
    ),
  },
  {
    title: "WHAT does a primary care visit look like?",
    content: (
      <>
        <b>Click</b> the colored areas on the image to learn more. Click on an
        area again to hide the text.
        {overlay}
      </>
    ),
  },
];

/**
 * the labels for each question (if a label is not a heading, it will be followd by an input box. if it is a heading, it will appear bigger and not followed by an input box)
 * the "name" field is useful for accessig the corresponding field in the formData dictionary
 */
const formQuestions = [
  { label: "PRIMARY CARE DOCTOR INFORMATION:", heading: true },
  {
    label: "Name of primary care doctor:",
    name: "primaryCareDoctor",
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
