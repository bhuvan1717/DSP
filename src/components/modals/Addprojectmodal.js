import React, { useState } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import Button from '../button/Button'
import './Addprojectmodal.css'
import Selectusers from './Selectusers'


const Addprojectmodal = (props) => {

    const { show, setshow } = props



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
                show={show}

            >
                <Modal.Header onClick={() => setshow(false)} closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Project Name :
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Project Description :
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalSelectUsers">
                            <Form.Label as="legend" column sm={2}>
                                Select Users :
                            </Form.Label>
                            <Col>
                                <div className=' ug d-flex '>
                                    <div > <Button title='Add User'
                                        //  onClick={(e)=>setselectuser(true),setshow(false)}
                                        onClick={e => handelModel(e)}

                                    ></Button></div>
                                    <div style={{ marginLeft: '5px' }}>  <Button title='Add Groups'></Button></div>

                                </div>

                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Modal.Footer>
                            <Button title='Create' ></Button>
                        </Modal.Footer>
                    </Form>








                </Modal.Body>



            </Modal>
            <Selectusers selectuser={selectuser} setselectuser={setselectuser} />

        </div>

    )
}

export default Addprojectmodal