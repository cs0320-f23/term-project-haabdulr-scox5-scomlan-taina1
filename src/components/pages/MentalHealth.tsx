import React from "react";
import SubPage from "../SubPage.tsx";

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
    title: "WHEN should I seek mental health care?",
    content: (
      <>
        If you know you’re struggling with your mental health or substance use,{" "}
        <b>
          get connected to care as soon as you can, even if you aren’t feeling
          bad.
        </b>{" "}
        <span style={{ color: "red" }}>
          Seek help immediately if you or someone you know is in extreme
          distress or in danger of hurting themselves or others.
        </span>
      </>
    ),
  },
  {
    title: "WHERE can I go for mental health care",
    content: (
      <>
        <b>Talk to your primary care doctor </b>about seeking mental health care
        services. If you feel uncomfortable talking to your primary care doctor,
        or you don’t have a primary care doctor, some helpful resources include:
        <ul>
          <li>
            <b>Mental (behavioral) health centers</b>, also called “one-stop
            shops” that provide group support, care management, and counseling.
            They also provide primary care doctors, pharmacies, and classes,
            like life skills training and art/music therapy. For more
            information about where to find behavioral health care, see page
            ___.
          </li>
          <li>
            <b>
              Call the crisis hotline at{" "}
              <span style={{ color: "red" }}>1-800-283-TALK</span> (8255)
            </b>{" "}
            if you or someone you know is in danger of hurting themselves or
            others, or you just want someone to talk to.
          </li>
          <li>
            <b>Emergency rooms</b> at hospitals can also provide behavioral
            health care in emergency situations.{" "}
            <b style={{ color: "red" }}>Call 911 if you are in an emergency.</b>
          </li>
        </ul>
      </>
    ),
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
