import React from 'react'
import './Button.css'

const Button = ({ title }) => {
    return (
        <div>
            <div className='mb-2 mt-4'>
                <button style={{ backgroundColor: "#3A3C51", color: "white", borderRadius: '5px', border: 'none' ,padding:"5px,12px"}}>{title}</button>
            </div>

        </div>
    )
}

export default Button