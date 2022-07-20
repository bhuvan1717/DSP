import React,{useState} from 'react'
import {  Col, Form, Modal, Row} from 'react-bootstrap'
import Selectusers from './Selectusers'
import Button from '../button/Button'


const AddGroup = (props) => {
    const{addgroup,setaddgroup}=props

    
    const [selectuser, setselectuser] = useState(false)

    const handelModel = (e) => {
        e.preventDefault()
        setselectuser(true);

    }


    return (
        <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={addgroup}
            >
                <Modal.Header onClick={()=>setaddgroup(false)} closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Group 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Group Name :
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalSelectUsers">
                            <Form.Label as="legend" column sm={2}>
                                Select User :
                            </Form.Label>
                            <Col>
                                <Button title ='Add Users'
                                onClick={e => handelModel(e)}
                                ></Button>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label column sm={2}>Group Access :</Form.Label>

                                <Form.Check
                                    inline
                                    label="Read"
                                    name="group1"
                                    type='checkbox'
                                />
                                <Form.Check
                                    inline
                                    label="Write"
                                    name="group1"
                                    type='checkbox'
                                />
                                <Form.Check
                                    inline
                                    label="Execute"
                                    type='checkbox'
                                />
                           
                        </Form.Group>


                        <Modal.Footer>
                            <Button >Create</Button>
                        </Modal.Footer>
                    </Form>








                </Modal.Body>



            </Modal>
            <Selectusers selectuser={selectuser} setselectuser={setselectuser} />
        </div>
    )
}

export default AddGroup