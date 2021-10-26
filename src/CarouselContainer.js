import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselContainer.css";


import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={4000}>
        <img
          className="d"
          src={image1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img 
          className="d" 
          src={image2}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;