import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoard } from '../../actions/boardActions';
import "./aboutus.css";

export default function Team() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBoard());
  }, [])
  const board = useSelector(state => state.board);
  const members = board.board;
  var chairperson, secretary, treasurer, board_members;
  if (members) {
    chairperson = members.find(member => member.role === "CHAIR_PERSON");
    secretary = members.find(member => member.role === "SECRETARY");
    treasurer = members.find(member => member.role === "TREASURER");
    board_members = members.filter(member => member.role === "BOARD_MEMBER");
  }

  return (
    <div className='team'>
      <div style={{ fontSize: "32px", fontWeight: "bold", color: 'teal', textAlign: 'center' }}>
        The Team</div>

      <div>
        <h4 style={{ color: "green", fontWeight: 700, textDecoration: "underline" }}>Executive Committee</h4>
        {chairperson ?
          <div className='chair'>
            <Card className='card-board'>
              <Card.Img variant="top" height="200px" className="card-image" border src={chairperson.avatar} />
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
                Chair Person
              </div>
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
                {chairperson.full_name}
              </div>
            </Card>
          </div>
          : null
        }
        <div className='member-rows'>
          {treasurer ?
            <Card className='card-board'>
              <Card.Img variant="top" height="200px" className="card-image" border src={treasurer.avatar} />
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
                Treasurer </div>
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
                {treasurer.full_name}</div>
            </Card>
            : null}
          {secretary ?
            <Card className='card-board'>
              <Card.Img variant="top" height="200px" className="card-image" border src={secretary.avatar} />
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
                Secretary </div>
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
                {secretary.full_name}</div>
            </Card>
            : null}



        </div>
      </div>
      <div>
        <h4 style={{ color: "green", fontWeight: 700, textDecoration: "underline" }}>Board Members</h4>
        <div className='member-rows'>
          {board_members?
          board_members.map((member,key)=>(        
          <Card className='card-board'>
            <Card.Img variant="top" height="200px" className="card-image" border src={member.avatar} />
           
            <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
              {member.full_name}</div>
              <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
             {member.role}</div>
          </Card>
          )) 
        :null}
       

        </div>
      </div>
    </div>
  )
}
