import React, { useEffect, useState } from 'react';

import { Alert, Button, ButtonGroup, ButtonToolbar, Form, InputGroup, Modal, Table } from 'react-bootstrap';
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser, loadUsers, searchUsers } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { clearSuccess } from '../../actions/successActions';
import NavBar from '../../components/navbar/navbar';
import Spinner from '../../components/spinner/spinners';
import Unathorized from '../errors/403';
import "./admin.css";

import { memberAdd } from '../../actions/boardActions';

export default function AddBoardMember() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = useSelector(state => state.auth);
    const errors = useSelector(state => state.errors);
    const success = useSelector(state => state.success);
    const [user_update_modal, setuser_update_modal] = useState(false);
    const members = auth.users;
    const user =auth.user;
    const [keyword, setkeyword] = useState('');
    const [role, setrole] = useState('');
    const [registration_number, setregistration_number] = useState('');
    const [full_name, setfull_name] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [village, setvillage] = useState('');
    const [avatar, setavatar] = useState('');
    const [area, setarea] = useState('');
    useEffect(() => {
        dispatch(loadUser(auth.token));
        dispatch(loadUsers({ authToken: auth ? auth.token : null }));
    }, [auth.token])
    const onSearch = (e) => {
        e.preventDefault()
        dispatch(searchUsers({ authToken: auth ? auth.token : null, keyword: keyword }))
    }
    const onAddMember = (e) => {
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(clearSuccess());
        dispatch(memberAdd({
             registration_number: registration_number, role: role, authToken: auth.token,
             full_name:full_name,contact:contact,village:village,area:area,avatar:avatar,email:email
            }));
    }
  
    return (
        <div>
            <NavBar />

            {auth.isLoading ? <Spinner /> :

                user ? user.rank === "SUPERADMIN" ?
                    
                    <>
                    <div className='dashboard-menu'>
                <ButtonToolbar>
                    <ButtonGroup >
                        <Button onClick={e => { navigate("/dashboard") }}>Dashboard</Button>
                        <Button onClick={e => { navigate("/admin") }}>Admin</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
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
                                            
                                            <td>{member.rank}</td>
                                            <td>{member.status}</td>
                                            <td>{member.score}</td>
                                            <td>
                                                <BsPlusLg style={{ marginLeft: "15px", color: "green" }} size={18} 
                                                    onClick={e => {
                                                         setuser_update_modal(!user_update_modal); 
                                                         setregistration_number(member.registration_number);
                                                         setarea(member.area)
                                                         setavatar(member.avatar)
                                                         setcontact(member.contact)
                                                         setemail(member.email)
                                                         setfull_name(member.full_name)
                                                         setvillage(member.full_name)
                                                         
                                                         }} />
                                                
                                            </td>
                                        </tr>

                                    )) : null}
                                </tbody>
                            </Table>
                        </div>

                        <Modal show={user_update_modal} className='member-update-modal'>
                            <Modal.Header>Add Member to Board</Modal.Header>
                            {Object.keys(errors.msg).length > 0 ?
                                <Alert variant='danger'>{errors.msg.message}</Alert>

                                : null
                            }
                            {Object.keys(success.msg).length > 0 ?
                                <Alert variant='success'>{success.msg.message}</Alert>

                                : null
                            }
                            <Form onSubmit={onAddMember}>
                                <div className='form-rows'>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='form-label'>Member role</Form.Label>
                                        <Form.Select onChange={e => { setrole(e.currentTarget.value) }} >
                                            <option>Choose the member role</option>
                                            <option value={"CHAIR_PERSON"}>CHAIR PERSON</option>
                                            <option value={"TREASURER"}>TREASURER</option>
                                        <option value={"SECRETARY"}>SECRETARY</option>
                                        <option value={"BOARD_MEMBER"}>BOARD MEMBER</option>
                                        </Form.Select>

                                    </Form.Group>
                                </div>
                                <div className='form-rows'>
                                    <Button variant="success" type="submit" className='form-button'>
                                        Add
                                    </Button>
                                    <Button variant="danger" className='form-button'
                                        onClick={e => { setuser_update_modal(!user_update_modal); dispatch(loadUsers({ authToken: auth.token })) }} >
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Modal>
                      
                    </>
                    : <Unathorized /> : <Unathorized />  
}
        </div>
    )
}
