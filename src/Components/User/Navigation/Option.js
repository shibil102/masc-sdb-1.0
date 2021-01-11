import React from "react";
import classes from "./Nav.module.css";
import {useHistory} from 'react-router-dom'
const Option = () => {
  const history = useHistory()
  return (
    <div className={classes.Option}>
      <ul>
        <li>Home</li>
        <li>Report</li>
        <li  className={classes.Logout} onClick={()=>{
          localStorage.removeItem('mascStudetDb')
          history.push('/login')
          
          }}> Logout</li>
      </ul>
    </div>
  );
};

export default Option;
