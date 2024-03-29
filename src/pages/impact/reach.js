import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup/';
import "./impact.css";
export default function Reach() {
    return (
        <div className='reach'>
            <Card className='reach-card' >
                    <Card.Title style={{color:'teal',fontSize:"28px"}}>The Impacts</Card.Title>
                    <hr/>
                    <div className='counter-div'>
                        <div>Members</div>
                        <CountUp end={477} duration={5} />

                    </div>
                    <hr/>
                   
                       
                        
                        <div className='counter-div'>
                            <div>Supported Families</div>
                            <CountUp end={78} duration={5} />

                        </div>
                        <hr/>
                        <div className='counter-div'>
                            <div>Programs</div>
                            <CountUp end={4} duration={5} />

                        </div>
            </Card>
            
        </div>
    )
}
