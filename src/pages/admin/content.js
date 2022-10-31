import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setAdminTab } from '../../actions/utilitiesActions';
import Members from './members';

export default function Content() {
    const [current_tab, setcurrent_tab] = useState('members');
    const dispatch=useDispatch();
    const onadmin_tab=(value)=>{
        dispatch(setAdminTab(value));
    }
    
    
  return (
    <div>
 <div className='dashboard-menu'>
                <ButtonToolbar>
                    <ButtonGroup >
                       
                        <Button  onClick={e=>{onadmin_tab("members");setcurrent_tab("members")}}>Members</Button>
                        <Button  onClick={e=>{onadmin_tab("comittee");setcurrent_tab("comittee")}}>Comittee</Button>
                        <Button  onClick={e=>{onadmin_tab("villages");setcurrent_tab("villages")}}>Villages</Button>
                        <Button  onClick={e=>{onadmin_tab("programs");setcurrent_tab("programs")}}>Programs</Button>
                        <Button  onClick={e=>{onadmin_tab("events");setcurrent_tab("events")}}>Events</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div >
                {
                    current_tab==="members" ?
                    <Members/>:
                    null
                }
            </div>
    </div>
  )
}
