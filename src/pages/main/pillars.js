import React from 'react';
import { Card } from 'react-bootstrap';
import { BiDonateHeart, BiHealth, BiSpa } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
export default function Pillars() {
  const navigate=useNavigate();
  
  return (
    <>
    
      <div style={{color:"darkblue",fontSize:"32px",fontWeight:"bolder", margin: "2rem 0px 0px 2rem"}}>
            How we do it
        </div>
        <hr/>
        <div className='pillars'>
        <Card className='card-pillars' onClick={e=>navigate("/education")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1668237868/enhanced_school_jip9tg.jpg" />
        <div style={{margin:"auto"}}><BiHealth color="darkblue" size={40}/></div>
        <div style={{color:"darkblue",fontSize:"22px",margin:'auto',fontWeight:"900"}}>
            Education Support
            </div>
        </Card>
        <Card className='card-pillars' onClick={e=>navigate("/social_economic")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1668239886/enhanced_social_e7q2ue.jpg" />
        <div style={{margin:"auto"}}><BiSpa color="teal" size={40}/></div>
        <div style={{color:"teal",fontSize:"22px",margin:'auto',fontWeight:"bold"}}>
            Social Economic</div>
        </Card>
        <Card className='card-pillars' onClick={e=>navigate("/health")}>
        <Card.Img variant="top" height="200px"  className="card-image" border src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1668241463/enhanced_health_s6djvg.jpg" />
        <div style={{margin:"auto"}}><BiDonateHeart color="green" size={40}/></div>
        <div style={{color:"green",fontSize:"22px",margin:'auto',fontWeight:"bold"}}>
            Health Support</div>
        </Card>
    </div>
    </>
  )
}
