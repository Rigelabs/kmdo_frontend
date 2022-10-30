import React from 'react';
import "./aboutus.css";

export default function CoreValues() {
  return (
    <div className='core_values'>
 <div style={{fontSize:"32px",fontWeight:"bold",color:'teal'}}>Our Core Values</div>
        <div className='vission-content'>
          <ul className='core_values_ul'>
            <div>
            <li>Integrity</li>
            <li>Team Work</li>
            <li>Philanthropy</li>
            <li>Equity</li>
            </div>
            <div>
            <li>Accountability</li>
            <li>Dignity and Respect</li>
            <li>Prosperity</li>
            <li>Transparency</li>
            </div>
          </ul>
        </div>
    </div>
  )
}
