import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';

export default function Reset() {
    const navigate = useNavigate();
    return (
        <div className='auth'>
            <NavBar />
            <div className='signin'>
                <Card className='reset-card'>
                    <div className='logo-form'>
                        <img width="100px" height="100px" src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1665880877/logo/icon-transparent_qdcqo9.ico' alt="" />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <Form>
                       
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='form-label'>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone number" />

                            </Form.Group>
                            <Button variant="success" type="submit">
                                Request OTP Code
                            </Button>
                          
                            
                            </Form>
                            
                            <hr/>

                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Reset Password
                            </Button>

                        </Form>
                        <div style={{ marginTop: "1rem", display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                            <div className='form-link' onClick={e => navigate("/sign_up")}>New Member ?</div>
                            <div className='form-link' onClick={e => navigate("/membership")}>Sign In ?</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
