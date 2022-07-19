import React from 'react'
import './Navigationbar.css'
import { OverlayTrigger, Popover, Button, Navbar, Nav, NavDropdown, Container, Offcanvas, Card } from 'react-bootstrap'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Navigationbar = () => {
  return (
    <div className='navbg' style={{ backgroundColor: "#3A3C51", color: "white" }} >
      <div className='mx-5'>
        <Navbar bg="" className="nav d-flex justify-content-between">
          <div style={{ textAlign: "center" }}>
            <h3>Data Processing Software Application</h3>
          </div>
          <OverlayTrigger
            trigger="click"
            key='bottom'
            placement='bottom'
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <>
                  <Card border="light" style={{ width: '11rem' , padding:"0px 0px " , paddingTop:"20px"}}>

                    <Card.Body >
                      <Card.Text  className='d-flex justify-content-center' >
                        <div>

                          <AccountCircleOutlinedIcon fontSize='2rem' style={{margin:'0px 55px' }} />
                          <h5 style={{margin:'0px 40px' }}>Admin</h5>
                          <h6 style={{margin:'4px'}}>admin@gmail.com</h6>
                        </div>
                      </Card.Text>
                      <Card.Footer className='bt-5px d-flex justify-content-between' style={{margin:'0px -17px', backgroundColor:"white" }}>Logout <ExitToAppIcon />  </Card.Footer>
                    </Card.Body>
                  </Card>
                </>
              </Popover>
            }
          >
            <Button className='button d-flex mx-5' variant="" style={{ backgroundColor: 'white', color: 'black' }}> <AccountCircleOutlinedIcon /> <h5 > Welcome Admin </h5></Button>
          </OverlayTrigger>
        </Navbar>
      </div>
    </div>
  )
}

export default Navigationbar