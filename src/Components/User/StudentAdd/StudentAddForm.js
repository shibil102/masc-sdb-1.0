import React, { useState, useRef } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import classes from "./StudentAdd.module.css";

const StudentAddForm = () => {
  const [personInfo, setPersonInfo] = useState(false)
  const [guardienInfo, setGuardianInfo] = useState(false)
  const [QualificationInfo, setQualificationInfo] = useState(false)
  const [OtherInfo, setOtherInfo] = useState(false);
  const [pic, setPic] = useState('');




  //form data
  const [lName, setLname] = useState('');
  const [fName, setFname] = useState('')
  const [mob1, setMob1] = useState('');
  const [mob2, setMob2] = useState('');
  const [dob,setDob]  = useState('')
  const [sex,setSex] = useState('')
  let bloodGroup;
  let admissionSecured;
  const [nameOfGuardian, setNameofGurdian] = useState('');
  //address
  const [homeName, setHomename] = useState('');
  const [pincode, setPincode] = useState('');
  const [post, setPost] = useState('');
  const [city, setCity] = useState('');

  const [relationGuardin, setRelationGuardin] = useState('');
  const [occupationOfGuardian, setOccuptinofGurdian] = useState('');
  const [ageOfGuardian, setAgeOfGuardian] = useState('')
  const [course, setCourse] = useState('');
  let sem  
  let batch
  const [sslc, setSslc] = useState('');
  const [email, setEmail] = useState('');
  const [hss, setHss] = useState('');

  const [etcActivity,setEtcActivity]= useState('')
let residence
  const [religion, setReligion] = useState('');
  const [cast, setCast] = useState('');
  const [prevShool, setPrevshool] = useState('');

  const [recommanted, setRecommanted] = useState('');
  const [responsibleGuardianName, setResponsibleGuardianName] = useState('');
  const [responsibleGuardianAge, setResponsibleGuardianAge] = useState('');
  const [responsibleGuardianMob, setResponsibleGuardianMob] = useState('');
  const [responsibleGuardianRelation, setResponsibleGuardianRelation] = useState('');
  const [responsibleGuardianOccupation, setresponsibleGuardianOccupation] = useState('');
  const [specialAchiev, setSpecialAchiev] = useState('');
  const [maritalStatus, setMaritalStatus] = useState(Boolean);
  const [specialProblem, setSpecialProblem] = useState('');
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [prevCourse, setPrevCourse] = useState('')






  const token = localStorage.getItem('mascStudetDb');

  const postStudent = () => {
    fetch('student/newstudent', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        "authorization": token.replace(/['"]+/g, '')
      },
      body: JSON.stringify({
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
        occupationOfGuardian,
        batch,
        sslc,
        pic,
        homeName,
        pincode,
        post,
        city,
        relationGuardin,
        religion,
        prevShool,
        residence,
        recommanted,
        responsibleGuardianName,
        responsibleGuardianAge,
        responsibleGuardianMob,
        responsibleGuardianRelation,
        ageOfGuardian,
        hss,
        etcActivity,
        cast,
        responsibleGuardianOccupation,
        specialAchiev,
        maritalStatus,
        specialProblem,
        prevCourse,
        admissionSecured,
        email
      })
    }).then(res => res.json()).then(responce => {
      console.log(responce);
    })
  }

  const postPic = () => {
    //formdata object ||Currently its empty and more clarification go and read mozila doc you will understand much more about Formdata()
    console.log('in upload', image.imageUrl);
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
      if (pic) {

        // postStudent();
      }

      console.log("url", data);
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

        <form onSubmit={(e) => {
          e.preventDefault()
          console.log('clicked', e.target);
          bloodGroup = (e.target[14][0].value);
          admissionSecured = e.target[35][0].value;
          residence = e.target[36][0].value;
          sem = e.target[43][0].value;
          batch = from+'/'+to
          console.log('add',admissionSecured ,'res',residence,'sem',sem,'batch',batch,'dobs',
          dob,'sex',sex,'etc',etcActivity);
          
          // postPic()
          postStudent();

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

          <div onClick={PersonInfoActivater} className={personInfo ? classes.PersonalinfoActive : classes.Personalinfo}>
            <p>Personal info</p>
            {personInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" />}
          </div>
          <div className={personInfo ? classes.PersonalInfoData : classes.PersonalInfoDataActivate}  >
            <label className={classes.normalInputLabel} htmlFor="firstname">Firstname</label>
            <input type="text" name="firstname" required
              value={fName}
              onChange={(e) => setFname(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="lastname">Lastname</label>
            <input type="text" name="lastname" required
              value={lName}
              onChange={(e) => setLname(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="homename">Home name</label>
            <input type="text" name="homename" required
              value={homeName}
              onChange={(e) => setHomename(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="post">Post</label>
            <input type="text" name="post" required
              value={post}
              onChange={(e) => setPost(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="pincode">Pin-code</label>
            <input type="number" name="pincode" required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="city">City</label>
            <input type="text" name="City" required
              value={city}
              onChange={(e) => setCity(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="mobno">Mobile number</label>
            <input type="number" name="mobno" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12" required
              value={mob1}
              onChange={e => setMob1(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="altmobno">Alt Mobile number <span>(Optional)</span></label>
            <input type="number" name="altmobno"
              value={mob2}
              onChange={e => setMob2(e.target.value)}
            />

            <label className={classes.normalInputLabel} htmlFor="altmobno">E mail</label>
            <input type="email" name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {/* doubt */}
            <label className={classes.normalInputLabel} htmlFor="dob">DOB</label>
            <input type="date" name="dob" required
              value={dob}
              onChange={e => {

                setDob(e.target.value)
                console.log('dobs', dob);
              }}
            />

            <label className={classes.normalInputLabel} htmlFor="parentname">Sex</label>
            <div className={classes.Sex}>
              <label className={classes.LabelsexInput} htmlFor="sex">

                <input className={classes.sexInput} type="radio" name="Sex" value="Male" required onClick={(e) => {

                 setSex(e.target.value)
                  console.log('male', sex)
                }} />
                     Male</label>

              <label className={classes.LabelsexInput} htmlFor="sex">

                <input className={classes.sexInput} type="radio" name="Sex" value="Female" required
                  onClick={async (e) => {

                    setSex(e.target.value)
                    console.log('sex', sex)
                  }} />
                     Female</label>

              <label className={classes.LabelsexInput} htmlFor="sex">

                <input className={classes.sexInput} type="radio" name="Sex" value="Other" required
                  onClick={(e) => {

                    setSex(e.target.value)
                    console.log('sex', sex)
                  }} />
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
            <input type="religion" name="religion" onChange={e => setReligion(e.target.value)} />

            <label className={classes.normalInputLabel} htmlFor="cast">Cast</label>
            <input type="text" name="Cast"
              value={cast}
              onChange={e => setCast(e.target.value)} />

          </div>

          <div onClick={GuardienActivater} className={guardienInfo ? classes.GuardianInfoActivate : classes.GuardianInfo}>
            <p>Guardian info</p>
            {guardienInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" />}
          </div>

          <div className={guardienInfo ? classes.guardianInfoData : classes.guardianInfoDataActivate}>

            <label className={classes.normalInputLabel} htmlFor="guardianname">Name</label>
            <input type="text" name="guardianname" required
              value={nameOfGuardian}
              onChange={e => {
                setNameofGurdian(e.target.value)
              }} />

            <label className={classes.normalInputLabel} htmlFor="relationship">Relationship</label>
            <input type="text" name="relationship" required
              value={relationGuardin}
              onChange={e => {
                setRelationGuardin(e.target.value)
              }}
            />


            <label className={classes.normalInputLabel} htmlFor="age">Age</label>
            <input type="number" name="G-age"
              value={ageOfGuardian}
              onChange={e => {
                setAgeOfGuardian(e.target.value)
              }}
            />

            <label className={classes.normalInputLabel} htmlFor="ocupation">Ocupation</label>
            <input type="text" name="ocupation" required
              value={occupationOfGuardian}
              onChange={e => {
                setOccuptinofGurdian(e.target.value)
              }}
            />
            <hr />

            <p className={classes.r_Head}>Responsible Guardian</p>
            <label className={classes.normalInputLabel} htmlFor="rguardianname">Name</label>
            <input type="text" name="r-guardianname" required
              value={responsibleGuardianName}
              onChange={e => {
                setResponsibleGuardianName(e.target.value)
              }}
            />

            <label className={classes.normalInputLabel} htmlFor="relationship">Relationship</label>
            <input type="text" name="r-relationship" required
              value={responsibleGuardianRelation}
              onChange={e => {
                setResponsibleGuardianRelation(e.target.value)
              }} />

            <label className={classes.normalInputLabel} htmlFor="mobno">Mobile Number</label>
            <input type="number" name="r-mobno"
              value={responsibleGuardianMob}
              onChange={
                e => {
                  setResponsibleGuardianMob(e.target.value)
                }
              } />

            <label className={classes.normalInputLabel} htmlFor="age">Age</label>
            <input type="number" name="r-age"
              value={responsibleGuardianAge}
              onChange={e => {
                setResponsibleGuardianAge(e.target.value)
              }} />

            <label className={classes.normalInputLabel} htmlFor="ocupation">Ocupation</label>
            <input type="text" name="r-ocupation"
              value={responsibleGuardianOccupation}
              onChange={e => {
                setresponsibleGuardianOccupation(e.target.value);
              }}
            />
          </div>



          <div onClick={Qualification} className={QualificationInfo ? classes.QualificationInfoActivate : classes.QualificationInfo}>
            <p>Qualification info</p>
            {QualificationInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" />}
          </div>
          <div className={QualificationInfo ? classes.QualificationData : classes.QualifiactionDataActivate}>

            <label className={classes.normalInputLabel} htmlFor="percentage">Marks SSLC (%)</label>
            <input type="number" name="percsntageOfSslc" required
              value={sslc}
              onChange={e => {
                setSslc(e.target.value)
              }}
            />

            <p className={classes.r_Head}>Marks in Qualifying Examination</p>

            <label className={classes.normalInputLabel} htmlFor="subject">Institution Last Attended</label>
            <input type="text" name="subject" required
              value={prevShool}
              onChange={e => {
                setPrevshool(e.target.value)
              }}
            />

            <label className={classes.normalInputLabel} htmlFor="subject">Subject(Course)</label>
            <input type="text" name="subject" required
              value={prevCourse}
              onChange={e => {
                setPrevCourse(e.target.value)
              }}
            />

            <label className={classes.normalInputLabel} htmlFor="Qualificationexam">Qualification Examination(%)</label>
            <input type="number" name="Qualificationexam" required
              value={hss}
              onChange={e => {
                setHss(e.target.value)
              }}
            />

            <label className={classes.r_Head} htmlFor="etcCurricular">Extra Curricular Activities</label>
            <div className={classes.etcCurricular}>
              <label className={classes.LabeletcInput} htmlFor="Arts">
                <input className={classes.CurricularInput} type="radio" name="etc" value="Arts" required
                  onClick={e => {
                    setEtcActivity(e.target.value)
                  }}
                />
                    Arts</label>
              <label className={classes.LabeletcInput} htmlFor="Sports">

                <input className={classes.CurricularInput} type="radio" name="etc" value="Sports" required
                  onClick={e => {
                   setEtcActivity(e.target.value)
                  }}
                />
                     Sports</label>

              <label className={classes.LabeletcInput} htmlFor="NCC">
                <input className={classes.CurricularInput} type="radio" name="etc" value="NCC" required
                  onClick={e => {
                   setEtcActivity(e.target.value)
                  }}
                />
                 NCC</label>

              <label className={classes.LabeletcInput} htmlFor="NSS">
                <input className={classes.CurricularInput} type="radio" name="etc" value="NSS" required
                  onClick={e => {
                    etcActivity = e.target.value
                  }}
                />
                NSS</label>


            </div>

            <label className={classes.normalInputLabel} htmlFor="SpecialAchievments">Special Achievments</label>
            <input type="text" name="SpecialAchievments" required
              value={specialAchiev}
              onChange={e => {
                setSpecialAchiev(e.target.value)
              }} />


          </div>

          <div onClick={OtherInfoActivater} className={OtherInfo ? classes.OtherInfoActive : classes.OtherInfo}>
            <p>Other info</p>
            {OtherInfo ? <FaAngleUp color="#2d4059" /> : <FaAngleDown color="#2d4059" />}
          </div>
          <div className={OtherInfo ? classes.OtherInfoData : classes.OtherInfoDataActivate}>

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
                <input className={classes.MartialStatus} type="radio" name="mar" value="True"
                  onClick={() => setMaritalStatus(true)}
                  required
                />
                  True</label>

              <label className={classes.MartialInput} htmlFor="False">
                <input className={classes.MartialStatus} type="radio" name="mar" value="False"
                  onClick={() => {
                    setMaritalStatus(false)
                    console.log(maritalStatus);
                  }}
                  required />
                  False</label>

            </div>
            <label className={classes.normalInputLabel} htmlFor="SpecialProblem">SpecialProblem</label>
            <input type="text" name="SpecialProblem" value={specialProblem}
              onChange={e => {
                setSpecialProblem(e.target.value)
              }} />

            <label className={classes.normalInputLabel} htmlFor="Course">Course</label>
            <input type="text" name="Course" value={course}
              onChange={e => {
                setCourse(e.target.value)
              }} />

            <label className={classes.normalInputLabel} htmlFor="Batch">Batch</label>
            <label className={classes.normalInputLabel} htmlFor="BatchFrom">From</label>
            <input type="Number" name="Batch" value={from}
              onChange={e => {
                setFrom(e.target.value)
              }} />
            <label className={classes.normalInputLabel} htmlFor="BatchTo">To</label>
            <input type="Number" name="Batch" value={to}
              onChange={e => {
                setTo(e.target.value)
              }}
            />

            <label className={classes.normalInputLabel} htmlFor="SpecialProblem">Sem</label>
            <select>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
              <option value="Fifth">Fifth</option>
              <option value="Sixth">Sixth</option>
            </select>
          </div>


          <input className={classes.Submit} type="submit" value="Submit" onClick={Submit} />
        </form>
      </div>
    </div>
  );
};

export default StudentAddForm;
