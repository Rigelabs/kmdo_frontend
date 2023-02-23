import React from 'react';
import "./aboutus.css";

export default function Ourstory() {
  return (
    <div className='story'>
      <div style={{ fontSize: "32px",marginLeft:"10px", fontWeight: "bold", color: 'teal' }}>
        Who We  Are
      </div>
      <div className='story-content'>


        <div style={{ marginBottom: "1rem" }}>
          <div className='paragraph'>
          KMDO is a members’ organization. The members are drawn from the villages where the organization operates. Our aim is to form clusters in the villages in all the counties where KMDO is licensed to operate, in order to sensitize members of those communities that they can make their societies self sustaining and prosperous, 
            call them to action and provide the leadership and opportunity for them to better their communities in line with our slogan “TOGETHER WE PSOSPER”.
          
            </div>
            <div className='paragraph'>
            KMDO is licensed to operate in the five Kenyan counties of Kiambu, Murang’a, Kirinyaga, Nyeri and Laikipia. The organization was established in 2019 and registered by the Kenya Non-Governmental Organizations Board (NGO Board).
          Our head quarters is in Karinga Village of Kinyona Location, Kigumo Subcounty Murang’a County.
          Our structure has 9 directors and 17 area representatives. 
            </div>
            <div className='paragraph'>
            The 9 directors comprise the Management Board of the organization. All leaders work voluntarily for KMDO.
          There are Board Committees to run oversee the running of the various programmes of the organization, headed by a committee chairperson. The committees are Governance, which advises advises the board on running of the organization. There is the Education, Socio-economic Development and Health Committees.

            </div>
            
        </div>

      </div>
    </div>
  )
}
