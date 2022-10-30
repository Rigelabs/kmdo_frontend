import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
import Unathorized from '../errors/403';
import Content from './content';

export default function Admin() {
    const navigate=useNavigate();
    const user=useSelector(state=>state.auth.user);
    
    useEffect(() => {
        if (!user) {
            navigate("/membership");
        }
    }, [user])
    
  return (
    <div>
         <NavBar/>
         {user?user.rank==="MEMBER" ?
         <Unathorized/>  :
         <Content/>
         :null
         }
    </div>
  )
}
