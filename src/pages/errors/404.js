import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/navbar/footer';

import NavBar from '../../components/navbar/navbar';
import "./errors.css";

export default function NotFound() {
  const navigate = useNavigate();


  return (
    <div className='error-404'>
      <NavBar />

      <div  >


        <img src='https://res.cloudinary.com/dfnuodjiw/image/upload/v1657661898/photos/user/Pngtree_404_error_interface_scene_art_4043819_hunsn9.png'
          height={'400px'} width={'300px'} alt="" className='image-404' onClick={e => navigate("/")} />
      </div>
    <Footer/>
    </div>
  )
}
