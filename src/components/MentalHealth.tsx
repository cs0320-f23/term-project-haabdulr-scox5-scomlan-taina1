import React from "react";
import SubPage from "./SubPage.tsx";

const formQuestions = [
  { label: "What’s on my mind right now?", name: "onMind" },
  { label: "What are my goals right now?", name: "goals" },
  { label: "What will help me reach these goals?", name: "help" },
  {
    label:
      "Person who can help me (write the name of a therapist, counselor, social or case worker, etc.):",
    name: "person",
  },
];

const accordionData = [
  {
    title: "WHAT is mental health care?",
    content: (
      <>
        Mental health care is taking care of your feelings, thoughts, and
        actions to make sure that you’re mentally & emotionally well. You might
        also hear the term “behavioral health care,” which is similar to mental
        health care but also looks how your actions & behaviors can impact your
        mental well-being.
        <br />
        <br />
        Mental health care includes a wide range of support services and
        treatment programs, like peer support groups, where people who have
        similar experiences listen and talk to each other, counseling,
        medication, and residential treatment programs (temporary homes where
        people can get 24/7 care and support).
      </>
    ),
  },
  {
    title: "WHY is mental health care important?",
    content: (
      <>
        Mental (and behavioral) health care can be helpful for anyone struggling
        with mental health or substance use. This could be things like{" "}
        <b>
          feeling sad or angry for a long time, finding it hard to do everyday
          activities, having difficulty making and keeping relationships, or
          other things that affect your life and well-being.
        </b>{" "}
        You can benefit from mental health care even if you don’t have a
        specific name or diagnosis for what you’re going through.
        <br />
        <br />
        Finding support, even if you don’t feel bad now, is important because if
        you feel worse in the future, you will have a place to go to that knows
        you and your situation. Mental health providers can help you overcome
        obstacles and live a healthy life.
        <b>
          It is extremely important that you find somewhere that makes you feel
          comfortable and supported. You should never have to go somewhere that
          makes you feel worse.
        </b>
      </>
    ),
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

const initialFormData = {
  onMind: "",
  help: "",
  goals: "",
  person: "",
};

const MentalHealth = () => {
  return (
    <SubPage
      title="Mental Health"
      accordionData={accordionData}
      initialFormData={initialFormData}
      formQuestions={formQuestions}
    />
  );
};

export default MentalHealth;
