import React from 'react';
import CountUp from 'react-countup/';
import "./footer.css";

export default function Counter() {
  return (
    <div className='counter'>
    <div className='counter-div'>
        <div>Members</div>
        <CountUp end={450} duration={8} />
    </div>
    <div className='counter-div'>
        <div>Supported Families</div>
        <CountUp end={320} duration={5} />
    </div>
    
    <div className='counter-div'>
        <div>Ongoing Causes</div>
        <CountUp end={5} duration={3} />
    </div>
</div>
  )
}
