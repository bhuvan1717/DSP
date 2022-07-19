import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import './Login.css'
import Demo from '../../demo/Demo';

const Login = () => {

    //example//

  
   
    const [togle, settogle] = useState(true);

    const handlechange = (e) => {

        console.log(e.target.name);
    }
    return (

        <div className='body1 d-flex align-items-center' >
            <div className='container '>
                <div className="row "  >
                    <div className=" col-md-6 col-sm-12 d-flex justify-content-center   p-5 ">

                        <div style={{ textAlign: "center" }}>
                            <h1>Data Processing</h1>
                            <h1>Software Application </h1>
                        </div>


                    </div>
                    <div className=" col-md-6 col-sm-12  ">
                        <div className="card p-3  " style={{ backgroundColor: '#3A3C51' }}>
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>

                                    <h5 className="card-title">Admin Login</h5>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="form-check form-switch">
                                        {/* <input className="form-check-input" type="checkbox" role="switch" placeholder="" id="flexSwitchCheckChecked" /> */}
                                        <Demo/>
                                    </div>

                                </div>


                                <div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><EmailIcon /></span>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="email"
                                            name="email"
                                            onChange={(e) => { handlechange(e) }} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><KeyIcon /></span>
                                        <input style={{ borderRight: "0px" }}
                                            type={togle ? "password" : "text"}
                                            className="form-control"
                                            placeholder="password"
                                            name="password"
                                            onChange={(e) => { handlechange(e) }} />
                                        <span disabled className="input-group-text" style={{ background: "white", borderLeft: "0px" }} onClick={() => { settogle(!togle) }}>{togle ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="btn btn-primary">login</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login