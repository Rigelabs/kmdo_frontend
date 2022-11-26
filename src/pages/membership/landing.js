import React from 'react';
import NavBar from '../../components/navbar/navbar';
import "./membership.css";
import SignUp from './signup';

export default function Landing() {
   
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
                    
                </div>
                <div className='landing-left'>

                    <div className='corousel'>
                        <SignUp/>
                    </div>

                </div>
            </div>
           
        </>
    )
}
