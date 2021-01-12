import React from "react";
import classes from "./Nav.module.css";
import {useHistory,Link} from 'react-router-dom'
const Option = () => {
  const history = useHistory()
  return (
    <div className={classes.Option}>
      <ul>
       <Link to="/"><li>Home</li></Link> 
       <Link to ="/report"><li>Report</li></Link> 
       <Link to ="/discard"><li>Discard</li></Link> 
       
        <li  className={classes.Logout} onClick={()=>{
          localStorage.removeItem('mascStudetDb')
          history.push('/login')
          
          }}> Logout</li>
      </ul>
    </div>
  );
};

export default Option;
