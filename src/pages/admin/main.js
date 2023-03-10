import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/navbar/footer';
import NavBar from '../../components/navbar/navbar';
import Unathorized from '../errors/403';
import Content from './content';

export default function Admin() {
    const navigate=useNavigate();
    const auth=useSelector(state=>state.auth);
    const user=auth.user;
    useEffect(() => {
        if (!auth.isLoading&&auth.token===null) {
            navigate("/membership");
        }
    }, [])
    
  return (
    <div>
         <NavBar/>
         {user?user.rank!=="MEMBER" ?
          <Content/>:
         <Unathorized/> 
         :null
         }
         <Footer/>
    </div>
  )
}
