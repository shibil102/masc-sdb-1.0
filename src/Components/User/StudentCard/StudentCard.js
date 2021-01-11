import React from 'react'
import Image from '../../../Asset/tamara-bellis-Brl7bqld05E-unsplash.jpg'
import classes from './StudentCard.module.css'

const StudentCard = (props) => {
    return(
        <div className={classes.StudentCardContainer}>
<div className={classes.StudentPhoto}>
<div className={classes.Photo}>
    <img src={Image} alt=""/>
</div>
</div>
<div className={classes.StudentDetails}>
<p className={classes.name}><span>Name :{props.name || 'Loading'} </span></p>
<p className={classes.course}><span>course :{props.programme || 'Loading'} </span></p>
<p className={classes.batch}><span>batch :{props.batch || 'Loading'} </span></p>
<p className={classes.admno}><span>Admnno :f**k </span></p>
</div>
        </div>

    )
}

export default StudentCard
