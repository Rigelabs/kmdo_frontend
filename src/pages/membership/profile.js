import React, { useEffect } from 'react';
import { Card, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../actions/authActions';

export default function Profile() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser(auth.token));
        if (!auth.isAuthenticated && !auth.isLoading) {
            navigate("/membership");
        }
    }, [auth.isAuthenticated])

    const user = auth.user;
    return (
        <div>
            {user ?
                <>
                    <div className='dashboard'>
                      
                        <Card border={"dark"} hoverable className='dashboard-card-profile' >
                            <div className='dashboard-avatar'>
                                <Image  src={user.avatar} height={"100px"} width={"100px"} alt={user.full_name} />
                            </div>
                            <div className='dashboard-score'>
                                {user.score}
                            </div>
                            <div>
                                <h3 className='h3'>Name : {user.full_name}</h3>
                                <h3 className='h3'>Email : {user.email}</h3>
                                <h3 className='h3'>Contact : {user.contact}</h3>
                                <h3 className='h3'>Village : {user.village}</h3>
                                <h3 className='h3'>Area : {user.area}</h3>
                                <h3 className='h3'>Registration Number : {user.registration_number}</h3>
                                <h3 className='h3'>Occupation : {user.occupation}</h3>
                            </div>
                        </Card>
                  
                        <Card border={"dark"} hoverable className='dashboard-card-table' >
                            <h1 style={{color:"teal"}}>Member Contribution</h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Transaction_ID</th>
                                        <th>Event_ID</th>
                                        <th>Sender_Name</th>
                                        <th>Receiver_Name</th>
                                        <th>Amount</th>
                                        <th>Transaction_Date</th>
                                        <th>Method</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MQEROPP900</td>
                                        <td>EV009</td>
                                        <td>Joseph Kuria</td>
                                        <td>Jane Doe</td>
                                        <td>450</td>
                                        <td>26th Oct 2022</td>
                                        <td>MPESA</td>
                                    </tr>
                                   
                                    
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </>
                : null}
        </div>
    )
}
