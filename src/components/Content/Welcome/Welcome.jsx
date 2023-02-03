import classes from './Welcome.module.scss';
import Appclasses from './../../../App.module.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
let Welcome=()=>{
  let [redirect,Setredirect] = useState(false);
  if(!redirect){
    return(
      <div className={classes.Welcome + ' ' + Appclasses.container }>
        <p>
          Hello, BlaBlaBla
        </p>
        <p>
          Do you dare to < strong>lose</strong>  to the dumbest computer player of tic tac toe?
        </p>
        <button className={classes.Start_button} onClick={()=> Setredirect(true)}><span>Just Do it</span></button>
      </div>
    )
  }else{
    return(
      <Navigate to={'/Game'}/>
    )
  }
}
export default Welcome;