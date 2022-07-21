import React from 'react'
import Button from '../../components/button/Button'
import Searchbar from '../../components/searchbar/Searchbar'
import Tabel from '../../components/Tabel/Tabel'
import './Approval.css'
import data   from '../../dummydata/Appdummydata'

const Approval = () => {
    console.log(data,"data");
    return (
        <div className='mt-3'>
        <Searchbar />
        <Tabel data={data} />

        </div>
    )
}

export default Approval