import React, { Component }from 'react';
import classes from'./App.module.css';
import ProductPreview from './ProductPreview/ProductPreview'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductData from './ProductData/ProductData';
import Topbar from './Top Bar/topbar';
class App extends Component {
 state = {
  productData: ProductData,
  currentPreviewpos: 0,
  currentSelectedpos: 0
 }
 onColorOptionClick = (pos) =>
 {
  this.setState({currentPreviewpos: pos})
}
  onFeatureOptionClick = (pos) => {
    
    this.setState({currentSelectedpos: pos})
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    if(nextState.currentPreviewpos === this.state.currentPreviewpos)
    {
      return false;
    }
    return true;
  }
  render() {
    // console.log("rendered in APPjs")
    return (
      <div className="App">
        <Topbar />
        <div className={classes.mainContainer}>
          <div className={classes.productPreview}>
  
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewpos].imageUrl} currentSelectedpos={this.state.currentSelectedpos}  />
          </div>
          <div className={classes.productData}>
  
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewpos={this.state.currentPreviewpos} onFeatureOptionClick={this.onFeatureOptionClick} currentSelectedpos={this.state.currentSelectedpos}/>
          </div>
        </div>
        
        </div>
    );
  }
}

export default App;
