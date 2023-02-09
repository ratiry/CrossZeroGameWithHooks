
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Results.module.scss';
import DeclaringResults from './Declaring_Results/DeclaringResults';
import HomeButton from './Buttons/HomeButton';
import RestartButton from './Buttons/RestartButton';
let Results=(props)=>{
  let [shouldNavigate,setShouldNavigate]=useState(false);
  let result='';
  useEffect(()=>{
    if(props.result.player==null){
      setShouldNavigate(true);
    }else{

    }
  },[])
  switch(props.result.player){
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
  if(shouldNavigate){
    return <Navigate to='/Game'/>
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
}

export default Results;