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
          <p>Here, you will find many resources</p>
        </div>
        <div id="right">
          <h2>After You're Released</h2>
          <p>Here, you will find many resources</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
