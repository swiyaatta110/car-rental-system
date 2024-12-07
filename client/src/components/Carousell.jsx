import React, { useState, useEffect } from "react";
import img2 from '../images/imgc10.jpg';
import img3 from '../images/imgc9.jpg';
import video1 from '../images/carousel-video(7).mp4';

export const Carousell = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      type: 'video',
      src: video1,
    },
    {
      type: 'image', 
      src: img2,
      alt: 'Image 2'
    },
    {
      type: 'image',
      src: img3, 
      alt: 'Image 3'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === items.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => 
      current === items.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? items.length - 1 : current - 1
    );
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.type === 'video' ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
      >
        &#10095;
      </button>
    </div>
  );
};
