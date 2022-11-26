import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import { BsGear, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { loadBoard, memberRemove, memberUpdate } from '../../actions/boardActions';
import { clearErrors } from '../../actions/errorActions';
import FloatingButton from '../../components/buttons/floatingButton';
import Spinner from '../../components/spinner/spinners';


export default function Committee() {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board);
    const auth = useSelector(state => state.auth);
    const errors = useSelector(state => state.errors);
    const success = useSelector(state => state.success);
    const authToken =auth.token;
    const members = board.board;
    const [board_update_modal, setboard_update_modal] = useState(false);
    const [role, setrole] = useState(null);
    const [reg_number, setreg_number] = useState(null);
    useEffect(() => {

        dispatch(loadBoard());
    }, [board.token])
    const onUpdate = () => {
        dispatch(memberUpdate({role:role,registration_number:reg_number,authToken:authToken}))
    }
    const removeMember=(reg_number)=>{
        dispatch(memberRemove({registration_number:reg_number,authToken:authToken}))
    }
    return (
        <div>
            {board.isLoading ? <Spinner /> :
                <>
                    <FloatingButton/>
                    <div className='admin-table'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Reg_Number</th>
                                    <th>Full_Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members ? members.map((member, key) => (
                                    <tr>
                                        <td>{key}</td>
                                        <td>{member.registration_number}</td>
                                        <td>{member.full_name}</td>
                                        <td>{member.contact}</td>
                                        <td>{member.email}</td>
                                        <td>{member.role}</td>
                                        
                                        <td>
                                            <BsGear style={{ marginRight: "15px", color: "green" }} size={18}
                                             onClick={e => { setboard_update_modal(!board_update_modal);
                                                 setreg_number(member.registration_number);dispatch(clearErrors()) }} />
                                            <BsTrash style={{ color: "red" }} size={18}  
                                                onClick={e => { removeMember(member.registration_number);dispatch(clearErrors()) }}/>
                                        </td>
                                    </tr>

                                )) : null}
                            </tbody>
                        </Table>
                    </div>

                    <Modal show={board_update_modal} className='member-update-modal'>
                        <Modal.Header>Update Committee Member</Modal.Header>
                        {Object.keys(errors.msg).length > 0 ?
                            <Alert variant='danger'>{errors.msg.message}</Alert>

                            : null
                        }
                        {Object.keys(success.msg).length > 0 ?
                            <Alert variant='success'>{success.msg.message}</Alert>

                            : null
                        }
                        <Form onSubmit={onUpdate}>
                            <div className='form-rows'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='form-label'>Member Role</Form.Label>
                                    <Form.Select onChange={e => { setrole(e.currentTarget.value) }} >
                                        <option>Change Member Role</option>
                                        <option value={"CHAIR_PERSON"}>CHAIR PERSON</option>
                                        <option value={"TREASURER"}>TREASURER</option>
                                        <option value={"SECRETARY"}>SECRETARY</option>
                                        <option value={"BOARD_MEMBER"}>BOARD MEMBER</option>
                                    </Form.Select>

                                </Form.Group>
                            </div>
                            <div className='form-rows'>
                                <Button variant="success" type="submit" className='form-button'>
                                    Update
                                </Button>
                                <Button variant="danger" className='form-button'
                                    onClick={e => { setboard_update_modal(!board_update_modal); dispatch(loadBoard);dispatch(clearErrors()) }} >
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Modal>
                </>
            }
        </div>
    )
}
