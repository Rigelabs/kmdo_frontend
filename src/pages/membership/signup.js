import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    return (
        <div className='signup'>
            <Card className='corousel'>
                <div className='logo-form'>
                    <img width="100px" height="100px" src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1665880877/logo/icon-transparent_qdcqo9.ico' alt="" />
                </div>
                <div style={{ margin: "10px" }}>
                    <div className='signup-title'>Register</div>
                    <Form>
                    <div className='form-rows'>
                        <Form.Group className="mb-3">
                            <Form.Label className='form-label'>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" />

                        </Form.Group>
                      
                        <Form.Group className="mb-3" >
                            <Form.Label className='form-label'>ID / Passport Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter ID Number / Passport Number" />

                        </Form.Group>
                        </div>
                        <div className='form-rows'>
                        <Form.Group className="mb-3">
                            <Form.Label className='form-label'>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" />

                        </Form.Group>
                      
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='form-label'>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />

                        </Form.Group>
                        </div>
                        <div className='form-rows'>
                        <Form.Group className="mb-3">
                            <Form.Label className='form-label'>Village</Form.Label>
                            <Form.Select >
                                <option>Select your Village</option>
                            </Form.Select>

                        </Form.Group>
                      
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='form-label'>Area</Form.Label>
                            <Form.Select type="text">
                            <option>Select your Area</option>
                            </Form.Select>

                        </Form.Group>
                        </div>
                        <div className='form-rows'>
                        <Form.Group className="mb-3">
                            <Form.Label className='form-label'>Occupation</Form.Label>
                            <Form.Control type="text" placeholder="Select your occupation" />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='form-label'>Registration Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter your reg no." />

                        </Form.Group>
                        </div>
                        <div className='form-rows'>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        </div>
                        <Button variant="success" type="submit">
                            Create Account
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
