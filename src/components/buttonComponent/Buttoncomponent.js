/* import React from 'react'
import { Button, makeStyles } from "@material-ui/core";


const Buttoncomponent = ({
    label = "Button",
    variant = "contained",//outlined,text
    size = "small",// medium , large
    color = 'default',
    style = {},
    muiProps = "",
    showIcon = false,
    iconSize = '20',
    iconColor = "",
    iconOrintation = "start", // end
    disabled = false,
    onClick = () => { },
}) => {



    return (
        <div>
            <Button
                color={color}
                style={style}
                variant={variant}
                size={size}
                disabled={disabled}
                className={`${muiProps}`}
                onClick={onClick}
            >{label}</Button>
        </div>
    )
}

export default Buttoncomponent */