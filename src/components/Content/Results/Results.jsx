
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import classes from './Results.module.scss';
import DeclaringResults from './Declaring_Results/DeclaringResults';
import HomeButton from './Buttons/HomeButton';
import RestartButton from './Buttons/RestartButton';
let Results=(props)=>{
  let location=useLocation();
  let [shouldNavigate,setShouldNavigate]=useState(false);
  let result='';
  if(location.state !=null){
    switch(location.state.result){
      case 'tie':
        result='tie'
        break
      case 'cross':
        result='cross'
        break
      case 'zero':
        result='zero'
        break;
      default:
        result=''
    }
    return(
      <div  className={classes.Results}>
        <h1>Results</h1>
        <DeclaringResults result={result}/>
        <div className={classes.buttonsContainer}>
          <HomeButton />
          <RestartButton {...props} />
        </div>
      </div>
    )
  }else{
    return <Navigate to='/Game'/>
  }
}

export default Results;