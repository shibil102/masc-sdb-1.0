import React, {useRef, useState} from 'react'
import classes from './EditStudent.module.css'

const EditForm = () => {
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
  <div className={classes.EditForm}>
  <div className={classes.Form}>
  <form action="" className={classes.RealForm} >
    <div onClick={ProfileClickFun} className={classes.ProfilePic}>
      <img className={classes.Image} src={image.imageUrl} alt={null} />
    </div>
   <p className={classes.Errormsg}> 
{image.errormsg}
{image.errorFixInfo}
   </p>
    <input 
    className={classes.profilePictureAdd} 
    type="file" 
    onChange={ImageHandler}
    accept="image/jpg image/png image/jpeg" 
    ref={profileclick} />
  </form>
</div>
  </div>

)
}

export default EditForm