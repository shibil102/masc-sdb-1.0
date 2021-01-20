import React, {useRef, useState} from 'react'
import classes from './StudentAdd.module.css'

const StudentAddForm = () => {
  const [image, setImage] = useState({
    imageUrl: undefined,
    errormsg: undefined,
    errorFixInfo: undefined,
  });
  const ImageHandler = (e) => {
    if (e.target.files[0]?.size) {
      const fileSize = e.target.files[0].size;
      if (fileSize > 100000) {
        setImage({
          errormsg: "oops!! file too large",
          errorFixInfo: "max image size 100kb",
        });
      } else {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            console.log(reader);
            const imageGet = reader.result;
            setImage({ imageUrl: imageGet });
          }
        };
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
      }
    }
  };
  const profileclick = useRef();

  const ProfileClickFun = () => {
    profileclick.current.click();
  }
return(

  <div className={classes.StudentAddForm}>
<div className={classes.Form}>
  <form action="" className={classes.RealForm} >
    <div onClick={ProfileClickFun} className={classes.ProfilePic}>
      <img className={classes.Image} src={image.imageUrl} alt={null} />
    </div>
   <p className={classes.Errormsg}> 
{image.errormsg}<br />
{image.errorFixInfo}
   </p>
    <input 
    className={classes.profilePictureAdd} 
    type="file" 
    onChange={ImageHandler}
    accept="image/*" 
    ref={profileclick} />

    <div className={classes.Fields}>
      <p className={classes.MainHead}>Personal Info</p>
      <label htmlFor="firstName" 
      className={classes.InputField} >FirstName</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />    
      
      <label htmlFor="secondName" 
      className={classes.InputField} >SecondName</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

<label htmlFor="nameOfParent" 
      className={classes.InputField} >ParentName</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

<label htmlFor="Homename" 
      className={classes.InputField} >House Name</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

        <label htmlFor="Post" 
      className={classes.InputField} >Post</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

<label htmlFor="City" 
      className={classes.InputField} >City</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

<label htmlFor="Pincode" 
      className={classes.InputField} >Pin-Code</label>
        <input type="number" 
        pattern="[0-9]"
        required />

<label htmlFor="mobilenumber" 
      className={classes.InputField} >Mobile Number</label>
        <input type="number" 
        pattern="[0-9]"
        required />

<label htmlFor="altmobileNumber" 
      className={classes.InputField} >Mobile Number(Optional)</label>
        <input type="number" 
        pattern="[0-9]"
        />

<label htmlFor="dob" 
      className={`${classes.InputField} ${classes.Dateofbirth}`} >DOB</label>
        <input type="date" 
        required
        />
        <p>Sex</p>
        <div className={classes.sexField}>
        <label for="sexinput" htmlFor="sexinput" 
      className={classes.InputField} >
        <input 
        id="sexinput"
        type="radio"
        value="Male"
        name="sex"
        required
        />
        Male
        </label>

        <label for="sexinput" htmlFor="sexinput" 
      className={classes.InputField}  >
        <input 
        id="sexinput"
        type="radio"
        value="Female"
        name="sex"
        required
        />
        Female
        </label>
        </div>

        <label htmlFor="bloodGroup" 
      className={`${classes.InputField} ${classes.Dateofbirth}`} >Blood Group</label>
        <select required >
          <option value="A+ (Positive)">A+ (Positive)</option>
          <option value="A- (Negative)">A- (Negative)</option>
          <option value="B+ (Positive)">B+ (Positive)</option>
          <option value="B- (Negative)">B- (Negative)</option>
          <option value="O+ (Positive)">O+ (Positive)</option>
          <option value="O- (Negative)">O- (Negative)</option>
          <option value="AB+ (Positive)">AB+ (Positive)</option>
          <option value="AB- (Negative)">AB- (Negative)</option>
          <option value="Other">Other</option>
        </select>
        
        <label htmlFor="residence" 
      className={classes.InputField} >Residence</label>
        <select required >
          <option value="With Parent">With Parent</option>
          <option value="With Relatives">With Relatives</option>
          <option value="College Hostel">College Hostel</option>
          <option value="Lodge">Lodge</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="relationshipwithguardien" 
      className={classes.InputField} >Relationship With Guardian</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

<label htmlFor="Ocupationofguardien" 
      className={classes.InputField} >Ocupation of Guardien</label>
        <input type="text" 
        pattern="[A-Za-z]"
        required />

<label htmlFor="religion" 
      className={classes.InputField} >Religion</label>
        <input type="text" 
        required />

<label htmlFor="cast" 
      className={classes.InputField} >Cast</label>
        <input type="text" 
        required />

<label htmlFor="mail" 
      className={classes.InputField} >E-Mail</label>
        <input type="mail" 
         />

<p>Martial Status</p>
<div className={classes.martialstatus}>
        <label for="martial" htmlFor="martial" 
      className={classes.InputField} >
        <input 
        id="martial"
        type="radio"
        value="True"
        name="martial"
        required
        />
        True
        </label>

        <label for="martial" htmlFor="martial" 
      className={classes.InputField} >
        <input 
        id="martial"
        type="radio"
        value="False"
        name="martial"
        required
        />
        False
        </label>
        </div>

        <label htmlFor="specialproblem" 
      className={classes.InputField} >Special Problem</label>
        <input type="text" 
         />

<p className={classes.MainHead}>Responsible Guardian Info</p>

<label htmlFor="name" 
      className={classes.InputField} >Name</label>
        <input type="text"
        required 
         />

<label htmlFor="relationship" 
      className={classes.InputField} >Relationship</label>
        <input type="text"
        required 
         />

<label htmlFor="relationship" 
      className={classes.InputField} >Relationship</label>
        <input type="text"
        required 
         />

<label htmlFor="age" 
      className={classes.InputField} >Age</label>
        <input type="number"
        required 
         />

<label htmlFor="guardianmobno" 
      className={classes.InputField} >Mobile Number</label>
        <input type="number"
        required 
         />

<label htmlFor="occupation" 
      className={classes.InputField} >Occupation</label>
        <input type="text" 
         />

<p className={classes.MainHead}>Qualification Info</p>

<p>Extra Curricular Activities</p>
<div className={classes.extrac}>
        <label for="extrac" htmlFor="extrac" 
      className={classes.InputField} >
        <input 
        id="extrac"
        type="checkbox"
        value="Arts"
        name="extrac"
       
        />
        Arts
        </label>

        <label for="extrac" htmlFor="extrac" 
      className={classes.InputField} >
        <input 
        id="extrac"
        type="checkbox"
        value="Sports"
        name="extrac"
        
        />
        Sports
        </label>
        
        <label for="extrac" htmlFor="extrac" 
      className={classes.InputField} >
        <input 
        id="extrac"
        type="checkbox"
        value="NCC"
        name="extrac"
        
        />
        NCC
        </label>

        <label for="extrac" htmlFor="extrac" 
      className={classes.InputField} >
        <input 
        id="extrac"
        type="checkbox"
        value="NSS"
        name="extrac"
        
        />
        NSS
        </label>
        </div>

        <label htmlFor="SpecialAchievments" 
      className={classes.InputField} >Special Achievments</label>
        <input type="text" 
         />

<label for="paper" htmlFor="paper" 
      className={classes.InputField} >SSLC/CBSE mark (%)
      </label>
        <input 
        type="number"
        required
        />

<label for="mark" htmlFor="sslcmark" 
      className={classes.InputField} >HSE Paper (,)
      </label>
        <input 
        type="text"
        required
        />
       
       <label for="mark" htmlFor="hsemark" 
      className={classes.InputField} >HSE/CBSE mark (%)
      </label>
        <input 
        type="number"
        required
        />


<label for="institution" htmlFor="institution" 
      className={classes.InputField} >Institution last attended
      </label>
        <input 
        type="text"
        required
        />

<label for="mark" htmlFor="hsemark" 
      className={classes.InputField} >HSE/CBSE mark (%)
      </label>
        <input 
        type="number"
        required
        />

<p className={classes.MainHead}>Admission Info</p>

<label htmlFor="admissionsecured" 
      className={classes.InputField}>admission secured</label>
        <select required >
          <option value="Management">Management</option>
          <option value="Merit">Merit</option>
          <option value="Muslim">Muslim</option>
          <option value="SC/ST">SC/ST</option>
          <option value="OBC/OEC">OBC/OEC</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="Course" 
      className={classes.InputField}>Course</label>
        <select required >
          <option value="BSC computer science">BSC computer science</option>
          <option value="BSC Physics">BSC Physics</option>
          <option value="BSC Microbiology">BSC Microbiology</option>
          <option value="BSC Maths">BSC Maths</option>
          <option value="BSC Chemistry">BSC Chemistry</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="BCOM TT">BCOM TT</option>
          <option value="BCOM TT">BCOM CA</option>
          <option value="BCOM Finance)">BCOM Finance</option>
          <option value="BCOM Islamic Finance">BCOM Islamic Finance</option>
          <option value="BA Multimedia">BA Multimedia</option>
          <option value="BA Mass Communication">BA Mass Communication</option>
          <option value="BA English">BA English</option>
          <option value="BA Arabic">BA Arabic</option>
          <option value="BA Hindi">BA Hindi</option>
          <option value="BA Malayalam">BA Malayalam</option>
        </select>

        <label for="admno" htmlFor="admno" 
      className={classes.InputField} >Admission Number
      </label>
        <input 
        type="number"
        required
        /> 

        <label for="batch" htmlFor="batch" 
      className={classes.InputField} >Batch From
      </label>
        <input 
        type="number"
        required
        />

<label for="batch" htmlFor="batch" 
      className={classes.InputField} >Batch To
      </label>
        <input 
        type="number"
        required
        /> 

    </div>
<input type="submit" value="Submit" className={classes.Submit} />
  </form>
</div>
  </div>
)
}

export default StudentAddForm
  
