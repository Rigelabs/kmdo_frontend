import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, Image, InputGroup, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser, userRegister } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { loadAreas, loadVillages } from '../../actions/villages';
import "./membership.css";

export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const villages = useSelector(state => state.villages);
    const errors = useSelector(state => state.errors);
    const success = useSelector(state => state.success);

    const areas = villages.areas;
    const user = auth.user;

    const [update_modal, setupdate_modal] = useState(false);
    const [fullname, setfullname] = useState(user ? user.full_name : null);
    const [identification_number, setidentification_number] = useState(user ? user.identification_number : null);
    const [contact, setcontact] = useState(user ? user.contact : null);
    const [email, setemail] = useState(user ? user.email : null);
    const [village, setvillage] = useState(user ? user.village : null);
    const [area, setarea] = useState(user ? user.area : null);
    const [occupation, setoccupation] = useState(user ? user.occupation : null);
    const [avatar, setavatar] = useState(null)

    useEffect(() => {
        dispatch(clearErrors())
        dispatch(loadUser(auth.token));
        dispatch(loadVillages());
        dispatch(loadAreas());
        if (!auth.isAuthenticated && !auth.isLoading) {
            navigate("/membership");
        }
    }, [auth.isAuthenticated, errors.status]);

    const data = {
        full_name: fullname, identification_number: identification_number, contact: `+254${contact}`,
        email: email, village: village, area: area, occupation: occupation,avatar:avatar

    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(userRegister(data))
    }
  
    return (
        <div>
            {user ?
                <>
                    <div className='dashboard'>

                        <Card border={"dark"} hoverable className='dashboard-card-profile' >
                            <div className='dashboard-avatar'>
                                <Image src={user.avatar} height={"100px"} width={"100px"} alt={user.full_name} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "1rem" }}>


                                <Button variant="outline-success" onClick={e => setupdate_modal(!update_modal)}>Update Account</Button>
                                <div className='dashboard-score'>
                                    {user.score}
                                </div>
                            </div>
                            <div>
                                <h3 className='h3'>Name : {user.full_name}</h3>
                                <h3 className='h3'>Email : {user.email}</h3>
                                <h3 className='h3'>Contact : {user.contact}</h3>
                                <h3 className='h3'>Village : {user.village}</h3>
                                <h3 className='h3'>Area : {user.area}</h3>
                                <h3 className='h3'>Registration Number : {user.registration_number}</h3>
                                <h3 className='h3'>Occupation : {user.occupation}</h3>
                            </div>
                        </Card>

                        <Card border={"dark"} hoverable className='dashboard-card-table' >
                            <h1 style={{ color: "teal" }}>Member Contribution</h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Transaction_ID</th>
                                        <th>Event_ID</th>
                                        <th>Sender_Name</th>
                                        <th>Receiver_Name</th>
                                        <th>Amount</th>
                                        <th>Transaction_Date</th>
                                        <th>Method</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MQEROPP900</td>
                                        <td>EV009</td>
                                        <td>Joseph Kuria</td>
                                        <td>Jane Doe</td>
                                        <td>450</td>
                                        <td>26th Oct 2022</td>
                                        <td>MPESA</td>
                                    </tr>


                                </tbody>
                            </Table>
                        </Card>
                    </div>
                    <div>
                        <Modal show={update_modal}>

                            <Card className='modal-corousel'>
                                {Object.keys(errors.msg).length > 0 ?
                                    <Alert variant='danger'>{errors.msg.message}</Alert>

                                    : null
                                }
                                {Object.keys(success.msg).length > 0 ?
                                    <Alert variant='success'>{success.msg.message}</Alert>

                                    : null
                                }

                                <div style={{ margin: "10px" }}>
                                    <div className="update-modal-title">
                                        <div>Update Account</div>
                                        <div><Button variant="outline-danger" onClick={e=>setupdate_modal(!update_modal)}>Cancel</Button></div>
                                        </div>
                                    <Form onSubmit={onSubmit}>
                                        <div >
                                            <Form.Group className="mb-3">
                                                <Form.Label className='form-label'>Full Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Full Name" onChange={e => { setfullname(e.currentTarget.value) }} defaultValue={fullname} />

                                            </Form.Group>

                                            <Form.Group className="mb-3" >
                                                <Form.Label className='form-label'>ID / Passport Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter ID Number / Passport Number" onChange={e => { setidentification_number(e.currentTarget.value) }} defaultValue={identification_number} />

                                            </Form.Group>
                                        </div>
                                        <div >
                                            <Form.Group className="mb-3">
                                                <Form.Label className='form-label'>Phone Number</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text id="basic-addon1">+254</InputGroup.Text>
                                                    <Form.Control type="text" placeholder="700000000" onChange={e => { setcontact(e.currentTarget.value) }} defaultValue={contact}/>
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group className="mb-3" >
                                                <Form.Label className='form-label'>Email</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email" onChange={e => { setemail(e.currentTarget.value) }} defaultValue={email}/>

                                            </Form.Group>
                                        </div>
                                        <div >
                                            <Form.Group className="mb-3">
                                                <Form.Label className='form-label'>Village</Form.Label>
                                                <Form.Select onChange={e => { setvillage(e.currentTarget.value) }} defaultValue={village}>
                                                    <option>Select your Village</option>
                                                    {villages.villages ? villages.villages.map((village, key) => (
                                                        <option key={key} value={village.name}>{village.name}</option>
                                                    )) : <option>Select your Village</option>}
                                                </Form.Select>

                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label className='form-label'>Area</Form.Label>
                                                <Form.Select onChange={e => { setarea(e.currentTarget.value) }} defaultValue={area}>
                                                    <option>Select your Area</option>
                                                    {areas ? areas.map((area, key) => (
                                                        <option key={key} value={area.name}>{area.name}</option>
                                                    )) : <option>Select your Area</option>}
                                                </Form.Select>

                                            </Form.Group>
                                        </div>
                                        <div >
                                            <Form.Group className="mb-3">
                                                <Form.Label className='form-label'>Occupation</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your occupation" onChange={e => { setoccupation(e.currentTarget.value) }} defaultValue={occupation}/>

                                            </Form.Group>

                                        </div>
                                        <div >
                                            <Form.Group className="mb-3">
                                                <Form.Label className='form-label'>Upload profile photo</Form.Label>
                                                <Form.Control type="file" name="avatar" accept='image/*' onChange={e => { setavatar(e.currentTarget.files) }} />

                                            </Form.Group>

                                        </div>

                                        <Button variant="success" type="submit"
                                        >
                                            {auth.isLoading ? "Updating ....." : "Update Account"}
                                        </Button>

                                    </Form>
                                    
                                </div>
                            </Card>
                        </Modal>
                    </div>
                </>
                : user ? user.full_name : null}
        </div>
    )
}
