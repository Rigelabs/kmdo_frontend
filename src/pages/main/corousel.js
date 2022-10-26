import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./main.css";

export default function Corousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const device_height =window.innerHeight;
   
    return (
        <div className='carousel'>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        
        <Carousel.Item>
          <img
            className="carousel-image"
            
            src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758419/student_girls_wziylf.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Girls</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="carousel-image"
            src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758277/old_disadvantaged_b9mrnb.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Old Drive</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758050/students_zy8fk9.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Students</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758556/disadvantaged_ukrsqw.jpg"
            alt="Fourth slide"
          />
  
          <Carousel.Caption>
            <h3>Disadvantaged</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="carousel-image"
            src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758756/baby_view_hrqstk.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Babies</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
}
