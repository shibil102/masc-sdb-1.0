import React, {useState} from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import classes from "./Nav.module.css";

const Menu = () => {

const [FilterToggle, setFilterToggle] = useState(false)

const FilterActivation = () => {
    setFilterToggle(true)
}

const FilterDeActivation = () => {
    setFilterToggle(false)
}

  return (
    <div className={classes.Menu}>
      <header className={classes.header}>
        <p className={classes.MainHeader}>MASC Students DB</p>
        <div className={classes.FilterDiv}>
          <button className={classes.Filter} onClick={FilterActivation} >
            <FaFilter size="20px" color="#2d4059" />
          </button>
        </div>
      </header>
      <div className={FilterToggle ? classes.Filtercard : classes.FiltercardDeactive}>
          {/* Exit */}
        <div className={classes.Exit}>
          <button className={classes.FilterClose} onClick={FilterDeActivation} >
            <FaTimes size="20px" color="#2d4059" />
          </button>
        </div>
        {/* Form */}
        <div className={classes.Form}>
          <p className={classes.FilterHead}>Filter</p>
          <form action="" className={classes.FilterserchForm}>
            <label htmlFor="Batch">Batch</label>
            <select name="Batch">
              <option>2005-2008</option>
              <option>2006-2009</option>
              <option>2007-2010</option>
              <option>2008-2011</option>
              <option>2009-2012</option>
              <option>2010-2013</option>
            </select>
            <label htmlFor="Semester">Semester</label>
            <select name="Semester">
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
              <option>Fourth</option>
              <option>Fifth</option>
              <option>Sixth</option>
            </select>
            <label htmlFor="Course">Course</label>
            <select name="Course">
              <option>BCA</option>
              <option>BSC Computer Science</option>
              <option>BSC MicroBiology</option>
              <option>BCOM TT</option>
              <option>BA English</option>
              <option>BA Malayalm</option>
            </select>
            <input className={classes.FilterSearchSubmit} type="Submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menu;
