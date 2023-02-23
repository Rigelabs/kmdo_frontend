import React from 'react'
import NavBar from '../../components/navbar/navbar'

export default function Health() {
  return (
    <>
        <NavBar/>
        <div className='pillar_content'>
        <div className='pillar_header'>Health programs</div>
        <div className='pillar_info'>
        We aim to improve the health of our community in general and at the individual level.
        </div>
        <div style={{ margin: "10px", fontSize: "20px" }}>Our ongoing activities are:</div>
        <div>
          <ul>
            <li className='list_item'>
              <h6 className='pillars_h6'>Health Centers.</h6>
              We are lobbying and advocating for the establishment of a health centre at 
              Karinga to serve Karinga, Kiamaingi and Matandara villages
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Awareness outreach.</h6>
              Creating awareness for healthy living and healthy aging through good diet and exercise.
            </li>
            
          </ul>
        </div>
      </div>
        </>
  )
}
