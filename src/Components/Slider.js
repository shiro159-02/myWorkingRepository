import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

export default function Slider() {
  return (
    <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
          <img
           className="d-block w-100"
           src={img1}
           alt="First slider"
          />
          <Carousel.Caption>
            <h3>Hi, it is my first slider!</h3>
            <p>hi hi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
           className="d-block w-100"
           src={img2}
           alt="First slider"
          />
          <Carousel.Caption>
            <h3>Hi, it is my first slider!</h3>
            <p>hi hi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
           className="d-block w-100"
           src={img3}
           alt="First slider"
          />
          <Carousel.Caption>
            <h3>Hi, it is my first slider!</h3>
            <p>hi hi</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}
