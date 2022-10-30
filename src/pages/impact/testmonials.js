import React from 'react';
import { Card } from 'react-bootstrap';
import "./impact.css";

export default function Testmonials() {
    return (
        <div className='testmonial'>
            <Card className='testmonial-card'>
                <div className='avatar'>
                    <img className='avatar' src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1667102166/website%20files/avatarblue_s5jnru.png' alt="avatar" />
                </div>
                <div className='tesmonial-content'>
                    Testimonials are best when they’re direct and to the point. Be sure to use words and phrases that your potential customers can relate to, and bring everything back to the clients’ hopes and fears: why they came to you, exactly what you can do for them,
                    and dispel anything that might be holding them back.
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: "green" }}>
                        <div>full name</div>  <div>{new Date().toDateString()}</div>
                    </div>
                </div>

            </Card>
            <Card className='testmonial-card'>
                <div className='avatar'>
                    <img className='avatar' src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1667102166/website%20files/avatarblue_s5jnru.png' alt="avatar" />
                </div>
                <div className='tesmonial-content'>
                    Testimonials are best when they’re direct and to the point. Be sure to use words and phrases that your potential customers can relate to, and bring everything back to the clients’ hopes and fears: why they came to you, exactly what you can do for them,
                    and dispel anything that might be holding them back.
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: "green" }}>
                        <div>full name</div>  <div>{new Date().toDateString()}</div>
                    </div>
                </div>
            </Card>
            <Card className='testmonial-card'>
                <div className='avatar'>
                    <img className='avatar' src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1667102166/website%20files/avatarblue_s5jnru.png' alt="avatar" />
                </div>
                <div className='tesmonial-content'>
                    Testimonials are best when they’re direct and to the point. Be sure to use words and phrases that your potential customers can relate to, and bring everything back to the clients’ hopes and fears: why they came to you, exactly what you can do for them,
                    and dispel anything that might be holding them back.
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: "green" }}>
                        <div>full name</div>  <div>{new Date().toDateString()}</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
