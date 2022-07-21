import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import "./Table.css"

const Tabel = (props) => {
    const { data } = props
    const [tableData, setTableData] = useState([])
    console.log(data, "123");

    // const [posta, setposta] = useState()

    // const getdata = () => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setTableData(data)
    //         })
    // }


    // useEffect(() => { getdata() }, []) 

    useEffect(() => { data && setTableData(data) }, [])


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
                        <>
                            {tableData && tableData.map((item, index) => {
                                return (
                                    <tr key={item.id} >
                                        <td>{item.userID}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.mailId}</td>
                                        <td className='' ><button className='ACbtn mx-2' style={{ color: "#27A74A" }} > <CheckIcon /></button> <button className='ACbtn mx-2 ' style={{ color: "#CE3341", fontWeight: '80px' }} ><ClearIcon /> </button></td>
                                    </tr>
                                )
                            })}
                        </>




                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabel