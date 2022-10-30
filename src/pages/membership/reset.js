import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { BsEyeSlash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { change_password, request_code } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { clearSuccess } from '../../actions/successActions';
import NavBar from '../../components/navbar/navbar';

export default function Reset() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const success = useSelector(state => state.success);
    const auth = useSelector(state => state.auth);

    const [contact, setcontact] = useState(null);
    const [password, setpassword] = useState(null);
    const [confirm_password, setconfirm_password] = useState(null);
    const [otp_code, setotp_code] = useState(null);
    const [password_visible, setpassword_visible] = useState(false);

    const onRequestCode = (e) => {
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(request_code({ contact: `+254${contact}` }));
    }
    const onChangePassword = (e) => {
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(change_password({ contact: `+254${contact}`, password: password, otp_code: otp_code }));
    }
    useEffect(() => {
        if (auth.token && auth.isAuthenticated && auth.user) {
            navigate("/dashboard")
        }
        dispatch(clearErrors());
        dispatch(clearSuccess());
    }, [auth.isAuthenticated])

    return (
        <div className='auth'>
            <NavBar />
            <div className='signin'>
                <Card className='reset-card'>
                    {Object.keys(errors.msg).length > 0 ?
                        <Alert variant='danger'>{errors.msg.message}</Alert>

                        : null
                    }
                    {Object.keys(success.msg).length > 0 ?
                        <Alert variant='success'>{success.msg.message}</Alert>

                        : null
                    }
                    <div className='logo-form'>
                        <img width="100px" height="100px" src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1665880877/logo/icon-transparent_qdcqo9.ico' alt="" />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <Form onSubmit={onRequestCode}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='form-label'>Phone Number</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1">+254</InputGroup.Text>
                                    <Form.Control type="text" placeholder="700000000" onChange={e => { setcontact(e.currentTarget.value) }} />
                                </InputGroup>
                            </Form.Group>
                            <Button variant="success" type="submit" disabled={auth.isLoading || !contact ? true : false}>
                                Request OTP Code
                            </Button>


                        </Form>

                        <hr />

                        <Form onSubmit={onChangePassword}>
                            <Form.Group className="mb-3">
                                <Form.Label>New Password</Form.Label>
                                <InputGroup>
                                    <Form.Control type={password_visible ? "text" : "password"} placeholder="Password" onChange={e => { setpassword(e.currentTarget.value) }} />
                                    <InputGroup.Text id="basic-addon1" onClick={e=>setpassword_visible(!password_visible)}>{<BsEyeSlash/>}</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Confirm Password</Form.Label>
                                <InputGroup>
                                    <Form.Control type={password_visible ? "text" : "password"} placeholder=" ConfirmPassword" onChange={e => { setconfirm_password(e.currentTarget.value) }} />
                                    <InputGroup.Text id="basic-addon1" onClick={e=>setpassword_visible(!password_visible)}>{<BsEyeSlash/>}</InputGroup.Text>
                                </InputGroup>

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>OTP Code</Form.Label>
                                <Form.Control placeholder="Enter OTP Code" onChange={e => { setotp_code(e.currentTarget.value) }} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={password === confirm_password && otp_code && contact ? false : true}>
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
