import React from 'react'
import { Modal } from 'react-bootstrap'
import Searchbar from '../searchbar/Searchbar'
import Button from '../button/Button'

const Selectusers = (props) => {
  const{selectuser, setselectuser}=props
  const handelUser=(e)=>{

    setselectuser(false)
  }
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={selectuser}

      >
        <Modal.Header  onClick={(e) =>handelUser(e)}  closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Searchbar />
          <h1> Conditional Rendering Tabel</h1>


          <Modal.Footer>
            <Button onClick={(e) =>handelUser(e)} title='Close' ></Button>
          </Modal.Footer>


        </Modal.Body>



      </Modal>





















    </div>
  )
}

export default Selectusers