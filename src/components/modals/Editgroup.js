import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Tabel from '../Tabel/Tabel'

const Editgroup = () => {
    const title = [ "User Name",""]

  return (
    <div>
        <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Group
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


                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalSelectUsers">
                            <Col>
                                <Button type="submit">Add Users</Button>
                            </Col>
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Tabel title={title}/>
                            
                        </Form.Group>

                       

                        <Modal.Footer>
                            <Button >Update</Button>
                        </Modal.Footer>
                    </Form>








                </Modal.Body>



            </Modal>
    </div>
  )
}

export default Editgroup