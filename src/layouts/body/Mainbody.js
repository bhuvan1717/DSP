import React from 'react'
import Navigationbar from '../header/Navigationbar'
import './Mainbody.css'
import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';



const Mainbody = () => {
    return (
        <div>
            <Navigationbar /> {/* in app.js with condtional rendering */}

            <Nav className='navapg ' defaultActiveKey="/home" as="ul">
                <Nav.Item className='nav1' as="li">
                    <Nav.Link as={Link} to='approval'>APPROVAL</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav1' as="li">
                    <Nav.Link as={Link} to='projects' >PROJECTS</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav1' as="li">
                    <Nav.Link as={Link} to='groups' >GROUPS</Nav.Link>
                </Nav.Item>
            </Nav>

            <Outlet /> 

        </div>
    )
}

export default Mainbody