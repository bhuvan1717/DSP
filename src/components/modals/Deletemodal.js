import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import img from '../../assets/DeleteLogo.png'
import './Deletemodal.css'

const Deletemodal = () => {
    return (
        <div>
            <Modal

             style={{marginTop:"40px" }}

                top
                show={true}
            >
                <Card >
                    <div className='d-flex mt-3 justify-content-center '>
                        <Card.Img className='image' variant="top" src={img} />
                    </div >
                  
                        <div className='d-flex flex-column mt-3 align-items-center' >
                            <Card.Title>Are you sure to delete this record? </Card.Title>
                           
                                You can't undo this operation
                           
                        </div>

                   
                    <div className='yndiv d-flex mt-4 mb-4 justify-content-center'>
                        <Button className='ynbtn mx-2 '  >Yes</Button> <Button className='ynbtn mx-2  ' >No</Button>
                    </div>
                </Card>


                



            </Modal>
        </div>
    )
}

export default Deletemodal