import React from 'react';
import Footer from '../../components/navbar/footer';
import NavBar from '../../components/navbar/navbar';
import "./pillar.css";

export default function SocialEconomic() {
  return (
    <>
      <NavBar />
      <div className='pillar_content'>
        <div className='pillar_header'>Socio-economic Development programs</div>
        <div className='pillar_info'>
          We aim to empower members of the community to have sustained self- reliant
        </div>
        <div style={{ margin: "10px", fontSize: "20px" }}>Our ongoing activities are:</div>
        <div>
          <ul>
            <li className='list_item'>
              <h6 className='pillars_h6'>Agribusiness.</h6>
              We create awareness on available livelihood support activities such as agriculture,
              trading and provision of services. We highly encourage the farming of value crops
              such as avocados to supplement the conventional earnings from tea, milk and eggs.
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Governance & Advocacy.</h6>
              We advocate for good governance and implementation of
              public projects without unduly inconveniencing the community members.
              We also engage with elected and other community leaders to discuss challenges, successes
              and propose solutions on how to resolve challenges while productively managing successes
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Disaster and grief relief.</h6>
              We support members of the society who fall victim of disasters or lose their loved ones.
              This is the flagship of the Socio-economic Committee and has impacted very positively
              on members of the community
            </li>
            <li className='list_item'>
              <h6 className='pillars_h6'>Gifting to the elderly and needy.</h6>
              We identify members of our society of very advanced age or very needy, visit them and
              gift them at the end of the year to demonstrate to them that the community cares for them.
              This is another flagship project of the Socio-economic Committee
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  )
}
