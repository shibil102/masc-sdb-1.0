import React from 'react'
import Background from '../../../Asset/Astronaut.png'
import classes from './Auth.module.css'


const AuthSection = () => {

    return(
        <div className={classes.AuthSection}>
            
            <img 
            src={Background} 
            alt="" 
            className={classes.Background} 
            />
        </div>
    )
}


export default AuthSection

