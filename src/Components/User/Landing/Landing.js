import React from "react";
import Nav from '../Navigation/Nav'
import Addbtn from '../Addbutton/Addbutton'
import classes from "./Landing.module.css";
import StudentCard from '../StudentCard/StudentCard';

const Landing = () => {
    const Address = [{
            name: 'roshith',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419'
        
        },
        {
            name: 'shibin',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419' 
        },
        {
            name: 'nizam',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419' 
        },
        {
            name: 'nizam',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419' 
        },
        {
            name: 'nizam',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '6238744419' 
        },
        {
            name: 'roshith',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419'
        
        },
        {
            name: 'shibin',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419' 
        },
        {
            name: 'nizam',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419' 
        },
        {
            name: 'nizam',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '623874419' 
        },
        {
            name: 'nizam',
            admno: '3516',
            batch: '2019-2020',
            programme: 'bca',
            Mobno: '6238744419' 
        },
        ]
  return (
  <div className={classes.Landing}>
      <Nav />
      <div className={classes.StudentDataShow}>
          {
              Address.map((user, index) => {
                  return(
                    <StudentCard 
                    name={user.name}
                    admno={user.admno}
                    mobno={user.Mobno}
                    batch={user.batch}
                    programme={user.programme}
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
