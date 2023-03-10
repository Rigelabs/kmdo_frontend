import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadPrograms } from '../../actions/programsActions';
import "./main.css";

export default function Ongoing() {
  const dispatch = useDispatch();
  const programs = useSelector(state=>state.programs);
  useEffect(() => {
    dispatch(loadPrograms());
    
  }, [])
  
  return (
    <div style={{margin:"1rem"}}>
       <div style={{color:"darkblue",fontSize:"30px",fontWeight:700}}>
            Ongoing Programmes
        </div>
        <hr/>
        <div className="ongoing_cards">
        {programs.programs ? 
        programs.programs.map((program,key)=>(
          
          <Card className='card-ongoing' key={key}>
          <Card.Img variant="top" src={program.image_url} alt="" height="300px"/>
          <Card.Body>
            <Card.Text style={{fontWeight:'bold',color:'GREEN'}}>{program.pillar}</Card.Text>
          <Card.Title>{program.name}</Card.Title>
          <Card.Text>
            {program.description}
          </Card.Text>
          <Button className='program-btn'>Take Action</Button>
          </Card.Body>
      </Card>
        ))
        :null}
        </div>
    </div>
  )
}
