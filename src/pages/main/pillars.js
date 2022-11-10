import React from 'react';
import { Card } from 'react-bootstrap';
import { BiDonateHeart, BiHealth, BiSpa } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
export default function Pillars() {
  const navigate=useNavigate();
  
  return (
    <div className='pillars'>
      <div style={{color:"darkblue",fontSize:"32px",fontWeight:"bolder", margin: "2rem 2rem 2rem",textDecoration:"underline"}}>
            How we do it
        </div>
        <Card className='card-pillars' onClick={e=>navigate("/education")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758419/student_girls_wziylf.jpg" />
        <div style={{margin:"auto"}}><BiHealth color="darkblue" size={40}/></div>
        <div style={{color:"darkblue",fontSize:"22px",margin:'auto',fontWeight:"900"}}>
            Education Support
            </div>
        </Card>
        <Card className='card-pillars' onClick={e=>navigate("/social_economic")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758277/old_disadvantaged_b9mrnb.jpg" />
        <div style={{margin:"auto"}}><BiSpa color="teal" size={40}/></div>
        <div style={{color:"teal",fontSize:"22px",margin:'auto',fontWeight:"bold"}}>
            Social Economic</div>
        </Card>
        <Card className='card-pillars' onClick={e=>navigate("/health")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666758696/washing_stand_soor1n.jpg" />
        <div style={{margin:"auto"}}><BiDonateHeart color="green" size={40}/></div>
        <div style={{color:"green",fontSize:"22px",margin:'auto',fontWeight:"bold"}}>
            Health Support</div>
        </Card>
    </div>
  )
}
