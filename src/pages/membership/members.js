import React, { useEffect, useState } from 'react';
import { Card, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, searchUsers } from '../../actions/authActions';

export default function Members() {
    const dispatch=useDispatch();
    const auth = useSelector(state => state.auth);
    const members=auth.users;
    const [keyword, setkeyword] = useState('')
    useEffect(() => {
      
      dispatch(loadUsers({authToken:auth?auth.token:null}));
    }, [auth.token])
    const onSearch=(e)=>{
       
        dispatch(searchUsers({authToken:auth?auth.token:null,keyword:keyword}))
    }
  return (
    <div>
        <div className='search-input'>
            <Form >
            <InputGroup>
               
            <Form.Control size="lg" type="text" placeholder="Search members by Names or Area or Occupation" onChange={e=>setkeyword(e.currentTarget.value)} />
            <InputGroup.Text id="basic-addon1" onClick={e=>onSearch()}>{<BsSearch color='blue'/>}</InputGroup.Text>
            </InputGroup>
            </Form>
        </div>
        <div className='member-rows'>
            {members ? members.map((member,key)=>(

          <Card className='card-board'>
            <Card.Img variant="top" height="200px" className="card-image" border src={member.avatar} />
            <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
              {member.full_name}</div>
            <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
            {member.village}-{member.area}</div>
            <div style={{ color: "black", fontSize: "22px", margin: 'auto', fontWeight: "bold" }}>
            Occupation : {member.occupation}</div>
          </Card>
            )):null}

        </div>
    </div>
  )
}
