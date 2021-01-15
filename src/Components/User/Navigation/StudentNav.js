import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import classes from './Nav.module.css'

const StudentNav = () => {
  return (
    <div className={classes.StudentNav}>
      <button>
        <FaChevronLeft size="20px" color="#2d4059" />
      </button>
      <p>MASC Students DB</p>
    </div>
  );
};

export default StudentNav;
