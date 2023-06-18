import React from "react";
import classes from './ProductPreview.module.css'
const productPreview = (props) =>{
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
return(
    <div className={classes.mmainContainer}>
    <div className={classes.productPreview}>
        <img src = {props.currentPreviewImage} alt="watch"/>
        {
            props.currentSelectedpos === 1 ? <div className={classes.heartRate}> 
            <i className="fa-solid fa-heart-pulse"></i>
        <p>78</p>
        </div> : <div className={classes.timedate}> 
        {`${currentHour}:${currentMinute}`}
        </div>
        } 
      </div>
      </div>
    
)
}

export default productPreview;