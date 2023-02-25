import classes from './Game.module.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ResultsPageUrl } from '../../../App'

const GetResultsButton=(props)=>{

  let [shouldNavigate,setShouldNavigate]=useState(false);

  if(shouldNavigate){
    return <Navigate to={ResultsPageUrl} />
  }

  return(
    <button onClick={()=>{setShouldNavigate(true)}} className={classes.GetResultsButton}
    ><p>Get Results</p> 
    </button>
  )
}

export default GetResultsButton;