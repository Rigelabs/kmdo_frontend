import React from 'react';
import { Card } from 'react-bootstrap';
import "./main.css";

export default function Banner() {
  return (
    <Card className='card-banner'>
          <div className="overlay">
            <div className='overlay-text'>
            The future of every community lies in capturing the passion, imagination
            and resources of its people.
            </div>
            
          </div>
    </Card>
  )
}
