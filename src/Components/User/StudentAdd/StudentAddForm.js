import React, { useState, useRef } from "react";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import classes from "./StudentAdd.module.css";

const StudentAddForm = () => {
const [personInfo, setPersonInfo] = useState(false)
const [guardienInfo, setGuardianInfo] = useState(false)
const [QualificationInfo, setQualificationInfo] = useState(false)
const [OtherInfo, setOtherInfo] = useState(false);
const [pic,setPic] = useState('');

/* mob2, dob, sex, bloodGroup,
        nameOfGuardian, addressOfGuardian, relationGuardin,
        occupationOfGuardian, religion, prevShool, residence,
        course, sem, batch, sslc, hss, specialProblem,
        recommanted, responsibleGuardianName, responsibleGuardianAge,
        responsibleGuardianMob, responsibleGuardianRelation */


//form data
const [lName,setLname] = useState('');
const [fName,setFname] = useState('')
const [mob1,setMob1] = useState('');
const [mob2,setMob2]  = useState('');
const [dob,setDob]  = useState('');
const [sex,setSex] = useState('');
const [bloodGroup,setBloodGorup] = useState('');
const [nameOfGuardian,setNameofGurdian] =  useState('');
const [addressOfGuardian,setAdressofGuardan] = useState('');
const [relationGuardian,setRelationGuardan] = useState('');
const [occupationOfGuardian,setOccuptinofGurdian] = useState('');
const [course,setCourse] = useState('');
const [sem,setSem] = useState('');
const [batch,setBatch] = useState('');
const [sslc,setSslc] = useState('');






const token = localStorage.getItem('mascStudetDb');

const postStudent = ()=>{
  fetch('student/newstudent',{
    method:'Post',
    headers:{
      'Content-Type': 'application/json',
      "authorization": token.replace(/['"]+/g, '')
    },
    body:JSON.stringify({
      lName,
      fName,
      course,
      sex,
      sem,
      mob1,
      mob2,
      bloodGroup,
      dob,
      nameOfGuardian,
      addressOfGuardian,
      relationGuardian,
      occupationOfGuardian,
      batch,
      sslc,
      pic,

    })
  }).then(res=>res.json()).then(responce=>{
    console.log(responce);
  })
}

const postPic = ()=>{
   //formdata object ||Currently its empty and more clarification go and read mozila doc you will understand much more about Formdata()
   console.log('in upload',image.imageUrl);
   const data = new FormData()

   //append the image with key value pair image is above const image 
   data.append('file', image.imageUrl)

   //put name of cloud upload/project name read cloudinary docs
   data.append('upload_preset', "mascStudent");

   //put name of cloud 
   data.append('cloud_name', "drm0dd1dj")

   //cloud base api insted fetch you can use axios like 3rd party libary
   fetch("https://api.cloudinary.com/v1_1/drm0dd1dj/image/upload", {
       method: "post",
       body: data
   }).then(res => res.json()).then(data => {
       console.log(data);
       setPic(data.url)
       if(pic){
         
         postStudent();
       }
       
       console.log("url", data.url);
   }).catch(e => console.log('error in upload', e))
}

const PersonInfoActivater = () => {
  setPersonInfo(!personInfo)
}
const GuardienActivater = () => {
  setGuardianInfo(!guardienInfo)
}
const OtherInfoActivater = () => {
  setOtherInfo(!OtherInfo)
}
const Qualification = () => {
setQualificationInfo(!QualificationInfo)
}

const Submit = () => {
  setPersonInfo(true)
  setGuardianInfo(true)
  setQualificationInfo(true)
  setOtherInfo(true)
 
}


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
  };
  return (
    <div className={classes.StudentAddForm}>
      <div className={classes.Form}>
        <p className={classes.Head}>Student Info Form</p>
        
        {/* form */}

        <form onSubmit={(e)=>{
          e.preventDefault()
          console.log('clicked',e);
          postPic()
          
        }}>
          <div onClick={ProfileClickFun} className={classes.ProfilePhoto}>
            <img className={classes.Photo} src={image.imageUrl} alt="" />
          </div>
          <ul className={classes.Error}>
            <li>{image.errormsg}</li>
            <li>{image.errorFixInfo}</li>
          </ul>
          <input
            type="file"
            onChange={ImageHandler}
            accept="image/png, image/jpeg, image/jpg"
            hidden
            ref={profileclick}
          />

<div onClick={PersonInfoActivater} className = {personInfo ? classes.PersonalinfoActive  : classes.Personalinfo}>
<p>Personal info</p>
{personInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" /> }
</div>
<div className={ personInfo ? classes.PersonalInfoData :  classes.PersonalInfoDataActivate}  >
  <label className={classes.normalInputLabel} htmlFor="firstname">Firstname</label>
  <input type="text" name="firstname" required onChange={(e)=>setFname(e.target.value)} />
  <label className={classes.normalInputLabel} htmlFor="lastname">Lastname</label>
  <input type="text" name="lastname" required onChange={(e)=>setLname(e.target.value)} />
  <label className={classes.normalInputLabel} htmlFor="homename">Home name</label>
  <input type="text" name="homename" required  />
  <label className={classes.normalInputLabel} htmlFor="post">Post</label>
  <input type="text" name="post" required  />
  <label className={classes.normalInputLabel} htmlFor="pincode">Pin-code</label>
  <input type="number" name="pincode" required  />
  <label className={classes.normalInputLabel} htmlFor="city">City</label>
  <input type="text" name="City" required  />
  <label className={classes.normalInputLabel} htmlFor="mobno">Mobile number</label>
  <input type="number" name="mobno" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12" required  />
  <label className={classes.normalInputLabel} htmlFor="altmobno">Alt Mobile number <span>(Optional)</span></label>
  <input type="number" name="altmobno"  />
  <label className={classes.normalInputLabel} htmlFor="altmobno">E mail</label>
  <input type="email" name="email"  />
  <label className={classes.normalInputLabel} htmlFor="dob">DOB</label>
  <input type="date" name="dob" required  />
  <label className={classes.normalInputLabel} htmlFor="parentname">Sex</label>
  <div className={classes.Sex}>
    <label className={classes.LabelsexInput} htmlFor="sex">
    <input className={classes.sexInput} type="radio" name="Sex" value="Male" required onClick={()=>console.log('male')} />
      Male</label>
  <label className={classes.LabelsexInput} htmlFor="sex">
  <input className={classes.sexInput} type="radio" name="Sex" value="Female" required onClick={()=>console.log('female')} />
    Female</label>
  
    <label className={classes.LabelsexInput} htmlFor="sex">
  <input className={classes.sexInput} type="radio" name="Sex" value="Other" required onClick={()=>console.log('other')} />
    Other</label>
  </div>
  <label className={classes.normalInputLabel} htmlFor="bGroup">Blood Group</label>
  <select>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="O+">O+</option>
    <option value="O-">O+</option>
    <option value="AB+">AB+</option>
    <option value="AB+">AB-</option>
    <option value="other">Other</option>
  </select>
  <label className={classes.normalInputLabel} htmlFor="Religion">Religion</label>
  <input type="religion" name="religion"  />

  <label className={classes.normalInputLabel} htmlFor="cast">Cast</label>
  <input type="text" name="Cast"  />

</div>

<div onClick={GuardienActivater} className={guardienInfo ?   classes.GuardianInfoActivate : classes.GuardianInfo }>
<p>Guardian info</p>
{guardienInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" /> }
</div>
<div className={ guardienInfo ?  classes.guardianInfoData : classes.guardianInfoDataActivate}>

<label className={classes.normalInputLabel} htmlFor="guardianname">Name</label>
<input type="text" name="guardianname" required  />

<label className={classes.normalInputLabel} htmlFor="relationship">Relationship</label>
<input type="text" name="relationship" required  />

<label className={classes.normalInputLabel} htmlFor="mobno">Mobile Number</label>
<input type="number" name="G-mobno"  />

<label className={classes.normalInputLabel} htmlFor="age">Age</label>
<input type="number" name="G-age"  />

<label className={classes.normalInputLabel} htmlFor="ocupation">Ocupation</label>
<input type="text" name="ocupation" required  />
<hr />

  <p className={classes.r_Head}>Responsible Guardian</p>
  <label className={classes.normalInputLabel} htmlFor="rguardianname">Name</label>
<input type="text" name="r-guardianname" required  />

<label className={classes.normalInputLabel} htmlFor="relationship">Relationship</label>
<input type="text" name="r-relationship" required  />

<label className={classes.normalInputLabel} htmlFor="mobno">Mobile Number</label>
<input type="number" name="r-mobno"  />

<label className={classes.normalInputLabel} htmlFor="age">Age</label>
<input type="number" name="r-age"  />

<label className={classes.normalInputLabel} htmlFor="ocupation">Ocupation</label>
<input type="text" name="r-ocupation"  />
</div>



<div onClick={Qualification} className={ QualificationInfo ?  classes.QualificationInfoActivate : classes.QualificationInfo }>
<p>Qualification info</p>
{QualificationInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" /> }
</div>
<div className={ QualificationInfo ? classes.QualificationData : classes.QualifiactionDataActivate }>

<label className={classes.normalInputLabel} htmlFor="percentage">Marks SSLC (%)</label>
<input type="number" name="percsntageOfSslc" required  />

<p className={classes.r_Head}>Marks in Qualifying Examination</p>

<label className={classes.normalInputLabel} htmlFor="subject">Institution Last Attended</label>
<input type="text" name="subject" required  />

  <label className={classes.normalInputLabel} htmlFor="subject">Subject(Course)</label>
<input type="text" name="subject" required  />

<label className={classes.normalInputLabel} htmlFor="Qualificationexam">Qualification Examination(%)</label>
<input type="number" name="Qualificationexam" required  />

<label className={classes.r_Head} htmlFor="etcCurricular">Extra Curricular Activities</label>
<div className={classes.etcCurricular}>
    <label className={classes.LabeletcInput} htmlFor="Arts">
    <input className={classes.CurricularInput} type="radio" name="etc" value="Arts" required  />
      Arts</label>
  <label className={classes.LabeletcInput} htmlFor="Sports">
  <input className={classes.CurricularInput} type="radio" name="etc" value="Sports" required  />
    Sports</label>
  
    <label className={classes.LabeletcInput} htmlFor="NCC">
  <input className={classes.CurricularInput} type="radio" name="etc" value="NCC" required  />
    NCC</label>

    <label className={classes.LabeletcInput} htmlFor="NSS">
  <input className={classes.CurricularInput} type="radio" name="etc" value="NSS" required  />
    NSS</label>


  </div>

  <label className={classes.normalInputLabel} htmlFor="SpecialAchievments">Special Achievments</label>
<input type="text" name="SpecialAchievments" required  />


</div>

<div onClick={OtherInfoActivater} className={ OtherInfo ?  classes.OtherInfoActive : classes.OtherInfo}>
<p>Other info</p>
{OtherInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" /> }
</div>
<div className={ OtherInfo ? classes.OtherInfoData : classes.OtherInfoDataActivate }>

<label className={classes.normalInputLabel} htmlFor="bGroup">Admission Secured</label>
  <select>
    <option value="Merit">Merit</option>
    <option value="Muslim">Muslim</option>
    <option value="SC/ST">SC/ST</option>
    <option value="OBC/OEC">OBC/OEC</option>
    <option value="Others">Others</option>
    <option value="Management">Management</option>
  </select>

  <label className={classes.normalInputLabel} htmlFor="residence">Residence</label>
  <select>
    <option value="With Parent">With Parent</option>
    <option value="With Relatives">With Relatives</option>
    <option value="College Hostel">College Hostel</option>
    <option value="Lodge">Lodge</option>
  </select>

  <label className={classes.r_Head} htmlFor="etcCurricular">Martial Status</label>
<div className={classes.Martial}>
    <label className={classes.MartialInput} htmlFor="True">
    <input className={classes.MartialStatus} type="radio" name="etc" value="True" required />
    True</label>
  <label className={classes.MartialInput} htmlFor="False">
  <input className={classes.MartialStatus} type="radio" name="etc" value="False" required />
    False</label>
  
  </div>
  <label className={classes.normalInputLabel} htmlFor="SpecialProblem">SpecialProblem</label>
<input type="text" name="SpecialProblem"  />

<label className={classes.normalInputLabel} htmlFor="Course">Course</label>
<input type="text" name="Course"  />

<label className={classes.normalInputLabel} htmlFor="Batch">Batch</label>
<label className={classes.normalInputLabel} htmlFor="BatchFrom">From</label>
<input type="Number" name="Batch"  />
<label className={classes.normalInputLabel} htmlFor="BatchTo">To</label>
<input type="Number" name="Batch"  />

<label className={classes.normalInputLabel} htmlFor="SpecialProblem">Sem</label>
<input type="text" name="Sem"  />
</div>


          <input className={classes.Submit} type="submit" value="Submit" onClick={Submit}  />
        </form>
      </div>
    </div>
  );
};

export default StudentAddForm;
