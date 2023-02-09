
import classes from './ResultsButtons.module.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import BackToIntialization from '../../../../Helpers/BackToinitialization';
let RestartButton=(props)=>{
  let [shouldNavigate,setshouldNavigate]  = useState(false);
  let ClickFunction=()=>{
    BackToIntialization(props.setIsMoveOfZero,props.setShouldCheckForVictory,props.upDateCells,props.updateOccupiedCells,props.upDateResult)
    setshouldNavigate(true);
  }
  if(shouldNavigate){
    return <Navigate to={'/Game'}/>
  }
  return(
    <button className={classes.button} onClick={ClickFunction}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg>
    </button>
  )
}
export default RestartButton;