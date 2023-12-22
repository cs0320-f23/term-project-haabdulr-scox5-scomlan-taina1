import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import Tour from 'reactour'
import "./Navigation.tsx"; 
import "./feedbackBox.tsx"; 


const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(true);



  const carouselData = [
    {
      title: "Your Healthcare Inside + Out",
      description: "Navigating your way through Rhode Island’s healthcare system",
    },

    {
    title: "Your Healthcare Inside + Out",
    description: "Navigating your way through Rhode Island’s healthcare system",
  },


  {
    title: "Your Healthcare Inside + Out",
    description: "Navigating your way through Rhode Island’s healthcare system",
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

  // Automatically rotate the carousel every 5 seconds (5000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeSlide, handleNextSlide]);

  const steps = [
    {
      selector: '#title', 
      content: 'This an explanation as to what the importance of the website.',
    },
    {
      selector: '.centered-navigation',
      content: "Use the navigation bar to go through the pages based on what you are looking for. Right Now you're on the home page and you know this because it's bolded and black.",
    },
    {
      selector: '.auth-buttons', 
      content: "For first time users, sign up here. For returning users, login in.",
    },
    {
      selector: '#feedback-box',
      content: 'Let us know what you think about the site.',
    },
  ];


  return (
    <div id="home">
      <div className="carousel-container">
        <div id="title">
          <h1 id="app-title">{carouselData[activeSlide].title}</h1>
          <p id="title-description">{carouselData[activeSlide].description}</p>
        </div>
        <div className="carousel-controls">
          {/* <button onClick={handlePrevSlide}>&#x2329;</button>
          <button onClick={handleNextSlide}>&#x232A;</button> */}
        </div>
      </div>
      <div id="sub-items-home">
        <div id="why">
          <h2>Why?</h2>
          <div id="answer">

            Your health is important, but finding your way through the medical system isn't easy. Finding medical services can be expensive, getting insurance can be intimidating, finding doctors can be frustrating, and getting a check-up might be the last thing on your mind. This guide will give you the tools to overcome these barriers, take advantage of the resources available in Rhode Island, and get the care that you deserve. Staying healthy is the foundation to building a successful return to your community.
     
          </div>
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
