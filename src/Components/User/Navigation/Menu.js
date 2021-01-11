import React, {useState} from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import classes from "./Nav.module.css";

const Menu = () => {
      const token = localStorage.getItem('mascStudetDb');
      const [filterData,setFilterData] = useState([])

        const filter = ()=>{
              fetch('/student/filter',{
      headers:{
        "authorization": token.replace(/['"]+/g, '')
      }
    }).then(res=>res.json()).then(responce=>{
      console.log(responce);
      setFilterData(responce)
    })

        }

const [FilterToggle, setFilterToggle] = useState(false)

const FilterActivation = () => {
    setFilterToggle(true)
    console.log('on');
    filter()
}

const FilterDeActivation = () => {
    setFilterToggle(false)
    console.log('off');
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
            {
                      filterData.map((single,index)=>{
                        return <option key={index}>{single.batch}</option>
                      })
                    }
              
            </select>
            <label htmlFor="Semester">Semester</label>
            <select name="Semester">
                    {
                      filterData.map((single,index)=>{
                        return <option key={index}>{single.sem}</option>
                      })
                    }
            </select>
            <label htmlFor="Course">Course</label>
            <select name="Course">
            {
                      filterData.map((single,index)=>{
                        return <option key={index}>{single.course}</option>
                      })
                    }
            </select>
            <input className={classes.FilterSearchSubmit} type="button" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menu;
