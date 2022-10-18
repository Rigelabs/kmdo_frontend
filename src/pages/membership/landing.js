import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/navbar/footer';
import NavBar from '../../components/navbar/navbar';
import "./membership.css";

export default function Landing() {
    const navigate= useNavigate();
    
    return (
        <>
            <NavBar />
            <div className='landing'>
                <div className='landing-right'>
                    <div className='landing-right-header'>Join  450+ members</div>
                    <div style={{ margin: "2rem" }}>
                        <div style={{ color: "black",fontSize:"22px", textDecoration: 'underline', fontWeight: 700 }}>Membership Benefits :</div>
                        <div >
                            <ul className='list'>
                                <li>Support events and causes in your community</li>
                                <li>Get overwheming support from  members</li>
                                <li>Access and track you contributions anywhere</li>

                            </ul>
                        </div>
                    </div>
                    <div className='member-button'>
                        <Button  size="lg"  onClick={e=>navigate("/auth")}> Get Started</Button>
                    </div>
                </div>
                <div className='landing-left'>

                    <img className='corousel' height="100%" alt='img'
                        src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1666097193/website%20files/cytonn-photography-n95VMLxqM2I-unsplash_fhchho.jpg" />

                </div>
            </div>
            <Footer />
        </>
    )
}
