import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, InputGroup, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { clearSuccess } from '../../actions/successActions';
import { areaAdd, loadAreas, loadVillages, villageAdd } from '../../actions/villages';
import "./admin.css";
export default function Villages() {
    const dispatch = useDispatch();
    const villages = useSelector(state => state.villages);
    const success = useSelector(state => state.success);
    const errors = useSelector(state => state.errors);
    const auth = useSelector(state => state.auth);
    const vills=villages.villages;
    const areas = villages.areas;
    const authToken =auth.token;
    const users=auth.users;
    const [village_modal, setvillage_modal] = useState(false);
    const [village_name, setvillage_name] = useState(false);
    const [area_modal, setarea_modal] = useState(false);
    const [area_name, setarea_name] = useState('');
    const [village_name_area, setvillage_name_area] = useState('');
    const [representative, setrepresentative] = useState({});
    useEffect(() => {

        dispatch(loadAreas());
        dispatch(loadVillages());
        dispatch(loadUsers({authToken:authToken}));
    }, [])
    const onVillage=(e)=>{
        e.preventDefault();
        dispatch(villageAdd({authToken:authToken,name:village_name}));
    }
    const onRepresentative=(id)=>{
        var user=users.find(usr=>usr.registration_number===id);
        setrepresentative({full_name:user.full_name,avatar:user.avatar,
            registration_number:user.registration_number})
    }
    const onArea=(e)=>{
        e.preventDefault();
        dispatch(areaAdd({authToken:authToken,name:area_name,village:village_name_area,representative:representative}));
    }
    return (
        <div>

            <div style={{ display: 'flex', flexDirection: "column", }}>
                <h2>Villages</h2>
                <Button variant="success" style={{ margin: "1rem", position: "absolute", right: 0, width: "10rem" }} onClick={e=>{setvillage_modal(!village_modal);dispatch(clearErrors())}}>Add Village</Button>
            </div>
            <div className='admin-table'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Number_of_Members</th>
                            <th>Number_of_Areas</th>

                        </tr>
                    </thead>
                    <tbody>
                        {villages ? villages.villages.map((village, key) => (
                            <tr>
                                <td>{key}</td>
                                <td>{village.name}</td>
                                <td>
                                    {users?users.filter(user=>user.village===village.name).length:0}
                                </td>
                                <td>
                                    {areas?areas.filter(area=>area.village===village.name).length:0}
                                </td>
                            </tr>

                        )) : null}
                    </tbody>
                </Table>
            </div>
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <div style={{ display: 'flex', flexDirection: "column", }}>
                    <h2>Areas</h2>
                    <Button variant="success" style={{ margin: "1rem", position: "absolute", right: 0, width: "10rem" }} onClick={e=>{setarea_modal(!area_modal);dispatch(clearErrors())}}>Add Area</Button>
                </div>

                <div className='admin-table'>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Village</th>
                                <th>Area_Representative</th>
                                <th>Number_of_Members</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {areas ? areas.map((area, key) => (
                                <tr>
                                    <td>{key}</td>
                                    <td>{area.name}</td>
                                    <td>{area.village}</td>
                                    <td>{area.representative?area.representative.full_name:"Not Assigned"}</td>
                                    <td>
                                    {users?users.filter(user=>user.area===area.name).length:0}
                                </td>
                                
                                </tr>

                            )) : null}
                        </tbody>
                    </Table>
                </div>
            </div>
            <Modal show={village_modal} className='member-update-modal'>
                <Modal.Header>Create a Village</Modal.Header>
                {Object.keys(errors.msg).length > 0 ?
                    <Alert variant='danger'>{errors.msg.message}</Alert>

                    : null
                }
                {Object.keys(success.msg).length > 0 ?
                    <Alert variant='success'>{success.msg.message}</Alert>

                    : null
                }
                <Form onSubmit={onVillage}>
                    <div className='form-rows'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Village Name</Form.Label>
                            <InputGroup>

                                <Form.Control type= "text" placeholder="Village Name" onChange={e => { setvillage_name(e.currentTarget.value) }} />
                                
                            </InputGroup>
                        </Form.Group>
                    </div>
                    <div className='form-rows'>
                        <Button variant="success" type="submit" className='form-button'
                         onClick={e => {  dispatch(clearErrors());dispatch(clearSuccess()) }} >
                            Create
                        </Button>
                        <Button variant="danger" className='form-button'
                            onClick={e => { setvillage_modal(!village_modal); dispatch(loadVillages());dispatch(loadAreas()); dispatch(clearErrors());dispatch(clearSuccess()) }} >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Modal>
            <Modal show={area_modal} className='member-update-modal'>
                <Modal.Header>Create an Area</Modal.Header>
                {Object.keys(errors.msg).length > 0 ?
                    <Alert variant='danger'>{errors.msg.message}</Alert>

                    : null
                }
                {Object.keys(success.msg).length > 0 ?
                    <Alert variant='success'>{success.msg.message}</Alert>

                    : null
                }
                <Form onSubmit={onArea}>
                    <div className='form-rows'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Area Name</Form.Label>
                            <InputGroup>

                                <Form.Control type= "text" placeholder="Area Name" onChange={e => { setarea_name(e.currentTarget.value) }} />
                                
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3">
                                    <Form.Label className='form-label'>Select Village</Form.Label>
                                    <Form.Select onChange={e => { setvillage_name_area(e.currentTarget.value) }} >
                                        <option>Select Village</option>
                                        {villages.villages?villages.villages.map(village=>(
                                        <option value={village.name}>{village.name}</option>
                                        )):<option>Select Village</option>}
                                    </Form.Select>

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='form-label'>Select Area Representative</Form.Label>
                                    <Form.Select onChange={e => { onRepresentative(e.currentTarget.value) }} >
                                        <option>Select Representative</option>
                                        {users?users.map(user=>(
                                        <option value={user.registration_number}>{user.full_name}</option>
                                        )):<option>Select Representative</option>}
                                    </Form.Select>

                                </Form.Group>
                    </div>
                    <div className='form-rows'>
                        <Button variant="success" type="submit" className='form-button'
                         onClick={e => {  dispatch(clearErrors());dispatch(clearSuccess()) }} 
                        >
                            Create
                        </Button>
                        <Button variant="danger" className='form-button'
                            onClick={e => { setarea_modal(!area_modal); dispatch(loadVillages());dispatch(loadAreas()); dispatch(clearErrors());dispatch(clearSuccess()) }} >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}
