import React, { useState, useEffect } from "react";
import { FaRegCircle, FaCircle } from "react-icons/fa";

const QuoteSlider = () => {
  const slides = [
    {
      id: 1,
      quote:
        "“There is more treasure in books than in all the pirate’s loot on Treasure Island.”",
      author: "-Walt Disney",
    },
    {
      id: 2,
      quote: "“The only limit to our realization of tomorrow is our doubts of today.”",
      author: "-Franklin D. Roosevelt",
    },
    {
      id: 3,
      quote: "“Do what you can, with what you have, where you are.”",
      author: "-Theodore Roosevelt",
    },
    {
      id: 4,
      quote: "“Education is the most powerful weapon you can use to change the world.”",
      author: "-Nelson Mandela",
    },
  ];

  const [activeId, setActiveId] = useState(slides[0].id);
  const [transitioning, setTransitioning] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handleNextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveId((prevId) => {
        const currentIndex = slides.findIndex((slide) => slide.id === prevId);
        const nextIndex = (currentIndex + 1) % slides.length;
        return slides[nextIndex].id;
      });
      setTransitioning(false);
    }, 300); 
  };

  const handleSlideChange = (id) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveId(id);
      setTransitioning(false);
    }, 300); 
  };

  return (
    <div className="card bg-custom-gradient mt-10 text-white w-96">
      <div className="card-body">
        <h2 className="card-title">Today’s Quote</h2>
        <div
          className={`transition-opacity duration-300 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <p>{slides.find((slide) => slide.id === activeId)?.quote}</p>
          <h2 className="text-right mt-4">
            {slides.find((slide) => slide.id === activeId)?.author}
          </h2>
        </div>
        <div className="card-actions flex  mt-4 gap-2">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(slide.id)}
              className="text-lg"
            >
              {slide.id === activeId ? (
                <FaCircle className="text-white" />
              ) : (
                <FaRegCircle className="text-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
