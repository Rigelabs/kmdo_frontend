import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, InputGroup, Modal, Table } from 'react-bootstrap';
import { BsFillEyeFill, BsGear } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { adminMemberUpdate, loadUser, loadUsers, searchUsers } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { clearSuccess } from '../../actions/successActions';
import Spinner from '../../components/spinner/spinners';
import "./admin.css";

export default function Members() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  const success = useSelector(state => state.success);
  const [user_update_modal, setuser_update_modal] = useState(false);
  const members = auth.users;
  const [keyword, setkeyword] = useState('');
  const [status, setstatus] = useState('');
  const [usercontact, setusercontact] = useState('');
  useEffect(() => {
    dispatch(loadUser(auth.token));
    dispatch(loadUsers({ authToken: auth ? auth.token : null }));
  }, [auth.token])
  const onSearch = (e) => {
    e.preventDefault()
    dispatch(searchUsers({ authToken: auth ? auth.token : null, keyword: keyword }))
  }
  const onUpdate=(e)=>{
    e.preventDefault();
    dispatch(clearErrors());
    dispatch(clearSuccess());
    dispatch(adminMemberUpdate({contact:usercontact,status:status,authToken:auth.token}));
  }
  return (
    <div>
       {auth.isLoading ? <Spinner/>:
       <>
      <div className='search-input'>
        <Form onSubmit={onSearch}>
          <InputGroup>

            <Form.Control size="lg" type="text" placeholder="Search members by Names or Area or Occupation" onChange={e => setkeyword(e.currentTarget.value)} />
            
          </InputGroup>
        </Form>
      </div>
      <div className='admin-table'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Reg_Number</th>
              <th>Full_Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Rank</th>
              <th>Status</th>
              <th>Score</th>
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
                <td>{member.score}</td>
                <td>
                  <BsGear style={{ marginRight: "15px", color: "red" }} size={18} onClick={e =>{setuser_update_modal(!user_update_modal);setusercontact(member.contact)}} />
                <BsFillEyeFill style={{ color: "lightblue" }} size={18} />
                </td>
              </tr>

            )) : null}
          </tbody>
        </Table>
      </div>
     
      <Modal show={user_update_modal} className='member-update-modal'>
        <Modal.Header>Update Member</Modal.Header>
        {Object.keys(errors.msg).length > 0 ?
                    <Alert variant='danger'>{errors.msg.message}</Alert>

                    : null
                }
                {Object.keys(success.msg).length > 0 ?
                    <Alert variant='success'>{success.msg.message}</Alert>

                    : null
                }
        <Form onSubmit={onUpdate}>
          <div className='form-rows'>
            <Form.Group className="mb-3">
              <Form.Label className='form-label'>Member Status</Form.Label>
              <Form.Select onChange={e => { setstatus(e.currentTarget.value) }} >
                <option>Change User Status</option>
                <option>ACTIVE</option>
                <option>PENDING</option>
                <option>SUSPENDED</option>
                <option>TERMINATED</option>
              </Form.Select>

            </Form.Group>
          </div>
          <div className='form-rows'>
            <Button variant="success" type="submit" className='form-button'>
              Update
              </Button>
              <Button variant="danger" className='form-button'
              onClick={e=>{setuser_update_modal(!user_update_modal);dispatch(loadUsers({authToken:auth.token}))}} >
              Cancel
              </Button>
          </div>
        </Form>
      </Modal>
      </>
    }
    </div>
  )
}
