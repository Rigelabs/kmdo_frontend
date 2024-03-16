import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadPrograms } from '../../actions/programsActions';
import "./main.css";

export default function Ongoing() {
  const dispatch = useDispatch();
  const programs = useSelector(state => state.programs);
  useEffect(() => {
    dispatch(loadPrograms());

  }, [])

  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ color: "darkblue", fontSize: "30px", fontWeight: 700 }}>
        Ongoing Programmes
      </div>
      <hr />
      <div className="ongoing_cards">
     
            <Card className='card-ongoing' >
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFjYWRlbWljJTIwYWZyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" height="300px" />
              <Card.Body>
                <Card.Text style={{ fontWeight: 'bold', color: 'GREEN' }}>Education</Card.Text>
                <Card.Title>Motivation for primary and high school learners</Card.Title>
                <Card.Text>
                  Every year, KMDO representatives give motivational talks to learners in the examination year in primary and high schools.
                   The learners are also given educational materials such as geometrical sets, erasers, pencils and pens. When examination results
                    are released, KMDO rewards best performing candidates and the teachers whose subjects were performed well.
                </Card.Text>
                <Button className='program-btn'>Take Action</Button>
              </Card.Body>
            </Card>
            <Card className='card-ongoing' >
            <Card.Img variant="top" src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1678111995/website%20files/WhatsApp_Image_2023-02-18_at_17.32.47_dx5jwe.jpg" alt="" height="300px" />
            <Card.Body>
              <Card.Text style={{ fontWeight: 'bold', color: 'GREEN' }}>Education</Card.Text>
              <Card.Title>Financial support to needy learners</Card.Title>
              <Card.Text>
              KMDO raises funds from its members and other partners to support needy learners after thorough vetting and assessment of the needs. 
              Currently there is a programme supporting one girl at Nginda Girls High School in Form 1, a boy partially supported at 
              Ikumbi High School Form 1 and a lady supported at the Kenya Medical Training College at Murang’a in first year Clinical Medicine.
              </Card.Text>
              <Button className='program-btn'>Take Action</Button>
            </Card.Body>
          </Card>
          <Card className='card-ongoing' >
          <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-helping-hand-and-support-concept-png-image_6535881.png" alt="" height="300px" />
          <Card.Body>
            <Card.Text style={{ fontWeight: 'bold', color: 'GREEN' }}>Social-Economic</Card.Text>
            <Card.Title>Gifting to the elderly and needy</Card.Title>
            <Card.Text>
            From December 2021, we launched the project to identify members of our society of very advanced age or very needy,
             visit them and gift them at the end of the year to demonstrate to them that the community cares for them.
             <div style={{marginTop:"1rem"}}>So far, over 50 families have benefited from the program.</div>
            </Card.Text>
            <Button className='program-btn'>Take Action</Button>
          </Card.Body>
        </Card>
       
      </div>
    </div>
  )
}
