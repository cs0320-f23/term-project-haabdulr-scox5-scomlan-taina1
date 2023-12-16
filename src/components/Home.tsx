import React, { useState } from "react";
import "../styles/home.scss";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselData = [
    {
      title: "Your Healthcare Inside + Out",
      description: "Answering your health questions post-incarceration",
    },
    {
      title: "Slide 2 Title",
      description: "Slide 2 Description",
    },
    {
      title: "Slide 3 Title",
      description: "Slide 3 Description",
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

  return (
    <div id="home">
      <div className="carousel-container">
        <div id="title">
          <h1 id="app-title">{carouselData[activeSlide].title}</h1>
          <p id="title-description">{carouselData[activeSlide].description}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrevSlide}>&#x27A5;</button>
          <button onClick={handleNextSlide}>&#x27A4;</button>
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
    </div>
  );
};

export default Home;
