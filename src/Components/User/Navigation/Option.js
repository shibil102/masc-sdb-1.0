import React from "react";
import classes from "./Nav.module.css";

const Option = () => {
  return (
    <div className={classes.Option}>
      <ul>
        <li>Home</li>
        <li>Report</li>
        <li className={classes.Logout}>Logout</li>
      </ul>
    </div>
  );
};

export default Option;
