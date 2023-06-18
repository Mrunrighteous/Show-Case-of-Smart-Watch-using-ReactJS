import React from "react"
import classes from './ProductDetails.module.css'

const ProductDetails = (props) =>
{
  
    
    
    const colorOptions = props.data.colorOptions.map((item,pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewpos)
        {
            classArr.push(classes.selectedProduct)
        }
        return (
        <img  key={pos} className={classArr.join(' ')}src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}/>
        )
    })
    const Featurelist = props.data.featureList.map((item, pos) =>{
      const classArr = [classes.featureItem]
      if (pos === props.currentSelectedpos)
      {
        classArr.push(classes.selectedFeatureItem)
      }  
      
      return (

            <button onClick={() => props.onFeatureOptionClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })

    return (
<div className={classes.productData}>
      <h1 className={classes.productTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>
      <h3 className={classes.SectionHeading}> Select Colors</h3>
      <div>
        {colorOptions}
        {/* <img className={[classes.ProductImage, classes.selectedProduct].join('  ')}src="https://imgur.com/iOeUBV7.png" alt="black color watch" />
        <img className={classes.ProductImage}src="https://imgur.com/PTgQlim.png" alt="Red color watch" />
        <img className={classes.ProductImage}src="https://imgur.com/Mplj1YR.png" alt="blue color watch" />
        <img className={classes.ProductImage}src="https://imgur.com/xSIK4M8.png" alt="purple color watch" /> */}
      </div>
      
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        {Featurelist}
      </div>
    <button className={classes.primaryButton}>Buy Now</button>
      </div>
    )
}

export default ProductDetails
