import React, { useState } from "react";
import "../styles/home.scss";
import Tour from 'reactour'

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(true);



  const carouselData = [
    {
      title: "Your Healthcare Inside + Out",
      description: "Answering your health questions post-incarceration",
    },

    {
    title: "WHY?",
    description: (
      <div>
        <p className="blue-text">Your health is important,</p>
        <p className="rest-of-paragraph">
          but finding your way through the medical system isn't easy. Finding
          medical services can be expensive, getting insurance can be intimidating,
          finding doctors can be frustrating, and getting a check-up might be the
          last thing on your mind. This guide will give you the tools to overcome
          these barriers, take advantage of the resources available in Rhode
          Island, and get the care that you deserve. Staying healthy is the
          foundation to building a successful return to your community.
        </p>
      </div>
    ),
  },


  {
    title: "WHEN?",
    description: 
    
    (
      <div>
        <p className="first-text">Taking care of your health is long-term, but here are steps to take,</p>
        <p className="red-text">
         RIGHT NOW.
        </p>
      </div>
    ),
  },

];

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };

  const openTour = () => {
    setIsTourOpen(true);
  };

  const closeTour = () => {
    setIsTourOpen(false);
  };

  const steps = [
    {
      selector: '#title', // Adjust the selector as per your requirement
      content: 'This is the title section',
    },
    {
      selector: '#left', // Adjust the selector as per your requirement
      content: 'This is the left section',
    },
    {
      selector: '#right', // Adjust the selector as per your requirement
      content: 'This is the right section',
    },
    // Add more steps as needed
  ];



  return (
    <div id="home">
      <div className="carousel-container">
        <div id="title">
          <h1 id="app-title">{carouselData[activeSlide].title}</h1>
          <p id="title-description">{carouselData[activeSlide].description}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrevSlide}>&#x2329;</button>
          <button onClick={handleNextSlide}>&#x232A;</button>
        </div>
      </div>
      <div id="sub-items-home">
        <div id="left">
          <h2>Before You're Released</h2>
          <ol>
            <li>
              <b>Sign up for Medicaid:</b> Everyone being released is eligible
              and can sign up. Fill out a slip to meet your discharge planner --
              they can help you fill out the forms.
            </li>
            <li>
              <b>Get your medical records:</b> Fill out a slip to Pauline
              Marcussen, Administrator of Health Care Services, and ask for your
              full medical history.
            </li>
            <li>
              <b>Get your medication:</b> You should get 10 days of any
              medications you’re taking when released. You may be able to ask
              for a prescription from a doctor on the inside that you can fill
              after you are released.
            </li>
          </ol>
        </div>
        <div id="right">
          <h2>After You're Released</h2>
          <ol>
            <li>
              <b>
                Sign up for Medicaid (if you didn’t already before release):
              </b>{" "}
              Everyone after release is eligible. Find out how to apply on the
              Medicaid page.
            </li>
            <li>
              <b>Get your medical records:</b> You can also get your medical
              records once you’ve been released. Find out how on the{" "}
              <a href="/MedicalRecords">Medical Records</a> page.
            </li>
            <li>
              <b>Get your medication:</b> To get more of your medication, you’ll
              need to see a doctor. Find out how to get medication after you’re
              released on the <a href="/MedicalRecords">Medical Records</a>{" "}
              page.
            </li>
          </ol>
        </div>
      </div>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </div>
  );
};

export default Home;
