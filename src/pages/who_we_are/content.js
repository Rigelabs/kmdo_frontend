import React from 'react';
import "./aboutus.css";
import CoreValues from './core_values';
import Reports from './reports';
import Team from './team';
import Ourstory from './the_story';
import Vission from './vission';

export default function Content() {
  return (
    <div  className='about_content'>
       <Ourstory/>
        <Vission/>
        <CoreValues/>
        <Team/>
        <Reports/>
        
    </div>
  )
}
