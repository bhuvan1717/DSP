import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import "./Table.css"

const Tabel = () => {
    /* 
        const [posta, setposta] = useState()
    
        const getdata = () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    setposta(data)
                })
        }
    
    
        useEffect(() => { getdata() }, []) */

    return (
        <div>
            <div className="mx-5 table-responsive">
                <table className="table">
                    <thead className="tableheading" >
                        <tr style={{ backgroundColor: '#3A3C51', color: 'white', paddingLeft: "30px", textAlign: "center" }}>
                            <td >User ID</td>
                            <td >User Name</td>
                            <td >Mail ID</td>
                            <td >Status</td>

                        </tr>
                    </thead>
                    <tbody id="table_body" className='table-light' style={{ textAlign: "center" }}>

                        <>
                            {/*
                        {posta && posta.map((values) => {
                            return (
                                <tr key={values.id}>
                                    <th>{values.id}</th>
                                    <th>{values.userId}</th>
                                    <th>{values.title}</th>
                                    <th>{values.body}</th>
                                </tr>
                            )
                        })} 
                        */}
                        </>
                        <tr >
                            <td>1</td>
                            <td>Madan</td>
                            <td>madan@gmail.com</td>
                            <td className='' ><button className='ACbtn mx-2' style={{ color: "#27A74A" }} > <CheckIcon  /></button> <button className='ACbtn mx-2 ' style={{ color: "#CE3341", fontWeight: '80px' }} ><ClearIcon  /> </button></td>

                        </tr>




                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabel