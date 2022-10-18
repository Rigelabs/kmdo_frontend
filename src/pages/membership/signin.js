import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export default function Signin() {
  return (
    <div className='signin'>
          <Card className='sign-card'>
            <div className='logo-form'>
                <img width="100px" height="100px" src='https://res.cloudinary.com/dwnxsji2z/image/upload/v1665880877/logo/icon-transparent_qdcqo9.ico' alt=""/>
            </div>
            <div style={{margin:"10px"}}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="email" placeholder="Enter phone number" />
        <Form.Text className="text-muted">
          We'll never share your phone number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Sign In
      </Button>
        </Form>
        </div>
        </Card>
    </div>
  )
}
