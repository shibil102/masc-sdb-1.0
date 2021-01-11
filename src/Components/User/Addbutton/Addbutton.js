import React from 'react'
import { FaPlus } from "react-icons/fa";
import classes from './Addbutton.module.css'

const Addbutton = () => {
    return(
<div className={classes.Addbutton}>
    <FaPlus size="20px" color="#fafafa" />
</div>
    )
}

export default Addbutton

