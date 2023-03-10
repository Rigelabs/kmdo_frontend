import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/navbar/footer';
import NavBar from '../../components/navbar/navbar';

export default function Unathorized() {
    const navigate=useNavigate();

  return (
    <div>
        <NavBar/>
        <div onClick={e=>navigate("/membership")} style={{display:'flex',flexDirection:'row',justifyContent:'center',maxWidth:"80vw"}}>
            <img src="https://cdn.dribbble.com/users/2950423/screenshots/7191173/media/5e53ea26e1458bdb27fe61bea68516cd.png?compress=1&resize=500x600" alt=""/>
        </div>
        <Footer/>
    </div>
  )
}
