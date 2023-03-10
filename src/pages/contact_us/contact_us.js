import React from 'react';
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Footer from '../../components/navbar/footer';
import NavBar from '../../components/navbar/navbar';
import "./contactus.css";

export default function ContactUs() {
    return (
        <div>
            <NavBar />
            <div className='main'>
                <h3 style={{ fontWeight: 700, textDecoration: "underline",textAlign:'center' }}>Get in Touch</h3>
              <div className='middle'>
                
                <div style={{ margin: "1rem" }}>
                    <div >Karinga Massive Development Organisation.</div>
                    <div>Postal Address:</div>

                    <div style={{ marginLeft: "1rem" }}>P.O Box 109-10218 Kangari, Kenya</div>
                    <div>Tel:</div>
                    <div style={{ marginLeft: "1rem" }}>+254722109477 / +254721900520</div>
                    <div>Email:</div>
                    <div style={{ marginLeft: "1rem" }}><a href="mailto:secretariat@karingamassive.org">secretariat@karingamassive.org</a></div>
                </div>
                <div className='top-social'>
                    <div className='social_div'>
                        <AiOutlineTwitter color='blue' size={35} />
                        <div style={{ color: 'blue' }}>#karinga_massive</div>
                    </div>
                    <div className='social_div'>
                        <AiOutlineYoutube color='red' size={35} />
                        <div style={{ color: 'red' }}>karinga_massive</div>
                    </div>
                    <div className='social_div'>
                        <BsFacebook color='darkblue' size={35} />
                        <div style={{ color: 'darkblue' }}>karinga_massive</div>
                    </div>
                </div>
                </div>
                <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6493.252649793634!2d36.87958790474705!3d-0.7738393499571997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828c15d1f46d9dd%3A0x49fe9d2b96f3c91d!2sKaringa!5e1!3m2!1sen!2ske!4v1665922790499!5m2!1sen!2ske" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                </div>
            </div>
            <Footer/>
        </div>
    )
}
