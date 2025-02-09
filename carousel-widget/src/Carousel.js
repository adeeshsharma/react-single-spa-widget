import React, { useState } from 'react';
import './carousel.css';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5_pFXLFlros8tRZoOHLVZVI30KJEU411IQ&s',
  'https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58TIBqANB1PTufYIQTmZJBVAj4oN1KLVJFjM-0IOWVYMof6KNE6zhRjrUgHnH5CaWnwo&usqp=CAU',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='carousel-container'>
      <button onClick={prevSlide} className='carousel-btn left'>
        ❮
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className='carousel-image'
      />
      <button onClick={nextSlide} className='carousel-btn right'>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
