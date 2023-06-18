import React from "react";
import classes from './topBar.module.css'
const Topbar = () => {
    return(
        <div className="App">
        <header className="App-header">
          <nav className={classes.topBar}> 
          <p>Product page</p>
          </nav>
        </header>
        </div>
    )
}
export default Topbar