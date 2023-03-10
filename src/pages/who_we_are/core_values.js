import React from 'react';
import "./aboutus.css";

export default function CoreValues() {
  return (
    <div className='core_values'>
 <div style={{fontSize:"32px",fontWeight:"bold",color:'teal'}}>Our Core Values</div>
        <div className='vission-content'>
          <ul className='core_values_ul'>
            <div style={{marginRight:"20px"}}>
            <li>Integrity</li>
            <li>Philanthropy</li>
            <li>Team Work</li>
            
            <li>Equity</li>
            </div>
            <div>
            <li>Accountability</li>
            
            <li>Prosperity</li>
            <li>Transparency</li>
            <li>Dignity & Respect</li>
            </div>
          </ul>
        </div>
    </div>
  )
}
