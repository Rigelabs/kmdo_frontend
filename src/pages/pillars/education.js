import React from 'react';
import Footer from '../../components/navbar/footer';
import NavBar from '../../components/navbar/navbar';
import "./pillar.css";
export default function Education() {
  return (
    <>
      <NavBar />
      <div className='pillar_content'>
        <div className='pillar_header'>Education Programs</div>
        <div className='pillar_info'>
          The aim is to ensure that the children, young adults and the general population is educated to the highest level one can go and community members are
          equipped with a wide knowledge base.
        </div>
        <div style={{ margin: "10px", fontSize: "20px" }}>Our ongoing activities are:</div>
        <div>
          <ul>
            <li className='list_item'>
              <h6 className='pillars_h6'>Motivation for primary and high school learners.</h6>
              KMDO representatives give
              motivational talks to the learners especially those in the examination year.
              When examination results are released, KMDO rewards best performing candidates and
              the teachers whose subjects were performed well. The aim is to enhance competitiveness
              of both the teachers and the learners and improve educational performance.
              It also aims at getting the learners to know that their villages have produced
              successful people in education and life and motivate them to work hard to emulate
              those models. The activities also provide the learners with opportunity to identify
              and acquire mentors from the community. This is the flagship programme of the KMDO Education Committee.
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Improvement of school facilities.</h6>
              KMDO works with other partners such as elected leaders, government and donors to improve various facilities
              in leaning institutions.
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Advocacy.</h6>
              KMDO works with other partners such as elected leaders, government and donors to improve various facilities
              in leaning institutions.
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Financial support to needy learner.</h6>
              KMDO raises funds from its members and other partners to support needy learners after thorough vetting and assessment of the needs. 
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  )
}
