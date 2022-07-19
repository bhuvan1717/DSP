import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const Addprojectmodal = () => {
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
                                <Button type="submit">Add Users</Button> <Button type="submit">Add Groups</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Modal.Footer>
                            <Button >Create</Button>
                        </Modal.Footer>
                    </Form>








                </Modal.Body>



            </Modal>
        </div>
    )
}

export default Addprojectmodal