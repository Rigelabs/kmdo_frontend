import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { BsEyeSlash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { clearSuccess } from '../../actions/successActions';

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  const success = useSelector(state => state.success);

  const [contact, setcontact] = useState(null);
  const [password, setpassword] = useState(null);
  const [password_visible, setpassword_visible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    dispatch(userLogin({ contact: `+254${contact}`, password: password }))
  }
  useEffect(() => {
    dispatch(clearErrors());
    dispatch(clearSuccess());
    if(auth.token&&auth.isAuthenticated&&auth.user){
      navigate("/dashboard")
    }
  }, [auth.isAuthenticated])
  
  return (
    <div className='signin'>
      
      <Card className='sign-card'>
       
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
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className='form-label'>Phone Number</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">+254</InputGroup.Text>
                <Form.Control type="text" placeholder="700000000" onChange={e => { setcontact(e.currentTarget.value) }} />
                
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
             
              <Form.Control type={password_visible?"text":"password"} placeholder="Password" onChange={e => { setpassword(e.currentTarget.value) }} />
              <InputGroup.Text id="basic-addon1" onClick={e=>setpassword_visible(!password_visible)}>{<BsEyeSlash/>}</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={contact && password && !auth.isLoading? false : true}>
             {auth.isLoading ? "Logging In ........": "Sign In"}
            </Button>

          </Form>
          <div style={{ marginTop: "1rem", display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
            <div className='form-link' onClick={e => navigate("/sign_up")}>New Member ?</div>
            <div className='form-link' onClick={e => navigate("/reset")}>Reset password</div>
          </div>
        </div>
      </Card>

    </div>
  )
}
