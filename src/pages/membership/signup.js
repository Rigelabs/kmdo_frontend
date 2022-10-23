import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { loadAreas, loadVillages } from '../../actions/villages';

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors=useSelector(state=>state.errors);
    const success=useSelector(state=>state.success);
    const villages=useSelector(state=>state.villages);
    const auth=useSelector(state=>state.auth);
    const areas=villages.areas;

    const [fullname, setfullname] = useState(null);
    const [identification_number, setidentification_number] = useState(null);
    const [contact, setcontact] = useState(null);
    const [email, setemail] = useState(null);
    const [village, setvillage] = useState(null);
    const [area, setarea] = useState(null);
    const [occupation, setoccupation] = useState(null);
    const [registration_number, setregistration_number] = useState(null);
    const [password, setpassword] = useState(null);

    useEffect(() => {
        dispatch(loadAreas());
        dispatch(loadVillages());
    },[errors.status])
    const data={
        full_name:fullname,identification_number:identification_number,contact:`+254${contact}`,
        email:email,village:village,area:area,occupation:occupation,
        registration_number:registration_number,password:password
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(userRegister(data))
    }
    return (
        <div className='signup'>
          
            <Card className='corousel'>
            {Object.keys(errors.msg).length>0?
                        <Alert variant='danger'>{errors.msg.message}</Alert>
              
                : null
            }
             {Object.keys(success.msg).length>0?
                        <Alert variant='success'>{success.msg.message}</Alert>
              
                : null
            }
                <div className='logo-form'>
                    <img width="100px" height="100px" src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1665880877/logo/icon-transparent_qdcqo9.ico' alt="" />
                </div>
                <div style={{ margin: "10px" }}>
                    <div className='signup-title'>Register</div>
                    <Form onSubmit={onSubmit}>
                        <div className='form-rows'>
                            <Form.Group className="mb-3">
                                <Form.Label className='form-label'>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" onChange={e=>{setfullname(e.currentTarget.value)}}/>

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label className='form-label'>ID / Passport Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter ID Number / Passport Number" onChange={e=>{setidentification_number(e.currentTarget.value)}}/>

                            </Form.Group>
                        </div>
                        <div className='form-rows'>
                            <Form.Group className="mb-3">
                                <Form.Label className='form-label'>Phone Number</Form.Label>
                                <InputGroup>
                                <InputGroup.Text id="basic-addon1">+254</InputGroup.Text>
                                <Form.Control type="text" placeholder="700000000"  onChange={e=>{setcontact(e.currentTarget.value)}}/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label className='form-label'>Email</Form.Label>
                                <Form.Control  type="text" placeholder="Enter email" onChange={e=>{setemail(e.currentTarget.value)}}/>

                            </Form.Group>
                        </div>
                        <div className='form-rows'>
                            <Form.Group className="mb-3">
                                <Form.Label className='form-label'>Village</Form.Label>
                                <Form.Select onChange={e=>{setvillage(e.currentTarget.value)}}>
                                <option>Select your Village</option>
                                    {villages.villages?villages.villages.map((village,key)=>(
                                        <option key={key} value={village.name}>{village.name}</option>
                                    )):<option>Select your Village</option>}
                                </Form.Select>

                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className='form-label'>Area</Form.Label>
                                <Form.Select onChange={e=>{setarea(e.currentTarget.value)}}>
                                <option>Select your Area</option>
                                {areas?areas.map((area,key)=>(
                                        <option key={key} value={area.name}>{area.name}</option>
                                    )):<option>Select your Area</option>}
                                </Form.Select>

                            </Form.Group>
                        </div>
                        <div className='form-rows'>
                            <Form.Group className="mb-3">
                                <Form.Label className='form-label'>Occupation</Form.Label>
                                <Form.Control type="text" placeholder="Enter your occupation" onChange={e=>{setoccupation(e.currentTarget.value)}}/>

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='form-label'>Registration Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your reg no." onChange={e=>{setregistration_number(e.currentTarget.value)}}/>

                            </Form.Group>
                        </div>
                        <div className='form-rows'>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  onChange={e=>{setpassword(e.currentTarget.value)}}/>
                            </Form.Group>
                        </div>
                        <Button variant="success" type="submit"
                            disabled={fullname&&identification_number&&contact&&email&&registration_number&&password ?false:true}
                        >
                            {auth.isLoading?"Registering ....." :"Create Account"}
                        </Button>

                    </Form>
                    <div style={{ marginTop: "1rem", display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <div className='form-link' onClick={e => navigate("/membership")}>Sign In ?</div>

                    </div>
                </div>
            </Card>
           
        </div>

    )
}
