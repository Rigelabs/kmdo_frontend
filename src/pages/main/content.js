import React from 'react';
import Declaration from './Declaration';
import "./main.css";
import Ongoing from './ongoing';
import Pillars from './pillars';

export default function Content() {
  return (
    <div className='content'>
        <Declaration/>
        <Pillars/>
        <Ongoing/>
    </div>
  )
}
