import React from 'react';
import Banner from './banner';
import Declaration from './Declaration';
import "./main.css";
import Ongoing from './ongoing';
import Pillars from './pillars';

export default function Content() {
  return (
    <div className='content'>
      <Banner />
      <Declaration />
      <Pillars />
      <Ongoing />
    </div>
  )
}
