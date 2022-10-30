import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Pillars() {
  const navigate=useNavigate();
  
  return (
    <div className='pillars'>
     
        <Card className='card-pillars' onClick={e=>navigate("/education")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758419/student_girls_wziylf.jpg" />
        <div style={{color:"black",fontSize:"22px",margin:'auto',fontWeight:"bold"}}>
            Education Support</div>
        </Card>
        <Card className='card-pillars' onClick={e=>navigate("/social_economic")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758277/old_disadvantaged_b9mrnb.jpg" />
        <div style={{color:"black",fontSize:"22px",margin:'auto',fontWeight:"bold"}}>
            Social Economic</div>
        </Card>
        <Card className='card-pillars' onClick={e=>navigate("/health")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758696/washing_stand_soor1n.jpg" />
        <div className="card-title">
            Health Support</div>
        </Card>
    </div>
  )
}
