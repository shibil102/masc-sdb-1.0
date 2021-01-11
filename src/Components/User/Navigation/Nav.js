import classes from './Nav.module.css'
import React from 'react'
import Option from './Option'
import Menu from './Menu'

const Nav = () => {
    return(
        <div className={classes.Nav}>
            <Menu />
            <Option />
        </div>
    )
}
export default Nav
