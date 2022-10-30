import React, { useEffect, useState } from 'react';
import { Form, InputGroup, Table } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, searchUsers } from '../../actions/authActions';

export default function Members() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const members = auth.users;
  const [keyword, setkeyword] = useState('')
  useEffect(() => {

    dispatch(loadUsers({ authToken: auth ? auth.token : null }));
  }, [auth.token])
  const onSearch = (e) => {

    dispatch(searchUsers({ authToken: auth ? auth.token : null, keyword: keyword }))
  }
  return (
    <div>
      <div className='search-input'>
        <Form >
          <InputGroup>

            <Form.Control size="lg" type="text" placeholder="Search members by Names or Area or Occupation" onChange={e => setkeyword(e.currentTarget.value)} />
            <InputGroup.Text id="basic-addon1" onClick={e => onSearch()}>{<BsSearch color='blue' />}</InputGroup.Text>
          </InputGroup>
        </Form>
      </div>
      <div className='member-rows'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Reg. Number</th>
              <th>Full Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Rank</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
        {members ? members.map((member, key) => (
          <tr>
              <td>{key}</td>
              <td>{member.registration_number}</td>
              <td>{member.full_name}</td>
              <td>{member.contact}</td>
              <td>{member.email}</td>
              <td>{member.rank}</td>
              <td>{member.status}</td>
            </tr>
          
            )) : null}
  </tbody>
        </Table>
      </div>
    </div>
  )
}
