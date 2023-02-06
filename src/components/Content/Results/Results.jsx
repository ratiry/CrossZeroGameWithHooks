
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Results.module.scss';
import DeclaringResults from './Declaring_Results/DeclaringResults';
import HomeButton from './Buttons/HomeButton';
import RestartButton from './Buttons/RestartButton';
let Results=(props)=>{
  let [shouldNavigate,setShouldNavigate]=useState(false);
  useEffect(()=>{
    if(true==null){
      setShouldNavigate(true);
    }
  },[])

  if(shouldNavigate){
    return <Navigate to='/Game'/>
  }
  return(
    <div  className={classes.Results}>
      <h1>Results</h1>
      <DeclaringResults result={'tie'}/>
      <div className={classes.buttonsContainer}>
        <HomeButton />
        <RestartButton  />
      </div>
    </div>
  )
}

export default Results;