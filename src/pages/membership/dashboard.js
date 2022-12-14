import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDashTab } from '../../actions/utilitiesActions';
import NavBar from '../../components/navbar/navbar';
import "./dashboard.css";
import Members from './members';
import Profile from './profile';

export default function Dashboard() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const utilities=useSelector(state=>state.utilities);
    const user=useSelector(state=>state.auth.user);
    const tab=utilities.dashboard_tab;
    const [current_tab, setcurrent_tab] = useState(tab);

    const ondash_tab=(value)=>{
        dispatch(setDashTab(value));
    }
 
    return (

        < >
            <NavBar />
            <div className='dashboard-menu'>
                <ButtonToolbar>
                    <ButtonGroup >
                        <Button onClick={e=>{ondash_tab("account");setcurrent_tab("account")}}>Account</Button>
                        <Button onClick={e=>{ondash_tab("events");setcurrent_tab("events")}}>Events</Button>
                        <Button  onClick={e=>{ondash_tab("members");setcurrent_tab("members")}}>Members</Button>
                        <Button  onClick={e=>{ondash_tab("gallery");setcurrent_tab("gallery")}}>Gallery</Button>
                       {user?user.rank==="MEMBER"?
                       null
                        :<Button onClick={e=>navigate("/admin")}>Admin</Button>:null}
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div >
                {
                    current_tab==="account" ?
                    <Profile/>:
                    current_tab==="members" ?
                    <Members/>:
                    null
                }
            </div>
        </>
    )
}
