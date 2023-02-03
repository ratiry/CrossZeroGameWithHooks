
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import classes from './Results.module.scss';
import DeclaringResults from './Declaring_Results/DeclaringResults';
import HomeButton from './Buttons/HomeButton';
import RestartButton from './Buttons/RestartButton';
import { ReturnToIntialStateAC } from './../../../redux/cells_reducer';
let Results=(props)=>{
  let [shouldNavigate,setShouldNavigate]=useState(false);
  useEffect(()=>{
    if(props.result==null){
      setShouldNavigate(true);
    }
  },[])

  if(shouldNavigate){
    return <Navigate to='/Game'/>
  }
  return(
    <div  className={classes.Results}>
      <h1>Results</h1>
      <DeclaringResults result={props.result}/>
      <div className={classes.buttonsContainer}>
        <HomeButton />
        <RestartButton ReturnToIntialStateAC={props.ReturnToIntialStateAC} />
      </div>
    </div>
  )
}
let mapDispatchToProps={
  ReturnToIntialStateAC
};
let mapStateToProps=(State)=>({
  result:State.cellsState.result.player
})
export default connect(mapStateToProps,mapDispatchToProps)(Results);