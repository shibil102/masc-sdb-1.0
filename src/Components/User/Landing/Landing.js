import React, { useEffect, useState } from "react";
import Nav from '../Navigation/Nav'
import Addbtn from '../Addbutton/Addbutton'
import classes from "./Landing.module.css";
import StudentCard from '../StudentCard/StudentCard';
import { useHistory } from 'react-router-dom'

const Landing = () => {
    const history = useHistory()
    const token = localStorage.getItem('mascStudetDb');
    const [Address, setAddress] = useState([]);

    
    const Call = () => {
        useEffect(() => {

            fetch('/student/all', {
                headers: {
                    "authorization": token.replace(/['"]+/g, '')
                }
            }).then(res => res.json())
                .then(responce => {
                    setAddress(responce);
                    console.log(responce);
                })

        }, [])
    }

    if (token) {
        Call()

    } else {
        history.push('/login')
    }



    return (
        <div className={classes.Landing}>
            <Nav />
            <div className={classes.StudentDataShow}>
                {
                    Address.map((user, index) => {
                        return (
                            <StudentCard
                                name={user.name}
                                admno={user.admno}
                                mobno={user.mob1}
                                batch={user.batch}
                                programme={user.course}
                            />

                        )
                    })
                }
            </div>
            <Addbtn />
        </div>
    )
};

export default Landing;
