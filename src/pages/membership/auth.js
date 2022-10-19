import React from 'react'
import NavBar from '../../components/navbar/navbar'
import Signin from './signin'

export default function Auth() {
  return (
    <div  className='auth'>
        <NavBar/>
        <Signin/>
      
    </div>
  )
}
