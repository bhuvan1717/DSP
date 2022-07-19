import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Searchbar.css'
import Button from '../button/Button';

const Searchbar = () => {
    return (
        <div className='mx-5'>
            <div className="search-input ">
                <input className="apg " style={{ outline: 'none' }} type="text" placeholder="Search" aria-label="Search" />
                <span className="input-group-text" style={{ background: "white", border: "none", marginLeft: "-10px" }} ><SearchOutlinedIcon /></span>
            </div>
        </div>
    )
}

export default Searchbar