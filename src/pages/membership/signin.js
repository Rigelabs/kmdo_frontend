import {
  GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import React, { useEffect } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { clearSuccess } from '../../actions/successActions';
import firebase_auth from "../../firebase";
const googleProvider = new GoogleAuthProvider();

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  const success = useSelector(state => state.success);

 
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(firebase_auth(), googleProvider);
      const user = res.user;
      dispatch(userLogin({  email: user.email }))
      
    } catch (err) {
      
      alert("Sign in error, try again");
    }
  };
  useEffect(() => {
    dispatch(clearErrors());
    dispatch(clearSuccess());
    
    if (auth.token && auth.isAuthenticated && auth.user) {
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
         
           

            <Button variant="primary" 
            onClick={()=>signInWithGoogle()}  size="lg" style={{marginTop:"2rem",marginBottom:"5rem",width:"100%"}}>
             
             {auth.isLoading ? "Logging In ........" : "Log in with Google"}
            </Button>

          <div style={{ marginTop: "1rem", display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
            <div className='form-link' onClick={e => navigate("/sign_up")}>New Member ?</div>
           
          </div>
        </div>
      </Card>

    </div>
  )
}
