import React from 'react';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoYoutube, IoMailUnread } from "react-icons/io5";
import "./footer.css";
export default function Footer() {
    return (
        <div className='footer'>


            <div className='footer'>
                <div className='footer-top-row'>

                    <div className='contact_us'>
                        <h6 className='social_div_title'>Karinga Massive Development Organisation.</h6>
                        <h6 style={{ fontWeight: 'bold' }}>Karinga, Kigumo, Murang'a, Kenya</h6>
                        <h6 style={{ fontWeight: 'bold' }}>P.O Box 109-10218 Kangari, Kenya.</h6>
                        <h6 style={{ fontWeight: 'bold' }}>+254722109477 | +254721900520</h6>
                        <h6 style={{ fontWeight: 'bold' }}>secretariat@karingamassive.org</h6>
                    </div>

                    <div>

                        <div className='social_div_title'>Get in Touch</div>
                        <div className='social_div_'>

                            <div className='social_div_row'>

                                <a style={{ fontWeight: 'bold', marginLeft: "1rem", color: 'darkblue' }} rel="noreferrer" target="_blank" href='https://www.facebook.com/profile.php?id=61557044985031'>
                                    <IoLogoFacebook color="darkblue" size={35} />
                                </a>
                            </div>

                            <div className='social_div_row'>
                                <a style={{ fontWeight: 'bold', fontSize: "14px", marginLeft: "1rem", color: 'green' }} rel="noreferrer" target="_blank" href='https://wa.me/254721900520'>

                                    <IoLogoWhatsapp color="green" size={35} />
                                </a>
                            </div>
                            <div className='social_div_row'>

                                <a style={{ fontWeight: 'bold', marginLeft: "1rem", color: 'black' }} href="mailto:secretariat@karingamassive.org">
                                    <IoMailUnread color="black" size={35} />
                                </a>
                            </div>
                            <div className='social_div_row'>

                                <a style={{ fontWeight: 'bold', marginLeft: "1rem", color: 'black' }} rel="noreferrer" target="_blank" href="https://www.youtube.com/@KaringaMassive">
                                    <IoLogoYoutube color="white" size={35} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{color:'whitesmoke',textAlign:'center',fontSize:'20px',margin:"10px"}}>
                    Karinga Massive Development Organisation &#169; is a registered NGO in Kenya(2020). All rights reserved.
                </div>

                <div style={{fontWeight:"bold",textAlign:'center',fontSize:'20px',margin:"10px"}}>
                    Website designed and maintained by  <a rel="noreferrer" target="_blank" href="https://rigelabs.com" style={{ marginLeft: "5px", textDecoration: 'none', color: 'darkblue' }}>Rigelabs Ltd</a>.
                </div>
            </div>
        </div>
    )
}
